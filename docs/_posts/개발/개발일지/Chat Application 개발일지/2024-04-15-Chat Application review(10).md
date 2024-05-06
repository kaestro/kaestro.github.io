---
layout: series
series: Chat Application 개발일지
seriesIndex: 10
classes: wide
title: "ChatApplication Review(10)"
subtitle: ""
date: 2024-05-06
categories: "개발일지"
published: false
---

## 목차

- [목차](#목차)
- [배운 점](#배운-점)
- [진행 내용](#진행-내용)
- [진행 과정](#진행-과정)
  - [EnterChat 재설계 및 구현](#enterchat-재설계-및-구현)

---

## 배운 점

1. grafana k6의 사용법
2. 섣부른 시스템 구축의 위험성

---

## 진행 내용

- grafana k6를 통한 테스트용 client 구축
- docker를 통한 시스템 구축 시도 및 실패

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
