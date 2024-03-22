---
layout: default
classes: wide
title: "[ChatApplication] 5주차 Review - 기술 스택에 대한 점검 필요"
date: 2024-03-19
categories: "개발일지"
---

# ChatApplication 5주차

---

## 목차

1. 느낀 점
2. 진행 내용
3. 문제 및 해결 방법

---

## 느낀 점

* **기술 스택**을 선택할 때, **명확한 기준**을 통한 비교를 할 필요성을 체감
* 당장 수요에 맞는 가벼운 기술을 선택하되, 규모가 커질 것을 대비하여 확장성을 고려해야 함.

---

## 진행 내용

* 설계도에서 서비스별 사용하기로 한 기술스택에 대한 대안 검토
  * [설계도 링크](https://github.com/kaestro/ChatApplication/wiki/%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%84%A4%EA%B3%84%EB%8F%84)

---

## 문제 및 해결 방법

### [1] 기술 스택 선택에 대한 명백한 근거 부족

* 기술 스택 선택에 대한 **명백한 근거**가 부족.
* 단순히 **유명하고 핫하기 때문**에 선택한 경우가 많음.
* 이에 따라 **이미 사용 가능한 기술**을 충분히 활용하지 못하고 있음.
* **프로젝트가 진행**되기보다 새로운 기술을 학습하는 데 더 많은 시간을 할애하고 있음.

### [1] 해결 방법

* 모듈 혹은 서비스 별로 사용되는 **기술스택**의 **대안**을 조사하고, 이에 대한 **비교**를 통해 명확한 기준을 세움.

* **웹서버**
  * 현재 사용중인 기술 스택: **golang - gin**
  * 대안: **node.js - express**, **java - spring boot**, **python - fast api**
  * 기존 기술 선택 이유: golang이 가진 **웹서버 성능** 및 **동시성 처리**에 대한 장점.
  * 의문점
    * 다른 기술 스택에 비해 **golang**은 어떤 점에서 **동시성 처리**에 더 유리하다고 말할 수 있는가?
      * [Golang은 진정 동시성을 처리하는 데 유리한가?](https://kaestro.github.io/%EA%B0%9C%EB%B0%9C%EC%9D%B4%EC%95%BC%EA%B8%B0/2024/03/19/Golang%EC%9D%80-%EB%8F%99%EC%8B%9C%EC%84%B1%EC%9D%B4-%EC%96%B4%EB%96%A4-%EC%A0%90%EC%97%90%EC%84%9C-%EC%9C%A0%EB%A6%AC%ED%95%9C%EA%B0%80.html)
* **데이터베이스**
  * 현재 사용중인 기술 스택: **postgresql**
  * 대안: **mysql**
  * 기존 기술 선택 이유: 기존에 사용한 적이 있었던 기술 스택.
  * 조사 결과 PostgreSQL은 mySQL에 비해 복잡한 동작을 필요로 할 때 사용하는 기술 스택으로 알려져 있다.
    * <https://www.integrate.io/ko/blog/postgresql-vs-mysql-which-one-is-better-for-your-use-case-ko/>
  * 팀원들도 mysql에 경험이 더 많은 편이므로, mysql로 이전하도록 생각하고 있다.
* **NoSQL**
  * 현재 사용중인 기술 스택: **mongodb**
  * 대안: 유저 정보 저장에 사용하는 **SQL 데이터베이스**에서의 통합
  * 기존 기술 선택 이유: **문서형 데이터베이스**로서 가지는 장점이 있다는 점.
  * 문제점: 그 장점이 뭔지 모름
  * mongoDB의 장점
    * 데이터 형태에 구애를 덜 받으므로 **이모티콘**과 같은 **string 외 다양한 데이터**를 처리하는 데에 용이하다
    * 채팅 방 단위로 데이터를 구현시에 기존 데이터를 신규 입장자에게 제공하기 유리하다
  * RDBMS의 장점
    * string만 사용할 경우 table과 로직을 통해서 기초적인 채팅을 빠르게 구현할 수 있다.
  * 선택: RDBMS(mysql/postgresql) 중에 하나로 채팅의 interface를 구현하고, string에 한정한 뒤 방 입장시에 기본 데이터를 제공하지 않는 방향으로 mvp를 구성한 뒤에 기능을 확장하는 과정에서 mongoDB 도입을 고려한다.
* **세션**
  * 현재 사용중인 기술 스택: **redis**
  * 대안: **memcached**, 세션이 아닌 **토큰**(JWT 등)을 사용
  * 기존 기술 선택 이유
    * 사용해 본 적이 있는 기술 스택
    * 유명해서 자료를 구하는 것이 용이
* **메시지 큐**
  * 현재 사용 예정인 기술 스택: **kafka**
  * 대안: **RabbitMQ**, **ActiveMQ**
  * 기존 기술 선택 이유
    * 메시지 큐 기술들 중 가장 유명해서.
  * 추가적으로 따로 글을 파서 고민해봐야 할 듯
  * 참고 자료
    * <https://gwonbookcase.tistory.com/49>
    * <https://www.cloudamqp.com/blog/activemq-vs-rabbitmq-an-indepth-comparison.html>
  * kafka의 장점
    * 분산 처리 기능을 가장 잘 활용할 수 있음.
    * 메모리가 아니라 파일 시스템을 이용한다.
    * TPS가 높고 대용량 실시간 로그 처리에 유리하다
    * broker가 push하는 것이 아니라 pull하는 방식
  * activeMQ vs rabbitMQ
    * rabbitMQ가 더 다양한 프로토콜을 지원하고, activeMQ는 java에 더 특화된 모양이라 이 부분은 연구 필요
    
