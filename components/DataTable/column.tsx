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
    header: "Published",
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
