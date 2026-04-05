import './index.css'

const accent = '#C8102E'
const dark = '#111827'
const mid = '#6b7280'
const light = '#f9fafb'
const border = '#e5e7eb'

const FeatureIcons = {
  affordable: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v2m0 8v2M9 9.5A2.5 2.5 0 0 1 12 8h.5a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 0 0 5H12a2.5 2.5 0 0 0 2.5-2"/>
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  complex: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 8v4l3 3"/>
    </svg>
  ),
  addons: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  ),
  mismatch: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
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

const painPoints = [
  { icon: 'money', text: 'Overpriced subscriptions eating into your commission' },
  { icon: 'complex', text: 'Complicated CRMs that take weeks to learn' },
  { icon: 'addons', text: 'Constant add-ons just to get basic features' },
  { icon: 'mismatch', text: "Tools that don't match how agents actually work" },
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
        background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${border}`,
        padding: '0 40px', height: '62px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '28px', height: '28px', background: accent, borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '13px', fontWeight: '800', color: '#fff' }}>C</span>
          </div>
          <span style={{ fontSize: '15px', fontWeight: '700', color: dark, letterSpacing: '0.04em' }}>COOPRM</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          <a href="#features" style={{ fontSize: '13px', color: mid, fontWeight: '500' }}>Features</a>
          <a href="#pricing" style={{ fontSize: '13px', color: mid, fontWeight: '500' }}>Pricing</a>
          <a href="https://cooprm.vercel.app" target="_blank" rel="noreferrer" style={{
            background: accent, borderRadius: '7px',
            padding: '8px 20px', color: '#fff',
            fontSize: '13px', fontWeight: '700',
          }}>
            Get Started →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        maxWidth: '960px', margin: '0 auto',
        padding: '96px 40px 80px',
        textAlign: 'center',
      }}>
        {/* Glossy COOPRM wordmark */}
        <div style={{ marginBottom: '36px' }}>
          <span style={{
            fontSize: '88px',
            fontWeight: '900',
            letterSpacing: '-0.05em',
            lineHeight: 1,
            display: 'inline-block',
            background: `linear-gradient(160deg, #1a1a1a 0%, #C8102E 35%, #ff6b6b 50%, #C8102E 65%, #111827 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 2px 12px rgba(200,16,46,0.25))',
            fontFamily: "'Inter', sans-serif",
          }}>
            COOPRM
          </span>
        </div>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: accent + '12', border: `1px solid ${accent}30`,
          borderRadius: '20px', padding: '6px 16px', marginBottom: '28px',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: accent, display: 'inline-block' }} />
          <span style={{ fontSize: '12px', fontWeight: '600', color: accent, letterSpacing: '0.04em' }}>Built by a REALTOR®, for REALTORS®</span>
        </div>

        <h1 style={{
          fontSize: '48px', fontWeight: '900', lineHeight: 1.08,
          letterSpacing: '-0.04em', marginBottom: '22px', color: dark,
        }}>
          The CRM that actually<br />
          <span style={{ color: accent }}>makes sense.</span>
        </h1>

        <p style={{
          fontSize: '18px', color: mid, lineHeight: 1.75,
          maxWidth: '560px', margin: '0 auto 40px', fontWeight: '400',
        }}>
          COOPRM is the simple, affordable CRM built by a real estate agent who got tired of overpriced, overcomplicated software that gets in the way instead of helping you close deals.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://cooprm.vercel.app" target="_blank" rel="noreferrer" style={{
            background: accent, borderRadius: '10px',
            padding: '14px 32px', color: '#fff',
            fontSize: '15px', fontWeight: '700',
            boxShadow: `0 4px 20px ${accent}40`,
            display: 'inline-block',
          }}>
            Start for $20/month →
          </a>
          <a href="#features" style={{
            background: '#ffffff', border: `1px solid ${border}`,
            borderRadius: '10px', padding: '14px 32px', color: dark,
            fontSize: '15px', fontWeight: '600', display: 'inline-block',
          }}>
            See how it works
          </a>
        </div>
        <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '14px' }}>No contracts. Cancel anytime.</p>
      </section>

      {/* Pain points */}
      <section style={{
        background: light,
        borderTop: `1px solid ${border}`,
        borderBottom: `1px solid ${border}`,
        padding: '64px 40px',
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p style={{ textAlign: 'center', fontSize: '12px', fontWeight: '700', color: '#9ca3af', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '36px' }}>
            Sound familiar?
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
            {painPoints.map((p, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                background: '#ffffff', border: `1px solid ${border}`,
                borderRadius: '10px', padding: '18px 20px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}>
                <div style={{ width: '36px', height: '36px', background: accent + '10', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {PainIcons[p.icon]}
                </div>
                <span style={{ fontSize: '14px', color: '#374151', fontWeight: '500', lineHeight: 1.5 }}>{p.text}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: '16px', color: dark, fontWeight: '700', marginTop: '40px' }}>
            There's a better way. <span style={{ color: accent }}>We built it.</span>
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ maxWidth: '920px', margin: '0 auto', padding: '100px 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{ fontSize: '12px', fontWeight: '700', color: accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>What you get</p>
          <h2 style={{ fontSize: '40px', fontWeight: '800', letterSpacing: '-0.03em', color: dark, lineHeight: 1.15 }}>
            Everything you need.<br />Nothing you don't.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: '#ffffff', border: `1px solid ${border}`,
              borderRadius: '14px', padding: '28px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}>
              <div style={{ width: '50px', height: '50px', background: accent + '10', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                {FeatureIcons[f.icon]}
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: dark, marginBottom: '10px' }}>{f.title}</h3>
              <p style={{ fontSize: '14px', color: mid, lineHeight: 1.75 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ background: light, borderTop: `1px solid ${border}`, padding: '100px 40px' }}>
        <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', fontWeight: '700', color: accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Pricing</p>
          <h2 style={{ fontSize: '40px', fontWeight: '800', letterSpacing: '-0.03em', color: dark, marginBottom: '48px', lineHeight: 1.15 }}>
            One plan.<br />No surprises.
          </h2>

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

            <a href="https://cooprm.vercel.app" target="_blank" rel="noreferrer" style={{
              display: 'block', background: accent, borderRadius: '10px',
              padding: '14px 32px', color: '#fff',
              fontSize: '15px', fontWeight: '700',
              boxShadow: `0 4px 20px ${accent}40`,
              textAlign: 'center',
            }}>
              Get Started Today →
            </a>
            <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '14px' }}>No contracts. Cancel anytime.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ maxWidth: '700px', margin: '0 auto', padding: '100px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '44px', fontWeight: '900', letterSpacing: '-0.04em', color: dark, marginBottom: '16px', lineHeight: 1.1 }}>
          Stop paying more.<br />Start doing <span style={{ color: accent }}>more.</span>
        </h2>
        <p style={{ fontSize: '16px', color: mid, marginBottom: '40px', lineHeight: 1.75 }}>
          Join agents who ditched the expensive, complicated CRMs and finally have a tool that works the way they do.
        </p>
        <a href="https://cooprm.vercel.app" target="_blank" rel="noreferrer" style={{
          display: 'inline-block', background: accent,
          borderRadius: '10px', padding: '16px 40px',
          color: '#fff', fontSize: '16px', fontWeight: '700',
          boxShadow: `0 4px 28px ${accent}44`,
        }}>
          Start for $20/month →
        </a>
        <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '14px' }}>No contracts. Cancel anytime.</p>
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
