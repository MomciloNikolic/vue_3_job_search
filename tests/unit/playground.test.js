import { describe, it, expect } from "vitest";

import { evenOrOdd } from "@/playground.js";

describe("basic math", () => {
  it("adds two numbers", () => {
    expect(1 + 1).toBe(2);
  });

  describe("evenOrOdd function", () => {
    describe("when number is even", () => {
      it("indicates the number is even", () => {
        expect(evenOrOdd(4)).toBe("Even");
      });
      it("indicates the number is odd", () => {
        expect(evenOrOdd(3)).toBe("Odd");
      });
    });
  });
});
