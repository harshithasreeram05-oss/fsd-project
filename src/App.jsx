
import { useState, useEffect } from "react";
import "./App.css";


const papers = [
  {
    id: 1,
    title: "Introduction to Programming",
    exam: "JNTUK",
    category: "University",
    branch: "CSE",
    regulation: "R23",
    semester: "1-1",
    year: "2024",
    type: "Semester Examination",
    code: "R231107",
    source: "StudentsBizz – PDF copy",
    url: "https://www.studentsbizz.com/Previous-Question-Papers/jntuk-R-23-btech-Previous-Question-Papers/R23-btech-1-1/INTRODUCTION-TO-PROGRAMMING-JAN-2024%20(R23).pdf",
  },
  {
    id: 2,
    title: "GATE Computer Science",
    exam: "GATE",
    category: "Competitive",
    branch: "CSE",
    regulation: "All",
    semester: "All",
    year: "2025",
    type: "Previous Year Paper – CS1",
    code: "CS-2025",
    source: "Official GATE website – IIT Guwahati",
    url: "https://gate2026.iitg.ac.in/doc/download/2025/CS12025.pdf",
  },
  {
    id: 3,
    title: "GATE Computer Science",
    exam: "GATE",
    category: "Competitive",
    branch: "CSE",
    regulation: "All",
    semester: "All",
    year: "2024",
    type: "Previous Year Paper – CS1",
    code: "CS-2024",
    source: "Official GATE website – IIT Guwahati",
    url: "https://gate2026.iitg.ac.in/doc/download/2024/CS124S5.pdf",
  },
  {
    id: 4,
    title: "GATE Computer Science",
    exam: "GATE",
    category: "Competitive",
    branch: "CSE",
    regulation: "All",
    semester: "All",
    year: "2023",
    type: "Previous Year Paper",
    code: "CS-2023",
    source: "Official GATE website – IIT Guwahati",
    url: "https://gate2026.iitg.ac.in/doc/download/2023/cs_2023.pdf",
  },
  {
    id: 5,
    title: "GATE Computer Science",
    exam: "GATE",
    category: "Competitive",
    branch: "CSE",
    regulation: "All",
    semester: "All",
    year: "2022",
    type: "Previous Year Paper",
    code: "CS-2022",
    source: "Official GATE website – IIT Guwahati",
    url: "https://gate2026.iitg.ac.in/doc/download/2022/cs_2022.pdf",
  },
];


function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [exam, setExam] = useState("All");
  const [branch, setBranch] = useState("All");
  const [regulation, setRegulation] = useState("All");
  const [semester, setSemester] = useState("All");
  const [year, setYear] = useState("All");
  const [backendStatus, setBackendStatus] = useState("Checking...");
const [authMode, setAuthMode] = useState(null);
useEffect(() => {
  fetch("http://localhost:5000/")
    .then((response) => {
      if (!response.ok) throw new Error("Backend error");
      return response.text();
    })
    .then(() => setBackendStatus("Connected"))
    .catch(() => setBackendStatus("Disconnected"));
}, []);

  const filteredPapers = papers.filter((paper) => {
    return (
      (category === "All" || paper.category === category) &&
      (exam === "All" || paper.exam === exam) &&
      (branch === "All" || paper.branch === branch) &&
      (regulation === "All" || paper.regulation === regulation) &&
      (semester === "All" || paper.semester === semester) &&
      (year === "All" || paper.year === year) &&
      (
        paper.title + " " + paper.exam + " " +
        paper.code + " " + paper.year
      ).toLowerCase().includes(search.toLowerCase())
    );
  });

  function resetFilters() {
    setSearch("");
    setCategory("All");
    setExam("All");
    setBranch("All");
    setRegulation("All");
    setSemester("All");
    setYear("All");
  }

  return (
    <div className="app">

      <nav className="navbar">
        <a href="#home" className="brand">
          <div className="brand-icon">EV</div>
          <span>Exam<span className="brand-blue">Vault</span></span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#universities">University Exams</a>
          <a href="#competitive">Competitive Exams</a>
          <a href="#papers">Question Papers</a>
        </div>

        <div className="nav-actions">
<button
  className="login-btn"
  onClick={() => setAuthMode("login")}
>
  Login
</button>

<button
  className="register-btn"
  onClick={() => setAuthMode("register")}
>
  Register
</button>
        </div>
      </nav>

      <main id="home">

        <section className="hero">
          <div className="hero-content">
            <div className="announcement">
              <span className="announcement-dot"></span>
              YOUR COMPLETE EXAMINATION RESOURCE LIBRARY
            </div>

            <h1>
              Every Exam.
              <br />
              Every Paper.
              <br />
              <span>One Vault.</span>
            </h1>

            <p className="hero-description">
              Discover previous year question papers, prepare
              smarter and take your next step towards success.
              Everything you need, all in one place.
            </p>

            <div className="search-box">
              <span className="search-icon">⌕</span>
              <input
                placeholder="Search subjects, exams or years..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button onClick={() =>
                document.getElementById("papers")?.scrollIntoView({
                  behavior: "smooth"
                })
              }>
                Search
              </button>
            </div>

            <div className="hero-note">
              <span>✓</span> University papers
              <span>✓</span> Competitive exams
              <span>✓</span> Easy access
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>
            <div className="document-card">
              <div className="document-top">
                <div className="document-logo">EV</div>
                <span>EXAM VAULT</span>
                <span className="document-badge">PAPER</span>
              </div>
              <div className="document-heading">QUESTION PAPER</div>
              <div className="document-line short"></div>
              <div className="document-line"></div>
              <div className="document-line"></div>
              <div className="document-question">
                <b>01.</b>
                <div>
                  <div className="document-line"></div>
                  <div className="document-line short"></div>
                </div>
              </div>
              <div className="document-question">
                <b>02.</b>
                <div>
                  <div className="document-line"></div>
                  <div className="document-line short"></div>
                </div>
              </div>

{authMode && (
  <div className="auth-overlay" onClick={() => setAuthMode(null)}>
    <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
      <button
        className="auth-close"
        onClick={() => setAuthMode(null)}
      >
        ×
      </button>

      <div className="brand-icon">EV</div>

      <h2>
        {authMode === "login" ? "Welcome Back!" : "Create Your Account"}
      </h2>

      <p>
        {authMode === "login"
          ? "Login to your Exam Vault account."
          : "Join Exam Vault and access your exam resources."}
      </p>

      <form onSubmit={(e) => {
        e.preventDefault();
        alert("Demo form only. Account functionality will be added later.");
      }}>
        {authMode === "register" && (
          <input type="text" placeholder="Full Name" required />
        )}

        <input type="email" placeholder="Email Address" required />

        <input
          type="password"
          placeholder="Password"
          minLength="6"
          required
        />

        <button type="submit" className="register-btn">
          {authMode === "login" ? "Login" : "Create Account"}
        </button>
      </form>

      <p className="auth-switch">
        {authMode === "login"
          ? "Don't have an account? "
          : "Already have an account? "}

        <span onClick={() =>
          setAuthMode(authMode === "login" ? "register" : "login")
        }>
          {authMode === "login" ? "Register" : "Login"}
        </span>
      </p>
    </div>
  </div>
)}

              <div className="document-footer">
                <span>EXAMINATION ARCHIVE</span>
                <span>2025</span>
              </div>
            </div>

            <div className="floating-card floating-top">
              <span className="floating-icon">📚</span>
              <div>
                <b>Question Papers</b>
                <small>All in one place</small>
              </div>
            </div>

            <div className="floating-card floating-bottom">
              <span className="floating-icon">✓</span>
              <div>
                <b>Study Smarter</b>
                <small>Prepare with confidence</small>
              </div>
            </div>
          </div>
        </section>

        <section className="categories-section" id="universities">
          <div className="section-heading">
            <div>
              <span className="eyebrow">EXPLORE OUR LIBRARY</span>
              <h2>Find papers for your <span>exam.</span></h2>
              <p>Choose your examination category.</p>
            </div>
          </div>

          <div className="category-grid">
            <a href="#papers" className="category-card university-card"
              onClick={() => setCategory("University")}>
              <div className="category-icon">🎓</div>
              <h3>University Exams</h3>
              <p>Previous year papers for universities and colleges.</p>
              <span className="category-link">Explore papers →</span>
            </a>

            <a href="#papers" className="category-card competitive-card"
              onClick={() => setCategory("Competitive")}>
              <div className="category-icon">🏆</div>
              <h3>Competitive Exams</h3>
              <p>Prepare for entrance tests and national examinations.</p>
              <span className="category-link">Explore papers →</span>
            </a>
          </div>
        </section>

        <section className="popular-section" id="competitive">
          <div className="section-heading">
            <div>
              <span className="eyebrow">DISCOVER EXAMINATIONS</span>
              <h2>Popular <span>examinations.</span></h2>
              <p>Choose an examination to explore its papers.</p>
            </div>
          </div>

          <div className="exam-grid">
            {[
              ["JNTUK", "University", "🎓"],
              ["GATE", "Engineering", "⚙️"],
              ["UPSC", "Civil Services", "🏛️"],
              ["NEET", "Medical", "🩺"],
              ["JEE", "Engineering Entrance", "📐"],
              ["SSC", "Government Jobs", "📋"],
            ].map(([name, type, icon]) => (
              <button className="exam-card" key={name}
                onClick={() => {
                  setCategory(name === "JNTUK" ? "University" : "Competitive");
                  setExam(name);
                  document.getElementById("papers")?.scrollIntoView({
                    behavior: "smooth"
                  });
                }}>
                <div className="exam-icon">{icon}</div>
                <div>
                  <h3>{name}</h3>
                  <span>{type}</span>
                </div>
                <span className="exam-arrow">↗</span>
              </button>
            ))}
          </div>
        </section>

        {/* QUESTION PAPER LIBRARY */}

        <section className="papers-section" id="papers">
          <div className="section-heading">
            <div>
              <span className="eyebrow">EXAM VAULT COLLECTION</span>
              <h2>Question Paper <span>Library.</span></h2>
              <p>Filter examinations and find the papers you need.</p>
            </div>
          </div>

          <div className="library-panel">

            <div className="library-search">
              <input
                placeholder="Search by subject, exam or paper code..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button onClick={resetFilters}>Reset filters</button>
            </div>

            <div className="library-filters">

              <label>
                Examination category
                <select value={category} onChange={(e) => {
                  setCategory(e.target.value);
                  setExam("All");
                  setRegulation("All");
                  setSemester("All");
                }}>
                  <option value="All">All categories</option>
                  <option value="University">University Exams</option>
                  <option value="Competitive">Competitive Exams</option>
                </select>
              </label>

              <label>
                University / Examination
                <select value={exam} onChange={(e) => setExam(e.target.value)}>
                  <option value="All">All examinations</option>
                  {category !== "Competitive" &&
                    <option value="JNTUK">JNTUK</option>}
                  {category !== "University" &&
                    <option value="GATE">GATE</option>}
                </select>
              </label>

              <label>
                Branch
                <select value={branch} onChange={(e) => setBranch(e.target.value)}>
                  <option value="All">All branches</option>
                  <option value="CSE">Computer Science (CSE)</option>
                </select>
              </label>

              <label>
                Regulation
                <select value={regulation} onChange={(e) => setRegulation(e.target.value)}>
                  <option value="All">All regulations</option>
                  <option value="R23">R23</option>
                  <option value="R20">R20</option>
                  <option value="R19">R19</option>
                  <option value="R16">R16</option>
                </select>
              </label>

              <label>
                Semester
                <select value={semester} onChange={(e) => setSemester(e.target.value)}>
                  <option value="All">All semesters</option>
                  <option value="1-1">1-1</option>
                  <option value="1-2">1-2</option>
                  <option value="2-1">2-1</option>
                  <option value="2-2">2-2</option>
                  <option value="3-1">3-1</option>
                  <option value="3-2">3-2</option>
                  <option value="All">All years (GATE)</option>
                </select>
              </label>

              <label>
                Examination year
                <select value={year} onChange={(e) => setYear(e.target.value)}>
                  <option value="All">All years</option>
                  {Array.from({ length: 20 }, (_, i) => 2026 - i).map((y) => (
                    <option key={y} value={String(y)}>{y}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="library-results-heading">
            <h3>Available question papers</h3>
            <span>{filteredPapers.length} results</span>
          </div>

          <div className="paper-grid">
            {filteredPapers.length > 0 ? (
              filteredPapers.map((paper) => (
                <div className="paper-card" key={paper.id}>
                  <div className="paper-top">
                    <div className="pdf-icon">PDF</div>
                    <span className="paper-category">{paper.category}</span>
                  </div>

                  <h3>{paper.title}</h3>
                  <p>{paper.exam} · {paper.code}</p>

                  <div className="paper-details">
                    {paper.category === "University" && (
                      <>
                        <span>Branch: {paper.branch}</span>
                        <span>Regulation: {paper.regulation}</span>
                        <span>Semester: {paper.semester}</span>
                      </>
                    )}
                    <span>Year: {paper.year}</span>
                    <span>{paper.type}</span>
                  </div>

                  <div className="paper-source">
                    Source: {paper.source}
                  </div>

                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="paper-button paper-link"
                  >
                  Open PDF ↗
                  </a>
                </div>
              ))
            ) : (
              <div className="empty-message">
                <h3>No papers found</h3>
                <p>Try changing your filters or search terms.</p>
                <button className="register-btn" onClick={resetFilters}>
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="cta-section">
          <div>
            <span className="eyebrow">BE PART OF THE COMMUNITY</span>
            <h2>Have a question paper?</h2>
            <p>Help other students prepare better by contributing papers.</p>
          </div>
          <button className="cta-button" disabled>
            Upload Papers — Coming Soon
          </button>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="brand">
          <div className="brand-icon">EV</div>
          <span>Exam<span className="brand-blue">Vault</span></span>
        </a>
        <p>Your examination resources, all in one place.</p>
        <span className="copyright">
          © 2026 Exam Vault. All rights reserved.
        </span>
      </footer>

    </div>
  );
}

export default App;
