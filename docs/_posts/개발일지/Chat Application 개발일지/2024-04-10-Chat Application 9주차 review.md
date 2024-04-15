---
layout: default
classes: wide
title: "ChatApplication 9주차 Review"
subtitle: ""
date: 2024-04-15
categories: "작성중"
---

## 목차

- [목차](#목차)
- [배운 점](#배운-점)
- [진행 내용](#진행-내용)
- [진행 과정](#진행-과정)
  - [EnterChat 재설계 및 구현](#enterchat-재설계-및-구현)

---

## 배운 점

1. 혼자서 개발하는 것과 팀으로 개발하는 것의 차이
2. 잘못된 설계를 재설계하는 방법 및 설계의 중요성
3. 시스템 구축의 어려움
4. docker 서비스간 의존성 해소 방법
5. 문제 발생의 주 원인은 휴먼에러다.

---

## 진행 내용

- EnterChat 재설계 및 구현

---

## 진행 과정

### EnterChat 재설계 및 구현

- **문제**
  - websocket이 연결되는 방식에 대한 이해 부족에 따른 잘못된 설계
    - 접속 정보를 request body로 전송
    - http request로 접속 정보를 전송 후 소켓 연결을 저장해두지 않음
- **해결**
  - websocket을 요청할 때 client.do가 아니라 dialer.Dial로 연결해서 connection을 저장
  - 접속 정보 중 비밀번호를 제외한 정보를 loginSessionInfo라는 새로운 구조체로 전송
  - 이 때 request body가 아닌 header에 저장
- **결과**
  - 채팅 메시지 송수신 확인

---
