import { transformDateFromISO } from "@/utils/transformDate";
import { ColumnDef } from "@tanstack/react-table";
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
import { Quizzes } from "@/constants/quizzes";
import { useQuizContext } from "@/hooks/useQuizContext";

export const columns: ColumnDef<Quizzes>[] = [
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
      const ActionsCell = () => {
        const { removeQuiz } = useQuizContext();

        const handleDelete = () => {
          removeQuiz(row.original.id);
        };

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
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href={`/quiz/${row.original.id}`}>View</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href={`/quiz/edit/${row.original.id}`}>Edit</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <span
                  className="text-red-600 hover:text-red-800"
                  onClick={handleDelete}
                >
                  Delete
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      };

      return <ActionsCell />;
    },
  },
];
