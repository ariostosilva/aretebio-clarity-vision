import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Activity, TrendingUp, FileText, MessageSquare, Download, AlertTriangle } from "lucide-react";
import { useState } from "react";

const Patients = () => {
  const [selectedLab, setSelectedLab] = useState("m-spike");
  const [selectedEvent, setSelectedEvent] = useState("diagnosis");

  // Placeholder chart data
  const timelineData = [
    { month: "Jan", value: 2.3, event: null },
    { month: "Feb", value: 2.1, event: null },
    { month: "Mar", value: 1.9, event: "treatment-start" },
    { month: "Apr", value: 1.5, event: null },
    { month: "May", value: 1.2, event: null },
    { month: "Jun", value: 1.0, event: null },
    { month: "Jul", value: 1.3, event: "treatment-change" },
    { month: "Aug", value: 1.6, event: null },
  ];

  const medications = [
    { name: "VRd (Velcade/Revlimid/Dex)", start: 2, end: 6, color: "bg-primary" },
    { name: "KRd (Kyprolis/Revlimid/Dex)", start: 6, end: 8, color: "bg-secondary" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-primary animate-fade-in">
              Your Journey, Visualized
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed mb-8 animate-fade-in-up">
              Understand where you are, what matters now, and what might come next.
            </p>
            <Button size="lg" className="animate-fade-in">
              Open Timeline Viewer
            </Button>
          </div>
        </div>
      </section>

      {/* Tabbed Interface */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Desktop Tabs */}
            <Tabs defaultValue="timeline" className="hidden md:block">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="timeline" className="transition-all">
                  <Activity className="w-4 h-4 mr-2" />
                  Timeline
                </TabsTrigger>
                <TabsTrigger value="labs" className="transition-all">
                  <FileText className="w-4 h-4 mr-2" />
                  Labs
                </TabsTrigger>
                <TabsTrigger value="treatments" className="transition-all">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Treatments
                </TabsTrigger>
                <TabsTrigger value="echo" className="transition-all">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Echo Advisor
                </TabsTrigger>
              </TabsList>

              {/* Timeline Tab */}
              <TabsContent value="timeline" className="space-y-6">
                <Card className="border-none shadow-elegant">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                      <CardTitle className="text-2xl">Serum E/P M-Spike Over Time</CardTitle>
                      <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
                        <Select value={selectedLab} onValueChange={setSelectedLab}>
                          <SelectTrigger className="w-full md:w-[200px]">
                            <SelectValue placeholder="Select a lab" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="m-spike">M-Spike</SelectItem>
                            <SelectItem value="light-chain">Light Chain</SelectItem>
                            <SelectItem value="hemoglobin">Hemoglobin</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select value={selectedEvent} onValueChange={setSelectedEvent}>
                          <SelectTrigger className="w-full md:w-[200px]">
                            <SelectValue placeholder="Select event" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="diagnosis">Diagnosis</SelectItem>
                            <SelectItem value="treatment-start">Treatment Start</SelectItem>
                            <SelectItem value="treatment-change">Treatment Change</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Chart Visualization */}
                    <div className="relative h-64 border rounded-lg p-4 bg-background/50">
                      <div className="flex items-end justify-between h-full gap-2">
                        {timelineData.map((data, idx) => (
                          <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                            {data.event && (
                              <div className="h-full border-l-2 border-dashed border-accent absolute" 
                                   style={{ left: `${(idx / timelineData.length) * 100}%` }} />
                            )}
                            <div 
                              className="w-full bg-primary rounded-t transition-all hover:bg-primary/80"
                              style={{ height: `${(data.value / 2.5) * 100}%` }}
                            />
                            <span className="text-xs text-muted-foreground">{data.month}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Medication Timeline */}
                    <div className="mt-8">
                      <h4 className="font-semibold mb-4">Medication Timeline</h4>
                      <div className="space-y-3">
                        {medications.map((med, idx) => (
                          <div key={idx} className="group">
                            <div className="flex items-center gap-2 mb-1">
                              <div className={`w-3 h-3 rounded-full ${med.color}`} />
                              <span className="text-sm font-medium">{med.name}</span>
                            </div>
                            <div className="relative h-8 bg-muted rounded">
                              <div 
                                className={`absolute h-full ${med.color} rounded transition-all group-hover:opacity-80 cursor-pointer`}
                                style={{ 
                                  left: `${(med.start / 8) * 100}%`, 
                                  width: `${((med.end - med.start) / 8) * 100}%` 
                                }}
                                title={`Start: Month ${med.start}, End: Month ${med.end}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Labs Tab */}
              <TabsContent value="labs" className="space-y-6">
                <Card className="border-none shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-2xl">Laboratory Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card>
                          <CardContent className="pt-6">
                            <div className="text-sm text-muted-foreground">M-Spike</div>
                            <div className="text-2xl font-bold text-primary">1.6 g/dL</div>
                            <div className="text-xs text-muted-foreground mt-1">Aug 2024</div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="pt-6">
                            <div className="text-sm text-muted-foreground">Free Light Chain</div>
                            <div className="text-2xl font-bold text-primary">24.5 mg/L</div>
                            <div className="text-xs text-muted-foreground mt-1">Aug 2024</div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="pt-6">
                            <div className="text-sm text-muted-foreground">Hemoglobin</div>
                            <div className="text-2xl font-bold text-primary">11.2 g/dL</div>
                            <div className="text-xs text-muted-foreground mt-1">Aug 2024</div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Genomics Summary */}
                      <Card className="bg-accent/5 border-accent/20">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <FileText className="w-5 h-5" />
                            Genomics Summary
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <Badge variant="outline" className="mb-2">Key Variant</Badge>
                            <div className="font-semibold">KRAS G12D</div>
                            <div className="text-sm text-muted-foreground mt-1">
                              Clinical relevance: Targetable trial available
                            </div>
                          </div>
                          <Button variant="outline" className="w-full">
                            <Download className="w-4 h-4 mr-2" />
                            Download Full Report (PDF)
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Treatments Tab */}
              <TabsContent value="treatments" className="space-y-6">
                <Card className="border-none shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-2xl">Treatment History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="font-semibold">VRd (Velcade/Revlimid/Dexamethasone)</div>
                              <div className="text-sm text-muted-foreground mt-1">Mar 2024 - Jun 2024</div>
                              <div className="text-sm mt-2">Response: Partial Response (PR)</div>
                            </div>
                            <Badge>Completed</Badge>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="font-semibold">KRd (Kyprolis/Revlimid/Dexamethasone)</div>
                              <div className="text-sm text-muted-foreground mt-1">Jul 2024 - Present</div>
                              <div className="text-sm mt-2">Response: Ongoing evaluation</div>
                            </div>
                            <Badge variant="secondary">Active</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Echo Advisor Tab */}
              <TabsContent value="echo" className="space-y-6">
                <Card className="border-none shadow-elegant border-l-4 border-l-accent">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-accent" />
                      <CardTitle className="text-2xl">EMMA Forecast</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-lg font-semibold text-accent">
                      Relapse risk rising within 3-6 months
                    </div>
                    <p className="text-foreground/70 leading-relaxed">
                      Based on your labs and treatments so far, our AI model detects an upward trend in 
                      disease markers. Your M-spike has increased from 1.0 to 1.6 g/dL over the past two months, 
                      and your current treatment response appears to be plateauing. This suggests your care team 
                      may want to consider adjusting therapy or exploring clinical trial options.
                    </p>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button className="w-full">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Ask Echo a Question
                        </Button>
                      </SheetTrigger>
                      <SheetContent className="w-full sm:max-w-xl">
                        <SheetHeader>
                          <SheetTitle>Echo Cancer Advisor</SheetTitle>
                          <SheetDescription>
                            Ask questions about your treatment journey, lab results, or prognosis.
                          </SheetDescription>
                        </SheetHeader>
                        <div className="mt-6 space-y-4">
                          <div className="bg-muted p-4 rounded-lg">
                            <p className="text-sm">
                              Example questions:<br/>
                              • What does my rising M-spike mean?<br/>
                              • Are there clinical trials I should consider?<br/>
                              • What are my treatment options if this regimen stops working?
                            </p>
                          </div>
                          <div className="space-y-2">
                            <textarea 
                              className="w-full min-h-[120px] p-3 border rounded-md"
                              placeholder="Type your question here..."
                            />
                            <Button className="w-full">Send Question</Button>
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Mobile Accordion */}
            <Accordion type="single" collapsible className="md:hidden space-y-4">
              <AccordionItem value="timeline" className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    <span>Timeline</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="space-y-4">
                    <Select value={selectedLab} onValueChange={setSelectedLab}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a lab" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="m-spike">M-Spike</SelectItem>
                        <SelectItem value="light-chain">Light Chain</SelectItem>
                        <SelectItem value="hemoglobin">Hemoglobin</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="relative h-48 border rounded-lg p-4 bg-background/50">
                      <div className="flex items-end justify-between h-full gap-1">
                        {timelineData.map((data, idx) => (
                          <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                            <div 
                              className="w-full bg-primary rounded-t"
                              style={{ height: `${(data.value / 2.5) * 100}%` }}
                            />
                            <span className="text-xs text-muted-foreground">{data.month}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="labs" className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Labs</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="space-y-3">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-sm text-muted-foreground">M-Spike</div>
                        <div className="text-2xl font-bold text-primary">1.6 g/dL</div>
                      </CardContent>
                    </Card>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="treatments" className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>Treatments</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="font-semibold">VRd</div>
                      <div className="text-sm text-muted-foreground">Mar 2024 - Jun 2024</div>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="echo" className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Echo Advisor</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="space-y-4">
                    <div className="text-lg font-semibold text-accent">
                      Relapse risk rising within 3-6 months
                    </div>
                    <Button className="w-full">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Ask Echo a Question
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer with Badge */}
      <div className="bg-background border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-6xl mx-auto flex justify-center md:justify-end">
            <Badge variant="outline" className="text-sm">
              Powered by Echo Cancer Advisor
            </Badge>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Patients;
