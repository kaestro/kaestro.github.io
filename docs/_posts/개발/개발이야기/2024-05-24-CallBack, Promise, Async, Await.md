---
layout: 산문
classes: wide
title: "CallBack, Promise, Async, Await"
subtitle: "javascript에서 비동기 처리를 다루는 방법"
date: 2024-05-24
categories: 개발이야기
---

## javascript에서 비동기 처리를 다루는 방법

javascript에서 비동기 처리를 다루는 방법은 크게 `Promise`, `Async`, `Await` 세 가지로 나뉩니다. 그리고 이들
이전에는 `CallBack`을 사용했었습니다.  javascript는 싱글 스레드로 동작하기 때문에 비동기 처리를 위해 이러한
방법을 사용합니다. 이전까지는 멀티 스레드를 지원하는 go를 주로 사용했기 때문에 비동기 처리를 다루는 방법이
생소했는데, 이번에 javascript를 사용하면서 이러한 방법을 자주 사용하게 되어 이번에 정리하게 되었습니다.

---

## CallBack

`CallBack`은 비동기 처리를 위한 함수로, 비동기 작업이 완료되었을 때 호출되는 함수입니다. 이를 통해 비동기 작업이
완료되었을 때 결과 값을 받아서 다음 작업을 수행할 수 있습니다. `CallBack`은 다음과 같이 사용할 수 있습니다.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback('data');
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});
```

`CallBack`은 콜백 함수를 인자로 받습니다. 이를 통해 비동기 작업이 완료되었을 때 콜백 함수를 호출하면 결과 값을
받을 수 있습니다. 이를 통해 비동기 작업이 완료되었을 때 결과 값을 받아서 위와 같은 작업을 수행할 수 있습니다.

---

## Promise

`Promise`는 비동기 처리를 위한 객체로, 비동기 작업이 완료되었을 때 결과 값을 반환하거나 실패했을 때 에러를
반환하는 객체입니다. 이를 통해 비동기 작업이 완료되었을 때 결과 값을 받아서 다음 작업을 수행할 수 있습니다.
`Promise`는 다음과 같이 사용할 수 있습니다.

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('data');
    }, 1000);
  });
}

fetchData().then((data) => {
  console.log(data);
});
```

`Promise`는 `resolve`와 `reject`를 인자로 받는 콜백 함수를 인자로 받습니다. 이를 통해 비동기 작업이 완료되었을 때
`resolve`를 호출하면 `then`으로 결과 값을 받을 수 있습니다. 이를 통해 비동기 작업이 완료되었을 때 결과 값을 받아서
다음 작업을 수행할 수 있습니다.

기존의 `CallBack`과 `Promise`를 비교하면 `Promise`는 `CallBack`의 콜백 지옥을 해결할 수 있습니다. 콜백 지옥이란
콜백 함수를 중첩해서 사용할 때 발생하는 문제로, 다음과 같이 코드를 작성하면 콜백 지옥이 발생합니다.

```javascript
fetchData((data) => {
  fetchMoreData(data, (moreData) => {
    fetchMoreMoreData(moreData, (moreMoreData) => {
      console.log(moreMoreData);
    });
  });
});
```

`Promise`를 사용하면 다음과 같이 코드를 작성할 수 있습니다.

```javascript
fetchData()
  .then((data) => fetchMoreData(data))
  .then((moreData) => fetchMoreMoreData(moreData))
  .then((moreMoreData) => console.log(moreMoreData));
```

이를 통해 이전처럼 콜백 함수를 중첩해서 사용할 경우에 nested가 발생하지 않아 코드를 더 깔끔하게 작성할 수
있으며, 이는 `Promise`는 결과로 `Promise`를 반환하기 때문에 가능합니다. 이를 통해 비동기 작업이 완료되었을 때
결과 값을 받아서 위와 같은 작업을 수행할 수 있습니다.

---

## Async, Await

`Async`, `Await`는 `Promise`를 더 쉽게 사용할 수 있도록 해주는 문법입니다. `Async`는 함수 앞에 붙여서
비동기 함수를 선언할 수 있게 해주며, `Await`는 `Promise`를 반환하는 함수 앞에 붙여서 결과 값을 받을 수 있게
해줍니다. 예를 들어 다음과 같은 `Promise`를 사용하는 함수가 있다고 가정해보겠습니다.

```javascript
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('data');
    }, 1000);
  });
}
```

`Async`와 `Await`을 사용하는 것이 더 좋은 이유는 `Async`와 `Await`을 사용하면 `Promise`를 사용할 때와 같이
`then`을 사용하지 않아도 되기 때문입니다. 아까 전의 콜백 지옥을 해결한 것처럼 `Async`와 `Await`을 사용하면
`Promise`를 사용할 때와 같이 `then`을 사용하지 않아도 되기 때문에 코드를 더 깔끔하게 작성할 수 있습니다.

이를 `then`을 사용할 때와 비교하면 다음과 같습니다.

```javascript
fetchData().then((data) => {
  console.log(data);
});
```

```javascript
async function main() {
  const data = await fetchData();
  console.log(data);
}

main();
```

만약에 `콜백 지옥`을 `Async`, `Await`을 사용해서 해결하고 싶다면 다음과 같이 코드를 작성할 수 있습니다.

```javascript
async function main() {
  const data = await fetchData();
  const moreData = await fetchMoreData(data);
  const moreMoreData = await fetchMoreMoreData(moreData);
  console.log(moreMoreData);
}

main();
```

---

## 정리

이렇게 `CallBack`, `Promise`, `Async`, `Await`을 사용해서 javascript에서 비동기 처리를 다루는 방법을 알아보았습니다.
`CallBack`은 비동기 작업이 완료되었을 때 호출되는 함수로, `Promise`는 비동기 작업이 완료되었을 때 결과 값을
반환하거나 실패했을 때 에러를 반환하는 객체로, `Async`, `Await`는 `Promise`를 더 쉽게 사용할 수 있도록 해주는
문법입니다.

이들은 싱글 스레드로 동작하는 javascript에서 비동기 처리를 위해 사용되며, 이를 통해 기존의 콜백 지옥 등을 포함한
비동기 처리를 더 쉽게 다룰 수 있게 해줍니다.

---

## 참고

- [MDN web docs - Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN web docs - async function](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN web docs - await](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/await)
