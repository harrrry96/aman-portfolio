function Certification() {
  return (
    <section className="min-h-screen bg-[#020817] flex items-center justify-center px-6 pt-36 pb-20 overflow-hidden">

      {/* MAIN CONTAINER */}
      <div className="relative max-w-7xl w-full rounded-[45px] overflow-hidden border border-white/10 bg-gradient-to-br from-[#08152f] to-[#020817] shadow-[0_0_60px_rgba(0,255,255,0.08)]">

        {/* GLOW EFFECT */}
        <div className="absolute top-[-120px] right-[-120px] w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

        <div className="grid lg:grid-cols-2 items-center">

          {/* LEFT IMAGE */}
          <div className="relative h-full overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
              alt="Professional Workspace"
              className="w-full h-full object-cover hover:scale-110 transition duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#020817]/40"></div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="relative z-10 px-8 md:px-16 py-20 text-white">

            {/* SMALL TOP TEXT */}
            <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-6 font-medium">

              Coursera Certification

            </p>

            {/* MAIN TITLE */}
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8">

              Data Analysis
              <br />
              Certificate

            </h1>

            {/* DESCRIPTION */}
            <p className="text-slate-400 text-lg md:text-xl leading-10 mb-10 max-w-2xl">

              Successfully completed the Coursera certification
              “Introduction to Data Analysis using Microsoft Excel”
              focused on pivot tables, formulas, reporting,
              data visualization, and analytical insights.

            </p>

            {/* INFO BOX */}
            <div className="flex flex-wrap gap-5 mb-10">

              <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-lg">

                <p className="text-slate-400 text-sm mb-1">
                  Platform
                </p>

                <h3 className="text-xl font-semibold">
                  Coursera
                </h3>

              </div>

              <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-lg">

                <p className="text-slate-400 text-sm mb-1">
                  Completed
                </p>

                <h3 className="text-xl font-semibold">
                  May 2026
                </h3>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">

              {/* VIEW BUTTON */}
              <a
                href="/certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-cyan-400 hover:bg-cyan-300 text-black px-10 py-4 rounded-2xl text-lg font-bold transition duration-300 hover:scale-105 shadow-lg shadow-cyan-500/20">

                  View Certificate

                </button>
              </a>

              {/* COURSERA BUTTON */}
              <a
                href="https://www.coursera.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border border-white/20 bg-white/5 backdrop-blur-lg px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-black transition duration-300">

                  Visit Coursera

                </button>
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Certification;