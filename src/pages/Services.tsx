import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, ChevronRight, CheckCircle, Wrench, Droplets, ShowerHead, PipetteIcon, Sparkles, Clock, Zap } from "lucide-react";

const servicesData = [
  {
    icon: Wrench,
    title: "Pipe Leak Repair",
    description: "Pipe leaks are one of the most common plumbing issues faced by homeowners and businesses in Hyderabad. A small leak, if left unattended, can lead to significant water damage, mold growth, structural weakening, and skyrocketing water bills. Our experienced plumbers use advanced leak detection methods to identify the exact source of the problem and apply durable, long-lasting repairs.",
    benefits: [
      "Prevent costly water damage to walls and floors",
      "Save money on inflated water bills",
      "Long-lasting repair with quality materials",
      "Quick diagnosis and same-day service",
    ],
  },
  {
    icon: ShowerHead,
    title: "Bathroom Plumbing",
    description: "Your bathroom plumbing needs to work flawlessly — from the shower to the toilet, basin taps to the water heater connections. Whether you're renovating your bathroom or facing issues like low water pressure, dripping faucets, or clogged drains, our team delivers precision work. We handle all bathroom plumbing installations, repairs, and upgrades with attention to detail.",
    benefits: [
      "Complete bathroom fitting and installation",
      "Fix low water pressure and dripping faucets",
      "Toilet repair and replacement services",
      "Water heater connection and maintenance",
    ],
  },
  {
    icon: PipetteIcon,
    title: "Kitchen Plumbing",
    description: "The kitchen is the heart of your home, and plumbing problems here can disrupt your entire day. From leaking sinks and blocked drains to installing new taps, dishwasher connections, and water purifier lines — our kitchen plumbing experts ensure everything works seamlessly. We use food-safe materials and follow best practices for hygienic installations.",
    benefits: [
      "Sink leak repair and installation",
      "Drainage line cleaning and unclogging",
      "Water purifier and dishwasher line setup",
      "Tap and mixer installation for all brands",
    ],
  },
  {
    icon: Droplets,
    title: "Drain Cleaning",
    description: "Blocked drains can cause unpleasant odors, slow water drainage, and even flooding in severe cases. Grease buildup, hair, soap residue, and foreign objects are common culprits. Our drain cleaning service uses professional tools and hydro-jetting techniques to clear even the most stubborn blockages, restoring proper water flow throughout your property.",
    benefits: [
      "Remove stubborn blockages effectively",
      "Eliminate foul odors from drains",
      "Prevent overflow and water damage",
      "Regular maintenance plans available",
    ],
  },
  {
    icon: Sparkles,
    title: "Water Tank Cleaning",
    description: "Clean water is essential for your family's health. Over time, water tanks accumulate sediment, algae, bacteria, and rust that contaminate your water supply. Our professional water tank cleaning service includes complete draining, scrubbing, sanitization, and inspection to ensure your water storage is hygienic and safe for daily use.",
    benefits: [
      "Thorough sediment and algae removal",
      "Anti-bacterial sanitization treatment",
      "Inspection for cracks and leaks",
      "Improved water quality and taste",
    ],
  },
  {
    icon: Zap,
    title: "Borewell & Motor Repair",
    description: "A faulty borewell motor can leave your home without water supply entirely. Common issues include motor burnout, wiring faults, pressure drops, and mechanical wear. Our technicians are experienced in diagnosing and repairing all types of submersible and monoblock motors. We provide quick turnaround to minimize disruption to your water supply.",
    benefits: [
      "Expert diagnosis of motor and pump issues",
      "Submersible and monoblock motor repair",
      "Wiring and electrical connection fixes",
      "Quick service to restore water supply",
    ],
  },
  {
    icon: ShowerHead,
    title: "Tap & Shower Installation",
    description: "Upgrading your taps and showers enhances both the functionality and aesthetics of your bathroom and kitchen. Whether you need a simple tap replacement or a complete rain shower installation, our plumbers handle all brands and types. We ensure leak-free, perfectly aligned installations that look great and work flawlessly for years.",
    benefits: [
      "All brands and models supported",
      "Leak-free precision installation",
      "Mixer tap and rain shower setup",
      "Old fixture removal and disposal",
    ],
  },
  {
    icon: Clock,
    title: "Emergency Plumbing",
    description: "Plumbing emergencies don't wait for business hours — and neither do we. Burst pipes, major leaks, overflowing toilets, and sewer backups demand immediate attention. Ravinder Plumbing Services is available 24/7 for emergency plumbing calls across Miyapur and Hyderabad. Our rapid response team arrives equipped to handle any urgent situation.",
    benefits: [
      "Available 24 hours, 7 days a week",
      "Rapid response within 30-60 minutes",
      "Fully equipped for all emergency repairs",
      "No extra charges for late-night calls",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="py-16" style={{ background: "var(--hero-gradient)" }}>
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Our Plumbing Services
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Professional plumbing solutions for residential and commercial properties in Miyapur, Hyderabad. Quality work guaranteed.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-background">
        <div className="container space-y-16">
          {servicesData.map((service, index) => (
            <div
              key={service.title}
              id={service.title.toLowerCase().replace(/\s+/g, "-")}
              className={`grid md:grid-cols-2 gap-10 items-start ${
                index % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    {service.title}
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <Button asChild>
                  <a href="tel:+919876543210">
                    <Phone className="h-4 w-4" /> Call Now for Quick Service in Miyapur
                  </a>
                </Button>
              </div>
              <div className={`bg-card rounded-xl p-6 border border-border ${index % 2 === 1 ? "md:order-1" : ""}`} style={{ boxShadow: "var(--card-shadow)" }}>
                <h3 className="font-display font-semibold text-lg text-card-foreground mb-4 flex items-center gap-2">
                  <ChevronRight className="h-5 w-5 text-primary" /> Key Benefits
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "var(--hero-gradient)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Ready to Get Your Plumbing Fixed?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Call Ravinder Plumbing Services now for fast, reliable plumbing solutions in Miyapur and across Hyderabad.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="tel:+919876543210">
              <Phone className="h-5 w-5" /> Call +91 98765 43210
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
