import './index.css'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Menu, X } from 'lucide-react'

const accent = '#C8102E'
const dark = '#111827'
const mid = '#6b7280'
const border = '#e5e7eb'
const light = '#f9fafb'

// --- Animation variants ---
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, filter: 'blur(10px)', y: 16 },
  visible: {
    opacity: 1, filter: 'blur(0px)', y: 0,
    transition: { type: 'spring', bounce: 0.3, duration: 1.2 },
  },
}

// --- Nav ---
const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
]

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? `1px solid ${border}` : '1px solid transparent',
      transition: 'all 0.25s ease',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 32px', height: '62px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{ width: '28px', height: '28px', background: accent, borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '13px', fontWeight: '800', color: '#fff' }}>C</span>
          </div>
          <span style={{ fontSize: '15px', fontWeight: '700', color: dark, letterSpacing: '0.04em' }}>COOPRM</span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {navLinks.map(l => (
            <a key={l.label} href={l.href} style={{ fontSize: '13px', color: mid, fontWeight: '500', textDecoration: 'none' }}>{l.label}</a>
          ))}
          <a href="https://cooprm.vercel.app" target="_blank" rel="noreferrer" style={{
            background: accent, borderRadius: '8px',
            padding: '8px 20px', color: '#fff',
            fontSize: '13px', fontWeight: '700', textDecoration: 'none',
            boxShadow: `0 2px 12px ${accent}40`,
          }}>
            Get Started →
          </a>
        </nav>
      </div>
    </header>
  )
}

// --- Feature icons (SVG) ---
const icons = {
  affordable: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v2m0 8v2M9 9.5A2.5 2.5 0 0 1 12 8h.5a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 0 0 5H12a2.5 2.5 0 0 0 2.5-2"/>
    </svg>
  ),
  calendar: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
    </svg>
  ),
  contacts: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  simple: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 11 12 14 22 4"/>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
    </svg>
  ),
}

const features = [
  { icon: 'affordable', title: 'Finally Affordable', body: 'No hidden fees. No add-ons. No complicated tiers. Just $20/month, flat — everything included.' },
  { icon: 'calendar', title: 'Work Week Calendar', body: 'See your entire week at a glance. Schedule calls, tasks, and appointments so you stay disciplined and consistent.' },
  { icon: 'contacts', title: 'Contact Management Done Right', body: 'Organize your database by status, log activity, set follow-up reminders, and send personalized bulk emails — all in one place.' },
  { icon: 'simple', title: 'Simple by Design', body: 'No training videos. No confusion. Open it and you already know what to do. Built by an agent who got tired of over-engineered software.' },
]

const pricingItems = [
  'Full contact database management',
  'Work Week calendar & scheduling',
  'Action plans & follow-up reminders',
  'Bulk email broadcasts via Mailmeteor',
  'Deals & pipeline tracking',
  'Custom statuses & organization',
  'Cancel anytime — no questions asked',
]

// --- App ---
export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', color: dark, fontFamily: "'Inter', sans-serif" }}>
      <Nav />

      {/* HERO */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '140px 32px 80px', textAlign: 'left' }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">

          {/* Badge */}
          <motion.div variants={itemVariants} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: accent + '12', border: `1px solid ${accent}30`, borderRadius: '20px', padding: '6px 16px', marginBottom: '28px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: accent, display: 'inline-block' }} />
            <span style={{ fontSize: '12px', fontWeight: '600', color: accent, letterSpacing: '0.04em' }}>Built by a REALTOR®, for REALTORS®</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} style={{ fontSize: '58px', fontWeight: '900', lineHeight: 1.08, letterSpacing: '-0.04em', marginBottom: '22px', color: dark, maxWidth: '640px' }}>
            The CRM that actually<br />
            <span style={{ color: accent }}>makes sense.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p variants={itemVariants} style={{ fontSize: '18px', color: mid, lineHeight: 1.75, maxWidth: '520px', marginBottom: '40px', fontWeight: '400' }}>
            COOPRM is the simple, affordable CRM built by a real estate agent who got tired of overpriced, overcomplicated software that gets in the way of closing deals.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="https://cooprm.vercel.app" target="_blank" rel="noreferrer" style={{
              background: accent, borderRadius: '10px',
              padding: '13px 30px', color: '#fff',
              fontSize: '15px', fontWeight: '700', textDecoration: 'none',
              boxShadow: `0 4px 20px ${accent}44`, display: 'inline-block',
            }}>
              Start for $20/month →
            </a>
            <a href="#features" style={{
              background: '#fff', border: `1px solid ${border}`,
              borderRadius: '10px', padding: '13px 28px', color: dark,
              fontSize: '15px', fontWeight: '600', textDecoration: 'none', display: 'inline-block',
            }}>
              See how it works
            </a>
          </motion.div>

          <motion.p variants={itemVariants} style={{ fontSize: '12px', color: '#9ca3af', marginTop: '14px' }}>
            No contracts. Cancel anytime.
          </motion.p>
        </motion.div>

        {/* App screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', marginTop: '64px' }}
        >
          {/* Fade overlay at bottom */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '160px',
            background: 'linear-gradient(to top, #ffffff, transparent)',
            zIndex: 2, pointerEvents: 'none', borderRadius: '0 0 16px 16px',
          }} />
          <div style={{
            background: '#f3f4f6',
            borderRadius: '16px',
            border: `1px solid ${border}`,
            padding: '6px',
            boxShadow: '0 24px 64px rgba(0,0,0,0.10)',
          }}>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
              alt="COOPRM dashboard"
              style={{ width: '100%', borderRadius: '12px', display: 'block', aspectRatio: '16/9', objectFit: 'cover' }}
            />
          </div>
        </motion.div>
      </section>

      {/* PAIN POINTS */}
      <section style={{ background: light, borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}`, padding: '72px 32px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p style={{ textAlign: 'center', fontSize: '12px', fontWeight: '700', color: '#9ca3af', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '36px' }}>Sound familiar?</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
            {[
              { label: 'Overpriced subscriptions eating into your commission' },
              { label: 'Complicated CRMs that take weeks to learn' },
              { label: 'Constant add-ons just to get basic features' },
              { label: "Tools that don't match how agents actually work" },
            ].map((p, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', background: '#fff', border: `1px solid ${border}`, borderRadius: '10px', padding: '18px 20px', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: accent, flexShrink: 0 }} />
                <span style={{ fontSize: '14px', color: '#374151', fontWeight: '500', lineHeight: 1.5 }}>{p.label}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: '16px', color: dark, fontWeight: '700', marginTop: '40px' }}>
            There's a better way. <span style={{ color: accent }}>We built it.</span>
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ maxWidth: '920px', margin: '0 auto', padding: '100px 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{ fontSize: '12px', fontWeight: '700', color: accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>What you get</p>
          <h2 style={{ fontSize: '40px', fontWeight: '800', letterSpacing: '-0.03em', color: dark, lineHeight: 1.15 }}>
            Everything you need.<br />Nothing you don't.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ background: '#fff', border: `1px solid ${border}`, borderRadius: '14px', padding: '28px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
            >
              <div style={{ width: '50px', height: '50px', background: accent + '10', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                {icons[f.icon]}
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: dark, marginBottom: '10px' }}>{f.title}</h3>
              <p style={{ fontSize: '14px', color: mid, lineHeight: 1.75 }}>{f.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ background: light, borderTop: `1px solid ${border}`, padding: '100px 32px' }}>
        <div style={{ maxWidth: '460px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', fontWeight: '700', color: accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Pricing</p>
          <h2 style={{ fontSize: '40px', fontWeight: '800', letterSpacing: '-0.03em', color: dark, marginBottom: '48px', lineHeight: 1.15 }}>
            One plan.<br />No surprises.
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ background: '#fff', border: `1px solid ${border}`, borderRadius: '18px', padding: '40px 36px', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: accent }} />
            <div style={{ marginBottom: '6px' }}>
              <span style={{ fontSize: '52px', fontWeight: '900', color: dark, letterSpacing: '-0.04em' }}>$20</span>
              <span style={{ fontSize: '16px', color: mid, fontWeight: '500' }}>/month</span>
            </div>
            <p style={{ fontSize: '14px', color: mid, marginBottom: '32px' }}>Everything included. Always.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px', textAlign: 'left' }}>
              {pricingItems.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: accent + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span style={{ fontSize: '14px', color: '#374151', fontWeight: '500' }}>{item}</span>
                </div>
              ))}
            </div>
            <a href="https://cooprm.vercel.app" target="_blank" rel="noreferrer" style={{
              display: 'block', background: accent, borderRadius: '10px',
              padding: '14px 32px', color: '#fff', fontSize: '15px', fontWeight: '700',
              boxShadow: `0 4px 20px ${accent}40`, textAlign: 'center', textDecoration: 'none',
            }}>
              Get Started Today →
            </a>
            <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '14px' }}>No contracts. Cancel anytime.</p>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ maxWidth: '700px', margin: '0 auto', padding: '100px 32px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 style={{ fontSize: '44px', fontWeight: '900', letterSpacing: '-0.04em', color: dark, marginBottom: '16px', lineHeight: 1.1 }}>
            Stop paying more.<br />Start doing <span style={{ color: accent }}>more.</span>
          </h2>
          <p style={{ fontSize: '16px', color: mid, marginBottom: '40px', lineHeight: 1.75 }}>
            Join agents who ditched the expensive, complicated CRMs and finally have a tool that works the way they do.
          </p>
          <a href="https://cooprm.vercel.app" target="_blank" rel="noreferrer" style={{
            display: 'inline-block', background: accent, borderRadius: '10px',
            padding: '16px 40px', color: '#fff', fontSize: '16px', fontWeight: '700',
            boxShadow: `0 4px 28px ${accent}44`, textDecoration: 'none',
          }}>
            Start for $20/month →
          </a>
          <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '14px' }}>No contracts. Cancel anytime.</p>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${border}`, padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '920px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '22px', height: '22px', background: accent, borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '10px', fontWeight: '800', color: '#fff' }}>C</span>
          </div>
          <span style={{ fontSize: '13px', fontWeight: '700', color: mid }}>COOPRM</span>
        </div>
        <span style={{ fontSize: '12px', color: '#9ca3af' }}>© {new Date().getFullYear()} COOPRM. All rights reserved.</span>
      </footer>
    </div>
  )
}
