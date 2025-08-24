import React from "react";

export default function Portfolio() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>Guru Viranjan Reddy Dhorshala</h1>
        <p>Graphic Designer & Front-End Developer</p>
        <p>
          📍 Chennai | 📧 guruviranjan@gmail.com | 📞 +91 9515556184 |{" "}
          <a href="https://github.com/gurureddy06" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </header>

      {/* Summary */}
      <section style={{ marginBottom: "30px" }}>
        <h2>Summary</h2>
        <p>
          Creative Graphic Designer & Front-End Developer with strong expertise
          in building responsive, user-friendly web applications and designing
          visually compelling graphics. Skilled in Angular, TypeScript, HTML,
          CSS, and modern UI frameworks along with Adobe Creative Suite,
          Typography, and Sports Design. Passionate about blending aesthetic
          design with functional development, ensuring seamless digital
          experiences.
        </p>
      </section>

      {/* Education */}
      <section style={{ marginBottom: "30px" }}>
        <h2>Education</h2>
        <ul>
          <li>
            <b>SRM Institute of Science and Technology</b> – B.Tech CSE | GPA: 8.7/10 (2021–2025)
          </li>
          <li>
            <b>Narayana Junior College</b> – Class XII | 91.4% (2019–2021)
          </li>
          <li>
            <b>Nagarjuna Model School</b> – Class X | GPA: 10/10 (2018–2019)
          </li>
        </ul>
      </section>

      {/* Work Experience */}
      <section style={{ marginBottom: "30px" }}>
        <h2>Work Experience</h2>
        <ul>
          <li>
            <b>Software Engineer – Tata Communications</b> (Jul 2025 – Present)  
            <ul>
              <li>Developed reusable UI/UX components aligned with branding.</li>
              <li>Working on Tata Communications’ B2B Website development.</li>
            </ul>
          </li>
          <li>
            <b>Frontend Developer Intern – BridgeLabz</b> (Mar 2025 – Jun 2025)  
            <ul>
              <li>Developed Bookstore frontend app using Angular & Material UI.</li>
              <li>Optimized app performance and deployed to Vercel.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section style={{ marginBottom: "30px" }}>
        <h2>Projects</h2>
        <ul>
          <li>
            <b>Sports Branding & Merchandise Design</b> (Jan–Feb 2025)  
            – Designed logos, jerseys, posters & mockups with Illustrator & Photoshop.
          </li>
          <li>
            <b>Fundoo Notes Application</b> (Jan–Feb 2025)  
            – Built with Angular, CRUD operations, API integration & deployed on Vercel.
          </li>
        </ul>
      </section>

      {/* Skills */}
      <section>
        <h2>Skills</h2>
        <p>
          <b>Graphic Design:</b> Photoshop, Typography, Figma, Adobe XD  
          <br />
          <b>Front-End:</b> HTML, CSS, JavaScript, TypeScript, Angular, jQuery, Sass
        </p>
      </section>

      <footer style={{ textAlign: "center", marginTop: "40px", color: "gray" }}>
        © 2025 Guru Viranjan Reddy Dhorshala
      </footer>
    </div>
  );
}
