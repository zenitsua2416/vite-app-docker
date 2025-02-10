import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App.tsx";

describe("Basic Testing Library Test - Should Always Pass", () => {
    it("Should Pass", function () {
        expect(true).toBe(true);
    });
});

describe("Render App", () => {
    it("component should have basic text", async function () {
        render(<App />);
        expect(screen.getByText("React Vite Jest"));
    });
});