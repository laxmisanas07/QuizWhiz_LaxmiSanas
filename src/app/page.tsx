import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BrainCircuit } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((image) => image.id === 'quiz-hero');

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4">
      <div className="flex flex-col items-center justify-center text-center">
        <Card className="w-full max-w-md overflow-hidden shadow-2xl">
          {heroImage && (
            <div className="relative h-48 w-full">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          )}
          <CardHeader className="p-6">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <BrainCircuit className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="font-headline text-4xl font-bold tracking-tighter text-foreground">
              QuizWhiz
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Test your knowledge and learn something new with our fun and engaging quizzes!
            </CardDescription>
          </CardHeader>
          <CardContent/>
          <CardFooter className="bg-muted/30 p-6">
            <Button asChild className="w-full font-bold" size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
              <Link href="/quiz">Start Quiz!</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
