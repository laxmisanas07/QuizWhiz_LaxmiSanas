"use client";

import type { Question } from "@/lib/quiz-data";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

type QuizClientProps = {
  quizData: Question[];
};

export default function QuizClient({ quizData }: QuizClientProps) {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];
  const progressValue = ((currentQuestionIndex) / quizData.length) * 100;

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);
    if (answer === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      router.push(`/results?score=${score}&total=${quizData.length}`);
    }
  };

  return (
    <Card className="w-full max-w-2xl shadow-2xl">
      <CardHeader className="p-6">
        <div className="mb-4">
            <p className="text-sm text-muted-foreground">Question {currentQuestionIndex + 1} of {quizData.length}</p>
            <Progress value={progressValue} className="mt-2 h-2" />
        </div>
        <CardTitle className="font-headline text-2xl md:text-3xl">
          {currentQuestion.question}
        </CardTitle>
        <CardDescription>Select the correct option below.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 p-6">
        {currentQuestion.options.map((option) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = option === currentQuestion.correctAnswer;
          const variant = isAnswered
            ? isCorrect
              ? 'success'
              : isSelected
              ? 'destructive'
              : 'outline'
            : 'outline';
            
          const icon = isAnswered ? (isCorrect ? <CheckCircle2 /> : isSelected ? <XCircle /> : null) : null;

          return (
            <Button
              key={option}
              variant={variant}
              className={cn(
                "h-auto w-full justify-between p-4 text-left whitespace-normal",
                "transition-all duration-300",
                variant === 'success' && "border-green-500 bg-green-500/10 text-green-700 dark:text-green-400 hover:bg-green-500/20",
                variant === 'destructive' && "border-red-500 bg-red-500/10 text-red-700 dark:text-red-400 hover:bg-red-500/20"
              )}
              onClick={() => handleAnswerSelect(option)}
              disabled={isAnswered}
            >
              <span className="flex-1">{option}</span>
              {icon}
            </Button>
          );
        })}
      </CardContent>
      <CardFooter className="p-6">
        {isAnswered && (
          <Button onClick={handleNext} className="w-full ml-auto animate-fade-in" size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
            {currentQuestionIndex < quizData.length - 1 ? 'Next Question' : 'Finish Quiz'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
