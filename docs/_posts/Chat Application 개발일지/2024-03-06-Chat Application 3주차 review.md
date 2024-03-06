---
layout: default
classes: wide
title: "[ChatApplication] 3주차 Review - 팀원 모집, 확장성 높은 세션 설계"
date: 2024-03-06
categories: "개발일지"
---

# ChatApplication 3주차

---


## 목차

1. 느낀 점
2. 진행 내용
3. 문제 및 해결 방법


---


## 느낀 점


---


## 진행 내용

* 추가 진행에서 협업할 인원 모집
* 채팅 기능을 위한 모듈들의 작성
* 설계 조건 맞추기 위한 이론적인 구상


---

## 문제 및 해결 방법

### 문제 요구 스펙 관련해서 Redis와 같은 세션을 여러개 사용해야할 가능성이 높다는 것을 확인

* RedisStore가 고정적으로 하나의 Redis와의 연결만을 생성할 수 있었음.

### 해결 방법

* StoreFactory를 만들고, RedisStoreFactory를 분리.
* RedisStoreFactory가 추후에 여러가지 Redis연결을 생성하는 것이 용이하도록 구성함.

```go
type RedisStoreFactory struct{}

func (factory *RedisStoreFactory) Create(sessionTypeNum SessionType) SessionStore {
	var store SessionStore
	if sessionTypeNum == LoginSession {
		redisAddr := os.Getenv("REDIS_ADDR")
		if redisAddr == "" {
			redisAddr = "localhost:6379" // default value
		}

		store = &RedisStore{
			client: redis.NewClient(&redis.Options{
				Addr:     redisAddr,
				Password: "redisPassword", // no password set
				DB:       0,               // use default DB
			}),
		}
	} else if sessionTypeNum == OtherSession {
		panic("Unauthorized session type number given to RedisStoreFactory.")
	}
	return store
}
```

---

### 문제: 여러가지 측면에서 다른 사람의 도움이 있으면 속도가 빨라질 것 같다는 생각이 듬.

1. 설계적인 측면에서 second opinion이 필요함.
2. 코드 리뷰를 통해 유지보수성을 높일 필요가 있음.
3. 작성해야하는 코드의 양이 많아짐.

### 해결 방법

* 커뮤니티에 모집글을 게시
* 연락이 온 사람과 화상 미팅 진행