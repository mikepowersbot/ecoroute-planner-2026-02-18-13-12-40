import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Environmental scientist with 15 years of research in sustainable transportation. Former lead researcher at the EPA's Office of Transportation and Air Quality.",
      icon: "👩‍🔬",
    },
    {
      name: "Marcus Johnson",
      role: "CTO & Co-Founder",
      bio: "Former Google Maps engineer with expertise in routing algorithms and real-time data systems. Led development of navigation systems for 10+ years.",
      icon: "👨‍💻",
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Head of Environmental Science",
      bio: "PhD in Climate Science from MIT. Previously consulted for the UN Environment Programme on urban mobility emissions.",
      icon: "👩‍🏫",
    },
    {
      name: "James Park",
      role: "Lead Product Designer",
      bio: "UX specialist focused on sustainable tech. Designed award-winning apps for civic engagement and environmental awareness.",
      icon: "🎨",
    },
    {
      name: "Aisha Patel",
      role: "Director of Partnerships",
      bio: "Built strategic partnerships with transit authorities and environmental NGOs across North America and Europe.",
      icon: "🤝",
    },
    {
      name: "David Kim",
      role: "Chief Data Scientist",
      bio: "Machine learning expert specializing in traffic prediction and emissions modeling. Published 30+ papers on transportation analytics.",
      icon: "📊",
    },
  ];

  const values = [
    {
      title: "Scientific Integrity",
      description: "Every carbon calculation is backed by peer-reviewed research and data from authoritative sources like the EPA, EEA, and IPCC. We regularly update our models to reflect the latest scientific understanding.",
      icon: "🔬",
    },
    {
      title: "Transparency",
      description: "We believe in open methodology. Our carbon calculation formulas, data sources, and assumptions are fully documented and available for review. No black boxes—just clear, verifiable science.",
      icon: "📖",
    },
    {
      title: "User Empowerment",
      description: "We don't just tell you the eco-route—we show you the impact. Every recommendation includes clear metrics about carbon savings, helping you understand the real difference your choices make.",
      icon: "💪",
    },
    {
      title: "Continuous Innovation",
      description: "Our research team actively develops new algorithms to improve accuracy and incorporate emerging transportation modes like e-scooters, bike-sharing, and micro-mobility options.",
      icon: "🚀",
    },
    {
      title: "Accessibility",
      description: "Eco-friendly routing should be available to everyone. We're committed to WCAG 2.1 AA compliance and offer features for users with mobility challenges.",
      icon: "♿",
    },
    {
      title: "Community Impact",
      description: "We partner with local governments and NGOs to promote sustainable transportation. A portion of revenue funds urban green space initiatives in underserved communities.",
      icon: "🌍",
    },
  ];

  const milestones = [
    { year: "2021", title: "Founded", description: "EcoRoute Planner launched with a mission to make sustainable transportation accessible to everyone." },
    { year: "2022", title: "1 Million Users", description: "Reached 1 million active users and expanded coverage to 50+ cities across North America." },
    { year: "2023", title: "API Launch", description: "Introduced enterprise API for businesses to calculate and offset employee travel emissions." },
    { year: "2024", title: "Global Expansion", description: "Expanded to Europe and Asia, supporting 20+ languages and local transit systems." },
    { year: "2025", title: "Carbon Neutral", description: "Achieved carbon-neutral operations and helped users avoid 50,000+ tons of CO₂ emissions." },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            About EcoRoute Planner
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're on a mission to make sustainable transportation the default choice for everyday travelers. By combining cutting-edge technology with environmental science, we help millions reduce their carbon footprint—one route at a time.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At EcoRoute Planner, we believe that individual choices matter in the fight against climate change. Transportation accounts for nearly 30% of global greenhouse gas emissions, and most of that comes from everyday travel—commutes, errands, and trips that we all make.
                </p>
                <p>
                  Our mission is to empower people to make sustainable choices without sacrificing convenience. We've built sophisticated routing technology that finds the most eco-friendly way to get from point A to point B, whether that means suggesting a slightly longer but greener route, combining walking with public transit, or highlighting low-emission vehicle options.
                </p>
                <p>
                  Since our founding in 2021, we've helped users avoid over 50,000 tons of CO₂ emissions—equivalent to taking 11,000 cars off the road for a year. But we're just getting started.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Tons of CO₂ avoided</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">3M+</div>
                  <div className="text-sm text-muted-foreground">Eco-routes planned</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Cities supported</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">44%</div>
                  <div className="text-sm text-muted-foreground">Avg. emissions reduction</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">What We Stand For</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our work is guided by six core values that shape everything we build, from our routing algorithms to our user experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Meet the Team</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We're a diverse team of environmental scientists, engineers, designers, and data experts united by a common purpose: making sustainable travel accessible to everyone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-6xl mb-4">{member.icon}</div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {milestone.year.slice(-2)}
                  </div>
                  {index < milestones.length - 1 && <div className="w-0.5 h-full bg-border mt-2"></div>}
                </div>
                <div className="flex-1 pb-8">
                  <div className="text-sm font-semibold text-primary mb-1">{milestone.year}</div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Our Commitment to Sustainable Travel</h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              Sustainable travel isn't just a feature—it's the entire reason we exist. We're committed to making every journey count by:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Continuously improving our algorithms</strong> to provide the most accurate carbon estimates possible, incorporating real-time traffic, weather, and transit data.
              </li>
              <li>
                <strong>Expanding our coverage</strong> to more cities, countries, and transportation modes so sustainable options are available wherever you go.
              </li>
              <li>
                <strong>Educating users</strong> about the environmental impact of their travel choices through clear, accessible information and personalized insights.
              </li>
              <li>
                <strong>Partnering with transit authorities</strong> to integrate sustainable options directly into public transportation systems.
              </li>
              <li>
                <strong>Leading by example</strong> as a carbon-neutral company that offsets its own operational emissions and encourages remote work to reduce commuting.
              </li>
              <li>
                <strong>Advocating for policy change</strong> by sharing anonymized data with urban planners and policymakers to support investments in sustainable infrastructure.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 text-center bg-gradient-to-t from-muted/30 to-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Join Us in Creating a Greener Future</h2>
          <p className="text-muted-foreground mb-8">
            Every eco-friendly route makes a difference. Start planning your sustainable journeys today and become part of the movement toward cleaner, healthier cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Start Planning
            </a>
            <a
              href="/how-it-works"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Learn How It Works
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}