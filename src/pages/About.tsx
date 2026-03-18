import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Users, Award, MapPin, Clock, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="py-16" style={{ background: "var(--hero-gradient)" }}>
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            About Ravinder Plumbing Services
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Your trusted local plumbing experts — serving Miyapur and Hyderabad with dedication and skill.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ravinder Plumbing Services is a locally trusted plumbing company based in Miyapur, Hyderabad. With over 5 years of experience in the industry, we have built a strong reputation for providing fast, reliable, and affordable plumbing solutions to homeowners, tenants, and businesses across the city.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              What started as a small local service has grown into a full-fledged plumbing business serving hundreds of satisfied customers. Our team of skilled technicians is trained to handle everything from simple tap repairs to complex drainage systems, bathroom renovations, and emergency plumbing situations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe that quality plumbing shouldn't come at a premium price. That's why we offer competitive, transparent pricing with no hidden charges. Every job, no matter how small, receives the same level of professionalism and attention to detail that our customers have come to expect from us.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12" style={{ background: "var(--section-gradient)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Years Experience", value: "5+", icon: Award },
              { label: "Happy Customers", value: "2000+", icon: Users },
              { label: "Areas Served", value: "20+", icon: MapPin },
              { label: "Availability", value: "24/7", icon: Clock },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-3xl font-display font-bold text-foreground">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">What Drives Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Skilled Technicians",
                  desc: "Every member of our team is a trained professional with hands-on experience in residential and commercial plumbing. We invest in ongoing training to stay updated with the latest techniques and tools.",
                },
                {
                  title: "Customer-First Approach",
                  desc: "We listen to your concerns, explain the problem clearly, and provide honest recommendations. No upselling, no unnecessary repairs — just genuine service you can trust.",
                },
                {
                  title: "Quality Materials",
                  desc: "We source high-quality pipes, fittings, and fixtures from trusted brands. This ensures that our repairs and installations are durable and long-lasting.",
                },
                {
                  title: "Transparent Pricing",
                  desc: "Before we begin any work, we provide a clear estimate with no hidden costs. You always know exactly what you're paying for.",
                },
              ].map((value) => (
                <div key={value.title} className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-16" style={{ background: "var(--section-gradient)" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Service Coverage in Hyderabad</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              While we are based in Miyapur, our plumbing services extend across a wide area of Hyderabad. We proudly serve customers in the following locations and beyond:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "Miyapur", "KPHB Colony", "Kukatpally", "Chandanagar",
                "Nizampet", "Bachupally", "Pragathi Nagar", "Madinaguda",
                "Hafeezpet", "Kondapur", "Gachibowli", "Madhapur",
                "Hitech City", "Jubilee Hills", "Banjara Hills", "Begumpet",
              ].map((area) => (
                <div key={area} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "var(--hero-gradient)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Let's Solve Your Plumbing Problems
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Get in touch with Ravinder Plumbing Services today. We're ready to help!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="tel:+919876543210">
                <Phone className="h-5 w-5" /> Call Now
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
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

export default About;
