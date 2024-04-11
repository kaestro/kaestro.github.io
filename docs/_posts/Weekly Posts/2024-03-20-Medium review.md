---
layout: default
classes: wide
title: "3월 2주차 포스트"
date: 2024-03-20
categories: WeeklyPosts
---

## 목차

1. [개발자를 위한 10가지 유용한 VS Code 확장 프로그램](https://levelup.gitconnected.com/10-must-have-vs-code-extensions-for-developers-7ddc22d81117)
2. [PostgreSQL vs MySQL: 나의 사용 사례에 더 적합한 것은 무엇일까?](https://www.integrate.io/ko/blog/postgresql-vs-mysql-which-one-is-better-for-your-use-case-ko/)
3. [블룸 필터 - 1% 오류율로 8배의 공간을 활용할 수 있는 자료구조](https://maloveforme.tistory.com/102)

---

## 10 Must-Have VS Code Extensions for Developers[^1]

Better Comments, Auto Rename Tag, Bookmarks, Import Cost와 같은 유용한 **VS Code 확장 프로그램**을 소개해주는 글입니다. 여기 있는 것들 중에서 상당 수를 해당 포스트를 읽어본 이후에 채용해봤는데 만족하고 있습니다.

예를 들어 **VSCode - Icons** 같은 경우는 **Explorer 창**에서 파일들의 **아이콘**이 좀 더 **직관적**으로 보여지게 해 줍니다. 이는 파일을 찾는 데 유용할 뿐 아니라, 현재 프로젝트의 **구조를 파악**하는 데도 도움이 됩니다.

**편의성**은 때로는 생각 이상으로 **생산성**을 높여주기도 하는데, 이 글에서 제안하는 확장 프로그램들이 그런 것들이 꽤 많았습니다.

---

## MySQL-쉽고 안정적이다 vs PostgreSQL-복잡한 문제 해결을 할 수 있다[^2]

**PostgreSQL**과 **MySQL**은 둘 다 널리 쓰이는 **오픈 소스 RDBMS**입니다. 이 둘 중에서 어느 것을 선택해야하는 지에 대한 판단을 해야 하는 상황은 이 때문에 꽤나 흔합니다. 이 글은 이 둘의 **차이점**을 설명하고, 어떤 상황에서 어느 것을 **선택**하는 것이 더 **적합**한지에 대해 설명하고 있습니다.

이 글에서 **핵심**은 다음으로 정리할 수 있습니다.

```md
MySQL: 쉽고, 빠르고 안정적이다.
PostgreSQL: 복잡한 쿼리와 대규모 데이터베이스를 처리할 수 있는 풍부한 기능을 제공한다.
```

좀 더 자세하게 자신의 사용 사례에 어느 것이 **적합**할 지에 대해 정보가 필요하다면, 이 글을 읽어보시는 것을 추천합니다.

---

## 블룸 필터 - 1% 오류율로 8배의 공간을 활용할 수 있는 자료구조[^3]

**블룸 필터**는 **확률적 자료 구조**로, **비트 배열**과 **해시 함수**로 구성되어 있습니다. 이 글에서는 블룸 필터의 **원리**와 **활용**에 대해 설명하고 있습니다.

일반적인 자료구조들과 달리 블룸 필터가 **확률적**이 된 이유는 **공간을 절약**하기 위해서 입니다. 비록 *오류가 발생할 확률*이 있지만, 이보다 **공간을 절약**하는 것이 더 중요한 상황에서 블룸 필터를 사용할 수 있습니다.

예를 들어 **100만 개의 URL**을 저장할 때 **일반적인 해시 테이블**을 사용한다면 최소 **25MB**의 공간이 필요하지만, 블룸 필터를 사용한다면 **1%**의 False Positive를 감수하면서 **1.13MB**의 공간으로 저장할 수 있습니다.[^4]

최근 **대용량 데이터**를 **효율적**으로 처리하는 것에 관심이 많았는데, 그 방법 중 하나인 **블룸 필터의 원리**에 대해 알 수 있었던 좋은 글이었습니다.

---

[^1]: <https://levelup.gitconnected.com/10-must-have-vs-code-extensions-for-developers-7ddc22d81117>
[^2]: <https://www.integrate.io/ko/blog/postgresql-vs-mysql-which-one-is-better-for-your-use-case-ko/>
[^3]: <https://maloveforme.tistory.com/102>
[^4]: [What is the advantage to using bloom filters - stack overflow](https://stackoverflow.com/questions/4282375/what-is-the-advantage-to-using-bloom-filters)
