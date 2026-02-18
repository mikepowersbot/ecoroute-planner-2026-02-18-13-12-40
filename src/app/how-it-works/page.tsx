import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AlgorithmFlowDiagram from "@/components/AlgorithmFlowDiagram";
import CarbonSavingsDiagram from "@/components/CarbonSavingsDiagram";

export default function HowItWorks() {
  const algorithmSteps = [
    {
      id: 1,
      label: "Data Collection",
      description: "Real-time traffic, weather, elevation & transit",
    },
    {
      id: 2,
      label: "Carbon Calculation",
      description: "Emissions per route & mode",
    },
    {
      id: 3,
      label: "Multi-Modal Analysis",
      description: "All transport options evaluated",
    },
    {
      id: 4,
      label: "Route Optimization",
      description: "Best eco-friendly path selected",
    },
  ];

  const detailedSteps = [
    {
      step: 1,
      title: "Data Collection",
      description: "We gather real-time data on traffic patterns, road conditions, elevation changes, vehicle fuel efficiency, and public transit schedules to build a comprehensive picture of your journey options.",
      icon: "📡",
      details: [
        "Traffic flow & congestion patterns",
        "Road grade & elevation profiles",
        "Public transit schedules & delays",
        "Weather conditions affecting efficiency",
        "Vehicle-specific fuel/energy consumption data",
      ],
    },
    {
      step: 2,
      title: "Carbon Calculation",
      description: "Our algorithm calculates carbon emissions for each potential route based on distance, vehicle type, traffic conditions, and energy consumption patterns. We factor in stop-and-go traffic, idling, and acceleration zones.",
      icon: "🧮",
      details: [
        "Distance-based emissions baseline",
        "Traffic intensity multipliers",
        "Stop-and-go penalty calculations",
        "Vehicle type coefficients (gas, electric, hybrid)",
        "Energy source carbon intensity (grid mix)",
      ],
    },
    {
      step: 3,
      title: "Multi-Modal Analysis",
      description: "We evaluate all transportation modes—driving, walking, cycling, public transit, and combinations—to find the optimal eco-friendly path. Each mode is scored based on its environmental impact.",
      icon: "🔀",
      details: [
        "Pure driving routes",
        "Mixed transit (park & ride, bike & ride)",
        "Walking & cycling only options",
        "Public transit connections",
        "Electric vehicle charging considerations",
      ],
    },
    {
      step: 4,
      title: "Route Optimization",
      description: "Using advanced algorithms, we balance carbon reduction with practical considerations like travel time, convenience, and accessibility to present you with the best eco-friendly options.",
      icon: "⚡",
      details: [
        "Pareto optimization (eco vs. time trade-offs)",
        "Personal preference weighting",
        "Accessibility requirements",
        "Real-time constraint satisfaction",
        "Multiple route options ranked by eco-score",
      ],
    },
  ];

  const carbonFactors = [
    { mode: "🚗 Gas Car", emissions: "404g CO₂/km", value: 404, color: "bg-red-100 dark:bg-red-950" },
    { mode: "🚌 Bus", emissions: "105g CO₂/km", value: 105, color: "bg-orange-100 dark:bg-orange-950" },
    { mode: "🚆 Train", emissions: "41g CO₂/km", value: 41, color: "bg-yellow-100 dark:bg-yellow-950" },
    { mode: "🚲 Cycling", emissions: "0g CO₂/km", value: 0, color: "bg-green-100 dark:bg-green-950" },
    { mode: "🚶 Walking", emissions: "0g CO₂/km", value: 0, color: "bg-green-100 dark:bg-green-950" },
    { mode: "⚡ Electric Car", emissions: "53g CO₂/km", value: 53, color: "bg-lime-100 dark:bg-lime-950" },
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

  const sampleRoute = {
    traditional: {
      mode: "Gas Car (Standard Route)",
      icon: "🚗",
      emissions: "404g CO₂/km",
      value: 404,
    },
    eco: {
      mode: "Electric Car + Transit",
      icon: "⚡🚌",
      emissions: "89g CO₂/km",
      value: 89,
    },
    savings: 78,
    distance: 15,
  };

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

      {/* Algorithm Flow Diagram */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            The Eco-Routing Algorithm
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our sophisticated algorithm analyzes multiple factors to find the route with the lowest environmental impact while still meeting your needs.
          </p>

          <AlgorithmFlowDiagram steps={algorithmSteps} />
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Understanding Each Step
          </h2>

          <div className="space-y-8">
            {detailedSteps.map((item) => (
              <Card key={item.step} className="overflow-visible">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl mb-2">{item.icon}</div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <p className="text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Diagram Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Route Comparison Visualization
          </h2>

          <CarbonSavingsDiagram
            traditional={sampleRoute.traditional}
            eco={sampleRoute.eco}
            savings={sampleRoute.savings}
            distance={sampleRoute.distance}
          />

          <div className="mt-8 p-6 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">💡 Real Impact</h3>
            <p className="text-muted-foreground">
              On a typical 15 km journey, choosing an eco-friendly route with mixed transit can save up to 4.7 kg of CO₂ emissions. That&apos;s equivalent to:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-sm text-muted-foreground">
              <li>The amount of CO₂ absorbed by 190 trees in one month</li>
              <li>Driving 47 km less in a gas car</li>
              <li>Charging your smartphone 520 times</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Carbon Factors Section */}
      <section className="py-16 px-4 bg-muted/30">
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
                    <span className={`font-mono font-bold ${item.value === 0 ? "text-green-600 dark:text-green-400" : ""}`}>
                      {item.emissions}
                    </span>
                  </div>
                  {item.value > 0 && (
                    <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.value > 200 ? "bg-red-500" : item.value > 50 ? "bg-yellow-500" : "bg-green-500"} transition-all duration-1000 ease-out`}
                        style={{ width: `${(item.value / 404) * 100}%` }}
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">📊 Data Sources</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Our emission factors are based on comprehensive life-cycle analysis including:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>U.S. Environmental Protection Agency (EPA) emission standards</li>
              <li>European Environment Agency (EEA) transport data</li>
              <li>IPCC guidelines for greenhouse gas inventories</li>
              <li>Grid electricity carbon intensity by region</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Built on Trust & Transparency
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            We&apos;re committed to providing accurate, verifiable environmental impact data.
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
      <section className="py-20 px-4 text-center bg-muted/30">
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