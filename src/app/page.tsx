import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const features = [
    {
      title: "Carbon Footprint Tracking",
      description: "Real-time tracking of your carbon emissions with detailed analytics and insights to help you understand your environmental impact.",
      icon: "🌱",
    },
    {
      title: "Smart Route Optimization",
      description: "AI-powered route planning that minimizes fuel consumption and emissions while considering traffic, distance, and eco-friendly alternatives.",
      icon: "🧭",
    },
    {
      title: "Multi-Modal Transport",
      description: "Seamlessly combine walking, cycling, public transit, and electric vehicles for the most sustainable journey options.",
      icon: "🚲",
    },
    {
      title: "Eco-Score System",
      description: "Get an eco-score for each route option, making it easy to choose the most environmentally friendly path.",
      icon: "📊",
    },
    {
      title: "Community Challenges",
      description: "Join sustainability challenges and compete with friends to reduce your carbon footprint together.",
      icon: "🏆",
    },
    {
      title: "Green Recommendations",
      description: "Personalized tips and recommendations to improve your travel habits and reduce environmental impact.",
      icon: "💡",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            EcoRoute Planner
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find the most eco-friendly routes, reduce your carbon footprint, and join the movement towards sustainable transportation.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
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
    </div>
  );
}