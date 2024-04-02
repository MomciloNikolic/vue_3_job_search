import { render, screen } from "@testing-library/vue";

import TheSubNav from "@/components/TheSubnav.vue";
import { describe, expect, it } from "vitest";

describe("TheSubNav", () => {
  describe("when user is on jobs page", () => {
    it("displays job count", () => {
      render(TheSubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultPage: true,
          };
        },
      });

      const jobCount = screen.getByText("1653");

      expect(jobCount).toBeInTheDocument();
    });
  });
  describe("when user is not on jobs page", () => {
    it("does not dipslay job count", () => {
      render(TheSubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultPage: false,
          };
        },
      });

      const jobCount = screen.queryByText("1653");

      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
