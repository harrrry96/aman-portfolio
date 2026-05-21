function Certification() {
  return (
    <section className="min-h-screen bg-[#020617] flex items-center justify-center px-6 py-32 overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full"></div>

      {/* MAIN CARD */}
      <div className="relative max-w-7xl w-full grid lg:grid-cols-2 rounded-[45px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.5)]">

        {/* LEFT SIDE */}
        <div className="relative h-full overflow-hidden">

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
            alt="Professional Workspace"
            className="w-full h-full object-cover hover:scale-110 transition duration-[2500ms]"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent"></div>

          {/* FLOATING GLASS CARD */}
          <div className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl px-8 py-6 shadow-2xl">

            <p className="text-slate-300 text-sm tracking-[3px] uppercase mb-2">

              Certified By

            </p>

            <h2 className="text-4xl font-black text-white tracking-wide">

              Coursera

            </h2>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative px-8 md:px-16 py-20 flex flex-col justify-center text-white">

          {/* TOP TAG */}
          <div className="inline-block mb-6">

            <span className="bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 px-5 py-2 rounded-full text-sm tracking-[4px] uppercase font-semibold">

              Professional Certification

            </span>

          </div>

          {/* TITLE */}
          <h1 className="text-5xl md:text-7xl font-black leading-[1] mb-8 tracking-tight">

            Excel
            <br />
            Data Analysis

          </h1>

          {/* DESCRIPTION */}
          <p className="text-slate-400 text-lg md:text-xl leading-10 mb-12 max-w-2xl">

            Successfully completed the Coursera certified project
            “Introduction to Data Analysis using Microsoft Excel”
            focused on dashboards, formulas, pivot tables,
            reporting, and professional data visualization.

          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5">

            {/* VIEW BUTTON */}
            <a
              href="/certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-cyan-400 hover:bg-cyan-300 text-black px-10 py-4 rounded-2xl text-lg font-black tracking-wide transition duration-300 hover:scale-105 shadow-[0_10px_40px_rgba(0,255,255,0.3)]">

                View Certificate

              </button>
            </a>

            {/* VISIT BUTTON */}
            <a
              href="https://www.coursera.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border border-white/15 bg-white/5 backdrop-blur-xl px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-black transition duration-300">

                Visit Coursera

              </button>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Certification;