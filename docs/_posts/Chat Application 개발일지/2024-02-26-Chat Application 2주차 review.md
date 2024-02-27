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
     * 기존에 localhost로 돼있었는데, containerization을 할 경우 postgresql로 DBManager를 바꿔야하기 때문.
     * 로컬에서 테스트할 경우에 문제가 되는 부분이기 때문에 이를 양쪽 환경에서 다르게 쓸 방법을 찾아야함.
  2. Failed to process session key 에러가 발생하고 있음.
	 * 이는 로컬에서는 발생하지 않았던 에러로, 이를 해결하기 위해선 어떤 부분이 문제인지 파악해야함.
	 * 이를 위해선 로컬에서와 동일한 환경을 만들어야함.
   => 해결: postgresql에서 localhost로 돼있었던 것과 동일한 이유