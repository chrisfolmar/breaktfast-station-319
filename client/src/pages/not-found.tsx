import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Train, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center pt-16">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6 text-center">
          <Train className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-2xl font-serif font-bold mb-2">Wrong Platform</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Looks like this train has left the station. The page you're looking for doesn't exist.
          </p>
          <Link href="/">
            <Button data-testid="button-go-home">
              <ArrowLeft className="mr-1" />
              Back to Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
