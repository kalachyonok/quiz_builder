"use client";

import { useDroppable } from "@dnd-kit/core";

export const Canvas = () => {
  const dropable = useDroppable({
    id: "drop-area",
    data: {
      isdropArea: true,
    },
  });

  return (
    <div className="bg-background max-w-[920px] min-h-[750px] w-full border border-gray-500 rounded-xl flex flex-col items-center justify-start overflow-y-auto p-6">
      <p className="text-3xl text-muted-foreground items-center font-bold">
        Drop here
      </p>
    </div>
  );
};
