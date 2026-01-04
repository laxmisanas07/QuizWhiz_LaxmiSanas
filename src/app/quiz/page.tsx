import QuizClient from '@/components/quiz/QuizClient';
import { quizData } from '@/lib/quiz-data';

export default function QuizPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4">
      <QuizClient quizData={quizData} />
    </main>
  );
}
