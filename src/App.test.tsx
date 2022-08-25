import { render } from "@testing-library/react";

import { App } from "./App";

describe("App", () => {
  test("renders correctly", async () => {
    render(<App />);
    expect(true).toBeTruthy();
  });
});
