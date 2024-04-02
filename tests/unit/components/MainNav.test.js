import { render, screen } from "@testing-library/vue";

import MainNav from "@/components/MainNav.vue";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";

describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });
    const companyName = screen.getByText("MoMo Careers");
    expect(companyName).toBeInTheDocument();
  });

  it("displays menu items for navigation", () => {
    render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });
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
  });
  describe("whe the user logs in", () => {
    it("Displays user profile picture ", async () => {
      render(MainNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

      // screen.getByRole("img");
      let profileImage = screen.queryByRole("img", {
        // / string /i  sluzi da VUE test ne bude case sensitive
        name: /User profile image/i,
      });
      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole("button", {
        name: /sign in/i,
      });
      // click simulation
      await userEvent.click(loginButton);

      profileImage = screen.getByRole("img", {
        name: /User profile image/i,
      });
      expect(profileImage).toBeInTheDocument();
    });
  });
});
