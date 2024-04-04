---
layout: default
classes: wide
title: "3월 4주차 포스트"
subtitle: "분산 dbms, 빌린 땅 위의 성, 일회용 사람, 색을 잃어가는 세상"
date: 2024-04-04
categories: WeeklyPosts
---

### 목차

- [Postgres vs 분산 DBMS by TPC-C](#postgres-vs-분산-dbms-by-tpc-c)
- [빌린 땅 위에 성을 짓지 말라: 하루만에 4천만 달러가 증발한 이유](#빌린-땅-위에-성을-짓지-말라-하루만에-4천만-달러가-증발한-이유)
- [일회용 물건이 일회용 사람을 만들었다](#일회용-물건이-일회용-사람을-만들었다)
- [왜 세상은 색을 잃고 있는가](#왜-세상은-색을-잃고-있는가)

---

## Postgres vs 분산 DBMS by TPC-C

[포스트 링크](https://blog.ydb.tech/when-postgres-is-not-enough-performance-evaluation-of-postgresql-vs-distributed-dbmss-23bf39db2d31)

Postgres는 복잡하고 거대한 데이터를 처리할 때 쓰이는 강력한 오픈소스 RDBMS입니다. 그렇지만 Postgres는 수직적 확장은 지원하지만 수평적 확장은 제한적입니다. 그리고 컴퓨팅 기기의 수직적 성능 향상이 더뎌진 시점에서 수평적 확장의 필요가 요즘 대두되는 경우가 많기 때문에 Postgres의 한계는 어느 정도인가, 그리고 이를 분산 DBMS인 YDB와 비교할 경우 어떤 차이가 있는지에 대해 TPC-C라는 OLTP 벤치마크를 통해 비교하고 있습니다.

해당 비교가 이루어진 환경에서 Postgres는 분산 DBMS에 비해 불리한 입장이었습니다. 사용한 데이터베이스가 128개의 CPU코어를 사용하는 세 대의 서버로 구축되어 있었기 때문입니다. 그럼에도 불구하고 측정 기준으로 자주 쓰이는 tpmC(Transactions Per Minute per Core)에서 Postgres는 분산 DBMS에 비해 미세하게 앞서는 성능을 보여줬습니다. 하지만 New Order Latency에서는 YDB가 크게 앞섰습니다.

Postgres는 이미 완성되어 자리잡은 오픈소스인 반면 YDB는 그 정도의 지위까지 획득하지 못했고, 분산형 DBMS가 아직 성장 중이란 것을 생각하면 어찌보면 당연한 일일 수도 있습니다. 그럼에도 현재 Postgres가 왜 많은 곳에서 부하가 높은 일을 처리해야할 때 사용하는지에 대한 이유를 엿볼 수 있었고, 분산 DBMS 역시도 가능성이 있다는 것을 확인할 수 있었습니다.

---

## 빌린 땅 위에 성을 짓지 말라: 하루만에 4천만 달러가 증발한 이유

[포스트 링크](https://medium.com/illumination/wittyfeed-a-40-million-company-that-evaporated-overnight-the-reason-facebook-blocked-them-b7b38c750399)

흔히 유니콘이라 불리는 스타트업은 기업 가치가 10억 달러 이상인 10년 이하 비상장 기업을 말합니다. Witty Feed는 이에 근접했었던 기업으로, 바이럴 미디어 컨텐츠를 페이스북을 통해 공유하는 사업을 했습니다. 그리고 한 달 만에 100만 달러의 수익을 낼 정도로 성장했고 트래픽은 수백만명에 달했습니다. 그리고 그 트래픽은 하루만에 단 몇 천명으로 줄었고 수익은 0으로 떨어졌습니다.

이 몰락은 페이스북에서 캠브릿지 애널리티카라는 회사가 페이스북 사용자의 개인 데이터를 정치 광고를 위해 무분별하게 침해했다는 이유로 페이스북이 연방거래위원회로부터 50억 달러의 벌금을 부과 받은 것에서 시작했습니다. 페이스북은 트래픽 알고리즘을 완전히 변경했고 WittyFeed의 플랫폼을 해제했으며 도메인을 차단했습니다.

이 때문에 WittyFeed는 계좌에 돈이 한 푼도 남지 않았고, 직원들은 급여를 받지 못했습니다. 하지만 창립자들은 이 사태에서 미지급 급여의 두 배에 해당하는 회사 지분을 제공하고 마침내 새로운 OTT 플랫폼인 Stage를 구축하는데 성공합니다. 현재 Stage의 가치는 약 4천만 달러에 달합니다.

이처럼 자신이 소유하지 않은 독점적인 플랫폼에 의존하는 것은 위험하다는 것을 배울 수 있는 글이었습니다. 또한, 이러한 위험을 줄이기 위해 다양한 플랫폼에 투자하고 자체 플랫폼을 구축하는 것이 중요하다는 것을 배울 수 있었습니다.

---

## 일회용 물건이 일회용 사람을 만들었다

[포스트 링크](https://medium.com/@ashely.crouch/how-disposable-objects-have-lead-to-disposable-people-7e52096b1b23)

Bic 펜, Temu, Hinge. 이것들의 특징은 무엇일까요? 그것은 이들이 우리에게 한 번 사용하고 버릴 수 있는 편리한 것임을 강조한다는 것입니다. 우리에게 위 제품들은 필요할 때 잠깐 쓰고, 필요 없을 때는 버릴 수 있으면 되니 편하게 사용해보라고 이야기합니다. 그리고 이들을 사용하기 시작하는 순간, 우리는 이들에게서 벗어날 수 없게됩니다. 이것이 우리 삶을 파괴하더라도 말입니다.

이처럼 이들은 본인의 일회성을 강조하지만, 저자는 그 일회성이 종속성을 가지고 있으며 파괴적이라고 주장합니다. 그리고 이것들이 가져다주는 사회적인 폐단으로 여러가지가 있으며, 이 중 Hinge와 같이 사람의 관계에 영향을 주는 일회용품은 타인과의 관계를 파괴하는 지경에 이르렀다고 말합니다. 그리고 끝내는 이를 사용하는 사람을 일회용으로 만들고 있다는 것이 저자의 주장입니다.

사회적으로 인기를 끌고 있는 많은 제품들이 편리함을 내세울 때, 과연 그것은 우리가 편리한 삶을 살 수 있게 해주는 것인지 아니면 이들에 종속되는 일회용 삶을 살게 하는 것인가에 대한 의문을 가지게 하는 글이었습니다. 그리고 내 삶이 지속성을 가지게 하기 위해서는 어떤 노력을 해야하는지 되돌아보게 됐습니다.

---

## 왜 세상은 색을 잃고 있는가

[포스트 링크](https://uxdesign.cc/why-is-the-world-losing-color-56f740f465d4)

이 포스트는 문화 전반에서 화려한 색상이 사라지고 검정색, 회색, 흰색 같은 단조로운 색상이 주를 이루고 있는 현상이 나타나고 있다고 주장합니다.

![1844년 전보](https://miro.medium.com/v2/resize:fit:4800/format:webp/0*jrgZGtQsEeJ8crpD.png)
출처: <https://lab.sciencemuseum.org.uk/colour-shape-using-computer-vision-to-explore-the-science-museum-c4b4f1cbd72c>

![2008년 핸드폰](https://miro.medium.com/v2/resize:fit:4800/format:webp/0*dm_T3vkzCNcZ4K_I.png)
출처: <https://lab.sciencemuseum.org.uk/colour-shape-using-computer-vision-to-explore-the-science-museum-c4b4f1cbd72c>

그리고 이것은 대량 생산과 표준화를 위해 개성이 희생되는 과정으로 볼 수 있다고 합니다. 어린 시절 집에 있었던 뻐꾸기 시계와 같은 것들은 굉장히 다채로운 색을 가지고 있었던 것으로 기억합니다. 이전보다 개성을 중시하는 시대를 살고 있다고 생각했는데 이와 반대되는 현상도 동시에 나타나고 있단 것을 인지하지 못하고 있었다는 것이 꽤나 충격적이었습니다.

---
