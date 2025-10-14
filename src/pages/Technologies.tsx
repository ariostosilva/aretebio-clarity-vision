import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Layers, Activity, Brain, Database } from "lucide-react";

const Technologies = () => {
  const tools = [
    {
      name: "EMMA",
      subtitle: "Ex vivo Malignancy Modeling Assay",
      description: "Personalized drug sensitivity profiling platform using primary tumor samples tested across multiple agents. Integrated with omics and clinical data. Forms a functional \"fingerprint\" of resistance or response.",
      icon: Activity,
    },
    {
      name: "EchoLens",
      subtitle: "Narrative Forecasting Engine",
      description: "AI that reconstructs a patient's treatment timeline and molecular trajectory to forecast likely futures — identifying risk inflection points and therapeutic vulnerabilities.",
      icon: Brain,
    },
    {
      name: "EchoDaemon",
      subtitle: "Autonomous Contextual Timeline Agent",
      description: "Connects EHR, biopsy, omics, and EMMA data to build a semantic timeline. Provides context-aware summaries for physicians and researchers, including data gaps and causal links.",
      icon: Layers,
    },
    {
      name: "Anamnesis Engine",
      subtitle: "Evolutionary Therapy Interpreter",
      description: "Maps emerging patterns of cancer evolution onto ancient, reactivated programs (e.g., stemness, metabolic shifts, DNA repair pathways). Designed to frame resistance not as noise, but as biological memory.",
      icon: Cpu,
    },
    {
      name: "RAG-Query Assistant",
      subtitle: "Domain-specific Retrieval System",
      description: "Domain-specific retrieval-augmented generation system that accepts plain-language queries and retrieves relevant insights from patient timelines, omics records, trial registries, or literature.",
      icon: Database,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-primary animate-fade-in">
              Technologies
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed animate-fade-in-up">
              AI-powered tools that transform cancer data into personalized insights.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tools.map((tool, index) => (
                <Card 
                  key={index} 
                  className="border-none shadow-elegant hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <tool.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="text-2xl font-heading font-semibold mb-2 text-primary">
                      {tool.name}
                    </h2>
                    <p className="text-sm text-secondary font-medium mb-4">
                      {tool.subtitle}
                    </p>
                    <p className="text-foreground/70 leading-relaxed">
                      {tool.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Technologies;
