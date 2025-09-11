import { Container } from "@/components/Container";
import { QuizBuilder } from "@/components/QuizBuilder/QuizBuilder";
import { Header } from "@/components/Header";

export default function BuilderPage() {
  return (
    <Container>
      <Header />
      <QuizBuilder />
    </Container>
  );
}
