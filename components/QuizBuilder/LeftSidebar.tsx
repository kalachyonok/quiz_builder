import { QuizElements } from "./QuizElements";
import { SidebarBtnElement } from "./SidebarBtnElement";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export const LeftSidebar = () => {
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);

  return (
    <aside className="w-[480px] max-w-[400px] flex items-center flex-col  flex-grow gap-2 border border-gray-500 rounded-xl p-4 bg-background overflow-y-auto">
      <p className="text-3xl text-muted-foreground font-bold">Elements bar</p>

      <SidebarBtnElement quizElement={QuizElements.HeadingField} />
      <SidebarBtnElement quizElement={QuizElements.ButtonField} />
      <SidebarBtnElement quizElement={QuizElements.FooterField} />

      <div className="w-full">
        <button
          onClick={() => setIsQuestionOpen(!isQuestionOpen)}
          className="w-full flex items-center justify-between px-4 py-2 text-left text-lg font-semibold text-muted-foreground hover:bg-accent rounded-md transition-colors"
        >
          <span>Question</span>
          {isQuestionOpen ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </button>

        {isQuestionOpen && (
          <div className="flex flex-col items-center mt-2 space-y-2">
            <SidebarBtnElement quizElement={QuizElements.RadioField} />
            <SidebarBtnElement quizElement={QuizElements.CheckboxField} />
            <SidebarBtnElement quizElement={QuizElements.TextField} />
          </div>
        )}
      </div>
    </aside>
  );
};
