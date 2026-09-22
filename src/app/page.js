"use client";
import styles from "./page.module.css";
import {
  House,
  UserRound,
  FolderKanban,
  Wrench,
   BriefcaseBusiness,
  Download,
  GraduationCap,
  Code2,
  Lightbulb,
  UsersRound,
  ArrowUpRight
} from "lucide-react";


import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaPython,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiXampp,
  SiMysql
 
} from "react-icons/si";

import { FaDatabase } from "react-icons/fa6";
import {useState} from "react";
export default function Home() {
  const [activeSection, setActiveSection] = useState("introduction");

  return (
    <>
      <div>
        <div className={styles.navbar}>
          <a href="#introduction" >
          <div className={styles.navItem + (activeSection === "introduction" ? " " + styles.active : "")} onClick={() => setActiveSection("introduction")}>
            
            <House className={styles.navIcon} size={18} strokeWidth={activeSection === "introduction"?2.5:1.5} /> Introduction
            
          </div>
          </a>
          <a href="#about">
          <div className={styles.navItem + (activeSection === "about" ? " " + styles.active : "")} onClick={() => setActiveSection("about")}>
            
            <UserRound className={styles.navIcon} size={18} strokeWidth={activeSection === "about"?2.5:1.5} /> About
           
          </div>
           </a>
           <a href="#projects">
          <div className={styles.navItem + (activeSection === "projects" ? " " + styles.active : "")} onClick={() => setActiveSection("projects")}>
            
            <FolderKanban className={styles.navIcon} size={18} strokeWidth={activeSection === "projects"?2.5:1.5} /> Projects
            
          </div>
          </a>
          <a href="#experience">
          <div className={styles.navItem + (activeSection === "experience" ? " " + styles.active : "")} onClick={() => setActiveSection("experience")}>
            
            <BriefcaseBusiness className={styles.navIcon} size={18} strokeWidth={activeSection === "experience"?2.5:1.5} /> Experience
            
          </div>
          </a>
          <a href="#tools">
          <div className={styles.navItem + (activeSection === "tools" ? " " + styles.active : "")} onClick={() => setActiveSection("tools")}>
            
            <Wrench className={styles.navIcon} size={18} strokeWidth={activeSection === "tools"?2.5:1.5} /> Tools
            
          </div>
          </a>
          
        </div>
        <section id="introduction" className={styles.introduction}>
          <div className={styles.introContent}>
            <div className={styles.profileImage}>
              <img src="/portofolio/foto_delwyn.webp" alt="Delwyn Fayad" />
            </div>

            <div>

                <p className={styles.greeting}>Hello,i'm</p>

                <h1>Delwyn Fayad</h1>

                <h2>Building ideas into real products.</h2>

                <p className={styles.description}>
                  I’m a student and developer with an interest in software development, data analysis, and business systems. I enjoy solving problems, exploring new technologies, and transforming data and complex requirements into simple, practical solutions.
                </p>

                <div className={styles.actions}>
                  

                  <button className={styles.secondaryButton}>
                    <Download size={19} />
                    Download CV
                  </button>
                </div>
            </div>
          </div>
        </section>
        <section id="about" className={styles.about}>
            <div className={styles.aboutContent}>

            <div className={styles.aboutText}>
              <span className={styles.sectionLabel}>01. ABOUT</span>

              <h2>More Than Just a Student</h2>

              <p>
                I'm a Business Information Technology student at BINUS University
                with a passion for web development, data, and technology. I enjoy
                learning new tools, working on real projects, and solving problems
                that create value. I'm always open to new opportunities,
                collaborations, and challenges.
              </p>

              <div className={styles.quote}>
                "Consistent growth leads to meaningful results."
              </div>
            </div>


            <div className={styles.aboutCards}>

              <div className={styles.aboutCard}>
                <div className={styles.cardIcon}>
                  <GraduationCap size={22} strokeWidth={1.8} />
                </div>

                <div>
                  <h3>Education</h3>
                  <p>
                    BINUS University<br />
                    Business Information Technology
                  </p>
                </div>
              </div>


              <div className={styles.aboutCard}>
                <div className={styles.cardIcon}>
                  <Code2 size={22} strokeWidth={1.8} />
                </div>

                <div>
                  <h3>Interests</h3>
                  <p>
                    Web Development,<br />
                    Data, and AI
                  </p>
                </div>
              </div>


              <div className={styles.aboutCard}>
                <div className={styles.cardIcon}>
                  <Lightbulb size={22} strokeWidth={1.8} />
                </div>

                <div>
                  <h3>Mindset</h3>
                  <p>
                    Always learning,<br />
                    always improving
                  </p>
                </div>
              </div>


              <div className={styles.aboutCard}>
                <div className={styles.cardIcon}>
                  <UsersRound size={22} strokeWidth={1.8} />
                </div>

                <div>
                  <h3>Open to</h3>
                  <p>
                    New opportunities<br />
                    and collaborations
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>
        <section id="projects" className={styles.projects}>
          <div className={styles.projectsContent}>
              <div className={styles.projectsHeader}>
              <div>
                <span className={styles.sectionLabel}>02. PROJECTS</span>
                <h2>Featured Projects</h2>
              </div>

              <a href="#projects" className={styles.viewAll}>
                View All Projects
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className={styles.projectGrid}>

              {/* Wigistore */}
              <article className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <img src="/projects/wigistore.png" alt="Wigistore" />
                </div>

                <div className={styles.projectInfo}>
                  <div className={styles.projectTitle}>
                    <h3>Wigistore</h3>

                    <a href="#" aria-label="View Wigistore project">
                      <ArrowUpRight size={17} />
                    </a>
                  </div>

                  <p>
                    E-commerce website for digital products
                    (top up, game keys, vouchers, and more).
                  </p>

                  <div className={styles.techTags}>
                    <span>React</span>
                    <span>PHP</span>
                    <span>MySQL</span>
                  </div>
                </div>
              </article>


              {/* PantauEmiten */}
              <article className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <img src="/projects/pantauemiten.png" alt="PantauEmiten" />
                </div>

                <div className={styles.projectInfo}>
                  <div className={styles.projectTitle}>
                    <h3>PantauEmiten</h3>

                    <a href="#" aria-label="View PantauEmiten project">
                      <ArrowUpRight size={17} />
                    </a>
                  </div>

                  <p>
                    Web app to track Indonesian stock news
                    with WhatsApp notifications.
                  </p>

                  <div className={styles.techTags}>
                    <span>React</span>
                    <span>PHP</span>
                    <span>Web Scraper</span>
                  </div>
                </div>
              </article>


              {/* Grocify */}
              <article className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <img src="/projects/grocify.png" alt="Grocify" />
                </div>

                <div className={styles.projectInfo}>
                  <div className={styles.projectTitle}>
                    <h3>Grocify</h3>

                    <a href="#" aria-label="View Grocify project">
                      <ArrowUpRight size={17} />
                    </a>
                  </div>

                  <p>
                    AI-powered grocery tracker to help manage
                    daily expenses and inventory.
                  </p>

                  <div className={styles.techTags}>
                    <span>React</span>
                    <span>Python</span>
                    <span>AI/ML</span>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </section>
        <section id="experience" className={styles.experience}>
          <div className={styles.experienceContent}>

            <div className={styles.experienceHeader}>
              <div>
                <span className={styles.sectionLabel}>
                  03. EXPERIENCE
                </span>

                <h2>Work Experience</h2>
              </div>

              <a
                href="/resume.pdf"
                className={styles.resumeLink}
              >
                View Full Resume
                <span>→</span>
              </a>
            </div>


            <div className={styles.experienceList}>

              {/* Experience 1 */}
              <div className={styles.experienceItem}>

                <div className={styles.experienceDate}>
                  <strong>Jun 2025 – Aug 2025</strong>
                  <span>3 months</span>
                </div>

                <div className={styles.timeline}>
                  <div className={styles.dot}></div>
                </div>

                <div className={styles.experienceInfo}>
                  <h3>Web Developer Intern</h3>

                  <p className={styles.company}>
                    TechSolution Indonesia&nbsp; · &nbsp;Remote
                  </p>

                  <p className={styles.description}>
                    Developed and maintained internal web applications,
                    collaborated with the product team, and improved
                    system performance.
                  </p>
                </div>

                <span className={styles.type}>
                  Internship
                </span>

              </div>


              
            </div>

          </div>
        </section>
        <section id="tools" className={styles.tools}>
            <div className={styles.toolsContent}>

              <span className={styles.sectionLabel}>
                04. TOOLS
              </span>

              <h2>Tools I Work With</h2>

              <div className={styles.toolsSlider}>
                <div className={styles.toolsTrack}>

                  {/* LIST 1 */}
                  <div className={styles.toolsList}>

                    <div className={styles.toolCard}>
                      <FaHtml5 className={styles.htmlIcon} />
                      <span>HTML</span>
                    </div>

                    <div className={styles.toolCard}>
                      <FaCss3Alt className={styles.cssIcon} />
                      <span>CSS</span>
                    </div>

                    <div className={styles.toolCard}>
                      <FaJs className={styles.jsIcon} />
                      <span>JavaScript</span>
                    </div>

                    <div className={styles.toolCard}>
                      <FaReact className={styles.reactIcon} />
                      <span>React</span>
                    </div>

                    <div className={styles.toolCard}>
                      <FaPhp className={styles.phpIcon} />
                      <span>PHP</span>
                    </div>

                    <div className={styles.toolCard}>
                      <SiMysql className={styles.mysqlIcon} />
                      <span>MySQL</span>
                    </div>

                    <div className={styles.toolCard}>
                      <SiXampp className={styles.xamppIcon} />
                      <span>XAMPP</span>
                    </div>

                    <div className={styles.toolCard}>
                      <FaPython className={styles.pythonIcon} />
                      <span>Python</span>
                    </div>

                    <div className={styles.toolCard}>
                      <FaDocker className={styles.dockerIcon} />
                      <span>Docker</span>
                    </div>

                    <div className={styles.toolCard}>
                      <FaGitAlt className={styles.gitIcon} />
                      <span>Git</span>
                    </div>

                  </div>


                  {/* LIST 2 - DUPLICATE */}
                  <div className={styles.toolsList} aria-hidden="true">

                    <div className={styles.toolCard}>
                      <FaHtml5 className={styles.htmlIcon} />
                      <span>HTML</span>
                    </div>

                    <div className={styles.toolCard}>
                      <FaCss3Alt className={styles.cssIcon} />
                      <span>CSS</span>
                    </div>

                    <div className={styles.toolCard}>
                      <FaJs className={styles.jsIcon} />
                      <span>JavaScript</span>
                    </div>

                    <div className={styles.toolCard}>
                      <FaReact className={styles.reactIcon} />
                      <span>React</span>
                    </div>

                    <div className={styles.toolCard}>
                      <FaPhp className={styles.phpIcon} />
                      <span>PHP</span>
                    </div>

                    <div className={styles.toolCard}>
                      <SiMysql className={styles.mysqlIcon} />
                      <span>MySQL</span>
                    </div>

                    <div className={styles.toolCard}>
                      <SiXampp className={styles.xamppIcon} />
                      <span>XAMPP</span>
                    </div>

                    <div className={styles.toolCard}>
                      <FaPython className={styles.pythonIcon} />
                      <span>Python</span>
                    </div>

                    <div className={styles.toolCard}>
                      <FaDocker className={styles.dockerIcon} />
                      <span>Docker</span>
                    </div>

                    <div className={styles.toolCard}>
                      <FaGitAlt className={styles.gitIcon} />
                      <span>Git</span>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </section>
        
      </div>
    </>
  );
}
