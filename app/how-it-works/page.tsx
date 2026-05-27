import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — CrowdKPI",
  description: "See how CrowdKPI works — from market creation to resolution. Prediction markets for internal KPIs.",
  alternates: { canonical: "https://crowdkpi.com/how-it-works" },
  twitter: {
    card: "summary",
    title: "How It Works — CrowdKPI",
    description: "See how CrowdKPI works — from market creation to resolution. Prediction markets for internal KPIs.",
  },
};

const APP_URL = "https://app.crowdkpi.com";

const STEPS = [
  {
    number: "01",
    image: "/ckpi-journey-1.jpg",
    imageAlt: "Admin setting up CrowdKPI on a tablet",
    imageLeft: true,
    title: "Admin sets up the markets",
    subtitle: "Your company's KPIs, your questions",
    body: "The admin creates prediction markets around the business outcomes that matter — will we hit the Q3 revenue target? Will the new product launch on time? Set the outcomes, configure starting odds, and the market is live.",
  },
  {
    number: "02",
    image: "/ckpi-journey-2.jpg",
    imageAlt: "Manager sharing CrowdKPI invite QR code with colleagues",
    imageLeft: false,
    title: "Invite your team",
    subtitle: "One scan to join",
    body: "Share the invite link or display the QR code in Slack, on a screen, or at the next all-hands. Colleagues sign up with a username and PIN in seconds — no email, no app download.",
  },
  {
    number: "03",
    image: "/ckpi-journey-3.jpg",
    imageAlt: "Team trading on CrowdKPI in a meeting room",
    imageLeft: true,
    title: "The team trades in real time",
    subtitle: "Collective intelligence at work",
    body: "Employees use virtual credits to buy positions on the outcomes they believe in. Odds shift as the team trades — when the crowd moves, it's a signal. Watch which markets are moving and why.",
  },
  {
    number: "04",
    image: "/ckpi-journey-4.jpg",
    imageAlt: "Team celebrating after a KPI result",
    imageLeft: false,
    title: "Markets resolve, winners are crowned",
    subtitle: "Reward the best forecasters",
    body: "When the result is in, the admin resolves the market. Winning shares pay out. The leaderboard updates. The people who called it correctly — weeks or months in advance — get the recognition they deserve.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">

      {/* Nav */}
      <nav className="bg-navy sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image src="/crowdkpi-icon.svg.png" alt="CrowdKPI" width={36} height={36} />
            <span className="text-white font-bold text-xl tracking-tight">CrowdKPI</span>
          </a>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-navy font-semibold text-sm px-5 py-2 rounded-full hover:bg-silver transition-colors"
          >
            Open App →
          </a>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-navy text-white py-20 px-6 text-center">
        <p className="text-silver font-bold tracking-widest text-sm mb-3 uppercase">The Full Experience</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">How CrowdKPI works</h1>
        <p className="text-silver text-lg max-w-xl mx-auto opacity-80">
          From market creation to resolution — here&apos;s what your team can expect.
        </p>
      </section>

      {/* Journey steps */}
      <div>
        {STEPS.map(({ number, image, imageAlt, imageLeft, title, subtitle, body }, i) => (
          <section
            key={number}
            className={`py-16 px-6 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
          >
            <div className={`max-w-5xl mx-auto flex flex-col ${imageLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 md:gap-16`}>

              {/* Image */}
              <div className="w-full md:w-1/2 shrink-0">
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2">
                <span className="text-silver font-black text-5xl leading-none">{number}</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-2 mb-1">{title}</h2>
                <p className="text-navy-light font-semibold text-sm mb-4">{subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{body}</p>
              </div>

            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-navy py-20 px-6 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to find out what your team really thinks?
          </h2>
          <p className="text-silver opacity-80 mb-8">
            Get in touch to set up a company account. Takes minutes to get your team trading.
          </p>
          <a
            href="mailto:evan@crowdkpi.com?subject=CrowdKPI — Request Access"
            className="bg-white text-navy font-bold text-base px-10 py-4 rounded-full hover:bg-silver transition-colors inline-block"
          >
            Request Access
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-dark text-silver text-sm py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Image src="/crowdkpi-icon.svg.png" alt="CrowdKPI" width={20} height={20} />
            <span className="font-semibold text-white">CrowdKPI</span>
          </div>
          <p>© {new Date().getFullYear()} CrowdKPI. All rights reserved.</p>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Open App →
          </a>
        </div>
      </footer>

    </div>
  );
}
