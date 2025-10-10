import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-primary animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed animate-fade-in-up">
              Let's discuss how we can help transform cancer care together.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-elegant">
              <CardContent className="p-8 md:p-12">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium mb-2 text-foreground">
                      Organization
                    </label>
                    <Input id="organization" placeholder="Your organization" />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium mb-2 text-foreground">
                      I'm interested in
                    </label>
                    <select 
                      id="interest" 
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option>Patient Services</option>
                      <option>Physician Tools</option>
                      <option>Pharma Partnership</option>
                      <option>Research Collaboration</option>
                      <option>Demo Request</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your needs..."
                      rows={6}
                    />
                  </div>

                  <Button size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-border text-center">
                  <p className="text-sm text-foreground/60 mb-2">Or email us directly at</p>
                  <a 
                    href="mailto:contact@aretebio.life"
                    className="inline-flex items-center text-primary hover:text-secondary transition-colors font-medium"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    contact@aretebio.life
                  </a>
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

export default Contact;
