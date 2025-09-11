"use client";
import { useElementContext } from "@/hooks/useElementContext";
import { QuizElements } from "./QuizElements";

export const RightSidebar: React.FC = () => {
  const { selectedElement } = useElementContext();

  const PropertiesComponent = selectedElement
    ? QuizElements[selectedElement.type].propertiesComponent
    : null;

  return (
    <aside className="w-[480px] max-w-[400px] flex items-center flex-col flex-grow gap-2 border border-gray-500 rounded-xl p-4 bg-background overflow-y-auto">
      <p className="text-3xl text-muted-foreground font-bold">Edit Panel</p>

      {selectedElement && PropertiesComponent ? (
        <PropertiesComponent elementInstance={selectedElement} />
      ) : (
        <p>No element selected</p>
      )}
    </aside>
  );
};
