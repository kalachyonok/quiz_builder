import { Quizes } from "@/constants/quizes";
import { transformDateFromISO } from "@/utils/transformDate";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import Link from "next/link";

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
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      console.log(row.original);
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              ...
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href={`/quiz/${row.original.id}`}>View</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/quiz/edit/${row.original.id}`}>Edit</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
