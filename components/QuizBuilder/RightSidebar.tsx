"use client";
import { useElementContext } from "@/app/hooks/useElementContext";
import { QuizElements } from "./QuizElements";

export const RightSidebar = () => {
  const { selectedElement, elements } = useElementContext();

  if (!selectedElement) {
    return (
      <aside className="w-[480px] max-w-[400px] flex items-center flex-col  flex-grow gap-2 border border-gray-500 rounded-xl p-4 bg-background overflow-y-auto">
        <p className="text-3xl text-muted-foreground font-bold">Edit Panel</p>
        <p>No element selected</p>
      </aside>
    );
  }

  const PropertiesComponent =
    QuizElements[selectedElement.type].propertiesComponent;

  return (
    <aside className="w-[480px] max-w-[400px] flex items-center flex-col  flex-grow gap-2 border border-gray-500 rounded-xl p-4 bg-background overflow-y-auto">
      <p className="text-3xl text-muted-foreground font-bold">Edit Panel</p>

      {elements.length === 0 ? (
        <p>No element selected</p>
      ) : (
        <PropertiesComponent elementInstance={selectedElement} />
      )}
    </aside>
  );
};
