function Skills() {

  const skillCategories = [
    {
      title:"FRONTEND DEVELOPMENT",
      skills:[
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Bootstrap"
      ]
    },

    {
      title:"DATA ANALYTICS",
      skills:[
        "Python",
        "Excel",
        "Power BI",
        "Pandas",
        "NumPy"
      ]
    }
  ]

  return (
    <section id="skills" className="section">

      <div className="container-custom">

        {/* TOP */}

        <p className="section-top-title">
          EXPERTISE
        </p>

        <h1 className="section-title">
          Skills
        </h1>

        {/* GRID */}

        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(400px,1fr))",
            gap:"80px"
          }}
        >

          {skillCategories.map((category,index)=>(

            <div
              key={index}
              className="skill-category"
            >

              {/* CATEGORY TITLE */}

              <h2
                style={{
                  color:"#60a5fa",
                  fontSize:"24px",
                  letterSpacing:"5px",
                  marginBottom:"35px",
                  fontWeight:"700"
                }}
              >

                {category.title}

              </h2>

              {/* SKILL TAGS */}

              <div className="skill-tags">

                {category.skills.map((skill,i)=>(

                  <span key={i}>
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills