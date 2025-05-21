import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionTitle } from '@/components/section-title';
import { CheckCircle2, MessageSquare, Users, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section aria-labelledby="hero-title" data-testid="hero-section" className="text-center py-12 bg-secondary/50 rounded-lg shadow-sm">
        <SectionTitle id="hero-title" as="h1" className="border-none text-4xl font-bold tracking-tight text-primary" data-testid="home-hero-title">
          Welcome to NextQA
        </SectionTitle>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="home-hero-subtitle">
          Your personal playground for mastering web automation. Explore various UI elements and practice your testing skills.
        </p>
        <Button size="lg" className="mt-8" data-testid="hero-cta-button">Get Started</Button>
      </section>

      <section aria-labelledby="text-elements-title" data-testid="text-elements-section">
        <SectionTitle id="text-elements-title" data-testid="section-title-text">Text Elements</SectionTitle>
        <div className="space-y-4 p-6 bg-card rounded-lg shadow">
          <h1 className="text-4xl font-bold" data-testid="text-h1">Heading 1</h1>
          <h2 className="text-3xl font-semibold" data-testid="text-h2">Heading 2</h2>
          <h3 className="text-2xl font-medium" data-testid="text-h3">Heading 3</h3>
          <p data-testid="text-paragraph">
            This is a standard paragraph. It contains a <strong data-testid="text-strong">strong</strong> piece of text,
            an <em data-testid="text-emphasis">emphasized</em> part, and a <a href="#" className="text-primary hover:underline" data-testid="text-link-inline">link</a>.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground" data-testid="text-blockquote">
            This is a blockquote. It's often used to highlight a quotation.
          </blockquote>
          <ul className="list-disc pl-5 space-y-1" data-testid="text-ul">
            <li data-testid="text-ul-item1">Unordered List Item 1</li>
            <li data-testid="text-ul-item2">Unordered List Item 2</li>
          </ul>
          <ol className="list-decimal pl-5 space-y-1" data-testid="text-ol">
            <li data-testid="text-ol-item1">Ordered List Item 1</li>
            <li data-testid="text-ol-item2">Ordered List Item 2</li>
          </ol>
          <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto" data-testid="text-pre">
            <code>
{`function greet(name) {
  console.log(\`Hello, \${name}!\`);
}`}
            </code>
          </pre>
        </div>
      </section>

      <section aria-labelledby="buttons-title" data-testid="buttons-section">
        <SectionTitle id="buttons-title" data-testid="section-title-buttons">Buttons & Links</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-card rounded-lg shadow">
          <Button data-testid="button-primary">Primary Button</Button>
          <Button variant="secondary" data-testid="button-secondary">Secondary Button</Button>
          <Button variant="destructive" data-testid="button-destructive">Destructive Button</Button>
          <Button variant="outline" data-testid="button-outline">Outline Button</Button>
          <Button variant="ghost" data-testid="button-ghost">Ghost Button</Button>
          <Button variant="link" data-testid="button-link">Link Button</Button>
          <a href="#" className="text-primary hover:underline inline-block mt-2" data-testid="link-standalone">Standalone Link</a>
        </div>
      </section>

      <section aria-labelledby="cards-title" data-testid="cards-section">
        <SectionTitle id="cards-title" data-testid="section-title-cards">Cards</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Feature One", description: "Description for feature one.", icon: <CheckCircle2 className="h-8 w-8 text-primary" />, testid: "card-feature-1" },
            { title: "Service Two", description: "Details about service two.", icon: <MessageSquare className="h-8 w-8 text-primary" />, testid: "card-service-2" },
            { title: "Product Three", description: "Information on product three.", icon: <Zap className="h-8 w-8 text-primary" />, testid: "card-product-3" },
          ].map((card) => (
            <Card key={card.testid} data-testid={card.testid} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  {card.icon}
                  <CardTitle data-testid={`${card.testid}-title`}>{card.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription data-testid={`${card.testid}-description`}>{card.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" data-testid={`${card.testid}-button`}>Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="image-title" data-testid="image-section">
        <SectionTitle id="image-title" data-testid="section-title-image">Image Element</SectionTitle>
        <div className="p-6 bg-card rounded-lg shadow flex justify-center">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Placeholder image"
            width={600}
            height={400}
            className="rounded-md shadow-md"
            data-testid="image-placeholder"
            data-ai-hint="abstract technology"
          />
        </div>
      </section>
    </div>
  );
}
