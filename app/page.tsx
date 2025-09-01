import { Container } from "@/components/container";
import { QUIZES } from "@/constants/quizes";
import { columns } from "@/components/DataTable/column";
import { DataTable } from "@/components/DataTable/DataTable";

export default function HomePage() {
  return (
    <Container>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={QUIZES} />
      </div>
    </Container>
  );
}
