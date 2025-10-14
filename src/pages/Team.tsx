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
          <div className="max-w-6xl mx-auto space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-none shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-heading font-semibold mb-2 text-primary">
                    Dr. Ariosto Silva, PhD
                  </h2>
                  <p className="text-sm text-secondary font-medium mb-4">
                    Co-Founder | Systems Biology & AI
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    Cancer systems biologist with expertise in multi-omic integration, evolutionary modeling, and narrative frameworks for therapy resistance. Creator of EMMA and the Echo suite.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-heading font-semibold mb-2 text-primary">
                    Dr. Kenneth Shain, MD, PhD
                  </h2>
                  <p className="text-sm text-secondary font-medium mb-4">
                    Co-Founder | Translational Oncology
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    Clinician-scientist focused on multiple myeloma biology and real-world application of ex vivo and omics-derived models. Leads translational efforts connecting patients to predictive tools.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-heading font-semibold mb-2 text-primary">
                    Dr. Rafael Canevarolo, PhD
                  </h2>
                  <p className="text-sm text-secondary font-medium mb-4">
                    Experimental Biology & Assay Systems
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    Developer of the EMMA functional assay and downstream pipelines for molecular pathway mapping. Leads experimental protocols and live tissue processing.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-heading font-semibold mb-2 text-primary">
                    Dr. Praneeth Sudalagunta, PhD
                  </h2>
                  <p className="text-sm text-secondary font-medium mb-4">
                    AI, Machine Learning, and Control Theory
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    Specialist in dynamic systems modeling, transcriptomic clustering, and therapy response prediction. Leads machine learning development and integration of AI agents.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-heading font-semibold mb-2 text-primary">
                    Dr. Maria Meads, PhD
                  </h2>
                  <p className="text-sm text-secondary font-medium mb-4">
                    Functional Biology and Ex Vivo Models
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    Expert in tumor microenvironment and patient-derived culture systems. Supports ex vivo fidelity and viability tracking.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-none shadow-soft mt-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-semibold mb-6 text-primary">
                  Clinical & Scientific Collaborators
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-foreground/70">
                  <div>
                    <p className="font-medium text-primary">Dr. Rachid Baz</p>
                    <p className="text-sm">Clinical Trials (Myeloma)</p>
                  </div>
                  <div>
                    <p className="font-medium text-primary">Dr. Jason Brayer</p>
                    <p className="text-sm">Immunotherapy and Trial Integration</p>
                  </div>
                  <div>
                    <p className="font-medium text-primary">Dr. Bijal Shah</p>
                    <p className="text-sm">Hematologic Malignancies</p>
                  </div>
                  <div>
                    <p className="font-medium text-primary">Dr. Mehdi Damaghi</p>
                    <p className="text-sm">Metabolism and TME Dynamics</p>
                  </div>
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

export default Team;
