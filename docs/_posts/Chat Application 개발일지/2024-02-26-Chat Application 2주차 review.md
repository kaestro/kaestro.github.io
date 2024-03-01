---
layout: default
classes: wide
title: "2주차 Review"
date: 2024-02-27
categories: "개발일지"
---

# ChatApplication 2주차

---


## 목차

1. 느낀 점
2. 진행 내용
3. 문제 및 해결 방법


---


## 느낀 점



---


## 진행 내용

* azure에 배포하기 위한 dockerfile 작성

---

## 문제 및 해결 방법

* 문제: 빌드한 어플리케이션이 로컬에서와 다르게 동작함
  1. postgresql과의 연결이 안됨
     * 기존에 hostname이 localhost로 돼있었는데, containerization을 할 경우 이를 postgresql로 DBManager를 바꿔야하기 때문.
     * 로컬에서 테스트할 경우에 문제가 되는 부분이기 때문에 이를 양쪽 환경에서 다르게 쓸 방법을 찾아야함.
  2. Failed to process session key 에러가 발생하고 있음.
	 * 이는 로컬에서는 발생하지 않았던 에러로, 이를 해결하기 위해선 어떤 부분이 문제인지 파악해야함.
	 * 이를 위해선 로컬에서와 동일한 환경을 만들어야함.
	 * postgresql과 마찬가지로 hostname을 localhost를 쓰던 것이 문제였고, 이를 redis로 바꿔야함.
   
* 해결 방법:
  * ENV를 사용하여 환경변수를 설정하고, 없을 경우에는 default인 localhost를 사용하게 해서 local에서 동작하도록 변경함.
  * 해당 ENV는 docker-compose.yml와 dockerfile에서 사용하도록 변경함.
   * [https://github.com/kaestro/ChatApplication/commit/e6258879d661345d7aeeac0a05ed953e8bd05a0e](https://github.com/kaestro/ChatApplication/commit/e6258879d661345d7aeeac0a05ed953e8bd05a0e)
  * ex)

    * before)
```go
func GetDBManager() *DBManager {
	once.Do(func() {
		var err error
		db, err := gorm.Open("postgres", "postgres://postgres:rootpassword@postgresql:5432/postgres?sslmode=disable")
		if err != nil {
			panic(err)
		}
```

   * after)
```go
func GetDBManager() *DBManager {
	once.Do(func() {
		var err error
		dbURL := os.Getenv("DB_URL")
		if dbURL == "" {
			dbURL = "postgres://postgres:rootpassword@localhost:5432/postgres?sslmode=disable" // default value
		}
		db, err := gorm.Open("postgres", dbURL)
		if err != nil {
			panic(err)
		}
```