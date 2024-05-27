---
layout: 산문
classes: wide
title: "Props and State in React"
subtitle: "react에서 데이터를 다루는 방법"
date: 2024-05-25
categories: 개발이야기
---

## React에서 데이터를 다루는 두 가지 다른 방법

React에서 데이터를 다루는 방법은 크게 `Props`와 `State` 두 가지로 나뉩니다. 이번에 Next.js를 사용하면서
가장 이해가 되지 않아 개발에 난항을 겪는 부분이었기 때문에 이번 기회에 정리해보려고 합니다. 둘의 차이점을
요약하자면 다음과 같습니다.

- `Props`: 부모 컴포넌트로부터 전달받은 데이터를 읽기 전용으로 사용하는 방법
- `State`: 컴포넌트 내부에서 선언하고 사용하는 데이터를 변경할 수 있는 방법

이 둘의 차이점을 이해하면 React에서 데이터를 어떻게 다루는지에 대한 전체적인 흐름을 이해할 수 있습니다. 이를
위해 블로그 포스트를 예로 들어 `Props`와 `State`를 사용하는 방법을 jsx와 tsx로 정리해보겠습니다.

---

## Props

`Props`는 부모 컴포넌트로부터 전달받은 데이터를 읽기 전용으로 사용하는 방법입니다. 이를 통해 부모 컴포넌트로부터
자식 컴포넌트로 데이터를 전달할 수 있습니다. 블로그 포스트를 예로 들어보겠습니다. 블로그 포스트 컴포넌트는
`title`, `date`, `content` 등의 데이터를 받아서 화면에 표시해야 합니다. 이때 `Props`를 사용하면 부모 컴포넌트에서
전달받은 데이터를 읽기 전용으로 사용할 수 있습니다.

### Props를 사용할 Post 컴포넌트

```jsx
function Post({ title, date, content }: props) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{content}</p>
    </div>
  );
}
```

```tsx
type PostProps = {
    title: string;
    date: string;
    content: string;
};

function Post({ title, date, content }: PostProps) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{date}</p>
            <p>{content}</p>
        </div>
    );
}
```

`Post` 컴포넌트는 `title`, `date`, `content`를 `Props`로 받아서 화면에 표시하는 역할을 합니다. 이때 `Props`는
`Post` 컴포넌트의 매개변수로 전달되어 사용됩니다.

### Props를 사용하는 부모 컴포넌트

```jsx
function Blog() {
  return (
    <div>
      <Post
        title="React Props and State"
        date="2024-05-25"
        content="Props and State in React"
      />
    </div>
  );
}
```

`Blog` 컴포넌트는 `Post` 컴포넌트를 렌더링하면서 `title`, `date`, `content`를 `Props`로 전달합니다.
이때 `Props`는 `Post` 컴포넌트의 매개변수로 전달되어 사용됩니다.

해당 데이터가 `State`가 아니라 `Props`임을 알 수 있는 방법은 `Props`는 읽기 전용이기 때문에 해당 데이터를
변경할 수 없다는 것입니다. 해당 코드에서는 `title`, `date`, `content`를 변경하고 있지 않기 때문에
`Props`로 전달되었다는 것을 알 수 있습니다.

---

## State

`State`는 컴포넌트 내부에서 선언하고 사용하는 데이터를 변경할 수 있는 방법입니다. 이를 통해 컴포넌트 내부에서
데이터를 변경하고 화면을 업데이트할 수 있습니다. 블로그 포스트를 예로 들어보겠습니다. 블로그 포스트 컴포넌트는
`like`와 같은 데이터를 사용자의 상호작용에 따라 변경해야 합니다. 이때 `State`를 사용하면 컴포넌트 내부에서
`like`와 같은 데이터를 변경할 수 있습니다.

### State를 사용할 Like 컴포넌트

```jsx
function Like() {
  const [like, setLike] = useState(0);

  const handleLike = () => {
    setLike(like + 1);
  };

  return (
    <div>
      <button onClick={handleLike}>Like</button>
      <p>{like}</p>
    </div>
  );
}
```

```tsx
import React, { useState, MouseEvent } from 'react';

function Like() {
    const [like, setLike] = useState<number>(0);

    const handleLike = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setLike(like + 1);
    };

    return (
        <div>
            <button onClick={handleLike}>Like</button>
            <p>{like}</p>
        </div>
    );
}
```

`Like` 컴포넌트는 `like`를 `State`로 선언하고 `handleLike` 함수를 통해 `like`를 변경하는 역할을 합니다.
이때 `State`는 `useState` 훅을 통해 초기값을 설정하고 `setLike` 함수를 통해 변경할 수 있습니다.

해당 데이터가 `Props`가 아니라 `State`임을 알 수 있는 방법은 `State`는 변경 가능하다는 것입니다. 해당 코드에서는
`like`를 변경하고 있기 때문에 `State`로 선언되었다는 것을 알 수 있습니다.

### State를 사용하는 부모 컴포넌트

`State`는 컴포넌트 내부에서 선언하고 사용하는 데이터이기 때문에 부모 컴포넌트로 전달할 필요가 없습니다.
따라서 `State`를 사용하는 컴포넌트는 부모 컴포넌트로부터 데이터를 전달받을 필요가 없습니다.

### useState 훅

`useState` 훅은 `State`를 사용할 때 사용하는 훅입니다. `useState` 훅은 배열을 반환하는데 첫 번째 요소는 `State`의
값이고 두 번째 요소는 `State`를 변경하는 함수입니다. 이를 통해 `State`의 값을 변경할 수 있습니다. 즉, `useState`[1]
은 자동으로 `setLike` 함수를 생성하고 `like`를 변경할 수 있게 해줍니다.

```jsx
const [like, setLike] = useState(0);
```

```tsx
const [like, setLike] = useState<number>(0);
```

---

## 정리

React에서 데이터를 다루는 방법은 크게 `Props`와 `State` 두 가지로 나뉩니다. `Props`는 부모 컴포넌트로부터
전달받은 데이터를 읽기 전용으로 사용하는 방법이고 `State`는 컴포넌트 내부에서 선언하고 사용하는 데이터를
변경할 수 있는 방법입니다. `State`를 사용하기 위해서는 `useState` 훅을 사용하면 됩니다.

이 둘의 차이점을 이해하면 React에서 데이터를 어떻게 다루는지에 대한 전체적인 흐름을 이해할 수 있습니다. 이를 통해
React에서 데이터를 다루는 방법을 더욱 효율적으로 사용할 수 있습니다.

---

## 참고자료

[React 공식 문서 - State Hook](https://reactjs.org/docs/hooks-state.html)
