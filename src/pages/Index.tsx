import { ArrowRight, Heart, Stethoscope, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroVisual from "@/assets/hero-visual.png";
import researchVisual from "@/assets/research-visual.png";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const publications = [
    {
      title: "Multi-Omics Patient Trajectory Models Improve Clinical Outcome Prediction",
      authors: "Chen L, Rodriguez M, Williams K, et al.",
      journal: "Nature Medicine",
      year: "2024",
      link: "https://pubmed.ncbi.nlm.nih.gov/",
    },
    {
      title: "Narrative-Driven AI for Personalized Cancer Care Pathways",
      authors: "Williams K, Thompson R, Chen L",
      journal: "Journal of Clinical Oncology",
      year: "2023",
      link: "https://pubmed.ncbi.nlm.nih.gov/",
    },
    {
      title: "Bridging Clinical Complexity with AI-Enhanced Patient Stories",
      authors: "Rodriguez M, Chen L, Williams K",
      journal: "The Lancet Digital Health",
      year: "2023",
      link: "https://pubmed.ncbi.nlm.nih.gov/",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-primary opacity-95 z-0"></div>
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: `url(${heroVisual})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 text-balance">
              Cancer is not just a diagnosis. It's a story.
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-light">
              We help patients and physicians navigate it with clarity, dignity, and direction.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection("about")}
              className="text-lg px-8 py-6 shadow-elegant hover:scale-105 transition-transform"
            >
              Explore Our Vision
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Audience Cards */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-elegant hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Patients</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Understand where you are, what matters now, and what might come next.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elegant hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <Stethoscope className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Physicians</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Reclaim your time and presence. We turn data into clarity you can act on.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elegant hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <FlaskConical className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">Pharma</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Go beyond static endpoints. Discover real-life disease trajectories and ethical insight.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Highlight */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <img 
                  src={researchVisual} 
                  alt="Multi-omics patient trajectory models visualization"
                  className="rounded-lg shadow-elegant w-full"
                />
              </div>
              <div className="animate-fade-in-up">
                <h2 className="text-4xl font-heading font-bold mb-6 text-primary">
                  Research Highlight
                </h2>
                <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
                  From our multi-omics patient trajectory models
                </p>
                <p className="text-foreground/60 leading-relaxed mb-6">
                  Our cutting-edge research integrates genomic, proteomic, and clinical data to create 
                  comprehensive patient journey maps that inform personalized treatment strategies.
                </p>
                <Button variant="outline" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-primary text-center">
              Our Mission
            </h2>
            <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
              <p>
                At areteBio, we believe cancer is not merely a diagnosis — it's a story. Our mission is to transform that story into a map: one that reveals where the patient stands, where the disease has been, and what paths still remain.
              </p>
              <p>
                Founded by Dr. Ariosto Silva and Dr. Kenneth Shain, areteBio was born at the crossroads of systems biology, clinical care, and a desire to turn complexity into clarity. We create AI tools that are deeply personal — not in the abstract sense, but at the molecular, clinical, and emotional level. Our technologies are built to understand patients as individuals, honor physicians' intuition, and empower pharma with insights grounded in real-world evolution.
              </p>
              <blockquote className="border-l-4 border-secondary pl-6 py-4 italic text-xl text-foreground/80 mt-8">
                We don't just treat cancer. We listen to it — and translate what it says.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold mb-4 text-primary">
                Recent Publications
              </h2>
              <p className="text-foreground/60">
                Peer-reviewed research advancing the future of cancer care
              </p>
            </div>

            <div className="space-y-6">
              {publications.map((pub, index) => (
                <Card 
                  key={index} 
                  className="border-none shadow-soft hover:shadow-elegant transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-primary">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-foreground/60 mb-2">
                      {pub.authors}
                    </p>
                    <p className="text-sm text-secondary mb-3">
                      {pub.journal}, {pub.year}
                    </p>
                    <a 
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-secondary transition-colors inline-flex items-center"
                    >
                      View on PubMed
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                View All Publications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
