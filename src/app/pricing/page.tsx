export default function PricingPage() {
  return (
    <div style={{ minHeight: '100vh', padding: '80px 16px', background: 'white' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem' }}>Simple, Transparent Pricing</h1>
      <p style={{ textAlign: 'center', maxWidth: '32rem', margin: '0 auto 3rem', fontSize: '1.125rem', color: '#6b7280' }}>
        Choose the plan that fits your eco-friendly journey.
      </p>
      <div style={{ maxWidth: '64rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        <div style={{ border: '1px solid #d1d5db', padding: '1.5rem', borderRadius: '0.75rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Free</h2>
          <p style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>$0<span style={{ fontSize: '1rem', fontWeight: 'normal', color: '#6b7280' }}>/forever</span></p>
          <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>Perfect for trying out EcoRoute Planner</p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}><span style={{ color: '#16a34a' }}>✓</span><span style={{ fontSize: '0.875rem' }}>3 routes per month</span></li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}><span style={{ color: '#16a34a' }}>✓</span><span style={{ fontSize: '0.875rem' }}>Basic carbon calculations</span></li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}><span style={{ color: '#16a34a' }}>✓</span><span style={{ fontSize: '0.875rem' }}>Email support</span></li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}><span style={{ color: '#16a34a' }}>✓</span><span style={{ fontSize: '0.875rem' }}>Community access</span></li>
          </ul>
          <button style={{ width: '100%', padding: '0.625rem 1rem', background: '#e5e7eb', color: 'black', border: 'none', borderRadius: '0.5rem', fontWeight: '500', cursor: 'pointer' }}>Get Started</button>
        </div>
        <div style={{ border: '1px solid #2563eb', padding: '1.5rem', borderRadius: '0.75rem', position: 'relative', transform: 'scale(1.05)', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#2563eb', color: 'white', padding: '0.25rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '500' }}>Most Popular</div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Pro</h2>
          <p style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>$9.99<span style={{ fontSize: '1rem', fontWeight: 'normal', color: '#6b7280' }}>/month</span></p>
          <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>For eco-conscious commuters and travelers</p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}><span style={{ color: '#16a34a' }}>✓</span><span style={{ fontSize: '0.875rem' }}>Unlimited routes</span></li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}><span style={{ color: '#16a34a' }}>✓</span><span style={{ fontSize: '0.875rem' }}>Advanced carbon analytics</span></li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}><span style={{ color: '#16a34a' }}>✓</span><span style={{ fontSize: '0.875rem' }}>Priority support</span></li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}><span style={{ color: '#16a34a' }}>✓</span><span style={{ fontSize: '0.875rem' }}>Custom route preferences</span></li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}><span style={{ color: '#16a34a' }}>✓</span><span style={{ fontSize: '0.875rem' }}>Carbon offset tracking</span></li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}><span style={{ color: '#16a34a' }}>✓</span><span style={{ fontSize: '0.875rem' }}>Export reports</span></li>
          </ul>
          <button style={{ width: '100%', padding: '0.625rem 1rem', background: '#2563eb', color: 'white', border: 'none', borderRadius: '0.5rem', fontWeight: '500', cursor: 'pointer' }}>Start Free Trial</button>
        </div>
        <div style={{ border: '1px solid #d1d5db', padding: '1.5rem', borderRadius: '0.75rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Enterprise</h2>
          <p style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Custom<span style={{ fontSize: '1rem', fontWeight: 'normal', color: '#6b7280' }}>/pricing</span></p>
          <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>For businesses and organizations</p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}><span style={{ color: '#16a34a' }}>✓</span><span style={{ fontSize: '0.875rem' }}>Everything in Pro</span></li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}><span style={{ color: '#16a34a' }}>✓</span><span style={{ fontSize: '0.875rem' }}>Team management</span></li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}><span style={{ color: '#16a34a' }}>✓</span><span style={{ fontSize: '0.875rem' }}>API access</span></li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}><span style={{ color: '#16a34a' }}>✓</span><span style={{ fontSize: '0.875rem' }}>Custom integrations</span></li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}><span style={{ color: '#16a34a' }}>✓</span><span style={{ fontSize: '0.875rem' }}>Dedicated support</span></li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}><span style={{ color: '#16a34a' }}>✓</span><span style={{ fontSize: '0.875rem' }}>SLA guarantee</span></li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}><span style={{ color: '#16a34a' }}>✓</span><span style={{ fontSize: '0.875rem' }}>White-label options</span></li>
          </ul>
          <button style={{ width: '100%', padding: '0.625rem 1rem', background: '#e5e7eb', color: 'black', border: 'none', borderRadius: '0.5rem', fontWeight: '500', cursor: 'pointer' }}>Contact Sales</button>
        </div>
      </div>
    </div>
  );
}