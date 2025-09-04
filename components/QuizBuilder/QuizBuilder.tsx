"use client";

import { DndContext } from "@dnd-kit/core";
import { Canvas } from "./Canvas";
import { LeftSidebar } from "./LeftSidebar";
import { DragOverlayWrapper } from "./DragOverlayWrapper";
import { RightSidebar } from "./RightSidebar";

export const QuizBuilder = () => {
  return (
    <DndContext>
      <main className="flex flex-col w-full mt-24">
        <div className="flex w-full min-h-screen p-10 justify-around bg-accent bg-[url(/paper.svg)]">
          <LeftSidebar />
          <Canvas />
          <RightSidebar />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  );
};
