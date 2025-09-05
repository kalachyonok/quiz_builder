"use client";

import { DndContext } from "@dnd-kit/core";
import { Canvas } from "./Canvas";
import { LeftSidebar } from "./LeftSidebar";
import { DragOverlayWrapper } from "./DragOverlayWrapper";
import { RightSidebar } from "./RightSidebar";
import { QuizElementInstance } from "./QuizElements";

export const QuizBuilder = ({
  buildElements,
}: {
  buildElements?: QuizElementInstance[];
}) => {
  return (
    <DndContext>
      <main className="flex flex-col w-full mt-24">
        <div className="flex w-full min-h-screen p-10 justify-around bg-accent bg-[url(/paper.svg)]">
          <LeftSidebar />
          <Canvas buildElements={buildElements} />
          <RightSidebar />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  );
};
