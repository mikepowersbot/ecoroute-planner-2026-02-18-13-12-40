"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is EcoRoute Planner?",
    answer: "EcoRoute Planner is a sustainable route planning tool that helps you find the most eco-friendly routes for your journeys. It considers factors like carbon emissions, fuel efficiency, and environmental impact to provide you with greener travel options.",
  },
  {
    question: "How does EcoRoute Planner calculate carbon emissions?",
    answer: "Our algorithm takes into account multiple factors including vehicle type, fuel efficiency, distance traveled, traffic conditions, and elevation changes. We use standardized emission factors to estimate the carbon footprint of each route option.",
  },
  {
    question: "Is EcoRoute Planner free to use?",
    answer: "Yes! EcoRoute Planner offers a free tier that includes basic route planning with carbon emission estimates. We also offer premium features like real-time traffic optimization, multi-stop routing, and detailed environmental impact reports. Check our Pricing page for more details.",
  },
  {
    question: "What transportation modes are supported?",
    answer: "EcoRoute Planner supports various transportation modes including car (gas, electric, hybrid), bicycle, walking, and public transit. Each mode is evaluated based on its environmental impact, with walking and cycling having zero emissions.",
  },
  {
    question: "How accurate are the carbon emission estimates?",
    answer: "Our estimates are based on widely accepted emission factors from environmental agencies. While actual emissions can vary based on driving habits, vehicle maintenance, and other factors, our calculations provide a reliable baseline for comparing route options.",
  },
  {
    question: "Can I use EcoRoute Planner offline?",
    answer: "Currently, EcoRoute Planner requires an internet connection to access maps and calculate routes. However, we are working on an offline mode that will allow you to pre-download routes for areas with limited connectivity.",
  },
  {
    question: "Does EcoRoute Planner track my location or personal data?",
    answer: "We respect your privacy. EcoRoute Planner only collects the minimal data needed to provide route planning services. We do not track your location continuously or sell your personal data. You can review our Privacy Policy for more details.",
  },
  {
    question: "How can I contribute to making EcoRoute Planner better?",
    answer: "We welcome feedback and suggestions! You can reach out to us through our contact form, follow our blog for updates, or contribute to our open-source components. Community input helps us improve and add features that matter most to our users.",
  },
  {
    question: "What makes EcoRoute Planner different from other map apps?",
    answer: "Unlike traditional navigation apps that focus solely on speed or distance, EcoRoute Planner prioritizes environmental impact. We provide carbon emission estimates, suggest greener alternatives, and help you make more sustainable travel choices without sacrificing efficiency.",
  },
  {
    question: "Can I plan multi-stop routes with EcoRoute Planner?",
    answer: "Yes! Our premium plan supports multi-stop route optimization, allowing you to visit multiple destinations while minimizing your overall carbon footprint. The algorithm intelligently orders stops to reduce total distance and emissions.",
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about EcoRoute Planner and how it helps you make more sustainable travel choices.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline py-4">
              <span className="font-semibold text-base">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="pb-4 pt-2 text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}