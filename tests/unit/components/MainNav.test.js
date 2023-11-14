import { render, screen } from "@testing-library/vue";

import MainNav from "@/components/MainNav.vue";
import { expect } from "vitest";

describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav);
    const companyName = screen.getByText("MoMo Careers");
    expect(companyName).toBeInTheDocument();
  });
});
