import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Lightbulb, Map } from "lucide-react";

const Patients = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-primary animate-fade-in">
              For Patients
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed animate-fade-in-up">
              Understanding where you are, what matters now, and what might come next.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-elegant">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Clarity</h3>
                <p className="text-foreground/70 leading-relaxed">
                  We translate complex medical information into clear, personalized insights you can understand.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elegant">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <Lightbulb className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Dignity</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Your story matters. Our tools honor your journey while providing actionable guidance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elegant">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Map className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Direction</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Navigate treatment options and decisions with confidence, backed by data and compassion.
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

export default Patients;
