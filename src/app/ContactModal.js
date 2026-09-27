"use client";


import { Mail, X, ArrowUpRight } from "lucide-react";

import styles from "./page.module.css";
export default function ContactModal({action,condition}) {
  

  return (
    <>
      <button
        className={styles.contactButton}
        onClick={() => action(!condition)}
      >
        <Mail size={18} />
        Contact Me
      </button>

      
        <div
          className={styles.overlay}
          onClick={() => action(!condition)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => action(!condition)}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className={styles.icon}>
              <Mail size={24} />
            </div>

            <span className={styles.label}>
              GET IN TOUCH
            </span>

            <h2>Let's talk.</h2>

            <p>
              Have a project, opportunity, or just want to say
              hello? Feel free to reach out.
            </p>

            <a
              href="mailto:delwyn.fayad@gmail.com"
              className={styles.emailButton}
            >
              <Mail size={18} />
              delwyn.fayad@gmail.com
              <ArrowUpRight size={16} />


              
            </a>

            <a
              href="mailto:delwyn.adrian@binus.ac.id"
              className={styles.emailButton}
            >
              <Mail size={18} />
              delwyn.adrian@binus.ac.id
              <ArrowUpRight size={16} />


              
            </a>
          </div>
        </div>
      
    </>
  );
}