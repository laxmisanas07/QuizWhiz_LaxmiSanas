import Link from 'next/link';
import { Suspense } from 'react';
import { Award, Home, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { quizData } from '@/lib/quiz-data';

type ResultsPageProps = {
  searchParams: {
    score?: string;
    total?: string;
  };
};

function ResultsContent({ searchParams }: ResultsPageProps) {
    const score = Number(searchParams.score) || 0;
    const total = Number(searchParams.total) || quizData.length;
    const percentage = total > 0 ? (score / total) * 100 : 0;

    let message = "Keep practicing!";
    if (percentage === 100) {
        message = "Perfect score! You're a true QuizWhiz!";
    } else if (percentage >= 75) {
        message = "Excellent work! You really know your stuff.";
    } else if (percentage >= 50) {
        message = "Good job! You're on your way to becoming an expert.";
    }

    return (
        <Card className="w-full max-w-lg shadow-2xl">
          <CardHeader className="items-center text-center p-6">
            <Award className="h-16 w-16 text-accent mb-4" />
            <CardTitle className="font-headline text-3xl font-bold">Quiz Complete!</CardTitle>
            <CardDescription className="text-lg">{message}</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-muted-foreground">Your Score</p>
              <p className="text-6xl font-bold text-primary">
                {score}<span className="text-3xl text-muted-foreground">/{total}</span>
              </p>
            </div>
            <Progress value={percentage} className="mt-6 h-3" />
            <p className="text-center text-sm text-muted-foreground mt-2">{Math.round(percentage)}% Correct</p>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-4 p-6">
            <Button asChild variant="outline" className="w-full">
              <Link href="/quiz"><RefreshCw className="mr-2 h-4 w-4" /> Play Again</Link>
            </Button>
            <Button asChild className="w-full" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
              <Link href="/"><Home className="mr-2 h-4 w-4" /> Back to Home</Link>
            </Button>
          </CardFooter>
        </Card>
    )
}

export default function ResultsPage({ searchParams }: ResultsPageProps) {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4">
      <Suspense fallback={<div>Loading results...</div>}>
        <ResultsContent searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
