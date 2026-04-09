# 비동기 학습

`callback`, `promise`, `async/await`를 같은 문제 위에서 비교하기 위한 TypeScript 실습 템플릿이다.

## 목표

- 같은 비동기 문제를 세 가지 방식으로 표현한다.
- 성공 결과와 실패 결과를 모두 일관되게 다룬다.
- 구현 후 Jest 테스트로 직접 검증한다.

## 실행

```bash
npm install
npm test
```

## 과제

`asyncEvolution.ts`에서 `async/await` 기준 예시를 보고, 같은 흐름을 다른 방식으로 표현한다.

- 구현할 함수
  - `buildPaymentMessageCallback`
  - `buildPaymentMessagePromise`
- 기준 예시로 제공되는 함수
  - `buildPaymentMessageAsync`

참고:

- 파일 안에 `buildPaymentMessageAsync`가 들어 있다.
- 이 함수는 문제를 빠르게 파악하기 위한 `async/await` 기준 예시다.
- 이 예시를 바탕으로 같은 흐름을 `promise`, `callback`으로도 표현해본다.

세 함수는 모두 같은 로직을 수행해야 한다.

- `userId`와 `originalPrice`를 받는다.
- 사용자 조회 후 할인율을 조회한다.
- 최종 결제 금액을 계산해 문자열을 만든다.
- 실패 시 각 방식에 맞게 에러를 전달하거나 throw 한다.

## 성공 계약

- `u1, 10000` -> `kim님의 최종 결제 금액은 9000원입니다.`
- `u2, 10000` -> `lee님의 최종 결제 금액은 9700원입니다.`

## 실패 계약

- 없는 사용자 -> `USER_NOT_FOUND`
- 없는 등급 -> `RATE_NOT_FOUND`
