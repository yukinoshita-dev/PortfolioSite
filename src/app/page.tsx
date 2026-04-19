'use client'

import { useEffect } from 'react'
import { siteData } from '@/lib/data'

/* ── Scroll Animations (reveal + skill bars) ── */
function useScrollAnimations() {
  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>('.reveal')
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80)
            revealObs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    revealEls.forEach((el) => revealObs.observe(el))

    const skillItems = document.querySelectorAll<HTMLElement>('.skill-item')
    const skillObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.skill-bar-fill').forEach((bar) => {
              const w = bar.style.width
              bar.style.width = '0'
              setTimeout(() => {
                bar.style.transition = 'width 1s ease'
                bar.style.width = w
              }, 200)
            })
            skillObs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )
    skillItems.forEach((el) => skillObs.observe(el))

    return () => {
      revealObs.disconnect()
      skillObs.disconnect()
    }
  }, [])
}

/* ── Nav ── */
function Nav() {
  useEffect(() => {
    const nav = document.getElementById('nav')!
    const handler = () => nav.classList.toggle('scrolled', window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav id="nav">
      <a href="#" className="nav-logo">./engineer</a>
      <ul className="nav-links">
        {['About', 'Skills', 'Works', 'Experience', 'Contact'].map((label) => (
          <li key={label}>
            <a href={`#${label.toLowerCase()}`}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

/* ── Hero ── */
function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-jp-large">福島</div>
      <span className="hero-counter">[ 01 / 05 ]</span>
      <div className="hero-content">
        <p className="hero-eyebrow">Freelance Software Engineer — {siteData.location}</p>
        <h1 className="hero-name">
          Full-Stack<br />
          <em>Engineer</em>
        </h1>
        <p className="hero-tagline">業務システムからクラウドインフラまで — TypeScriptで一気通貫</p>
        <div className="hero-meta">
          {[
            { label: 'Location', value: siteData.location },
            { label: 'Stack',    value: 'TypeScript / AWS' },
            { label: 'Status',   value: siteData.status },
          ].map(({ label, value }) => (
            <div key={label}>
              <strong>{label}</strong>
              {value}
            </div>
          ))}
        </div>
      </div>
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  )
}

/* ── About ── */
function About() {
  return (
    <section id="about">
      <div className="about-left reveal">
        <div className="section-label">About</div>
        <h2 className="about-heading">
          Code<br />with<br /><em>Purpose</em>
        </h2>
        <p className="about-body">{siteData.about}</p>
      </div>
      <div className="about-right reveal">
        {siteData.stats.map(({ num, label }) => (
          <div key={label} className="stat-card">
            <div className="stat-num">{num}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Skills ── */
function Skills() {
  return (
    <section id="skills">
      <div className="section-label">Skills</div>
      <div className="skills-grid reveal">
        {siteData.skills.map(({ category, name, level, label }) => (
          <div key={name} className="skill-item">
            <div className="skill-category">{category}</div>
            <div className="skill-name">{name}</div>
            <div className="skill-bar">
              <div className="skill-bar-fill" style={{ width: `${level}%` }} />
            </div>
            <div className="skill-level">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Works ── */
function Works() {
  return (
    <section id="works">
      <div className="section-label">Works</div>
      <div className="works-list">
        {siteData.works.map(({ num, title, desc, tags, link, linkLabel }) => (
          <div key={num} className="work-item reveal">
            <div className="work-num">{num}</div>
            <div>
              <h3 className="work-title">{title}</h3>
              <p className="work-desc">{desc}</p>
              <div className="work-tags">
                {tags.map((tag) => (
                  <span key={tag} className="work-tag">{tag}</span>
                ))}
              </div>
            </div>
            <a href={link} className="work-link">{linkLabel}</a>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Experience ── */
function Experience() {
  return (
    <section id="experience">
      <div className="section-label">Experience</div>
      <div className="exp-list">
        {siteData.experience.map(({ period, role, company, desc }) => (
          <div key={role} className="exp-item reveal">
            <div className="exp-period">{period}</div>
            <div>
              <div className="exp-role">{role}</div>
              <div className="exp-company">{company}</div>
              <div className="exp-desc">{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Contact ── */
function Contact() {
  return (
    <section id="contact">
      <p className="contact-label">Contact</p>
      <h2 className="contact-heading">
        Let&apos;s work<br /><em>together</em>
      </h2>
      <p className="contact-sub">
        案件のご相談・お見積もりはお気軽にどうぞ。<br />
        フルリモート対応可。初回は無料でご相談いただけます。
      </p>
      <a href={`mailto:${siteData.email}`} className="contact-email reveal">
        {siteData.email}
      </a>
      <div className="contact-links reveal">
        <a href={siteData.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href="#">Resume</a>
      </div>
    </section>
  )
}

/* ── Page ── */
export default function HomePage() {
  useScrollAnimations()

  useEffect(() => {
    const cursor = document.getElementById('cursor')!
    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }
    document.addEventListener('mousemove', move)

    const targets = document.querySelectorAll('a, button, .skill-item, .work-item')
    const addHover = () => cursor.classList.add('hover')
    const removeHover = () => cursor.classList.remove('hover')
    targets.forEach((t) => {
      t.addEventListener('mouseenter', addHover)
      t.addEventListener('mouseleave', removeHover)
    })

    return () => {
      document.removeEventListener('mousemove', move)
      targets.forEach((t) => {
        t.removeEventListener('mouseenter', addHover)
        t.removeEventListener('mouseleave', removeHover)
      })
    }
  }, [])

  return (
    <>
      <div id="cursor" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Works />
        <Experience />
        <Contact />
      </main>
      <footer>
        <span>© 2026 — {siteData.nameJp} / {siteData.name}</span>
        <span>Built with Next.js / TypeScript</span>
      </footer>
    </>
  )
}
