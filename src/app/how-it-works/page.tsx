import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowItWorks() {
  const algorithmSteps = [
    {
      step: 1,
      title: "Data Collection",
      description: "We gather real-time data on traffic patterns, road conditions, elevation changes, vehicle fuel efficiency, and public transit schedules to build a comprehensive picture of your journey options.",
      icon: "📡",
    },
    {
      step: 2,
      title: "Carbon Calculation",
      description: "Our algorithm calculates carbon emissions for each potential route based on distance, vehicle type, traffic conditions, and energy consumption patterns. We factor in stop-and-go traffic, idling, and acceleration zones.",
      icon: "🧮",
    },
    {
      step: 3,
      title: "Multi-Modal Analysis",
      description: "We evaluate all transportation modes—driving, walking, cycling, public transit, and combinations—to find the optimal eco-friendly path. Each mode is scored based on its environmental impact.",
      icon: "🔀",
    },
    {
      step: 4,
      title: "Route Optimization",
      description: "Using advanced algorithms, we balance carbon reduction with practical considerations like travel time, convenience, and accessibility to present you with the best eco-friendly options.",
      icon: "⚡",
    },
  ];

  const carbonFactors = [
    { mode: "🚗 Gas Car", emissions: "404g CO₂/km", color: "bg-red-100 dark:bg-red-950" },
    { mode: "🚌 Bus", emissions: "105g CO₂/km", color: "bg-orange-100 dark:bg-orange-950" },
    { mode: "🚆 Train", emissions: "41g CO₂/km", color: "bg-yellow-100 dark:bg-yellow-950" },
    { mode: "🚲 Cycling", emissions: "0g CO₂/km", color: "bg-green-100 dark:bg-green-950" },
    { mode: "🚶 Walking", emissions: "0g CO₂/km", color: "bg-green-100 dark:bg-green-950" },
    { mode: "⚡ Electric Car", emissions: "53g CO₂/km", color: "bg-lime-100 dark:bg-lime-950" },
  ];

  const trustFeatures = [
    {
      title: "Scientific Accuracy",
      description: "Our emissions calculations are based on peer-reviewed research and data from environmental agencies including the EPA and European Environment Agency.",
      icon: "🔬",
    },
    {
      title: "Transparent Methodology",
      description: "We publish our carbon calculation formulas and data sources so you can verify our environmental impact claims.",
      icon: "📊",
    },
    {
      title: "Real-Time Updates",
      description: "Traffic and transit data updates every 5 minutes, ensuring your route recommendations reflect current conditions for accurate carbon estimates.",
      icon: "🔄",
    },
    {
      title: "Independent Verification",
      description: "Our algorithms are audited by third-party environmental consultants to validate carbon savings calculations.",
      icon: "✅",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            How EcoRoute Works
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover the science behind our eco-friendly routing algorithm and learn how we help you reduce your carbon footprint with every journey.
          </p>
        </div>
      </section>

      {/* Algorithm Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            The Eco-Routing Algorithm
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our sophisticated algorithm analyzes multiple factors to find the route with the lowest environmental impact while still meeting your needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {algorithmSteps.map((item) => (
              <Card key={item.step} className="relative">
                <CardHeader>
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                    {item.step}
                  </div>
                  <div className="text-4xl mb-4 mt-2">{item.icon}</div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Diagram Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Route Comparison Visualization
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Traditional Route */}
            <Card className="border-red-200 dark:border-red-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🚗</span>
                  Traditional Route
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Distance</span>
                    <span className="text-muted-foreground">12.4 km</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Time</span>
                    <span className="text-muted-foreground">24 min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">CO₂ Emissions</span>
                    <span className="text-red-600 dark:text-red-400 font-bold">5.0 kg</span>
                  </div>
                  <div className="h-2 bg-red-100 dark:bg-red-950 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 w-3/4"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Eco Route */}
            <Card className="border-green-200 dark:border-green-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🌱</span>
                  EcoRoute Recommendation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Distance</span>
                    <span className="text-muted-foreground">13.1 km</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Time</span>
                    <span className="text-muted-foreground">28 min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">CO₂ Emissions</span>
                    <span className="text-green-600 dark:text-green-400 font-bold">2.8 kg</span>
                  </div>
                  <div className="h-2 bg-green-100 dark:bg-green-950 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-2/4"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-green-600 dark:text-green-400">
              ✓ 44% reduction in carbon emissions
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Just 4 extra minutes saves 2.2 kg of CO₂—equivalent to planting 0.1 trees
            </p>
          </div>
        </div>
      </section>

      {/* Carbon Factors Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Carbon Emissions by Transport Mode
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Understanding the environmental impact of different transportation options helps you make informed choices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {carbonFactors.map((item) => (
              <Card key={item.mode}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.mode.split(" ")[0]}</span>
                      <span>{item.mode.split(" ").slice(1).join(" ")}</span>
                    </div>
                    <span className={`font-bold ${item.emissions.includes("0") ? "text-green-600 dark:text-green-400" : ""}`}>
                      {item.emissions}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">💡 Did You Know?</h3>
            <p className="text-muted-foreground">
              The average passenger vehicle produces about 404 grams of CO₂ per mile. By choosing eco-friendly routes, you can significantly reduce your personal carbon footprint. A 10 km eco-route instead of a traditional route saves approximately 2.2 kg of CO₂—the same amount a tree absorbs in about 3 months.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Built on Trust & Transparency
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            We're committed to providing accurate, verifiable environmental impact data.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trustFeatures.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <div className="text-4xl mb-2">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-muted-foreground mb-8">
            Start planning your eco-friendly journeys today and join thousands of users reducing their carbon footprint.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Start Planning Routes
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}