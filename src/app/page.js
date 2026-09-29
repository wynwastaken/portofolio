"use client";
import styles from "./page.module.css";
import Reveal from "./reveal";
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
  ArrowUpRight,
  Mail
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
import ContactModal from "./ContactModal";
import { FaDatabase } from "react-icons/fa6";
import {useState} from "react";
export default function Home() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [openModal,setOpenModal] = useState(false);
  return (
    <>
    {openModal && (<ContactModal action={setOpenModal} condition={openModal}></ContactModal>)}
      
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
        <Reveal>
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
                    I’m a student and developer with an interest in website development, data analysis, and business systems. I enjoy solving problems, exploring new technologies, and transforming data and complex requirements into simple, practical solutions.
                  </p>

                  <div className={styles.actions}>
                    
                    <button
                      className={styles.secondaryButton}
                      onClick={() => setOpenModal(true)}
                    >
                      Contact Me <Mail size={18} />
                    </button>
                    <a className={styles.secondaryButton}
                      download
                      href="/portofolio/CV_Delwyn-Fayad-Adrian.docx"
                    >
                      <Download size={19} />
                      Download CV
                    </a>
                  </div>
              </div>
            </div>
        </section>
        </Reveal>
        <Reveal>
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
        </Reveal>
        <Reveal>
              <section id="projects" className={styles.projects}>
                <div className={styles.projectsContent}>
                    <div className={styles.projectsHeader}>
                    <div>
                      <span className={styles.sectionLabel}>02. PROJECTS</span>
                      <h2>Featured Projects</h2>
                    </div>

                    
                  </div>

                  <div className={styles.projectGrid}>

                    {/* Wigistore V2 */}
      <article className={styles.projectCard}>
        <div className={styles.projectImage}>
          <img src="/portofolio/web2.webp" alt="Wigistore V2" />
        </div>

        <div className={styles.projectInfo}>
          <div className={styles.projectTitle}>
            <h3>Wigistore V2</h3>

            <a href="#" aria-label="View Wigistore V2 project">
              
            </a>
          </div>

          <p>
            Wigistore V2 merupakan proyek personal berupa toko digital untuk menjual berbagai produk digital. Website ini dibangun menggunakan React sebagai framework frontend, dilengkapi dengan Google Authentication untuk fitur Sign In dan Sign Up, serta terintegrasi dengan payment gateway Midtrans untuk mendukung proses pembayaran, serta dirancang responsive untuk berbagai ukuran layar.

          </p>

          <div className={styles.techTags}>
            <span>React</span>
            <span>JavaScript</span>
            <span>PHP</span>
            <span>MySQL</span>
            <span>Google Auth</span>
            <span>Midtrans</span>
            <span>Swiper.js</span>
          </div>
        </div>
      </article>

      {/* Wigistore V1 */}
      <article className={styles.projectCard}>
        <div className={styles.projectImage}>
          <img src="/portofolio/web1.webp" alt="Wigistore V1" />
        </div>

        <div className={styles.projectInfo}>
          <div className={styles.projectTitle}>
            <h3>Wigistore V1</h3>

            <a href="#" aria-label="View Wigistore V1 project">
              
            </a>
          </div>

          <p>
            Wigistore V1 merupakan proyek personal berupa toko digital
            yang dibangun secara pure vanilla menggunakan HTML, CSS, dan
            JavaScript. Website ini menggunakan PHP sebagai backend,
            MySQL sebagai database, terintegrasi dengan payment gateway
            Midtrans, serta dirancang responsive untuk berbagai ukuran layar.
          </p>

          <div className={styles.techTags}>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>PHP</span>
            <span>MySQL</span>
            <span>Midtrans</span>
          </div>
        </div>
      </article>
      {/* KenanginKopi */}
      <article className={styles.projectCard}>
        <div className={styles.projectImage}>
          <img src="/portofolio/web3.webp" alt="KenanginKopi" />
        </div>

        <div className={styles.projectInfo}>
          <div className={styles.projectTitle}>
            <h3>KenanginKopi</h3>

            <a href="#" aria-label="View KenanginKopi project">
              
            </a>
          </div>

          <p>
            KenanginKopi merupakan proyek kuliah berupa platform pemesanan
            kopi online. Website ini dibangun secara pure vanilla menggunakan
            HTML, CSS, dan JavaScript, dengan PHP sebagai backend serta MySQL
            sebagai database.
          </p>

          <div className={styles.techTags}>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>PHP</span>
            <span>MySQL</span>
          </div>
        </div>
      </article>
      {/* Hexfren */}
      <article className={styles.projectCard}>
        <div className={styles.projectImage}>
          <img src="/portofolio/web4.webp" alt="Hexfren" />
        </div>

        <div className={styles.projectInfo}>
          <div className={styles.projectTitle}>
            <h3>Hexfren</h3>

            <a href="#" aria-label="View Hexfren project">
              
            </a>
          </div>

          <p>
            Hexfren merupakan proyek personal berupa website business profile
            untuk memperkenalkan layanan dan identitas perusahaan. Website ini
            dibangun secara pure vanilla menggunakan HTML, CSS, dan JavaScript
            dengan seluruh konten dibuat secara hardcoded.
          </p>

          <div className={styles.techTags}>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>
      </article>
      {/* WhatsApp Order Notification */}
      <article className={styles.projectCard}>
        <div className={styles.projectImage}>
          <img
            src="/portofolio/web5.webp"
            alt="WhatsApp Order Notification"
          />
        </div>

        <div className={styles.projectInfo}>
          <div className={styles.projectTitle}>
            <h3>WhatsApp Order Notification</h3>

            <a href="#" aria-label="View WhatsApp Order Notification project">
              
            </a>
          </div>

          <p>
            Fitur notifikasi otomatis untuk Wigistore yang menggunakan webhook
            Midtrans untuk menerima informasi transaksi dan mengirimkan
            notifikasi pesanan baru kepada admin melalui WhatsApp Business
            Platform API.
          </p>

          <div className={styles.techTags}>
            <span>PHP</span>
            <span>Midtrans</span>
            <span>Webhook</span>
            <span>WhatsApp API</span>
            <span>cURL</span>
          </div>
        </div>
      </article>
      {/* Copyin System Analysis & Design */}
        <article className={styles.projectCard}>
          <div className={styles.projectImage}>
            <img
              src="/portofolio/web8.webp"
              alt="Copyin System Analysis & Design"
            />
          </div>

          <div className={styles.projectInfo}>
            <div className={styles.projectTitle}>
              <h3>Copyin System Analysis & Design</h3>

              <a
                href="#"
                aria-label="View Copyin System Analysis & Design project"
              >
                
              </a>
            </div>

            <p>
              Proyek analisis dan perancangan sistem untuk aplikasi pemesanan percetakan
              dan alat tulis. Proyek mencakup analisis proses bisnis, pemodelan sistem,
              perancangan alur aplikasi, serta spesifikasi fitur untuk pemesanan,
              pembayaran, dan riwayat transaksi.
            </p>

            <div className={styles.techTags}>
              <span>System Analysis</span>
              <span>DFD</span>
              <span>UML</span>
              <span>Use Case</span>
              <span>Figma</span>
            </div>
          </div>
        </article>
      {/* MyStyle UI/UX Design */}
      <article className={styles.projectCard}>
        <div className={styles.projectImage}>
          <img
            src="/portofolio/web6.webp"
            alt="MyStyle UI/UX Design"
          />
        </div>

        <div className={styles.projectInfo}>
          <div className={styles.projectTitle}>
            <h3>MyStyle UI/UX Design</h3>

            <a href="#" aria-label="View MyStyle UI/UX Design project">
              
            </a>
          </div>

          <p>
            Proyek desain UI/UX yang berfokus pada pemahaman kebutuhan dan perilaku
            pengguna. Proyek mencakup user research, pembuatan user persona, user
            journey, wireframe, desain high-fidelity, serta prototype interaktif.
          </p>

          <div className={styles.techTags}>
            <span>Figma</span>
            <span>UI/UX</span>
            <span>User Research</span>
            <span>User Persona</span>
            <span>Prototyping</span>
          </div>
        </div>
      </article>
      {/* Global Fashion Retail Sales Data Modeling */}
        <article className={styles.projectCard}>
          <div className={styles.projectImage}>
            <img
              src="/portofolio/web9.webp"
              alt="Global Fashion Retail Sales Data Modeling"
            />
          </div>

          <div className={styles.projectInfo}>
            <div className={styles.projectTitle}>
              <h3>Global Fashion Retail Sales Data Modeling</h3>

              <a
                href="#"
                aria-label="View Global Fashion Retail Sales Data Modeling project"
              >
                
              </a>
            </div>

            <p>
              Proyek analisis dan pemodelan data penjualan perusahaan fashion global yang
              mencakup proses pembersihan, transformasi, dan pemodelan data. Proyek juga
              menghasilkan dashboard untuk menganalisis KPI, tren penjualan, segmen
              pelanggan, performa toko, dan kategori produk.
            </p>

            <div className={styles.techTags}>
              <span>Microsoft Excel</span>
              <span>Power Query</span>
              <span>Power Pivot</span>
              <span>Data Analysis</span>
              <span>Dashboard</span>
            </div>
          </div>
        </article>
      {/* GoConcert Database System */}
      <article className={styles.projectCard}>
        <div className={styles.projectImage}>
          <img
            src="/portofolio/web7.webp"
            alt="GoConcert Database System"
          />
        </div>

        <div className={styles.projectInfo}>
          <div className={styles.projectTitle}>
            <h3>GoConcert Database System</h3>

            <a href="#" aria-label="View GoConcert Database System project">
             
            </a>
          </div>

          <p>
            Sistem database pemesanan tiket konser yang dirancang berdasarkan analisis
            kebutuhan bisnis dan pemodelan ERD. Sistem menggunakan Oracle SQL untuk
            mengelola struktur database, transaksi, query kompleks, serta kebutuhan
            analisis dan pelaporan.
          </p>
          <div className={styles.techTags}>
            <span>Oracle SQL</span>
            <span>DDL</span>
            <span>DML</span>
            <span>ERD</span>
            <span>Database</span>
          </div>
        </div>
      </article>
                
                    

                  </div>
                </div>
              </section>
        </Reveal>
        <Reveal>
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
                      <strong>Jan 2026 – Present</strong>
                      <span>1 year contract</span>
                    </div>

                    <div className={styles.timeline}>
                      <div className={styles.dot}></div>
                    </div>

                    <div className={styles.experienceInfo}>
                      <h3>Asisten Laboratorium Sistem Informasi</h3>

                      <p className={styles.company}>
                        BINUS University&nbsp; · &nbsp;Bekasi, Jawa Barat
                      </p>

                      <p className={styles.description}>
                        Membantu pelaksanaan praktikum dan memberikan bimbingan kepada
                        mahasiswa dalam Fundamental Database menggunakan Oracle, ISAD
                        (Information System Analysis and Design) untuk menganalisis dan
                        memodelkan sistem melalui Class Diagram, State Transition Diagram,
                        Sequence Diagram, dan Fishbone Diagram. Pada mata kuliah UI/UX,
                        mengajarkan penggunaan Figma serta proses perancangan UI dan
                        pembuatan prototype berdasarkan kebutuhan pengguna, termasuk
                        User Persona, User Journey, dan Task Flow.
                      </p>
                    </div>

                    <span className={styles.type}>
                      Part-time
                    </span>

                  </div>


                    
                  </div>

                </div>
              </section>
        </Reveal>
        <Reveal>
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

                        <div className={styles.toolCard}>
                          <FaDatabase className={styles.oracleIcon} />
                          <span>Oracle SQL</span>
                        </div>


                        <div className={styles.toolCard}>
                            <img
                               src="/portofolio/logo_table.webp"
                              alt="Tableau"
                              className={styles.tableauIcon}
                            />
                            <span>Tableau</span>
                          </div>


                          <div className={styles.toolCard}>
                              <img
                                src="/portofolio/logo_excel.webp"
                                alt="Microsoft Excel"
                                className={styles.excelIcon}
                              />
                              <span>Microsoft Excel</span>
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
                    
                      <div className={styles.toolCard}>
                      <FaDatabase className={styles.oracleIcon} />
                      <span>Oracle SQL</span>
                    </div>

                        <div className={styles.toolCard}>
                      <img
                        src="/portofolio/logo_table.webp"
                        alt="Tableau"
                        className={styles.tableauIcon}
                      />
                      <span>Tableau</span>
                    </div>


                    <div className={styles.toolCard}>
                      <img
                        src="/portofolio/logo_excel.webp"
                        alt="Microsoft Excel"
                        className={styles.excelIcon}
                      />
                      <span>Microsoft Excel</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </section>
          </Reveal>
        
      </div>
    </>
  );
}
