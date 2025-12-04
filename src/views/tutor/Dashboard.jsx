import React, { useState, useEffect } from 'react';
import { Clock, Users, TrendingUp, Calendar, CheckCircle, LogOut, Menu, X, Home, Settings, BookOpen, MessageSquare, Award, Bell, ArrowUpRight, Zap } from 'lucide-react';
import { tutorData, upcomingSessions } from '../../data/tutorMocks';

export function TutorDashboard({ onNavigate }) {
  const [availability, setAvailability] = useState(tutorData.availability.status === 'Disponible');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    if (window.confirm('¿Seguro que deseas cerrar sesión?')) {
      localStorage.removeItem('tutorAuthenticated');
      localStorage.removeItem('tutorEmail');
      window.location.href = '/';
    }
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'solicitudes', label: 'Solicitudes', icon: MessageSquare },
    { id: 'disponibilidad', label: 'Disponibilidad', icon: Clock },
    { id: 'temas', label: 'Especialidades', icon: BookOpen },
    { id: 'ganancias', label: 'Ganancias', icon: TrendingUp },
    { id: 'reputacion', label: 'Reputación', icon: Award },
    { id: 'configuracion', label: 'Configuración', icon: Settings },
  ];

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)'
    }}>
      {/* Sidebar */}
      <div style={{
        width: sidebarOpen ? '288px' : '96px',
        background: 'linear-gradient(180deg, rgba(15,23,42,0.95) 0%, rgba(30,27,75,0.9) 100%)',
        borderRight: '1px solid rgba(34,211,238,0.1)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'width 300ms ease',
        boxShadow: '0 20px 25px -5px rgba(0,0,0,0.3)'
      }}>
        {/* Sidebar Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px',
          borderBottom: '1px solid rgba(34,211,238,0.1)'
        }}>
          {sidebarOpen && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(6,182,212,0.5)',
                fontSize: '24px'
              }}>
                🎓
              </div>
              <div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  background: 'linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  TutorNow
                </div>
              </div>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              padding: '8px',
              background: 'transparent',
              border: 'none',
              color: '#06b6d4',
              cursor: 'pointer',
              fontSize: '20px'
            }}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Nav Items */}
        <nav style={{ flex: 1, padding: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  color: '#cbd5e1',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 200ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#cbd5e1';
                }}
              >
                <Icon size={20} style={{ color: '#06b6d4', flexShrink: 0 }} />
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            margin: '12px',
            borderRadius: '10px',
            color: '#ef4444',
            background: 'transparent',
            border: '1px solid rgba(239, 68, 68, 0.2)',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'all 200ms ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
            e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.2)';
          }}
        >
          <LogOut size={20} />
          {sidebarOpen && <span>Cerrar Sesión</span>}
        </button>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Top Bar */}
        <div style={{
          background: 'linear-gradient(90deg, rgba(15,23,42,0.5) 0%, rgba(30,27,75,0.3) 50%, rgba(15,23,42,0.5) 100%)',
          borderBottom: '1px solid rgba(34,211,238,0.1)',
          padding: '24px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
        }}>
          <div>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#fff',
              margin: 0
            }}>
              ¡Bienvenido, {tutorData.name}! 🌟
            </h2>
            <p style={{
              color: '#94a3b8',
              fontSize: '12px',
              margin: '8px 0 0 0',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                background: '#06b6d4',
                borderRadius: '50%',
                display: 'inline-block',
                animation: 'pulse 2s infinite'
              }}></span>
              {currentTime.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <button style={{
              padding: '12px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#cbd5e1',
              fontSize: '22px',
              position: 'relative'
            }}>
              <Bell size={22} />
              <div style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                width: '8px',
                height: '8px',
                background: '#ef4444',
                borderRadius: '50%',
                animation: 'pulse 2s infinite'
              }}></div>
            </button>

            <button
              onClick={() => setAvailability(!availability)}
              style={{
                padding: '12px 24px',
                borderRadius: '10px',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 200ms ease',
                background: availability
                  ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                  : 'linear-gradient(135deg, rgba(100,116,139,0.5) 0%, rgba(71,85,105,0.5) 100%)',
                color: '#fff',
                boxShadow: availability ? '0 0 20px rgba(16,185,129,0.3)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (availability) e.currentTarget.style.boxShadow = '0 0 30px rgba(16,185,129,0.5)';
              }}
              onMouseLeave={(e) => {
                if (availability) e.currentTarget.style.boxShadow = '0 0 20px rgba(16,185,129,0.3)';
              }}
            >
              {availability && <div style={{
                width: '8px',
                height: '8px',
                background: '#fff',
                borderRadius: '50%',
                animation: 'pulse 2s infinite'
              }}></div>}
              {availability ? 'Disponible' : 'No Disponible'}
            </button>

            <img
              src={tutorData.avatar}
              alt={tutorData.name}
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '12px',
                border: '2px solid rgba(6,182,212,0.5)',
                boxShadow: '0 0 20px rgba(6,182,212,0.2)'
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '32px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)'
        }}>
          {/* Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            marginBottom: '32px'
          }}>
            {[
              { label: 'GANANCIAS', value: `$${tutorData.earnings.thisMonth}`, change: '+12%', color: '#06b6d4' },
              { label: 'SESIONES', value: tutorData.reviews, change: '+5', color: '#10b981' },
              { label: 'CALIFICACIÓN', value: `${tutorData.rating}⭐`, change: 'Excelente', color: '#f59e0b' },
              { label: 'TARIFA/HORA', value: `$${tutorData.earnings.ratePerHour}`, change: 'Premium', color: '#a855f7' },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: `linear-gradient(135deg, rgba(${stat.color === '#06b6d4' ? '6,182,212' : stat.color === '#10b981' ? '16,185,129' : stat.color === '#f59e0b' ? '245,158,11' : '168,85,247'},0.05) 0%, rgba(${stat.color === '#06b6d4' ? '59,130,246' : stat.color === '#10b981' ? '5,150,105' : stat.color === '#f59e0b' ? '217,119,6' : '147,51,234'},0.05) 100%)`,
                  border: `1px solid rgba(${stat.color === '#06b6d4' ? '6,182,212' : stat.color === '#10b981' ? '16,185,129' : stat.color === '#f59e0b' ? '245,158,11' : '168,85,247'},0.2)`,
                  padding: '24px',
                  cursor: 'pointer',
                  transition: 'all 200ms ease',
                  boxShadow: `0 0 0 rgba(${stat.color === '#06b6d4' ? '6,182,212' : stat.color === '#10b981' ? '16,185,129' : stat.color === '#f59e0b' ? '245,158,11' : '168,85,247'},0.1)`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `rgba(${stat.color === '#06b6d4' ? '6,182,212' : stat.color === '#10b981' ? '16,185,129' : stat.color === '#f59e0b' ? '245,158,11' : '168,85,247'},0.5)`;
                  e.currentTarget.style.boxShadow = `0 0 30px rgba(${stat.color === '#06b6d4' ? '6,182,212' : stat.color === '#10b981' ? '16,185,129' : stat.color === '#f59e0b' ? '245,158,11' : '168,85,247'},0.3)`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `rgba(${stat.color === '#06b6d4' ? '6,182,212' : stat.color === '#10b981' ? '16,185,129' : stat.color === '#f59e0b' ? '245,158,11' : '168,85,247'},0.2)`;
                  e.currentTarget.style.boxShadow = `0 0 0 rgba(${stat.color === '#06b6d4' ? '6,182,212' : stat.color === '#10b981' ? '16,185,129' : stat.color === '#f59e0b' ? '245,158,11' : '168,85,247'},0.1)`;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px'
                }}>
                  <p style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 'bold', margin: 0 }}>
                    {stat.label}
                  </p>
                  <div style={{
                    padding: '12px',
                    background: stat.color,
                    borderRadius: '10px'
                  }}>
                    <div style={{ color: '#fff', fontSize: '20px' }}>📊</div>
                  </div>
                </div>
                <p style={{ fontSize: '28px', fontWeight: 'black', color: '#fff', margin: 0 }}>
                  {stat.value}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '12px',
                  color: '#10b981',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  <ArrowUpRight size={14} />
                  <span>{stat.change}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '32px'
          }}>
            {[
              { title: '👥 Sala Grupal', desc: 'Enseña a múltiples estudiantes', color: '#06b6d4', action: 'sala-grupal' },
              { title: '💬 Solicitudes 1:1', desc: 'Atender estudiantes individuales', color: '#10b981', action: 'solicitudes' },
            ].map((action, i) => (
              <button
                key={i}
                onClick={() => onNavigate(action.action)}
                style={{
                  padding: '32px',
                  borderRadius: '20px',
                  background: `linear-gradient(135deg, rgba(${action.color === '#06b6d4' ? '6,182,212' : '16,185,129'},0.1) 0%, rgba(${action.color === '#06b6d4' ? '59,130,246' : '5,150,105'},0.1) 100%)`,
                  border: `1px solid rgba(${action.color === '#06b6d4' ? '6,182,212' : '16,185,129'},0.2)`,
                  color: '#fff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 200ms ease',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `rgba(${action.color === '#06b6d4' ? '6,182,212' : '16,185,129'},0.5)`;
                  e.currentTarget.style.boxShadow = `0 0 30px rgba(${action.color === '#06b6d4' ? '6,182,212' : '16,185,129'},0.2)`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `rgba(${action.color === '#06b6d4' ? '6,182,212' : '16,185,129'},0.2)`;
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 4px 0' }}>{action.title}</h3>
                  <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0 }}>{action.desc}</p>
                </div>
                <Zap size={32} style={{ color: action.color, flexShrink: 0 }} />
              </button>
            ))}
          </div>

          {/* Upcoming Sessions */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px'
            }}>
              <div style={{
                padding: '12px',
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                borderRadius: '10px'
              }}>
                <Calendar size={24} style={{ color: '#fff' }} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', margin: 0 }}>Próximas Sesiones</h3>
                <p style={{ color: '#94a3b8', fontSize: '12px', margin: '4px 0 0 0' }}>Gestiona tus clases programadas</p>
              </div>
              <div style={{
                padding: '8px 16px',
                background: 'rgba(6,182,212,0.2)',
                border: '1px solid rgba(6,182,212,0.5)',
                borderRadius: '10px',
                color: '#06b6d4',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                {upcomingSessions.length} sesiones
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}>
              {upcomingSessions.map((session) => (
                <div
                  key={session.id}
                  style={{
                    borderRadius: '20px',
                    background: `linear-gradient(135deg, rgba(6,182,212,0.05) 0%, rgba(59,130,246,0.05) 100%)`,
                    border: '1px solid rgba(6,182,212,0.2)',
                    padding: '24px',
                    cursor: 'pointer',
                    transition: 'all 200ms ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(6,182,212,0.5)';
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(6,182,212,0.2)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(6,182,212,0.2)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom: '16px'
                  }}>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontWeight: 'bold', color: '#fff', margin: '0 0 4px 0', fontSize: '16px' }}>
                        {session.studentName}
                      </h4>
                      <p style={{ color: '#94a3b8', fontSize: '12px', margin: 0 }}>{session.topic}</p>
                    </div>
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '8px',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      marginLeft: '8px',
                      background: session.type === 'group'
                        ? 'rgba(168, 85, 247, 0.2)'
                        : 'rgba(6, 182, 212, 0.2)',
                      color: session.type === 'group' ? '#d8b4fe' : '#06b6d4',
                      border: session.type === 'group'
                        ? '1px solid rgba(168, 85, 247, 0.3)'
                        : '1px solid rgba(6, 182, 212, 0.3)',
                      whiteSpace: 'nowrap'
                    }}>
                      {session.type === 'group' ? `👥 Grupo (${session.studentsCount})` : '👤 1:1'}
                    </span>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    color: '#cbd5e1',
                    fontSize: '12px',
                    marginBottom: '16px',
                    background: 'rgba(15,23,42,0.5)',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    border: '1px solid rgba(34,211,238,0.1)'
                  }}>
                    <Clock size={16} style={{ color: '#06b6d4' }} />
                    <span style={{ fontWeight: 'bold' }}>{session.startTime}</span>
                    <span style={{ color: '#64748b', marginLeft: 'auto' }}>• {session.duration} min</span>
                  </div>

                  <button style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'linear-gradient(135deg, rgba(6,182,212,0.3) 0%, rgba(59,130,246,0.3) 100%)',
                    color: '#06b6d4',
                    fontWeight: 'bold',
                    border: '1px solid rgba(6,182,212,0.5)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'all 200ms ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontSize: '14px'
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(6,182,212,0.5) 0%, rgba(59,130,246,0.5) 100%)';
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(6,182,212,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(6,182,212,0.3) 0%, rgba(59,130,246,0.3) 100%)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <span>Prepararse</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
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
