import { useEffect, useRef, useState, useMemo } from 'react'
import './index.css'

function BeamBackground({ count = 55 }) {
  const beams = useMemo(() => (
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      width: `${Math.floor(Math.random() * 2) + 1}px`,
      delay: `${(Math.random() * 6).toFixed(2)}s`,
      rise: `${(Math.random() * 4 + 5).toFixed(2)}s`,
    }))
  ), [count])

  return (
    <div className="hero-scene">
      <div className="hero-grid" />
      <div className="hero-floor" />
      {beams.map(b => (
        <div
          key={b.id}
          className="beam"
          style={{
            left: b.left,
            width: b.width,
            '--delay': b.delay,
            '--rise': b.rise,
          }}
        />
      ))}
    </div>
  )
}

const accent = '#C8102E'
const dark = '#111827'
const mid = '#6b7280'
const light = '#f9fafb'
const border = '#e5e7eb'

/* ─── Scroll-reveal wrapper ─────────────────────────────────────── */
function Reveal({ children, delay = 0, direction = 'up', style = {} }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect() }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const startTransform = {
    up:    'translateY(36px)',
    down:  'translateY(-36px)',
    left:  'translateX(-36px)',
    right: 'translateX(36px)',
  }[direction]

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : startTransform,
        transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

/* ─── Icons ──────────────────────────────────────────────────────── */
const FeatureIcons = {
  affordable: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  calendar: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <path d="M16 2v4M8 2v4M3 10h18"/>
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
    </svg>
  ),
  contacts: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  simple: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 11 12 14 22 4"/>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
    </svg>
  ),
}

const PainIcons = {
  money: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  complex: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 8v4l3 3"/>
    </svg>
  ),
  addons: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  ),
  mismatch: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12"/>
    </svg>
  ),
}

const features = [
  { icon: 'affordable', title: 'Finally Affordable', body: 'No hidden fees. No expensive add-ons. No complicated tiers. Just $20/month, flat — everything included.' },
  { icon: 'calendar', title: 'Work Week Calendar', body: 'See your entire week at a glance. Schedule calls, tasks, and appointments with time blocks so you stay on a disciplined, consistent schedule.' },
  { icon: 'contacts', title: 'Contact Management Done Right', body: 'Organize your database by status, log activity, set follow-up reminders, and send personalized bulk emails — all in one place.' },
  { icon: 'simple', title: 'Simple by Design', body: 'No training videos. No onboarding calls. No confusion. Open it and you already know what to do. Built by an agent who got tired of over-engineered software.' },
]

const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', color: dark }}>

      {/* Nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(200,16,46,0.2)',
        padding: '0 40px', height: '62px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '28px', height: '28px', background: accent, borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '13px', fontWeight: '800', color: '#fff' }}>C</span>
          </div>
          <span style={{ fontSize: '15px', fontWeight: '700', color: '#ffffff', letterSpacing: '0.04em' }}>COOPRM</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          <a href="#features" style={{ fontSize: '13px', color: '#9ca3af', fontWeight: '500' }}>Features</a>
          <a href="#pricing" style={{ fontSize: '13px', color: '#9ca3af', fontWeight: '500' }}>Pricing</a>
          <a href="https://cooprm.vercel.app" target="_blank" rel="noreferrer" className="glossy-btn" style={{ fontSize: '13px', padding: '8px 20px', borderRadius: '7px' }}>
            Get Started →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        position: 'relative',
        background: '#0a0000',
        padding: '110px 40px 120px',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        <BeamBackground count={55} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ marginBottom: '20px' }}>
            <span className="glossy-wordmark">COOPRM</span>
          </div>

          <p style={{ fontSize: '20px', fontWeight: '800', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', marginBottom: '28px', letterSpacing: '-0.01em' }}>
            "Built by a Real Estate Agent, for Real Estate Agents"
          </p>

          <h1 style={{
            fontSize: '52px', fontWeight: '900', lineHeight: 1.08,
            letterSpacing: '-0.04em', marginBottom: '22px', color: '#ffffff',
          }}>
            The Future of <span style={{ color: accent }}>CRM's.</span>
          </h1>

          <p style={{
            fontSize: '18px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75,
            maxWidth: '560px', margin: '0 auto 40px', fontWeight: '400',
          }}>
            COOPRM is the simple, affordable CRM built by a real estate agent who got tired of overpriced, overcomplicated software that gets in the way instead of helping you close deals.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://cooprm.vercel.app" target="_blank" rel="noreferrer" className="glossy-btn">
              Start for $20/month →
            </a>
            <a href="#features" style={{
              background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: '10px', padding: '14px 32px', color: '#ffffff',
              fontSize: '15px', fontWeight: '600', display: 'inline-block',
            }}>
              See how it works
            </a>
          </div>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '14px' }}>No contracts. Cancel anytime.</p>
        </div>
      </section>

      {/* Pain points */}
      <section style={{ background: '#0d0d0f', padding: '80px 40px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ fontSize: '11px', fontWeight: '700', color: '#4b5563', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
                Sound familiar?
              </p>
              <h2 style={{ fontSize: '38px', fontWeight: '900', letterSpacing: '-0.03em', color: '#ffffff', lineHeight: 1.15 }}>
                Other CRMs are <span style={{ color: accent }}>robbing you.</span>
              </h2>
              <p style={{ fontSize: '16px', color: '#6b7280', marginTop: '14px', lineHeight: 1.7, maxWidth: '520px', margin: '14px auto 0' }}>
                You're paying too much, learning too much, and getting too little. Real estate agents deserve better than corporate software built for someone else.
              </p>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            {[
              { icon: 'money', title: 'Overpriced', body: 'Most CRMs charge $50–$300/month. For what? Features you never use and add-ons that nickel-and-dime you every step.' },
              { icon: 'complex', title: 'Overcomplicated', body: 'Hours of setup. Days of training videos. You went into real estate to sell homes — not to become a software expert.' },
              { icon: 'addons', title: 'Constant Upsells', body: 'Email tools. Dialer integrations. Reporting dashboards. Every basic feature is an extra charge.' },
              { icon: 'mismatch', title: 'Built for Someone Else', body: "Enterprise CRMs are designed for 500-person sales teams. You're one agent. It shouldn't feel like you're flying a jet to get groceries." },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <div style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px', padding: '24px', height: '100%',
                }}>
                  <div style={{ width: '38px', height: '38px', background: accent + '20', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                    {PainIcons[p.icon]}
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>{p.title}</div>
                  <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.7 }}>{p.body}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div style={{ textAlign: 'center', marginTop: '48px', padding: '28px', background: accent + '14', border: `1px solid ${accent}40`, borderRadius: '14px' }}>
              <p style={{ fontSize: '20px', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em' }}>
                There's a better way. <span style={{ color: accent }}>We built it.</span>
              </p>
              <p style={{ fontSize: '14px', color: '#9ca3af', marginTop: '8px' }}>$20/month. Everything included. No gotchas.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Founder */}
      <section style={{ background: '#ffffff', padding: '100px 40px', borderTop: `1px solid ${border}` }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '72px', flexWrap: 'wrap' }}>
          {/* Photos */}
          <Reveal direction="left" style={{ flexShrink: 0, display: 'flex', gap: '16px' }}>
            <div style={{
              width: '200px', height: '340px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
              background: '#f3f4f6',
            }}>
              <img src="/IMG_2335.jpg" alt="Cooper Alan" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }} />
            </div>
            <div style={{
              width: '200px', height: '340px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
              background: '#f3f4f6',
              marginTop: '32px',
            }}>
              <img src="/IMG_3450.jpg" alt="Cooper Alan at HomeSmart" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
          </Reveal>

          {/* Text */}
          <Reveal direction="right" delay={100} style={{ flex: 1, minWidth: '280px' }}>
            <p style={{ fontSize: '11px', fontWeight: '700', color: accent, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>From the founder</p>
            <blockquote style={{
              fontSize: '24px', fontWeight: '800', lineHeight: 1.35,
              letterSpacing: '-0.03em', color: dark,
              marginBottom: '24px',
            }}>
              "I was spending $150 a month on a CRM I hated. So I built one I actually wanted to use."
            </blockquote>
            <p style={{ fontSize: '15px', color: mid, lineHeight: 1.8, marginBottom: '16px' }}>
              I'm Cooper — a REALTOR® in Northeast Ohio. I got tired of clunky, overpriced software that felt like it was built for a Fortune 500 company, not a solo agent trying to stay organized and close deals. COOPRM is what I wish existed when I started.
            </p>
            <p style={{ fontSize: '15px', color: mid, lineHeight: 1.8, marginBottom: '28px' }}>
              Most people call me Coop. CRM already had a C in it, so I thought — just add COOP and RM. Simple, catchy, easy to remember. And what better way to put your name on something you built than to make it part of the product itself.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div>
                <div style={{ fontSize: '15px', fontWeight: '700', color: dark }}>Cooper Alan</div>
                <div style={{ fontSize: '13px', color: mid }}>REALTOR® · Founder of COOPRM</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ background: '#ffffff', padding: '100px 40px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '64px', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <p style={{ fontSize: '11px', fontWeight: '700', color: accent, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>What you get</p>
                <h2 style={{ fontSize: '44px', fontWeight: '900', letterSpacing: '-0.04em', color: dark, lineHeight: 1.08 }}>
                  Everything you need.<br />
                  <span style={{ color: '#9ca3af', fontWeight: '400' }}>Nothing you don't.</span>
                </h2>
              </div>
              <p style={{ fontSize: '15px', color: mid, lineHeight: 1.7, maxWidth: '320px' }}>
                Four reasons thousands of agents are switching to a CRM that actually fits their workflow.
              </p>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {features.map((f, i) => (
              <Reveal key={i} delay={i * 120} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div style={{
                  background: i === 0 ? '#0d0d0f' : i === 3 ? '#0d0d0f' : '#f9fafb',
                  borderRadius: '20px',
                  padding: '36px',
                  border: i === 0 || i === 3 ? 'none' : `1px solid ${border}`,
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%',
                }}>
                  <div style={{
                    position: 'absolute', top: '-10px', right: '20px',
                    fontSize: '120px', fontWeight: '900', lineHeight: 1,
                    color: i === 0 || i === 3 ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.10)',
                    letterSpacing: '-0.06em', userSelect: 'none', pointerEvents: 'none',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{
                    width: '48px', height: '48px',
                    background: i === 0 || i === 3 ? accent + '25' : accent + '12',
                    borderRadius: '14px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '24px',
                  }}>
                    {FeatureIcons[f.icon]}
                  </div>
                  <h3 style={{
                    fontSize: '20px', fontWeight: '800',
                    color: i === 0 || i === 3 ? '#ffffff' : dark,
                    marginBottom: '12px', letterSpacing: '-0.02em',
                  }}>
                    {f.title}
                  </h3>
                  <p style={{
                    fontSize: '14px', lineHeight: 1.75,
                    color: i === 0 || i === 3 ? '#6b7280' : mid,
                  }}>
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ background: light, borderTop: `1px solid ${border}`, padding: '100px 40px' }}>
        <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <p style={{ fontSize: '12px', fontWeight: '700', color: accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Pricing</p>
            <h2 style={{ fontSize: '40px', fontWeight: '800', letterSpacing: '-0.03em', color: dark, marginBottom: '48px', lineHeight: 1.15 }}>
              One plan.<br />No surprises.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div style={{
              background: '#ffffff', border: `1px solid ${border}`,
              borderRadius: '18px', padding: '40px 36px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: accent }} />

              <div style={{ marginBottom: '6px' }}>
                <span style={{ fontSize: '52px', fontWeight: '900', color: dark, letterSpacing: '-0.04em' }}>$20</span>
                <span style={{ fontSize: '16px', color: mid, fontWeight: '500' }}>/month</span>
              </div>
              <p style={{ fontSize: '14px', color: mid, marginBottom: '32px' }}>Everything included. Always.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px', textAlign: 'left' }}>
                {[
                  'Full contact database management',
                  'Work Week calendar & scheduling',
                  'Action plans & follow-up reminders',
                  'Bulk email broadcasts via Mailmeteor',
                  'Deals & pipeline tracking',
                  'Custom statuses & organization',
                  'Cancel anytime — no questions asked',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: accent + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckIcon />
                    </div>
                    <span style={{ fontSize: '14px', color: '#374151', fontWeight: '500' }}>{item}</span>
                  </div>
                ))}
              </div>

              <a href="https://cooprm.vercel.app" target="_blank" rel="noreferrer" className="glossy-btn" style={{ display: 'block', textAlign: 'center' }}>
                Get Started Today →
              </a>
              <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '14px' }}>No contracts. Cancel anytime.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ maxWidth: '700px', margin: '0 auto', padding: '100px 40px', textAlign: 'center' }}>
        <Reveal>
          <h2 style={{ fontSize: '44px', fontWeight: '900', letterSpacing: '-0.04em', color: dark, marginBottom: '16px', lineHeight: 1.1 }}>
            Stop paying more.<br />Start doing <span style={{ color: accent }}>more.</span>
          </h2>
          <p style={{ fontSize: '16px', color: mid, marginBottom: '40px', lineHeight: 1.75 }}>
            Join agents who ditched the expensive, complicated CRMs and finally have a tool that works the way they do.
          </p>
          <a href="https://cooprm.vercel.app" target="_blank" rel="noreferrer" className="glossy-btn" style={{ fontSize: '16px', padding: '16px 40px' }}>
            Start for $20/month →
          </a>
          <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '14px' }}>No contracts. Cancel anytime.</p>
        </Reveal>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: `1px solid ${border}`,
        padding: '28px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        maxWidth: '920px', margin: '0 auto',
      }}>
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
