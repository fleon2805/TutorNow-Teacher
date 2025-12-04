import React, { useState } from 'react';
import { User, Lock, Mail } from 'lucide-react';

export default function LoginView({ onLogin }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { onLogin(); setLoading(false); }, 1000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'float 8s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'float 8s ease-in-out infinite',
        animationDelay: '2s'
      }}></div>

      {/* Main Card */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '450px'
      }}>
        {/* Glow Effect */}
        <div style={{
          position: 'absolute',
          inset: '-2px',
          background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
          borderRadius: '24px',
          opacity: 0.3,
          filter: 'blur(20px)',
          zIndex: -1
        }}></div>

        {/* Card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,27,75,0.8) 100%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(6,182,212,0.2)',
          borderRadius: '24px',
          padding: '48px 40px',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '64px',
              height: '64px',
              background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
              borderRadius: '16px',
              marginBottom: '16px',
              boxShadow: '0 0 30px rgba(6,182,212,0.5)',
              fontSize: '32px'
            }}>
              🎓
            </div>
            <h1 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: '0 0 8px 0'
            }}>
              TutorNow
            </h1>
            <p style={{
              color: '#94a3b8',
              fontSize: '14px',
              margin: 0
            }}>
              Gestiona tus clases en un solo lugar
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Email Input */}
            <div style={{ position: 'relative' }}>
              <label style={{
                display: 'block',
                fontSize: '12px',
                fontWeight: 'bold',
                color: '#cbd5e1',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Usuario o Email
              </label>
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center'
              }}>
                <Mail size={18} style={{
                  position: 'absolute',
                  left: '16px',
                  color: '#06b6d4',
                  zIndex: 10
                }} />
                <input
                  type="email"
                  placeholder="ejemplo@tutor.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(15,23,42,0.8)',
                    border: '1px solid rgba(6,182,212,0.3)',
                    borderRadius: '12px',
                    padding: '14px 16px 14px 44px',
                    color: '#fff',
                    fontSize: '14px',
                    transition: 'all 200ms ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(6,182,212,0.6)';
                    e.target.style.boxShadow = '0 0 20px rgba(6,182,212,0.2)';
                    e.target.style.background = 'rgba(15,23,42,0.95)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(6,182,212,0.3)';
                    e.target.style.boxShadow = 'none';
                    e.target.style.background = 'rgba(15,23,42,0.8)';
                  }}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div style={{ position: 'relative' }}>
              <label style={{
                display: 'block',
                fontSize: '12px',
                fontWeight: 'bold',
                color: '#cbd5e1',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Contraseña
              </label>
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center'
              }}>
                <Lock size={18} style={{
                  position: 'absolute',
                  left: '16px',
                  color: '#06b6d4',
                  zIndex: 10
                }} />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(15,23,42,0.8)',
                    border: '1px solid rgba(6,182,212,0.3)',
                    borderRadius: '12px',
                    padding: '14px 16px 14px 44px',
                    color: '#fff',
                    fontSize: '14px',
                    transition: 'all 200ms ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(6,182,212,0.6)';
                    e.target.style.boxShadow = '0 0 20px rgba(6,182,212,0.2)';
                    e.target.style.background = 'rgba(15,23,42,0.95)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(6,182,212,0.3)';
                    e.target.style.boxShadow = 'none';
                    e.target.style.background = 'rgba(15,23,42,0.8)';
                  }}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: '100%',
                background: loading
                  ? 'linear-gradient(135deg, rgba(6,182,212,0.5) 0%, rgba(59,130,246,0.5) 100%)'
                  : 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '16px',
                padding: '16px 24px',
                borderRadius: '12px',
                border: 'none',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 300ms ease',
                boxShadow: '0 0 30px rgba(6,182,212,0.4)',
                marginTop: '8px',
                opacity: loading ? 0.7 : 1,
                transform: loading ? 'scale(0.98)' : 'scale(1)'
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.currentTarget.style.boxShadow = '0 0 50px rgba(6,182,212,0.6)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!loading) {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(6,182,212,0.4)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              {loading ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderTop: '2px solid #fff',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></div>
                  <span>Iniciando sesión...</span>
                </div>
              ) : (
                'Iniciar Sesión'
              )}
            </button>
          </form>

          {/* Footer */}
          <div style={{
            marginTop: '24px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(6,182,212,0.1)',
            textAlign: 'center',
            color: '#94a3b8',
            fontSize: '12px'
          }}>
            Demo: Usa cualquier email y contraseña
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}