---
layout: 산문
classes: wide
title: "children, useEffect, useState in React"
subtitle: "react에서 데이터를 다루는 방법"
date: 2024-05-31
categories: 개발이야기
---

## Next.js에서 페이지, 레이아웃, 템플릿

모든 어플리케이션의 기본적인 뼈대는 라우팅을 통해 구성됩니다. Next.js에서는 페이지, 레이아웃,
템플릿을 통해 라우팅에 따라 UI를 다르게 구성할 수 있습니다. 이번 포스트에서는 어떤 경우에,
어떤 방식으로 이런 특별한 파일들을 사용하는지 알아보겠습니다.

---

## Pages

페이지는 라우트에 따라 유일하게 대응하는 UI를 나타냅니다. 페이지는 page.js 파일에서 컴포넌트를
기본 내보내기(default export)함으로써 정의할 수 있습니다.

예를 들어, 인덱스 페이지를 만들려면 app 디렉토리 안에 page.tsx 파일을 추가합니다:

```tsx
// `app/page.tsx`는 `/` URL의 UI를 정의합니다
export default function Page() {
  return <h1>Hello, Home page!</h1>;
}
```

그런 다음, 새로운 페이지를 만들고 싶다면, 새로운 폴더를 만들고 그 안에 page.tsx 파일을
추가합니다. 예를 들어, /dashboard 라우트에 대한 페이지를 만들려면, dashboard라는 새
폴더를 만들고 그 안에 page.tsx 파일을 추가합니다:

```tsx
// `app/dashboard/page.tsx`는 `/dashboard` URL의 UI를 정의합니다
export default function Page() {
  return <h1>Hello, Dashboard Page!</h1>;
}
```

## Layouts

레이아웃은 여러 페이지에서 공통으로 사용하는 UI 요소를 정의하는 데 사용됩니다. Next.js에서
layout은 state를 보존하고, 상호 작용한 상태로 유지되어 다시 렌더링되지 않습니다. Layout은
또한 nested될 수 있습니다.

next.js에서 layout은 react에서 layout.js 컴포넌트를 default export함으로써 정의할 수
있습니다. 예를 들어, 다음과 같은 layout.js를 정의할 경우, layout은 /dashboard 페이지와
동시에 /dashboard/settings 페이지에서 공통으로 사용됩니다.

```plaintext
app
├── dashboard
│   ├── page.tsx
│   ├── layout.tsx
│   └── settings
│       └── page.tsx
│       └── layout.tsx
```

```tsx
// `app/dashboard/layout.tsx`는 `/dashboard`와 `/dashboard/settings` URL의 공통 UI를 정의합니다
export default function Layout({ children }) {
  return (
    <div>
      <nav>Dashboard Navigation</nav>
      <main>{children}</main>
    </div>
  );
}
```

이 때 layout의 종류에는 최상위에 존재하는 Root Layout과, 하위 children에 적용되는 Nested Layout이 있습니다.
최 상위 root Layout만이 <html\>과 \<body\> 태그를 포함할 수 있습니다.

```plaintext
app
├── layout.tsx
├── dashboard
│   ├── layout.tsx
│   └── settings
│       └── layout.tsx
```

---

## Templates

템플릿은 layout과 children을 감싼다는 측면에서 layout과 비슷하지만, 템플릿은 children을
탐색 시에 새로운 instance를 생성하는 점이 다릅니다.

템플릿은 레이아웃과 달리 다음과 같은 특정한 경우에 선호됩니다.

- useEffect나 useState와 같은 특징에 의존하는 경우
- 기본적인 프레임워크의 기능을 변경해야하는 경우


이렇게 Next.js에서는 페이지, 레이아웃, 템플릿을 통해 다양한 방식으로 UI를 구성할 수 있습니다. 이를 통해 어플리케이션의 구조를 체계적으로 관리하고, 재사용 가능한 컴포넌트를 효율적으로 활용할 수 있습니다.

---

## 참고자료

- [Next.JS 공식 문서 - Pages and Layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)
