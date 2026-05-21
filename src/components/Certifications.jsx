function Certification() {
  return (
    <section
      id="certification"
      className="py-24 px-6 md:px-16 bg-[#0f172a] text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-14">
        Certifications
      </h2>

      <div className="max-w-xl mx-auto">
        <div className="bg-white/5 border border-cyan-400/20 backdrop-blur-lg rounded-3xl p-8 hover:-translate-y-2 transition duration-500 hover:shadow-cyan-500/30 hover:shadow-2xl">

          <h3 className="text-2xl font-semibold mb-3">
            Introduction to Data Analysis Using Microsoft Excel
          </h3>

          <p className="text-slate-300 mb-2">
            Coursera
          </p>

          <p className="text-cyan-400 font-medium mb-6">
            Completed Certificate
          </p>

          <a
            href="/certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold"
          >
            View Certificate
          </a>

        </div>
      </div>
    </section>
  );
}

export default Certification;