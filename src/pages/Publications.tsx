import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";

const Publications = () => {
  const publications = [
    {
  title: "CK1δ and CK1ε Signaling Sustains Mitochondrial Metabolism and Cell Survival in Multiple Myeloma",
  authors: "Burger KL, Fernandez MR, Meads MB, Sudalagunta P, Oliveira PS, Canevarolo RR, Alugubelli RR, Tungsevik A, De Avila G, Silva M, Graeter AI, Dai HA, Vincelette ND, Prabhu A, Magaletti D, Yang CY, Li WM, Kulkarni A, Hampton O, Koomen JM, Roush WR, Monastyrskyi A, Berglund AE, Silva AS, Cleveland JL, Shain KH",
  journal: "Cancer Research",
  year: "2023",
  volume: "83(23)",
  pages: "3901–19",
  doi: "10.1158/0008-5472.CAN-22-2350",
  link: "https://pubmed.ncbi.nlm.nih.gov/WOS:001154743000001",
  abstract: "",
},
{
  title: "Genomic Classification and Individualized Prognosis in Multiple Myeloma",
  authors: "Maura F, Rajanna AR, Ziccheddu B, Poos AM, Derkach A, Maclachlan K, Durante M, Diamond B, Papadimitriou M, Davies F, Boyle EM, Walker B, Hultcrantz M, Silva A, Hampton O, Teer JK, Siegel EM, Bolli N, Jackson GH, Kaiser M, Pawlyn C, Cook G, Kazandjian D, Stein C, Chesi M, Bergsagel L, Mai EK, Goldschmidt H, Weisel KC, Fenk R, Raab MS, Van Rhee F, Usmani S, Shain KH, Weinhold N, Morgan G, Landgren O",
  journal: "Journal of Clinical Oncology",
  year: "2024",
  volume: "",
  pages: "",
  doi: "10.1200/JCO.23.01277",
  link: "https://pubmed.ncbi.nlm.nih.gov/38194610/",
  abstract: "",
},
{
  title: "The Bone Ecosystem Facilitates Multiple Myeloma Relapse and the Evolution of Heterogeneous Drug Resistant Disease",
  authors: "Bishop R, Miller A, Froid M, Nerlakanti N, Li T, Frieling J, Nasr M, Nyman K, Sudalagunta P, Canevarolo R, Silva AS, Shain K, Lynch C, Basanta D",
  journal: "Nature Communications",
  year: "2024",
  volume: "",
  pages: "",
  doi: "10.1038/s41467-024-46594-0",
  link: "https://doi.org/10.1038/s41467-024-46594-0",
  abstract: "",
},
{
  title: "Functional Transcriptomic Landscape Informs Novel Therapeutic Strategies in Multiple Myeloma",
  authors: "Sudalagunta P, Canevarolo R, Meads M, Silva M, Zhao X, Cubitt C, DeAvila G, Alugubelli R, Logothetis C, Tungesvik A, Zhang Q, Hampton O, Teer J, Welsh E, Yoder S, Shah B, Tao J, Hazlehurst L, Gatenby R, Sullivan D, Alsina M, Nishihori T, Brayer J, Cleveland J, Dalton W, Gillies R, DeCastro A, Domelen D, Chai Y, Walker C, Wang F, Landesman Y, Baz R, Silva AS*, Shain K*",
  journal: "Cancer Research",
  year: "2024",
  volume: "",
  pages: "",
  doi: "",
  link: "https://pubmed.ncbi.nlm.nih.gov/39476082/",
  abstract: "",
},
{
  title: "Acid Ceramidase Controls Proteasome Inhibitor Resistance and is a Tractable Therapeutic Target for the Treatment of Refractory Multiple Myeloma",
  authors: "Bishop R, Li T, Alugubelli R, Nasr M, Nyman K, Sudalagunta P, Meads M, Frieling J, Nerlakanti N, Tauro M, Hampton O, Fang B, Grant S, Koomen J, Silva A, Shain K, Lynch C",
  journal: "Haematologica",
  year: "2024",
  volume: "",
  pages: "",
  doi: "",
  link: "https://pubmed.ncbi.nlm.nih.gov/39633543/",
  abstract: "",
},
{
  title: "Combined Mek1/2 and Atr Inhibition Promotes Myeloma Cell Death Through a Stat3-Dependent Mechanism In Vitro and In Vivo",
  authors: "Li L, Hu X, Nkwocha J, Kmieciak M, Mann H, Meads M, Shain K, Alugubelli R, Silva A, Sudalagunta P, Canevarolo R, Zhou L, Grant S",
  journal: "British Journal of Haematology",
  year: "2024",
  volume: "",
  pages: "",
  doi: "",
  link: "https://pubmed.ncbi.nlm.nih.gov/39379134/",
  abstract: "",
},
{
  title: "Tumor Burden Quantified by Soluble B-Cell Maturation Antigen and Metabolic Tumor Volume Determine Myeloma CAR-T Outcomes",
  authors: "Freeman C, Noble J, Menges M, Villanueva R, Nakashima J, Figura N, Tonseth RP, Idiaquez D, Skelson L, Smith E, Abraham-Miranda J, Corallo S, De Avila G, Castaneda Puglianini O, Liu H, Alsina M, Nishihori T, Shain K, Baz R, Blue B, Grajales-Cruz A, Koomen J, Atkins R, Hansen D, Silva AS, Kim J, Balagurunathan Y, Locke F",
  journal: "Blood",
  year: "2024",
  volume: "",
  pages: "",
  doi: "",
  link: "https://pubmed.ncbi.nlm.nih.gov/39652773/",
  abstract: "",
},
{
  title: "Genome-Level Selection in Tumors as a Universal Marker of Resistance to Therapy",
  authors: "Persi E, Sudalagunta P, Wolf Y, Canevarolo R, Damaghi M, Shain K, Silva AS*, Koonin E*",
  journal: "Nature Communications",
  year: "2025",
  volume: "",
  pages: "",
  doi: "",
  link: "https://pubmed.ncbi.nlm.nih.gov/40664650/",
  abstract: "",
},
{
  title: "Target Antigen and Plasma Cell Phenotype are Critical Factors for Sensitivity to Response-Adapted Daratumumab Therapy",
  authors: "Meads MB, Zhao X, Noyes D, Sudalagunta PR, Achille A, Zhang C, Canevarolo RR, Silva M, Magaletti D, DeAvila D, Toska S, Oates A, Lastorino D, Idiaquez DW, Song J, Sansil SS, Yoder SJ, Grajales-Cruz AF, Blue B, Freeman CL, Kim J, Alsina M, Brayer J, Silva AS, Song X, Shain KH, Baz R",
  journal: "Blood",
  year: "2025",
  volume: "",
  pages: "",
  doi: "",
  link: "https://pubmed.ncbi.nlm.nih.gov/40983035/",
  abstract: "",
},
{
  title: "Genomics Define Malignant Transformation in Myeloma Precursor Conditions",
  authors: "Maura F, Bergsagel L, Ziccheddu B, Kumar S, Maclachlan K, Derkach A, Garces JJ, Firestone R, Braggio E, Asmann Y, Durante M, Diamond BT, Papadimitriou M, Hultcrantz M, Castellano G, Marella A, Lionetti M, Matera A, Maeda A, Pioggia S, Da Via M, Leongamornlert D, De Magistris C, DeAvila D, Sudalagunta PR, Canevarolo RR, Siegel EM, Agius P, Teer J, Mcpherson A, Yamashita Y, Silva A, Blaney P, Baz R, Patel K, Campbell P, Fonseca R, Orlwoski R, Shain K, Bolli N, Usmani S, Rajkumar V, Morgan G, Landgren O",
  journal: "Journal of Clinical Oncology",
  year: "2025",
  volume: "",
  pages: "",
  doi: "",
  link: "https://pubmed.ncbi.nlm.nih.gov/41061199/",
  abstract: "",
},
{
  title: "Developing SEMA4A-Directed CAR T Cells to Overcome Low BCMA Antigen Density in Multiple Myeloma",
  authors: "Di Meo F, Albano F, Cesarano A, Wang Y, Kale B, Shain K, Silva A, Kurihara N, Tenshin H, Jellyman D, Song X, Ghaffari S, Mesa H, Freeman C, Creelan B, Zhao X, Meads M, Marino S, Rodriguez PC, Locke F, Hwu P, Roodman D, Mansilla-Soto J, Perna F",
  journal: "Cancer Cell",
  year: "2025",
  volume: "",
  pages: "",
  doi: "10.1016/j.ccell.2025.09.007",
  link: "",
  abstract: "",
},
{
  title: "Epigenetic Plasticity Drives Carcinogenesis and Multi-Therapy Resistance in Multiple Myeloma",
  authors: "Canevarolo R, Sudalagunta PR, 31 more and Silva AS",
  journal: "Blood Cancer Discovery (Under Review)",
  year: "2025",
  volume: "",
  pages: "",
  doi: "https://doi.org/10.21203/rs.3.rs-6306816/v1",
  link: "",
  abstract: "",
},
{
  title: "The Oncology Research Information Exchange Network (ORIEN) - Building a Real-World Collaborative, Patient-Driven Infrastructure for Discovery Research and Precision Oncology",
  authors: "Churchman ML, Lu X, McKean DM, Radmacher MD, Zhang Q, Rounbehler RJ, Tan AC, Shaw TI, Obermayer A, Grass GD, Spakowicz D, Tarhini AA, Shain KH, Canevarolo RR, Meads MB, Silva AS, Sudalagunta PR, Manley BJ, Huntsman S, Collyar D, Kolesar JM, Evers BM, Single N, Edge SB, Johnson CS, Weiner GJ, McCarter MD, Borges VF, Horne L, Lillard JW Jr, Mudaranthakam DP, White J, Libutti S, Ganesan S, Riedlinger GM, Loughran TP Jr, Halme DG, Johns MA, Arciero C, Salhia B, Naqash AR, Shriver CD, Lee KP, Schneider BP, Nix DA, Fillmore GC, Colman H, Ulrich CM, Springer BC, Pollock R, Vucic EA, Sherman J, Jain AK, Dalton WS, Agius P, Siegel EM",
  journal: "Nature Medicine (Under Review)",
  year: "2025",
  volume: "",
  pages: "",
  doi: "",
  link: "",
  abstract: "",
},
{
  title: "ULK3 is Essential for Autophagy and Cell Survival in Multiple Myeloma",
  authors: "Tauro M, Li T, Sudalagunta PR, Meads M, Alugubelli RR, Lawrence NJ, Lawrence H, Gunawan S, Tran TH, Shay G, Schonbrunn E, Bishop RT, Nasr M, Cleveland JL, Silva AS, Shain KH, Lynch CC",
  journal: "Nature Communications (Under Review)",
  year: "2025",
  volume: "",
  pages: "",
  doi: "",
  link: "",
  abstract: "",
},
{
  title: "TLCellClassifier: Machine Learning Based Cell Classification for Bright-Field Time-Lapse Images",
  authors: "Jiang Q, Sudalagunta P, Meads M, Zhao X, Achille A, Noyes D, Silva M, Canevarolo R, Shain K, Silva A, Zhang W",
  journal: "IEEE Transactions on Medical Imaging (Under Review)",
  year: "2025",
  volume: "",
  pages: "",
  doi: "https://doi.org/10.1101/2024.06.11.598552",
  link: "",
  abstract: "",
},
{
  title: "ELDA: A Real-Time Microscopy-Based Drug Screening Assay for Personalized Therapy in Acute Lymphoblastic Leukemia",
  authors: "Mariano S, Assis LH de P, Correa J, Canevarolo RR, Migita NA, Sudalagunta PR, Azevedo AC de, Meidanis J, Brandalise SR, Silva AS, Yunes JA",
  journal: "Frontiers in Oncology (Under Review)",
  year: "2025",
  volume: "",
  pages: "",
  doi: "",
  link: "",
  abstract: "",
},
{
  title: "Navigating the Evolving Management of Smoldering Multiple Myeloma",
  authors: "Hammami MB, Canevarolo RR, Silva AS, Alsina M, Kumar N, Baz RC, Shain KH",
  journal: "HemaSphere (Under Review)",
  year: "2025",
  volume: "",
  pages: "",
  doi: "",
  link: "",
  abstract: "",
},
{
  title: "Synchronous Dual Hematologic Neoplasms of Myeloid and Lymphoid Lineage are of Common Clonal Origin",
  authors: "Ball S, Neupane S, Newman H, Traina JA, Al Ali NH, Dhawan A, Sudalagunta PR, Silva AS, DeAvila D, Hussaini MO, Song J, Xie Z, Chan O, Walker AR, Ryder C, Kuykendall AT, Lancet JE, Sokol L, Ferrell PB, Zhang L, Savona MR, Sallman D, Pinilla-Ibarz J, Komrokji RS, Shain KH, Padron E",
  journal: "Nature Communications (Under Review)",
  year: "2025",
  volume: "",
  pages: "",
  doi: "",
  link: "",
  abstract: "",
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
