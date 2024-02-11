---
layout: default
classes: wide
title: "2월 2주차 선정 미디엄"
date: 2024-02-12
categories: 검토중
---

1. How I Won Singapore’s GPT-4 Prompt Engineering Competition
2. Taylor Swift Ticketmaster Meltdown: A System Design Analysis
3. Advice to my younger self and you after 20 years in programming

---

# 싱가포르의 GPT-4 프롬프트 엔지니어링 대회에서 우승한 방법
: https://medium.com/towards-data-science/how-i-won-singapores-gpt-4-prompt-engineering-competition-34c195a93d41

요즘 부쩍 생성형 ai를 쓸 일이 많아지면서, 많이 하게 되는 고민은 '어떻게 하면 더 좋은 질문을 할 수 있을까?'입니다. 해당 글에서는 이를 총 4가지로 나누어 설명합니다.

* 초급
  * COSTAR 프레임워크를 사용하라
  * 구분 기호를 사용하라
* 고급
  * LLM 가드레일을 사용하라
  * 데이터세트 실습 예제를 통한 활용 방법

저는 당장은 데이터 세트 분석에는 관심이 없기에 앞의 세 가지 항목만 참고했고, 굉장히 도움을 많이 받고 있는 중 입니다.

## COSTAR framework

COSTAR framework는 생성형 ai를 사용할 때 주의할 6가지의 키워드를 말합니다.

1. Context: 맥락
2. Objective: 목적
3. Style: 문체
4. Tone: 응답 태도
5. Audience: 청중
6. Response: 응답 형식

대표적으로 요즘 활용하고 있는 방식을 예로 들자면, 제가 자료구조와 알고리즘에 관한 개념적인 복습을 면접을 보기 직전에 하려고 하는 상황을 가정해보겠습니다. 제가 처음에 접근한 방식은 이런 식이었습니다.

**"회사에서 주니어 개발자에게 물어볼 만한 자료구조와 알고리즘적 질문들에는 어떤 것이 있을지 제시해줄래?"**

이 때 제안해주는 답변은 다음과 같습니다.

---

회사에서 주니어 개발자에게 물어볼 수 있는 몇 가지 자료구조와 알고리즘적 질문에 대해 알려드리겠습니다:

해시맵 구현: 해시맵(해시 테이블)의 작동 원리를 설명하고, 이를 파이썬에서 어떻게 구현할 수 있는지에 대해 물을 수 있습니다.

이진 탐색 트리: 이진 탐색 트리의 특징을 설명하고, 특정 값을 찾거나 삽입하는 작업을 어떻게 수행하는지에 대해 물을 수 있습니다.

...

---

물론 이 답변도 괜찮긴 합니다만, 제게 있어서 아쉬운 점은 이제 이런 키워드가 제시됐을 때 어떤 방식으로 구조화된 공부를 할지에 대해서 잘 모르겠다는 것이었습니다. 그래서 해당 답변을 받은 다음에 "리스트와 딕셔너리에 관련해서 물어볼만한 질문에는 어떤 것들이 있을까?" 와 같은 과정을 거치며 공부를 했습니다. 그리고 이것은 꽤나 유용한 학습 방법이었습니다. 기존의 방법보다도 훨씬 효율적이고요.

하지만 해당 텍스트를 읽은 후에는 이런 식으로 질문하게 됐습니다.

**다음 주에 컴퓨터 공학부 학생들을 대상으로 자료구조와 알고리즘 강의를 하게 됐어. 해당 학생들은 곧 졸업하고 취업을 앞두고 있어. 기본적인 개념의 이해는 돼있지만, 이를 복습하고 시험을 준비하는 과정이 필요하다 할때 커리큘럼을 작성해보려하는데 도와줄래?**

---

물론이죠! 학생들이 기본 개념을 알고 있지만 실전 경험이 필요한 상황에서는 다음과 같은 커리큘럼을 고려해볼 수 있습니다:

자료구조 복습

배열(Array), 연결 리스트(Linked List), 스택(Stack), 큐(Queue), 트리(Tree), 그래프(Graph) 등의 자료구조를 복습합니다.
각 자료구조의 특징, 장단점, 구현 방법 등을 다룹니다.

알고리즘 복습

정렬 알고리즘(Sorting Algorithms): 버블 정렬, 선택 정렬, 삽입 정렬, 퀵 정렬, 병합 정렬 등을 복습합니다.
검색 알고리즘(Search Algorithms): 선형 검색(Linear Search), 이진 검색(Binary Search) 등을 다룹니다.
그래프 알고리즘(Graph Algorithms): BFS, DFS 등의 기본적인 그래프 탐색 알고리즘을 다룹니다.

문제 해결 능력 향상

실제 문제를 풀어보며 알고리즘을 적용하는 능력을 향상시킵니다.
온라인 저지(Online Judge) 사이트를 활용하여 다양한 알고리즘 문제를 풀어봅니다.

코딩 테스트 대비

주어진 문제를 효율적으로 해결하기 위한 코딩 테스트 전략과 팁을 공유합니다.
실전에서 사용되는 자료구조와 알고리즘을 익히고 효율적인 코드를 작성하는 연습을 합니다.

프로젝트 실습

자료구조와 알고리즘을 활용하여 간단한 프로젝트를 진행합니다.
예를 들어, 그래프 알고리즘을 사용하여 경로 탐색 알고리즘을 구현하는 프로젝트를 할 수 있습니다.

---

이처럼 단순히 학습을 할 내용을 떠나 조금 더 구체적인 학습의 방식도 제안해주는 것이 꽤나 도움이 많이 됐습니다. 

그 다음 항목인 ###를 통해 내용을 나누는 것은, 이게 실제로 효과가 있는 것인지 아니면 제가 플라시보 효과를 보는 것인지는 모르겠지만, 역시나 꽤나 도움을 많이 받고 있습니다.

가령, User.py에 정의된 ORM 객체인 User를 이용해서 Login이라는 api를 구현해야한다고 할 경우에

**Login api를 login.py에 작성하고 싶어. Login은 input으로 email, password를 받고 이를 Oauth2를 통해 토큰을 만들어 반환해주는 인증 api야. 해당 정보를 저장하기 위한 database 모듈과 소통하기 위한 방식은 ORM을 채용하고 있어. Login이 정보를 주고 받게 될 Model은 다음과 같아**

\###

**User.py의 코드 내용**

---

3번째 항목은, chat gpt의 경우에는 custom instructions라는 항목이 있어서 두 가지 질문을 합니다.

1. What would you like ChatGPT to know about you to provide better responses?
2. How would you like ChatGPT to respond?

글의 저자는 다음과 같은 것을 작성하길 추천하고 있습니다.

* Task Definition: You will answer questions using this text: [insert text].
* Output Format: You will respond with a JSON object in this format: {`Question`: `Answer`}
* If the text does not contain sufficient information to answer the question, do not make up information and give the answers as "NA".

저 같은 경우는 다음과 같은 것을 사용하고 있는 중입니다.

I'm an Junior Programmer who has bachelor's degree on Electricity and computer engineering.
Right now I'm trying to earn a job as a software designer
I used to be good at algorithms and solving program problems, but not been programming for about 1.5 years
I'm trying to learn  how to solve the problems using programs, not wanting to get the sole answers
I'm a Korean who is fairly good at English, but much better at using Korean Language

Don't just give the answers from the scratch code level answers.
Try to lead me by giving rough hints that doesn't directly lead to the answer. Instead give vague concepts on how to get direct me to the answer.
Try to use vocabularies that are frequently used computer programming environment.
질문에 답하려면 [텍스타 삽입]이라는 텍스트를 사용하세요.
본인이 질문에 답하기에 충분한 정보가 포함되어 있지 않은 경우 정보를 구성하지 말고 "NA"로 답하십시오.

---

# Taylor Swift Ticketmaster Meltdown: 시스템 설계 분석
: https://learningdaily.dev/taylor-swift-ticketmaster-meltdown-a-system-design-analysis-cd326f7ed57b

요 근래 테일러 스위프트가 전세계 투어를 다닌 것이 꽤나 화제가 됐었죠. 조단위의 경제적 효과를 불러왔다는 이야기가 나올 정도니 대단하다라고 생각하고 넘어가기만 했던 일이었습니다.

그런데 이런 어마어마한 인파를 처리해야하는 티케팅 서비스가 과연 멀쩡했을까? 여기에는 생각이 닿지 않았었는데 글을 보고 굉장히 재밌단 생각이 들었습니다. 마침 요즘 대용량의 트래픽을 처리하는 경우가 생기면 어떻게 해야하는가에 대한 고민을 좀 해보고 있었던 참이기도 했구요.

이 글에서는 시스템적으로 대용량의 트래픽을 처리하기 위해 했어야하는 접근을 실제 사례를 통해 이야기해서 꽤나 흥미롭게 읽을 수 있었습니다.

1. 캐싱
2. 우아한 저하
3. 3자 의존성: 시스템은 가장 약한 링크만큼만 강력하다.

---
# 20년 동안 프로그래밍을 한 후배인 나와 당신에게 주는 조언
: https://medium.com/dev-publicity/advice-to-my-younger-self-and-you-after-20-years-in-programming-a3a2ccc7a942

미디엄에서 최근에 가장 많이 읽은 글이라고 추천이 돼서 읽은 글입니다. 저자는 Alexey Inkin이라는 IEEE 시니어 멤버인 20년 경력 개발자입니다.

워낙 글이 길어 항목을 정리하는 것은 큰 의미가 없을 것이고 선배와 함께 밥 먹으면서 옛날 이야기를 듣는 기분으로 감상했습니다. 재미있는 부분은 일반적으로 이런 글들을 읽었을 때 개발자의 측면에서 실력이 발전하는 방법에 대해 이야기해주는 경우가 많았습니다. 

이 글은 그것에서 벗어나 사업자와 시장의 관점에서 쓸모있는 사람이 되기 위한 시선에 대해서도 이야기를 합니다. 예를 들면

* 초기 단계의 기술에 참여하고, 죽어가는 기술에서 벗어나라
* 응용보다 과학을 선택하라
* 돈은 자신에게만 투자하지 말라.(금융 투자에 대한 이야기입니다.)

과 같은 이야기를 하는 것이죠. 초기 단계의 기술에 참여하라는 항목에서 제시한 링크가 꽤나 재밌었습니다.

https://survey.stackoverflow.co/2023/#section-salary-salary-and-experience-by-language

위의 링크는 프로그래밍 언어별 평균 연차와, 중위 연봉을 스택오버플로우에서 통계낸 것입니다. 빨간 것일수록 사용자가 많고, 파란 것일수록 적어서 신뢰도가 떨어진다 할 수 있죠.

요 근래 면접을 보다보면 "GO"와 "RUST"에 관심이 있는 기업들이 늘고 있다는 생각을 좀 하게 됐습니다. 얼마 전 일론 머스크는 RUST에 대한 강한 관심을 내비치기도 했고, 마이크로 소프트 역시도 RUST를 이용해서 윈도우를 뜯어고치고 있단 이야기가 화제가 되기도 했죠.

새로운 언어를 올해에는 하나쯤 공부해볼까 하는 중이고, 위의 둘 중 하나를 선택하려고 하고 있습니다. 아마 서버 백엔드 쪽으로 직장이 결정되면 GO를, 소프트웨어 쪽으로 가게 된다면 RUST를 공부하는 쪽으로 하지 않을까 싶네요. 일단 당장 목표로 잡아둔 것은 금주부터 해서 GO를 활용한 많은 인원을 수용할 수 있는 실시간 채팅 프로그램을 토이프로젝트로 하나 진행해보려고 하고 있습니다.