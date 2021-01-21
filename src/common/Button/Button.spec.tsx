import React from "react";
import { render } from "@testing-library/react";

import Button, { ButtonProps } from "./Button";

describe("Test Component", () => {
  it("should render foo text correctly", () => {
    const { getByTestId } = render(<Button>button</Button>)

    const component = getByTestId("Button");

    expect(component).toHaveTextContent("button");
  });
});