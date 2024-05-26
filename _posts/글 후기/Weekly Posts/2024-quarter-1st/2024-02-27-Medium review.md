---
layout: default
classes: wide
title: "2월 4주차 포스트"
date: 2024-02-27
categories: WeeklyPosts
---

1. <https://learningdaily.dev/2023-in-review-4-key-takeaways-for-developers-a5bcc8b86133>
2. <https://medium.com/@techworldwithmilan/software-architecture-as-code-tools-331a11222da0>
3. <https://levelup.gitconnected.com/build-a-personal-ai-tech-news-agent-94e7a2e508fe>

---

## [2023년 회고: 개발자를 위한 4가지 주요 교훈](https://learningdaily.dev/2023-in-review-4-key-takeaways-for-developers-a5bcc8b86133)

본 글은 2023년의 주요 시사점으로 다음의 네 가지를 제시합니다.

1. 클라우드 컴퓨팅에는 점검이 필요하다.
2. 생성형 AI가 모든 것을 바꾸고 있으며, 개발자가 혁명을 주도할 것이다.
3. 스마트 시스템 설계가 더 중요해지고 있다.
4. API 및 제품 디자인에 대한 이해가 필요하다.

해당 관점은 당분간 유지될 것이라 생각하고 이에 맞춰 준비를 일단 하되, 시장의 동향을 지속적으로 관찰하며 변화에 대응해야 한다는 생각을 하게 됐습니다.

API 및 제품 디자인에 대한 이야기가 나오면서 프로그램을 작성할 때 제가 작성하고 있는 코드들의 디자인에 대해 더 신경쓰고, 다른 사람이 작성한 코드를 참고해보는 연습을 하고 있습니다.

생성형 AI를 통한 코드 작성은 확실히 요즈음 많은 도움을 받고 있네요. 생산성과 동시에 제 개인적인 성장에도 크게 도움이 되고 있다고 느끼는 중입니다.

스마트 시스템과 클라우드 컴퓨팅은 제가 요 근래 자주 가져오는 주제들 중에 비 정상적으로 엄청난 트래픽이 몰려들었을 때 이에 대해 resilient한 시스템을 어떻게 하면 설계할 수 있을 지에 대한 논의입니다. 이에 대해 go를 이용하면 더 유연한 시스템을 설계하는 데 유리하지 않을까 하는 생각이 들어 요 근래 학습을 시작해서 chatapplication을 작성하고 있습니다.

---

## [소프트웨어 아키텍처 및 기타 다이어그램을 코드로 생성할 수 있는 다양한 도구의 소개](https://medium.com/@techworldwithmilan/software-architecture-as-code-tools-331a11222da0)

컴퓨터가 이해하는 프로그램은 코드이지만, 사람이 이해하기 위해서는 코드 외의 다양한 추상화 수단을 사용하는 것이 유용합니다.

해당 아티클에서는 이미 작성된 코드를 자동으로 다이어그램으로 변환해주는 도구를 포함해서 markdown, javascript 등을 통해 마인드맵, 순서도 등을 생성할 수 있는 다양한 도구를 소개합니다.

* [Structurizr](https://structurizr.com/)
: C4 모델의 코드를 통해 소프트웨어 아키텍처 다이어그램을 생성할 수 있는 도구입니다.

* [PlantUML](https://plantuml.com/ko/)
: text를 통해서 UML를 작성할 수 있는 도구입니다.

* [Diagrams](https://github.com/mingrammer/diagrams)
: 파이썬 코드를 클라우드 시스템 아키텍처 다이어그램으로 변환해주는 도구입니다.

* [Go diagrams](https://github.com/blushft/go-diagrams)
: Diagrams와 동일하지만 go 언어를 사용하여 작성된 코드를 다이어그램으로 변환해주는 도구입니다.

최근 디자인 패턴을 공부하면서 프로그램들을 이해하기 편하게 구조화하는 것의 필요성을 느끼고 있습니다. 다음에 읽으려고 생각하는 책 중 하나는 [UML 실전에서는 이것만 쓴다](https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000003215770)이기도 합니다.

마침 작성중인 toy project가 go로 작성되어 있는 만큼 go diagrams를 사용해보고 이에 대한 경험도 공유해볼까 합니다.

---

## [개인용 AI 기술 뉴스 에이전트 구축하기](https://levelup.gitconnected.com/build-a-personal-ai-tech-news-agent-94e7a2e508fe)

본 글은 개인용 AI 기술 뉴스 에이전트를 구축하는 방법에 대해 소개합니다.

요 근래 제가 가장 많이 사용하는 뉴스 에이전트는 구글과 medium입니다. 일반적인 뉴스가 정치, 연예, 스포츠 등에 대해서는 훌륭하게 다뤄주는 경우가 많지만 기술 뉴스에 대해서는 그렇지 않은 경우가 많아서, 기술 뉴스를 따로 모아서 보고 싶은 생각이 들었습니다.

마침 이에 대한 글도 있어서 읽어보게 되었는데 굉장히 매력있고 저만의 에이전트를 구축해보면 재미있겠다는 생각이 들었습니다. 현재 진행 중인 toy project가 끝나면 해당 프로젝트를 진행해보면 좋을 것 같습니다.