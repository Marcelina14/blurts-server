/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render, screen, within } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import { axe } from "jest-axe";
import Meta, {
  DataBreachActionNeeded,
  DataBreachFixed,
  DataBreachFixedEligibleForPremium,
  DataBrokerActionNeeded,
  DataBrokerInProgress,
  DataBrokerManualRemoved,
  DataBrokerRemoved,
  DataBrokerRequestedRemoval,
} from "./ExposureCard.stories";

jest.mock("../../../hooks/useTelemetry");

jest.mock("./DataBrokerImage", () => {
  return {
    // Mock this with an empty React component. Otherwise, tests will complain:
    // > Warning: A suspended resource finished loading inside a test, but the
    // > event was not wrapped in act(...).
    // > When testing, code that resolves suspended data should be wrapped into
    // > act(...)
    DataBrokerImage: () => null,
  };
});

it("passes the axe accessibility test suite", async () => {
  const ComposedProgressCard = composeStory(DataBrokerActionNeeded, Meta);
  const { container } = render(<ComposedProgressCard />);
  expect(await axe(container)).toHaveNoViolations();
});

describe("ScanResultCard", () => {
  // Data broker action needed
  it("shows the right description for a scan result card where there is action needed", () => {
    const ComposedProgressCard = composeStory(DataBrokerActionNeeded, Meta);
    render(<ComposedProgressCard />);
    const innerDescription = screen.getByText(
      "This site is publicly publishing and selling",
      { exact: false },
    );

    expect(innerDescription).toBeInTheDocument();
  });

  // Data broker removed
  it("shows the right description for a scan result card where a profile has been automatically removed", () => {
    const ComposedProgressCard = composeStory(DataBrokerRemoved, Meta);
    render(<ComposedProgressCard />);
    const innerDescription = screen.getByText(
      "will continually monitor to make sure they don’t add you back",
      { exact: false },
    );

    expect(innerDescription).toBeInTheDocument();
  });

  // Data broker manually removed
  it("shows the right description for a scan result card where a profile has been manually removed", () => {
    const ComposedProgressCard = composeStory(DataBrokerManualRemoved, Meta);
    render(<ComposedProgressCard />);
    const innerDescription = screen.getByText(
      "You marked this profile as fixed.",
      { exact: false },
    );

    expect(innerDescription).toBeInTheDocument();
  });

  // Data broker removal in progress
  it("shows the right description for a scan result card where removal is in progress", () => {
    const ComposedProgressCard = composeStory(DataBrokerInProgress, Meta);
    render(<ComposedProgressCard />);
    const innerDescription = screen.getByText(
      "As a ⁨Monitor Plus⁩ member, we’ve removed",
      { exact: false },
    );

    expect(innerDescription).toBeInTheDocument();
  });

  it("shows an additional note for “requested removal” status label", () => {
    const ComposedProgressCard = composeStory(DataBrokerRequestedRemoval, Meta);
    render(<ComposedProgressCard />);
    const statusLabel = screen.getByText("Requested removal");
    const statusLabelParent = statusLabel.parentElement as HTMLElement;
    const labelNote = within(statusLabelParent).getByText("Attempt", {
      exact: false,
    });

    expect(labelNote).toBeInTheDocument();
  });

  it("hides the dt element if its dd counterpart has hideonmobile", () => {
    const ComposedProgressCard = composeStory(DataBrokerInProgress, Meta);
    render(<ComposedProgressCard />);
    const infoForSale = screen.getAllByRole("definition");
    const elementsWithClass = infoForSale.filter((element) =>
      element.classList.contains("hideOnMobile"),
    );
    const prevElementToInfoForSale =
      elementsWithClass[0].previousElementSibling;
    expect(prevElementToInfoForSale).toHaveClass("hideOnMobile");
  });
});

describe("DataBreachCard", () => {
  // Data breach fixed
  it("shows the right description for a fixed data breach card", () => {
    const ComposedProgressCard = composeStory(DataBreachFixed, Meta);
    render(<ComposedProgressCard />);
    const innerDescription = screen.getByText(
      "You’ve taken the steps needed to fix",
      { exact: false },
    );

    expect(innerDescription).toBeInTheDocument();
  });

  // Data breach action needed
  it("shows the right description for an unresolved data breach card", () => {
    const ComposedProgressCard = composeStory(DataBreachActionNeeded, Meta);
    render(<ComposedProgressCard />);
    const innerDescription = screen.getByText(
      "Your information was exposed in the",
      { exact: false },
    );

    expect(innerDescription).toBeInTheDocument();
  });

  it("announces the exposure type (data breach) if user is eligible for premium", () => {
    const ComposedExposureCard = composeStory(
      DataBreachFixedEligibleForPremium,
      Meta,
    );
    render(<ComposedExposureCard />);

    const companyLogoTitle = screen.getByText("Exposure type");
    expect(companyLogoTitle).toBeInTheDocument();
  });

  it("does not show the estimated removal time if the feature flag `DataBrokerRemovalTimeEstimates` is disabled", () => {
    const ComposedExposureCard = composeStory(DataBrokerActionNeeded, Meta);
    render(<ComposedExposureCard isPremiumUser />);

    const removalTimeTitle = screen.queryByText("Removal time");
    expect(removalTimeTitle).not.toBeInTheDocument();
  });

  it("does not show the estimated removal time for free users", () => {
    const ComposedExposureCard = composeStory(DataBrokerActionNeeded, Meta);
    render(
      <ComposedExposureCard
        enabledFeatureFlags={["DataBrokerRemovalTimeEstimateLabel"]}
      />,
    );

    const removalTimeTitle = screen.queryByText("Removal time");
    expect(removalTimeTitle).not.toBeInTheDocument();
  });

  it.each([
    {
      removalTime: 6,
      label: "Up to 7 days",
    },
    {
      removalTime: 70,
      label: "61–90 days",
    },
    {
      removalTime: 181,
      label: "181+ days",
    },
  ])(
    "shows a label with the estimated removal time if available to Plus subscribers: %s",
    ({ removalTime, label }) => {
      const ComposedExposureCard = composeStory(DataBrokerActionNeeded, Meta);
      render(
        <ComposedExposureCard
          isPremiumUser
          enabledFeatureFlags={["DataBrokerRemovalTimeEstimateLabel"]}
          removalTimeEstimate={removalTime}
        />,
      );

      const removalTimeTitle = screen.getByText("Removal time");
      expect(removalTimeTitle).toBeInTheDocument();
      const removalTimeLabel = screen.getByText(label);
      expect(removalTimeLabel).toBeInTheDocument();
    },
  );

  it("shows a label displaying “unknown” if the removal time is not available to Plus subscribers", () => {
    const ComposedExposureCard = composeStory(DataBrokerActionNeeded, Meta);
    render(
      <ComposedExposureCard
        isPremiumUser
        enabledFeatureFlags={["DataBrokerRemovalTimeEstimateLabel"]}
      />,
    );

    const removalTimeTitle = screen.getByText("Removal time");
    expect(removalTimeTitle).toBeInTheDocument();
    const removalTimeLabel = screen.getByText("Unknown");
    expect(removalTimeLabel).toBeInTheDocument();
  });

  it("shows a label displaying “N/A” on data breach cards to Plus subscribers", () => {
    const ComposedExposureCard = composeStory(DataBreachActionNeeded, Meta);
    render(
      <ComposedExposureCard
        isPremiumUser
        enabledFeatureFlags={["DataBrokerRemovalTimeEstimateLabel"]}
      />,
    );

    const removalTimeTitle = screen.getByText("Removal time");
    expect(removalTimeTitle).toBeInTheDocument();
    const removalTimeLabel = screen.getByText("N/A");
    expect(removalTimeLabel).toBeInTheDocument();
  });
});
