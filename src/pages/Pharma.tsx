import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Shield } from "lucide-react";

const Pharma = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-primary animate-fade-in">
              For Pharma
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed animate-fade-in-up">
              Go beyond static endpoints. Discover real-life disease trajectories and ethical insight.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-elegant">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Real-World Evidence</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Access comprehensive patient trajectory data to understand treatment patterns and outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elegant">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Patient-Centered</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Our narrative approach captures the full patient experience beyond clinical endpoints.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elegant">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Ethical Framework</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Built on principles of dignity and transparency, ensuring responsible data use.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pharma;
