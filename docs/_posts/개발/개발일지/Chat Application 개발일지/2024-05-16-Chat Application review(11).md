---
layout: series
series: Chat Application 개발일지
seriesIndex: 11
classes: wide
title: "ChatApplication Review(11)"
subtitle: "client의 load test debugging"
date: 2024-05-16
categories: "개발일지"
---

## 목차

- [목차](#목차)
- [배운 점](#배운-점)
- [진행 내용](#진행-내용)
- [진행 과정](#진행-과정)
  - [client의 load test debugging](#client의-load-test-debugging)
    - [signout이 진행이 안되고 있었음](#signout이-진행이-안되고-있었음)
    - [enterchat 요청이 받아들여지지 않고 있었음](#enterchat-요청이-받아들여지지-않고-있었음)

---

## 배운 점

- 주고받는 데이터 프로토콜 정확성의 중요성
- 로그를 어느 정도까지 디테일하게 찍어주느냐의 중요성

---

## 진행 내용

- client의 load test debugging

---

## 진행 과정

### client의 load test debugging

1. signout이 진행이 안되고 있었음
2. enterchat 요청이 받아들여지지 않고 있었음

#### signout이 진행이 안되고 있었음

loadtest에서 header에 value의 key를 sessionkey로 보내고 있었는데 Session-Key가 올바른 키의 이름이었음.
이를 해소하기 위해 header의 key를 Session-Key로 변경하였으나, go에서 사용하는 해당 부분을 공통의 pkg로
빼놓아서 사용하는 설계적인 변화가 필요하다고 생각하게 됐다.

#### enterchat 요청이 받아들여지지 않고 있었음

k6의 websocket에 대한 이해 부족. k6에서는 기존의 http 모듈을 사용해서는 안되며, k6/ws 모듈을 사용하고 여기에서
websocket을 사용해야 한다. 이를 통해 enterchat 요청이 받아들여지지 않는 문제를 해결할 수 있었다.

문제는 k6의 ws 모듈은 hijacking이라는 매커니즘을 사용하며, 이는 go의 websocket에서 일반적으로 사용되는 것으로
보인다. 이를 해소하기 위해 기존의 서버 프로그램을 처음부터 재작성할 필요가 있다.
