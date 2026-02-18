import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "10 Simple Ways to Reduce Your Carbon Footprint While Traveling",
    excerpt: "Discover practical tips to make your journeys more eco-friendly, from packing light to choosing sustainable accommodations.",
    date: "2024-01-15",
    category: "Eco-Friendly Travel",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "How Smart Routing Can Save Thousands of Pounds of CO2",
    excerpt: "Learn how advanced route optimization algorithms can significantly reduce emissions by finding the most efficient paths.",
    date: "2024-01-10",
    category: "Carbon Savings",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "The Future of Sustainable Transportation: Trends to Watch",
    excerpt: "Explore emerging technologies and trends that are shaping the future of green mobility and sustainable travel.",
    date: "2024-01-05",
    category: "Sustainable Routing",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Comparing Carbon Emissions: Car vs. Public Transit vs. Cycling",
    excerpt: "A detailed breakdown of the environmental impact of different transportation modes and when to use each.",
    date: "2024-01-01",
    category: "Eco-Friendly Travel",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "How to Calculate Your Trip's Carbon Footprint",
    excerpt: "A comprehensive guide to understanding and calculating the carbon emissions of your travel plans.",
    date: "2023-12-28",
    category: "Carbon Savings",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Electric Vehicles and Route Planning: Maximizing Efficiency",
    excerpt: "Tips and strategies for EV owners to optimize their routes for battery life and minimal environmental impact.",
    date: "2023-12-20",
    category: "Sustainable Routing",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            EcoRoute Blog
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover insights on eco-friendly travel, carbon savings, and sustainable routing to help you make greener choices.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">
                    <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t">
                    <span>{post.date}</span>
                    <Link href={`/blog/${post.id}`} className="text-primary font-medium hover:underline">
                      Read more →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}