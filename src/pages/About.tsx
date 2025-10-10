import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-primary animate-fade-in">
              About areteBio
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed animate-fade-in-up">
              We're transforming how patients, physicians, and pharmaceutical companies understand cancer.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-none shadow-soft">
              <CardContent className="p-8">
                <h2 className="text-3xl font-heading font-semibold mb-4 text-primary">Our Story</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  We began in silence — taught not to speak the word 'cancer.' This silence, while protective, 
                  often left patients and families navigating uncertainty without clarity or support.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  At areteBio, we transform that silence into insight. Through personalized, narrative-driven 
                  AI tools, we bridge the gap between complex clinical data and meaningful understanding.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft">
              <CardContent className="p-8">
                <h2 className="text-3xl font-heading font-semibold mb-4 text-primary">Our Approach</h2>
                <p className="text-foreground/70 leading-relaxed">
                  We combine cutting-edge multi-omics research with compassionate storytelling. Every data 
                  point represents a human journey, and we ensure that technology serves dignity alongside 
                  discovery.
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

export default About;
