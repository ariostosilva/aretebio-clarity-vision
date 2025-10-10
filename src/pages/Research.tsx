import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import researchVisual from "@/assets/research-visual.png";

const Research = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-primary animate-fade-in">
              Research
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed animate-fade-in-up">
              Advancing cancer care through multi-omics patient trajectory models.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-none shadow-elegant mb-12">
              <CardContent className="p-0">
                <img 
                  src={researchVisual} 
                  alt="Multi-omics research visualization"
                  className="w-full rounded-t-lg"
                />
                <div className="p-8">
                  <h2 className="text-3xl font-heading font-semibold mb-4 text-primary">
                    Multi-Omics Patient Trajectory Models
                  </h2>
                  <p className="text-foreground/70 leading-relaxed mb-4">
                    Our research integrates genomic, proteomic, metabolomic, and clinical data to create 
                    comprehensive models of patient disease trajectories. These models provide unprecedented 
                    insight into cancer progression and treatment response.
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    By combining cutting-edge bioinformatics with narrative AI, we transform complex 
                    molecular data into actionable clinical insights that benefit patients, physicians, 
                    and pharmaceutical partners.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-none shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">
                    Research Areas
                  </h3>
                  <ul className="space-y-3 text-foreground/70">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Precision oncology and biomarker discovery</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>AI-driven clinical decision support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Patient trajectory prediction models</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Narrative medicine and patient engagement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">
                    Collaborations
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-4">
                    We partner with leading academic institutions, cancer centers, and pharmaceutical 
                    companies to advance our research and translate findings into clinical practice.
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    Interested in collaboration? Contact our research team to explore opportunities.
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

export default Research;
