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

* 기술 스택을 선택할 때, 명확한 기준을 통한 비교를 할 필요성을 체감
* 당장 수요에 맞는 가벼운 기술을 선택하되, 규모가 커질 것을 대비하여 확장성을 고려해야 함.

---

## 진행 내용

* 설계도에서 서비스별 사용하기로 한 기술스택에 대한 대안 검토
  * [설계도 링크](https://github.com/kaestro/ChatApplication/wiki/%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%84%A4%EA%B3%84%EB%8F%84)

---

## 문제 및 해결 방법

### [1] 기술 스택 선택에 대한 명백한 근거 부족

* 기술 스택 선택에 대한 명백한 근거가 부족.
* 이에 따라 알고 있는 기술을 충분히 활용하지 못하고 있음.
* 프로젝트가 진행되기보다 새로운 기술을 배우는 데에 더 많은 시간을 할애하고 있음.

### [1] 해결 방법

* 개별로 모듈 혹은 서비스 별로 사용되는 기술스택의 대안을 조사하고, 이에 대한 비교를 통해 명확한 기준을 세움.

* 웹서버
  * 현재 사용중인 기술 스택: golang - gin
  * 대안: node.js - express, java - spring boot, python - fast api
  * 기존 기술 선택 이유: golang이 가진 웹서버 성능 및 동시성 처리에 대한 장점.
  * 의문점
    * 다른 기술 스택에 비해 golang은 어떤 점에서 동시성 처리에 더 유리하다고 말할 수 있는가?
      * **goroutine**은 **스레드**가 아니라, **runtime scheduler**를 통해 관리된다.
      * 이 때문에 실행이 **커널**이 아닌 **유저 레벨**에서 이루어지기 때문에, **context switching**이 빠르다.
        * [왜 golang은 동시성에 좋다고 할까?](https://velog.io/@hyeok3011/Goroutine)

