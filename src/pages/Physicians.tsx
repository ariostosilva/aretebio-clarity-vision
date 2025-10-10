import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Brain, Target } from "lucide-react";

const Physicians = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-primary animate-fade-in">
              For Physicians
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed animate-fade-in-up">
              Reclaim your time and presence. We turn data into clarity you can act on.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-elegant">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Save Time</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Automated synthesis of patient data reduces administrative burden and information overload.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elegant">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Brain className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Clinical Insight</h3>
                <p className="text-foreground/70 leading-relaxed">
                  AI-powered tools provide evidence-based recommendations tailored to each patient's unique journey.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elegant">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Better Outcomes</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Enhanced communication and shared decision-making improve patient satisfaction and outcomes.
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

export default Physicians;
