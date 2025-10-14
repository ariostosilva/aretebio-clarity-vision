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
          <div className="max-w-6xl mx-auto space-y-12">
            
            <Card className="border-none shadow-elegant">
              <CardContent className="p-8">
                <h2 className="text-3xl font-heading font-semibold mb-6 text-primary">
                  The Live Multi-Omics Data Hub for Myeloma
                </h2>
                <div className="space-y-4 text-foreground/70 leading-relaxed">
                  <p>
                    We maintain one of the most extensive live-linked datasets in multiple myeloma, connecting thousands of patient samples across platforms:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>844 RNA-seq</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>870 WES</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>537 primary EMMA profiles (ex vivo drug testing)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Matched flow cytometry and longitudinal clinical records via Total Cancer Care (TCC / ORIEN)</span>
                    </li>
                  </ul>
                  <p>
                    This platform allows real-time querying of patient-specific mutations, expression profiles, immune phenotypes, and ex vivo responses — tightly coupled to treatment timelines. It forms the foundation for our AI models and narrative forecasting engines.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elegant">
              <CardContent className="p-8">
                <h2 className="text-3xl font-heading font-semibold mb-6 text-primary">
                  Disease Evolution and Therapy Resistance Modeling
                </h2>
                <div className="space-y-4 text-foreground/70 leading-relaxed">
                  <p>
                    We are reconstructing the story of how multiple myeloma progresses — not just through genomic snapshots, but by modeling transitions between disease states:
                  </p>
                  <p className="font-medium text-secondary">
                    MGUS → Smoldering → Newly Diagnosed → Early Relapse → Refractory MM
                  </p>
                  <p>
                    Using transcriptomic topologies (co-expression clusters), mutational dynamics, and resistance phenotyping, we identify "narrative branches" where therapeutic decisions shape evolutionary outcomes. These patterns are then abstracted into probabilistic models that help forecast next therapeutic failure modes — or windows of sensitivity.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elegant">
              <CardContent className="p-8">
                <h2 className="text-3xl font-heading font-semibold mb-6 text-primary">
                  EMMA: Ex Vivo Malignancy Modeling Assay
                </h2>
                <div className="space-y-4 text-foreground/70 leading-relaxed">
                  <p>
                    EMMA is our functional precision medicine assay — a live-patient, ex vivo system for drug response profiling. We expose primary MM cells to dozens of agents (FDA-approved, experimental, or combination), track viability curves, and relate them to transcriptomic context and resistance history.
                  </p>
                  <p>
                    EMMA doesn't just find the best drug — it helps answer <em>why</em> a patient responds or doesn't. It's used both for clinical decision support and as a real-world assay in trials.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elegant">
              <CardContent className="p-8">
                <h2 className="text-3xl font-heading font-semibold mb-6 text-primary">
                  Response-Adaptive Daratumumab Clinical Trial (NCT04151667)
                </h2>
                <div className="space-y-4 text-foreground/70 leading-relaxed">
                  <p>
                    In partnership with Moffitt Cancer Center, we are deploying EMMA in an open-label, response-guided therapy trial for elderly patients with newly diagnosed MM. Patients begin daratumumab-based therapy, and at key time points, EMMA is used to evaluate adaptive sensitivity shifts. This real-time functional monitoring allows therapeutic tailoring based on resistance emergence, rather than waiting for full relapse.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elegant">
              <CardContent className="p-8">
                <h2 className="text-3xl font-heading font-semibold mb-6 text-primary">
                  Upcoming Industry Collaboration
                </h2>
                <div className="space-y-4 text-foreground/70 leading-relaxed">
                  <p>
                    We are preparing an industry-facing version of our AI platforms to support:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Biomarker discovery</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Synthetic responder modeling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Resistance pathway identification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Rational combination therapy design</span>
                    </li>
                  </ul>
                  <p className="mt-4">
                    This partnership will integrate EMMA, transcriptomics, and patient-clinical timelines into pharma pipelines.
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Research;
