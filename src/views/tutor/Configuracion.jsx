import React, { useState } from 'react';
import { ArrowLeft, Save, Lock, Github, FileText } from 'lucide-react';

export function TutorConfiguracion({ onNavigate }) {
  const [formData, setFormData] = useState({
    biography: 'Soy tutor de programación con 5+ años de experiencia...',
    email: 'tutor@example.com',
    phone: '+34 612 345 678',
    portfolio: 'https://portfolio.com',
    github: 'https://github.com/usuario',
    language: 'es'
  });

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    localStorage.setItem('tutorConfig', JSON.stringify(formData));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleChangePassword = () => {
    if (newPassword === confirmPassword && newPassword.length >= 6) {
      localStorage.setItem('tutorPassword', newPassword);
      setNewPassword('');
      setConfirmPassword('');
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }
  };

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(90deg, rgba(15,23,42,0.5) 0%, rgba(30,27,75,0.3) 50%, rgba(15,23,42,0.5) 100%)',
        borderBottom: '1px solid rgba(34,211,238,0.1)',
        padding: '24px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
      }}>
        <button
          onClick={() => onNavigate('dashboard')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'transparent',
            border: 'none',
            color: '#06b6d4',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'all 200ms ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(-4px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
        >
          <ArrowLeft size={20} />
          Volver
        </button>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#fff', margin: 0 }}>
          Configuración ⚙️
        </h1>
        <div style={{
          padding: '8px 16px',
          background: 'rgba(6,182,212,0.2)',
          border: '1px solid rgba(6,182,212,0.5)',
          borderRadius: '10px',
          color: '#06b6d4',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          Perfil
        </div>
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '32px'
      }}>
        <div style={{ maxWidth: '800px' }}>
          {/* Profile Section */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(6,182,212,0.05) 0%, rgba(59,130,246,0.05) 100%)',
            border: '1px solid rgba(6,182,212,0.2)',
            borderRadius: '16px',
            padding: '32px',
            marginBottom: '24px'
          }}>
            <h2 style={{ margin: '0 0 24px 0', color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
              👤 Información del Perfil
            </h2>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                color: '#cbd5e1',
                fontSize: '13px',
                fontWeight: 'bold',
                marginBottom: '8px'
              }}>
                📧 Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'rgba(6,182,212,0.1)',
                  border: '1px solid rgba(6,182,212,0.2)',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = 'rgba(6,182,212,0.5)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(6,182,212,0.2)'}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                color: '#cbd5e1',
                fontSize: '13px',
                fontWeight: 'bold',
                marginBottom: '8px'
              }}>
                📱 Teléfono
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'rgba(6,182,212,0.1)',
                  border: '1px solid rgba(6,182,212,0.2)',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = 'rgba(6,182,212,0.5)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(6,182,212,0.2)'}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                color: '#cbd5e1',
                fontSize: '13px',
                fontWeight: 'bold',
                marginBottom: '8px'
              }}>
                📝 Biografía
              </label>
              <textarea
                value={formData.biography}
                onChange={(e) => handleInputChange('biography', e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'rgba(6,182,212,0.1)',
                  border: '1px solid rgba(6,182,212,0.2)',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  outline: 'none',
                  minHeight: '100px',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }}
                onFocus={(e) => e.target.style.borderColor = 'rgba(6,182,212,0.5)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(6,182,212,0.2)'}
              />
            </div>
          </div>

          {/* Links Section */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(6,182,212,0.05) 0%, rgba(59,130,246,0.05) 100%)',
            border: '1px solid rgba(6,182,212,0.2)',
            borderRadius: '16px',
            padding: '32px',
            marginBottom: '24px'
          }}>
            <h2 style={{ margin: '0 0 24px 0', color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
              🔗 Enlaces y Portfolio
            </h2>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#cbd5e1',
                fontSize: '13px',
                fontWeight: 'bold',
                marginBottom: '8px'
              }}>
                <FileText size={16} />
                Portfolio URL
              </label>
              <input
                type="url"
                value={formData.portfolio}
                onChange={(e) => handleInputChange('portfolio', e.target.value)}
                placeholder="https://portfolio.com"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'rgba(6,182,212,0.1)',
                  border: '1px solid rgba(6,182,212,0.2)',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = 'rgba(6,182,212,0.5)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(6,182,212,0.2)'}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#cbd5e1',
                fontSize: '13px',
                fontWeight: 'bold',
                marginBottom: '8px'
              }}>
                <Github size={16} />
                GitHub URL
              </label>
              <input
                type="url"
                value={formData.github}
                onChange={(e) => handleInputChange('github', e.target.value)}
                placeholder="https://github.com/usuario"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'rgba(6,182,212,0.1)',
                  border: '1px solid rgba(6,182,212,0.2)',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = 'rgba(6,182,212,0.5)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(6,182,212,0.2)'}
              />
            </div>
          </div>

          {/* Security Section */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(6,182,212,0.05) 0%, rgba(59,130,246,0.05) 100%)',
            border: '1px solid rgba(6,182,212,0.2)',
            borderRadius: '16px',
            padding: '32px',
            marginBottom: '24px'
          }}>
            <h2 style={{ margin: '0 0 24px 0', color: '#fff', fontSize: '20px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Lock size={20} />
              Seguridad
            </h2>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                color: '#cbd5e1',
                fontSize: '13px',
                fontWeight: 'bold',
                marginBottom: '8px'
              }}>
                Nueva Contraseña
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Mínimo 6 caracteres"
                  style={{
                    flex: 1,
                    padding: '12px 16px',
                    background: 'rgba(6,182,212,0.1)',
                    border: '1px solid rgba(6,182,212,0.2)',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(6,182,212,0.5)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(6,182,212,0.2)'}
                />
                <button
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  style={{
                    padding: '12px 16px',
                    background: 'rgba(6,182,212,0.1)',
                    border: '1px solid rgba(6,182,212,0.2)',
                    borderRadius: '8px',
                    color: '#06b6d4',
                    cursor: 'pointer'
                  }}
                >
                  {passwordVisible ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                color: '#cbd5e1',
                fontSize: '13px',
                fontWeight: 'bold',
                marginBottom: '8px'
              }}>
                Confirmar Contraseña
              </label>
              <input
                type={passwordVisible ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repite la contraseña"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'rgba(6,182,212,0.1)',
                  border: '1px solid rgba(6,182,212,0.2)',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = 'rgba(6,182,212,0.5)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(6,182,212,0.2)'}
              />
            </div>

            <button
              onClick={handleChangePassword}
              disabled={!newPassword || newPassword !== confirmPassword}
              style={{
                padding: '10px 20px',
                background: newPassword && newPassword === confirmPassword
                  ? 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
                  : 'rgba(6,182,212,0.2)',
                color: newPassword && newPassword === confirmPassword ? '#fff' : '#94a3b8',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '8px',
                cursor: newPassword && newPassword === confirmPassword ? 'pointer' : 'not-allowed',
                fontSize: '13px'
              }}
            >
              Cambiar Contraseña
            </button>
          </div>

          {/* Save Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
            <button
              onClick={handleSave}
              style={{
                padding: '12px 24px',
                background: saved
                  ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                  : 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
                color: '#fff',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Save size={16} />
              {saved ? '✓ Guardado' : 'Guardar Cambios'}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        ::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.3);
          border-radius: 6px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.5);
        }
      `}</style>
    </div>
  );
}
