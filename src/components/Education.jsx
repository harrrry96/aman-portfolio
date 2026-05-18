function Education() {
  return (
    <section
      id="education"
      className="bg-[#081226] py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

       {/* TOP TITLE */}
<p className="text-yellow-400 text-center text-3xl md:text-4xl tracking-[6px] mb-6 font-bold relative -top-16">
  EDUCATION
</p>


        {/* EDUCATION GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* SCHOOL */}
          <div className="bg-[#111827] border border-yellow-400 rounded-[30px] p-10 text-center shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition duration-500">

            <div className="text-6xl mb-6">
              🎓
            </div>

            <h2 className="text-3xl font-bold text-white mb-4 leading-[45px]">
              M.A.I.C Anjanshaed
            </h2>

            <span className="text-yellow-400 text-xl font-semibold block mb-4">
              2018 - 2022
            </span>

            <p className="text-slate-300 text-lg">
              10th & 12th
            </p>

          </div>

          {/* BCA */}
          <div className="bg-[#111827] border border-yellow-400 rounded-[30px] p-10 text-center shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition duration-500">

            <div className="text-6xl mb-6">
              💻
            </div>

            <h2 className="text-3xl font-bold text-white mb-4 leading-[45px]">
              Shibli National College
            </h2>

            <span className="text-yellow-400 text-xl font-semibold block mb-4">
              2022 - 2025
            </span>

            <p className="text-slate-300 text-lg">
              Bachelor of Computer Applications
            </p>

          </div>

          {/* MCA */}
          <div className="bg-[#111827] border border-yellow-400 rounded-[30px] p-10 text-center shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition duration-500">

            <div className="text-6xl mb-6">
              🚀
            </div>

            <h2 className="text-3xl font-bold text-white mb-4 leading-[45px]">
              Integral University Lucknow
            </h2>

            <span className="text-yellow-400 text-xl font-semibold block mb-4">
              2025 - Present
            </span>

            <p className="text-slate-300 text-lg">
              Master of Computer Applications
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;