---
layout: 산문
classes: wide
title: "5월 2주차 포스트"
subtitle: "rate limit, retry 전략, 자기연민"
date: 2024-05-12
categories: "WeeklyPosts"
---

### 목차

- [Rate Limit이란](#rate-limit이란)
- [Retry 전략: Exponential Backoff, jitter](#retry-전략-exponential-backoff-jitter)
- [Self-compassion is the motivator you’re missing](#self-compassion-is-the-motivator-youre-missing)

---

## Rate Limit이란

[포스트 링크](https://etloveguitar.tistory.com/126)

rate limit은 서비스가 트래픽을 제어하기 위해 사용하는 방법 중 하나로, 서비스에 대한 요청을 제한하는 것이다.
 예를 들어 서비스의 트래픽이 10초당 100개로 제한되어 있다면, 10초에 100개 이상의 요청을 보내면 서비스는 요청을
 거부할 것이다.

rate limit이 필요한 이유는 서비스의 안정성과 성능을 보장하고, 과도한 트래픽으로부터 서비스를 보호하는 등의
 서비스의 안정성을 보장하기 위함이다. rate limit은 서비스의 트래픽을 제어하기 위해 throttling 방법이라 할 수
 있으며 방법에는 다음과 같은 것들이 있다.

 1. Hard throttling: 트래픽이 제한을 초과하면 요청을 거부한다.
 2. Soft throttling: 트래픽이 제한을 특정 비율 이상 초과하면 요청을 거부한다.
 3. Dynamic throttling: 트래픽이 제한을 초과해도 서버 상태에 따라 요청을 처리할 수 있다.

---

## Retry 전략: Exponential Backoff, jitter

[포스트 링크](https://jungseob86.tistory.com/12)

retry 전략은 서비스의 안정성을 보장하기 위해 사용하는 방법 중 하나로, 서비스에 대한 요청이 실패했을 때
 다시 시도하는 방법이다. 예를 들어 통신 상태 장애로 인해 요청 혹은 응답이 실패했을 때, 일정 시간 후에
 클라이언트/서버가 다시 같은 요청/응답을 시도하는 것이다.

retry 전략에는 여러 가지가 있는데 그 중에서 exponential backoff과 jitter가 있다. exponential backoff은
 재시도 간격을 지수적으로 증가시키는 방법이다. 예를 들어 1초, 2초, 4초, 8초, ... 와 같이 시간 간격을
 늘려가며 재시도하는 것이다. 이 방법은 서버의 부하를 줄이고, 서비스의 안정성을 보장하기 위해 사용된다.

jitter는 재시도 간격을 랜덤하게 설정하는 방법이다. exponential backoff은 재시도 간격이 일정하게 증가하는
 반면, jitter는 재시도 간격을 랜덤하게 설정하여 서버의 부하를 분산시키고, 서비스의 안정성을 보장하기 위해
 사용된다.

---

## Self-compassion is the motivator you’re missing

[포스트 링크](https://medium.com/behavior-design/studies-show-self-compassion-is-the-motivator-youre-missing-affbceaf5ee3)

자기에 대해 비판적인 태도를 가지고 징계하거나, 자신을 비난하거나, 자신을 비굴하게 만드는 것은 자신의 성장과
발전을 방해할 수 있으며, 오히려 자기에 대한 자비로운 태도를 가지는 것은 자신의 성장과 발전을 도울 수 있다는
내용의 포스트이다.

만약 본인이 아니라 친구가 실패하고 힘든 경험을 했을 때에 그 친구에게 꾸짖는 말을 하지 않을 것이라면, 그것은
자신에게도 적용되어야 한다. 자기에게 자비롭게 대하고, 비판을 하기 전에 한번 숨을 돌리고 만약 친구에게라면
어떻게 대할 지 한 번 생각해보는 것으로 자신에게도 자비롭게 대할 수 있다.
