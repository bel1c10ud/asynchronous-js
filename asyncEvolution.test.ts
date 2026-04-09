import {
  buildPaymentMessageAsync,
  buildPaymentMessageCallback,
  buildPaymentMessagePromise,
} from "./asyncEvolution";

function runCallback(userId: string, originalPrice: number): Promise<string> {
  return new Promise((resolve, reject) => {
    buildPaymentMessageCallback(userId, originalPrice, (err, message) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(message as string);
    });
  });
}

describe("async evolution exercise", () => {
  const runners = [
    ["callback", runCallback],
    ["promise", buildPaymentMessagePromise],
    ["async/await", buildPaymentMessageAsync],
  ] as const;

  test.each(runners)("%s: u1 success", async (_label, fn) => {
    await expect(fn("u1", 10000)).resolves.toBe(
      "kim님의 최종 결제 금액은 9000원입니다."
    );
  });

  test.each(runners)("%s: u2 success", async (_label, fn) => {
    await expect(fn("u2", 10000)).resolves.toBe(
      "lee님의 최종 결제 금액은 9700원입니다."
    );
  });

  test.each(runners)("%s: missing user", async (_label, fn) => {
    await expect(fn("missing", 10000)).rejects.toThrow("USER_NOT_FOUND");
  });

  test.each(runners)("%s: missing discount rate", async (_label, fn) => {
    await expect(fn("broken", 10000)).rejects.toThrow("RATE_NOT_FOUND");
  });
});
