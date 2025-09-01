"use client";

import { Quizes } from "@/constants/quizes";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Quizes>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "published",
    header: () => <div className="text-center">Published</div>,
    cell: ({ row }) => {
      const isPublished = row.getValue("published");
      const formatted = isPublished ? "✔️" : "❌";

      return <div className="text-center">{formatted}</div>;
    },
  },
  {
    accessorKey: "tags",
    header: "Tags",
  },
  {
    accessorKey: "createdAt",
    header: "Created at",
  },
  {
    accessorKey: "updatedAt",
    header: "Updated at",
  },
];
