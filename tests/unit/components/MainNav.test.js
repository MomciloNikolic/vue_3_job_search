import { render, screen } from "@testing-library/vue";

import MainNav from "@/components/MainNav.vue";
import { expect, it } from "vitest";

describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav);
    const companyName = screen.getByText("MoMo Careers");
    expect(companyName).toBeInTheDocument();
  });

  it("displays menu items for navigation", () => {
    render(MainNav);
    const navigationMenuItems = screen.getAllByRole("listitem");

    const navigationMenuText = navigationMenuItems.map(
      (item) => item.textContent
    );
    expect(navigationMenuText).toEqual([
      "Teams",
      "Locations",
      "Life at MoMo Careers",
      "How we hire",
      "Students",
      "Jobs",
    ]);

    console.log(navigationMenuText);
  });
});
