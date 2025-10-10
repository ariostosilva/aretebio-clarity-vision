import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-primary animate-fade-in">
              Our Team
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed animate-fade-in-up">
              Scientists, clinicians, and engineers united by a shared mission.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-none shadow-soft">
              <CardContent className="p-8">
                <h2 className="text-3xl font-heading font-semibold mb-6 text-primary text-center">
                  Leadership
                </h2>
                <p className="text-foreground/70 leading-relaxed text-center mb-8">
                  Our multidisciplinary team brings together expertise in oncology, data science, 
                  artificial intelligence, and patient advocacy to create tools that truly serve 
                  the needs of patients and clinicians.
                </p>
                <p className="text-foreground/60 text-center italic">
                  Team profiles and bios coming soon.
                </p>
              </CardContent>
            </Card>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-soft">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-heading font-semibold mb-2 text-primary">Clinical</h3>
                  <p className="text-sm text-foreground/70">
                    Oncologists and researchers with deep expertise in cancer care
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-heading font-semibold mb-2 text-primary">Technical</h3>
                  <p className="text-sm text-foreground/70">
                    Data scientists and AI engineers building innovative solutions
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-heading font-semibold mb-2 text-primary">Advisory</h3>
                  <p className="text-sm text-foreground/70">
                    Patient advocates ensuring dignity remains central
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
