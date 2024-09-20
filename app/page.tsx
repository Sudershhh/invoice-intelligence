import {
  FileText,
  Zap,
  Clock,
  Bot,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  const features = [
    {
      icon: FileText,
      title: "Intelligent Extraction",
      description:
        "Automatically extract critical fields from invoices and financial documents.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process documents in under 8 seconds, down from hours.",
    },
    {
      icon: Clock,
      title: "Real-time Analysis",
      description:
        "Get instant insights from your documents as they're processed.",
    },
    {
      icon: Bot,
      title: "AI-Powered",
      description:
        "Leverage GPT-3.5 for enhanced data extraction and reconciliation.",
    },
  ];

  return (
    <div className="bg-[#F8F9FA] text-[#2F3E46]">
      <div className="container mx-auto px-4 py-12 sm:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#006D77]">
            Revolutionize Your
            <br />
            <span className="text-[#E29578]">Document Processing</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-[#2F3E46]">
            Process 2,500 invoices daily in seconds, not hours. Harness the
            power of AI and serverless technology for unparalleled efficiency.
          </p>

          <Link href="/dashboard">
            <Button
              size="lg"
              className="text-lg px-6 py-3 bg-[#E29578] text-white hover:bg-[#d68469]"
            >
              Get Started
            </Button>
          </Link>
        </section>

        <section className="mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#83C5BE]"
              >
                <feature.icon className="w-12 h-12 text-[#006D77] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#006D77]">
                  {feature.title}
                </h3>
                <p className="text-[#2F3E46]">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#006D77]">
            Experience the Future of
            <br />
            <span className="text-[#E29578]">Document Processing</span>
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-[#2F3E46]">
            Join thousands of businesses that have revolutionized their workflow
            with Invoice AI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              size="lg"
              className="text-lg px-6 py-3 bg-[#006D77] text-white hover:bg-[#005a63] w-full sm:w-auto"
            >
              Start Free Trial
              <ChevronRight className="ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-6 py-3 border-[#006D77] text-[#006D77] hover:bg-[#006D77] hover:text-white w-full sm:w-auto"
            >
              Watch Demo
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
