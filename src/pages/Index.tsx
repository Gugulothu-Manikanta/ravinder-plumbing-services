import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Calendar, Wrench, Droplets, ShowerHead, PipetteIcon, Sparkles, Shield, Clock, BadgeCheck, ThumbsUp, Star, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-plumber.jpg";

const services = [
  {
    icon: Wrench,
    title: "Pipe Leak Repair",
    desc: "Detect and fix pipe leaks quickly to prevent water damage, mold, and rising bills. Our experts ensure long-lasting, reliable repairs.",
  },
  {
    icon: ShowerHead,
    title: "Bathroom Plumbing",
    desc: "Complete bathroom plumbing solutions — from fixing leaky faucets to full bathroom fitting installations with precision.",
  },
  {
    icon: PipetteIcon,
    title: "Kitchen Plumbing",
    desc: "Expert kitchen plumbing for sinks, taps, drainage, and water supply lines. We keep your kitchen running smoothly.",
  },
  {
    icon: Droplets,
    title: "Drain Cleaning",
    desc: "Blocked drains causing trouble? We clear stubborn blockages and restore proper water flow using advanced techniques.",
  },
  {
    icon: Sparkles,
    title: "Water Tank Cleaning",
    desc: "Ensure clean, safe drinking water with our professional tank cleaning service. Thorough sanitization and inspection included.",
  },
  {
    icon: Wrench,
    title: "Motor Repair",
    desc: "Borewell and water motor repair services to keep your water supply uninterrupted. Quick diagnosis and expert fixes.",
  },
  {
    icon: ShowerHead,
    title: "Tap & Shower Installation",
    desc: "Professional installation of taps, showers, and fixtures. We handle all brands and ensure leak-free, perfect fitting.",
  },
  {
    icon: Clock,
    title: "Emergency Plumbing",
    desc: "Plumbing emergency? We're available 24/7 for burst pipes, major leaks, and urgent repairs across Miyapur and Hyderabad.",
  },
];

const whyChoose = [
  {
    icon: BadgeCheck,
    title: "Experienced Professionals",
    desc: "Our team of skilled plumbers brings over 5 years of hands-on expertise to every job, big or small.",
  },
  {
    icon: Clock,
    title: "Quick Response Time",
    desc: "We understand plumbing problems can't wait. That's why we arrive promptly and get to work immediately.",
  },
  {
    icon: ThumbsUp,
    title: "Affordable Pricing",
    desc: "Transparent and competitive pricing with no hidden charges. Get quality plumbing without breaking the bank.",
  },
  {
    icon: Shield,
    title: "Quality Workmanship",
    desc: "We use high-quality materials and proven techniques to deliver repairs that stand the test of time.",
  },
  {
    icon: Star,
    title: "Customer Satisfaction",
    desc: "Your happiness is our priority. We don't consider a job done until you're completely satisfied with the result.",
  },
];

const testimonials = [
  {
    name: "Suresh Reddy",
    location: "Miyapur",
    text: "Ravinder's team fixed a major pipe leak in our apartment within an hour. Very professional and reasonably priced. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    location: "KPHB Colony",
    text: "We called for emergency plumbing at midnight and they arrived in 30 minutes. Excellent service! Will definitely call again.",
    rating: 5,
  },
  {
    name: "Venkat Rao",
    location: "Chandanagar",
    text: "Got our entire bathroom plumbing redone. Clean work, fair price, and completed on time. Very happy with the quality.",
    rating: 5,
  },
  {
    name: "Fatima Begum",
    location: "Kukatpally",
    text: "Water tank cleaning service was thorough and professional. The team was courteous and left the area clean after work.",
    rating: 4,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="container py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in-up">
              <span className="inline-block bg-secondary/20 text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-secondary/30" style={{ color: "hsl(25 95% 70%)" }}>
                ⭐ Trusted Plumbing Experts in Hyderabad
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
                Expert Plumbing Services in{" "}
                <span style={{ color: "hsl(25 95% 60%)" }}>Miyapur, Hyderabad</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
                We provide reliable, affordable, and fast plumbing solutions for homes and businesses. Available 24/7 for emergency services.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="hero" size="lg" asChild>
                  <a href="tel:+916303653794">
                    <Phone className="h-5 w-5" /> Call Now
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
  <a 
    href="https://wa.me/916303653794?text=Hello%20Ravinder%20Plumbing%20Services,%20I%20need%20help%20with%20plumbing%20work."
    target="_blank" 
    rel="noopener noreferrer"
  >
    <MessageCircle className="h-5 w-5" /> WhatsApp Now
  </a>
</Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/services">
                    <Calendar className="h-5 w-5" /> Book Service
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src={heroImage}
                alt="Professional plumber at work in Miyapur Hyderabad"
                className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L60 70C120 60 240 40 360 33C480 27 600 33 720 40C840 47 960 53 1080 50C1200 47 1320 33 1380 27L1440 20V80H0Z" fill="hsl(210 20% 98%)" />
          </svg>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-16" style={{ background: "var(--section-gradient)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Your Local Plumbing Partner in Hyderabad
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ravinder Plumbing Services is a team of highly skilled plumbers dedicated to solving all your plumbing problems. Whether it's a minor leakage, a complete bathroom installation, routine maintenance, or an emergency repair at odd hours — we have the expertise and equipment to handle it all. Serving Miyapur and greater Hyderabad, we take pride in delivering fast, professional, and affordable plumbing solutions that keep your home and business running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive plumbing solutions for every need — residential or commercial.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "var(--card-shadow)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow)")}
              >
                <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-card-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link to="/services">
                View All Services <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16" style={{ background: "var(--section-gradient)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Why Choose Us?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Thousands of customers trust Ravinder Plumbing Services. Here's why.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {whyChoose.map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-card rounded-xl p-6 border border-border"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <div>
                  <p className="font-display font-semibold text-card-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.location}, Hyderabad</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16" style={{ background: "var(--hero-gradient)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Need a Plumber Urgently?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Contact Ravinder Plumbing Services today! We're just a phone call away for all your plumbing needs in Miyapur and Hyderabad.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="tel:+916303653794">
                <Phone className="h-5 w-5" /> Call +91 63036 53794
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://wa.me/916303653794" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
