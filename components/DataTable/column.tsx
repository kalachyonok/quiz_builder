"use client";

import { Quizes } from "@/constants/quizes";
import { transformDateFromISO } from "@/utils/transformDate";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "../ui/badge";

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
    header: () => <div className="text-center">Tags</div>,
    cell: ({ row }) => {
      const tags = row.getValue("tags") as string[];
      const formattedTags = tags.map((tag) => {
        return (
          <Badge variant="default" key={tag} className="m-0.5 bg-blue-600">
            {tag}
          </Badge>
        );
      });

      return <div className="text-center gap-1">{formattedTags}</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="text-center">Created at</div>,
    cell: ({ row }) => {
      const createdDate = transformDateFromISO(row.getValue("createdAt"));

      return <div className="text-center">{createdDate}</div>;
    },
  },
  {
    accessorKey: "updatedAt",
    header: () => <div className="text-center">Updated at</div>,
    cell: ({ row }) => {
      const updatedDate = transformDateFromISO(row.getValue("updatedAt"));

      return <div className="text-center">{updatedDate}</div>;
    },
  },
];
