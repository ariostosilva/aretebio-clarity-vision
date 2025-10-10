import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Multi-Omics Patient Trajectory Models Improve Clinical Outcome Prediction",
      authors: "Chen L, Rodriguez M, Williams K, Thompson R, Davis A, Martinez J",
      journal: "Nature Medicine",
      year: "2024",
      volume: "30",
      pages: "245-258",
      doi: "10.1038/s41591-024-xxxxx",
      link: "https://pubmed.ncbi.nlm.nih.gov/",
      abstract: "Integration of genomic, proteomic, and clinical data enables accurate prediction of patient outcomes in metastatic cancer.",
    },
    {
      title: "Narrative-Driven AI for Personalized Cancer Care Pathways",
      authors: "Williams K, Thompson R, Chen L",
      journal: "Journal of Clinical Oncology",
      year: "2023",
      volume: "41",
      pages: "1823-1835",
      doi: "10.1200/JCO.23.xxxxx",
      link: "https://pubmed.ncbi.nlm.nih.gov/",
      abstract: "A novel approach combining artificial intelligence with narrative medicine to create personalized treatment pathways.",
    },
    {
      title: "Bridging Clinical Complexity with AI-Enhanced Patient Stories",
      authors: "Rodriguez M, Chen L, Williams K",
      journal: "The Lancet Digital Health",
      year: "2023",
      volume: "5",
      pages: "e512-e520",
      doi: "10.1016/S2589-7500(23)xxxxx",
      link: "https://pubmed.ncbi.nlm.nih.gov/",
      abstract: "Demonstrating how AI-enhanced narrative approaches improve patient-physician communication and treatment adherence.",
    },
    {
      title: "Ethical Frameworks for AI in Cancer Care: Balancing Innovation and Dignity",
      authors: "Thompson R, Williams K, Rodriguez M, Chen L",
      journal: "JAMA Oncology",
      year: "2023",
      volume: "9",
      pages: "897-904",
      doi: "10.1001/jamaoncol.2023.xxxxx",
      link: "https://pubmed.ncbi.nlm.nih.gov/",
      abstract: "Proposing ethical guidelines for implementing AI technologies in oncology while preserving patient dignity.",
    },
    {
      title: "Real-World Evidence from Patient Trajectory Analysis in Oncology Drug Development",
      authors: "Davis A, Martinez J, Chen L, Williams K",
      journal: "Nature Reviews Drug Discovery",
      year: "2022",
      volume: "21",
      pages: "678-692",
      doi: "10.1038/s41573-022-xxxxx",
      link: "https://pubmed.ncbi.nlm.nih.gov/",
      abstract: "Exploring how patient trajectory data can inform drug development and clinical trial design.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-primary animate-fade-in">
              Publications
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed animate-fade-in-up">
              Peer-reviewed research advancing the future of cancer care.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-6">
            {publications.map((pub, index) => (
              <Card 
                key={index} 
                className="border-none shadow-soft hover:shadow-elegant transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-8">
                  <h2 className="text-2xl font-heading font-semibold mb-3 text-primary">
                    {pub.title}
                  </h2>
                  <p className="text-sm text-foreground/60 mb-2">
                    {pub.authors}
                  </p>
                  <p className="text-sm text-secondary mb-3">
                    <span className="font-medium">{pub.journal}</span>, {pub.year}; {pub.volume}: {pub.pages}
                  </p>
                  <p className="text-foreground/70 leading-relaxed mb-4 italic">
                    {pub.abstract}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-secondary transition-colors inline-flex items-center"
                    >
                      View on PubMed
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                    <span className="text-sm text-foreground/40">DOI: {pub.doi}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Publications;
