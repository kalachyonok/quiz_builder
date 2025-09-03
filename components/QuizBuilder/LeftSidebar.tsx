import { QuizElements } from "./QuizElements";
import { SidebarBtnElement } from "./SidebarBtnElement";

export const LeftSidebar = () => {
  return (
    <aside className="w-[480px] max-w-[400px] flex items-center flex-col  flex-grow gap-2 border border-gray-500 rounded-xl p-4 bg-background overflow-y-auto">
      <p className="text-3xl text-muted-foreground font-bold">Elements bar</p>
      <SidebarBtnElement quizElement={QuizElements.TextField} />
    </aside>
  );
};
