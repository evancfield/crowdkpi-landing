import Image from "next/image";

const APP_URL = "https://app.crowdkpi.com";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* ── Nav ── */}
      <nav className="bg-navy sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/crowdkpi-icon.svg.png" alt="CrowdKPI" width={36} height={36} />
            <span className="text-white font-bold text-xl tracking-tight">CrowdKPI</span>
          </div>
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

      {/* ── Hero ── */}
      <section className="bg-navy text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Image src="/crowdkpi-icon.svg.png" alt="CrowdKPI" width={96} height={96} />
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
            What does your team <br className="hidden sm:block" />
            <span className="text-silver">really think</span> will happen?
          </h1>
          <p className="text-lg sm:text-xl text-silver max-w-2xl mx-auto mb-10">
            CrowdKPI is an internal prediction market platform. Your team trades on KPI
            outcomes using real money mechanics — surfacing the collective intelligence
            that never makes it into the forecast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/how-it-works"
              className="bg-white text-navy font-bold text-base px-8 py-4 rounded-full hover:bg-silver transition-colors"
            >
              How it works
            </a>
            <a
              href="mailto:evan@crowdkpi.com?subject=CrowdKPI — Request Access"
              className="border-2 border-white text-white font-bold text-base px-8 py-4 rounded-full hover:bg-navy-light transition-colors"
            >
              Request Access
            </a>
          </div>
        </div>
      </section>

      {/* ── Social proof / stat bar ── */}
      <section className="bg-silver py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[
            { stat: "LMSR", label: "Proven pricing model used by top prediction markets" },
            { stat: "Real-time", label: "Probabilities update instantly as your team trades" },
            { stat: "Private", label: "Fully isolated per company — no data shared" },
          ].map(({ stat, label }) => (
            <div key={stat}>
              <p className="text-navy font-extrabold text-2xl">{stat}</p>
              <p className="text-gray-600 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center mb-14">
            How it works
          </h2>
          <div className="grid sm:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Admin creates markets",
                body:
                  "Your admin sets up questions around KPIs — revenue targets, product launches, hiring goals. Each market has defined outcomes and a closing condition.",
              },
              {
                step: "02",
                title: "Team members trade",
                body:
                  "Employees log in with a company invite code and trade credits on outcomes they believe in. The more confident they are, the more they stake.",
              },
              {
                step: "03",
                title: "Prices reveal the truth",
                body:
                  "Market prices reflect real collective belief — not what people say in meetings. When the outcome resolves, winners earn credits and climb the leaderboard.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex flex-col gap-3">
                <span className="text-silver font-black text-4xl">{step}</span>
                <h3 className="text-navy font-bold text-xl">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center mb-14">
            Built for teams
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏢",
                title: "Multi-company",
                body: "Each company gets a fully isolated environment — users, markets, and leaderboards never cross.",
              },
              {
                icon: "📊",
                title: "Live probabilities",
                body: "Powered by LMSR (Logarithmic Market Scoring Rule) — the same model used by top prediction markets globally.",
              },
              {
                icon: "🏆",
                title: "Leaderboard",
                body: "Ranked by total portfolio value, not just cash. Positions are marked to market in real time.",
              },
              {
                icon: "📈",
                title: "Portfolio & selling",
                body: "Users can sell positions before resolution. Full portfolio view with P&L tracking.",
              },
              {
                icon: "💡",
                title: "Market suggestions",
                body: "Team members can propose new markets. Admins review and launch with one click.",
              },
              {
                icon: "🔒",
                title: "Private by design",
                body: "Invite-code access. No public sign-up. Your company's data stays your company's data.",
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <span className="text-3xl">{icon}</span>
                <h3 className="text-navy font-bold text-lg mt-3 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-navy py-20 px-6 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to find out what your team really thinks?
          </h2>
          <p className="text-silver mb-10 text-lg">
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

      {/* ── Footer ── */}
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
