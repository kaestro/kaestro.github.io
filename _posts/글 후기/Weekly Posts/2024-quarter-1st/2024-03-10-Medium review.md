---
layout: default
classes: wide
title: "3월 1주차 포스트"
date: 2024-03-10
categories: WeeklyPosts
---

1. <https://medium.com/musinsa-tech/journey-of-a-frontend-monorepo-8f5480b80661>
2. <https://bootcamp.uxdesign.cc/dont-make-this-common-job-interview-mistake-cf0a22aedd02>
3. <https://levelup.gitconnected.com/30-python-concepts-i-wish-i-knew-way-earlier-3add72af6433>

---

## 모노레포 이렇게 좋은데 왜 안 써요?

모노레포는 여러 프로젝트를 하나의 저장소에 모아서 관리하는 개발 방식입니다. 이 글에서는 모노레포를 사용하면서 얻은 이점에 대해서 이야기합니다.

최근에 채팅 어플리케이션 프로젝트가 생각보다 규모가 많이 거대해지면서 이를 관리하는 방법에 대한 고민을 하게 됐습니다. 사용하게 될 모듈별로 레포지토리를 따로 둬야 할까? git flow를 적용해야할까? trunk based development를 적용해야할까?

그런 상황에서 이 글과 구글 엔지니어는 이렇게 일한다라는 책을 읽으면서 모노레포와 trunk based development를 사용하기로 결심하게 됐습니다.

이는 충분한 관리를 적용한다면 모노레포와 trunk based development를 통해서 더 빠르게 개발할 수 있고, 안정적인 코드를 유지할 수 있을 것이란 생각이 들었기 때문입니다.

구글이 아니라도 꽤나 많은 회사들이 모노레포를 사용하고 있다고 하는만큼 한번쯤 고민 해 볼만한 주제라고 생각합니다.

---

## Don’t make this common job interview mistake

최근 많은 면접을 보면서 어떤 부분 때문에 면접에서 떨어지는지에 대해 고민을 많이 했습니다. 그리고 이 글에서 한 이야기와 데일 카네기의 '인간관계론'을 통해 제가 가지고 있었던 문제는 '상대가 원하는 것이 무엇인지'에 대한 고민이 부족했다라는 부분이란 생각을 하게 됐습니다.

비단 면접에만 해당하는 부분이 아니라, 다른 사람과의 좋은 관계를 맺기 위해 그 사람의 입장을 이해하기 위해 경청하고 관심을 가지는 것은 중요한 요소입니다.

나는 백엔드 개발자로써 회사에서 생각할 때 어떤 부분에서 기여를 할 수 있는 사람인가, 그렇다면 나를 원할만한 회사는 어떤 곳일까, 내가 기여할 수 있는 부분을 어필하기 위해서는 어떤 이야기를 준비해서 전달해야할까에 대해 고민해보게 됐습니다.

---

## 30 Python Concepts I Wish I Knew Way Earlier

이 글은 파이썬을 사용하면서 사용하기 유용한 30가지 테크닠에 대해 이야기합니다. 기존에 몰랐던 것들만 따로 정리하자면 다음과 같습니다.

1. pprint: 파이썬의 딕셔너리를 예쁘게 출력해주는 모듈
2. ternary operator: 파이썬의 삼항 연산자
   * ```python
     a = 1 if b > 0 else 0 if b < 0 else -1
     ```
3. yield 키워드: 제너레이터를 만들 때 사용하는 키워드
4. while else: while문이 break 없이 종료되었을 때 실행되는 else문

이 밖에도 다양한 테크닉들이 있어서 한번쯤 읽어보면 좋을 것 같습니다.
