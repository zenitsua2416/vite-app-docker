
import { render, screen } from "@testing-library/react";

import Counter from "./Counter";

describe("Counter", () => {
    render(<Counter />);
    test("rendered correctly", () => {
        const counter = screen.getByTestId("counter");
        const button = screen.getByRole("button", { name: /increment/i });

        expect(counter);
        expect(button);
    });
});

