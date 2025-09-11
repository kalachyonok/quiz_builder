import { render, screen } from "@testing-library/react";
import { QuizHeader } from "@/components/QuizHeader";

jest.mock("@/components/QuizTitle", () => ({
  QuizTitle: jest.fn(({ quizId, viewMode }) => (
    <div data-testid="quiz-title">{`Quiz ${quizId} - ${viewMode}`}</div>
  )),
}));

describe("QuizHeader", () => {
  const quizId = 1234;
  const viewMode = true;

  it("renders link to home page", () => {
    render(<QuizHeader quizId={quizId} viewMode={viewMode} />);

    const link = screen.getByRole("link", { name: /quiz builder/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });

  it("renders QuizTitle with correct props", () => {
    render(<QuizHeader quizId={quizId} viewMode={viewMode} />);

    const title = screen.getByTestId("quiz-title");
    expect(title).toHaveTextContent(`Quiz ${quizId} - ${viewMode}`);
  });
});
