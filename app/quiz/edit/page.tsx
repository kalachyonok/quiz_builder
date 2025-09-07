import { Container } from "@/components/container";
import { QuizBuilder } from "@/components/QuizBuilder/QuizBuilder";
import { Header } from "@/components/header";

export default function BuilderPage() {
  return (
    <Container>
      <Header />
      <QuizBuilder />
    </Container>
  );
}
