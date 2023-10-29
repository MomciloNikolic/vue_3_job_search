import { describe, it, expect } from "vitest";

import { evenOrOdd, multiply } from "@/playground.js";

describe("basic math", () => {
  it("adds two numbers", () => {
    expect(1 + 1).toBe(2);
  });

  describe("evenOrOdd", () => {
    describe("when number is even", () => {
      it("indicates the number is even", () => {
        expect(evenOrOdd(4)).toBe("Even");
      });
      it("indicates the number is odd", () => {
        expect(evenOrOdd(3)).toBe("Odd");
      });
    });
  });

  describe("multiply", () => {
    it("Multiply 2 numvbers together", () => {
      expect(multiply(2, 3)).toBe(6);
    });
  });
});
