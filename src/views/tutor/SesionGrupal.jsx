import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, LogOut, Clock, Users } from 'lucide-react';

const mockStudents = [
  { id: 1, name: 'Carlos García', avatar: 'CG', status: 'current', timeLeft: 540 },
  { id: 2, name: 'María López', avatar: 'ML', status: 'waiting', position: 1 },
  { id: 3, name: 'Juan Rodríguez', avatar: 'JR', status: 'waiting', position: 2 },
  { id: 4, name: 'Ana Martínez', avatar: 'AM', status: 'waiting', position: 3 },
];

const mockGroupMessages = [
  { sender: 'tutor', message: 'Bienvenidos a la sesión grupal de hoy! Vamos a trabajar en algoritmos.', time: '15:00' },
  { sender: 'student', name: 'Carlos', message: 'Listo! ¿Por dónde empezamos?', time: '15:01' },
  { sender: 'tutor', message: 'Primero, repasemos la búsqueda binaria...', time: '15:02' },
];

export function SesionGrupal({ onNavigate }) {
  const [messages, setMessages] = useState(mockGroupMessages);
  const [inputValue, setInputValue] = useState('');
  const [students, setStudents] = useState(mockStudents);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [currentStudentTime, setCurrentStudentTime] = useState(540); // 9 minutes

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
      setCurrentStudentTime(prev => {
        if (prev <= 1) {
          handleNextStudent();
          return 600;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [students]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    setMessages([
      ...messages,
      {
        sender: 'tutor',
        message: inputValue,
        time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setInputValue('');
  };

  const handleNextStudent = () => {
    const updatedStudents = [...students];
    if (updatedStudents.length > 1) {
      updatedStudents.shift(); // Remove current
      updatedStudents[0].status = 'current';
      updatedStudents[0].timeLeft = 600;
      updatedStudents.forEach((student, idx) => {
        if (student.status === 'waiting') {
          student.position = idx;
        }
      });
      setStudents(updatedStudents);
      setMessages(prev => [...prev, {
        sender: 'tutor',
        message: `¡Próximo! Turno de ${updatedStudents[0].name}`,
        time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
      }]);
    }
  };

  const handleEndSession = () => {
    setTimeout(() => onNavigate('dashboard'), 500);
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
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Users size={24} style={{ color: '#06b6d4' }} />
          <div>
            <p style={{ margin: 0, color: '#fff', fontWeight: 'bold', fontSize: '14px' }}>
              Sesión Grupal
            </p>
            <p style={{ margin: '2px 0 0 0', color: '#94a3b8', fontSize: '12px' }}>
              {students.length} estudiantes en línea
            </p>
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(168,85,247,0.2)',
            border: '1px solid rgba(168,85,247,0.3)',
            padding: '8px 16px',
            borderRadius: '8px'
          }}>
            <Clock size={16} style={{ color: '#a855f7' }} />
            <span style={{ color: '#a855f7', fontWeight: 'bold', fontSize: '14px' }}>
              {formatTime(timeElapsed)}
            </span>
          </div>

          <button
            onClick={handleEndSession}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, rgba(239,68,68,0.3) 0%, rgba(220,38,38,0.3) 100%)',
              color: '#f87171',
              fontWeight: 'bold',
              border: '1px solid rgba(239,68,68,0.3)',
              padding: '8px 16px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '13px'
            }}
          >
            <LogOut size={16} />
            Finalizar
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 280px',
        gap: '12px',
        padding: '12px',
        overflow: 'hidden'
      }}>
        {/* Chat Area */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, rgba(6,182,212,0.05) 0%, rgba(59,130,246,0.05) 100%)',
          border: '1px solid rgba(6,182,212,0.2)',
          borderRadius: '12px',
          overflow: 'hidden'
        }}>
          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: msg.sender === 'tutor' ? 'flex-end' : 'flex-start',
                  gap: '8px'
                }}
              >
                {msg.sender === 'student' && (
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '10px',
                    fontWeight: 'bold'
                  }}>
                    {msg.name?.substring(0, 2).toUpperCase()}
                  </div>
                )}
                <div
                  style={{
                    maxWidth: '70%',
                    background: msg.sender === 'tutor'
                      ? 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
                      : 'rgba(6,182,212,0.1)',
                    border: msg.sender === 'tutor' ? 'none' : '1px solid rgba(6,182,212,0.2)',
                    color: msg.sender === 'tutor' ? '#fff' : '#cbd5e1',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    fontSize: '13px',
                    lineHeight: '1.4'
                  }}
                >
                  {msg.message}
                  <div style={{
                    fontSize: '11px',
                    marginTop: '4px',
                    opacity: 0.7
                  }}>
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div style={{
            padding: '12px',
            borderTop: '1px solid rgba(6,182,212,0.2)',
            display: 'flex',
            gap: '8px'
          }}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Escribe un mensaje..."
              style={{
                flex: 1,
                background: 'rgba(6,182,212,0.1)',
                border: '1px solid rgba(6,182,212,0.2)',
                borderRadius: '8px',
                padding: '10px 12px',
                color: '#fff',
                fontSize: '13px',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(6,182,212,0.5)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(6,182,212,0.2)'}
            />
            <button
              onClick={handleSendMessage}
              style={{
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 200ms ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 15px rgba(6,182,212,0.4)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <Send size={18} />
            </button>
          </div>
        </div>

        {/* Sidebar - Queue */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {/* Current Student */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(168,85,247,0.1) 100%)',
            border: '1px solid rgba(6,182,212,0.3)',
            borderRadius: '12px',
            padding: '12px'
          }}>
            <p style={{ margin: '0 0 12px 0', color: '#06b6d4', fontWeight: 'bold', fontSize: '12px' }}>
              EN TURNO AHORA
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '12px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '14px',
                animation: 'pulse 2s infinite'
              }}>
                {students[0]?.avatar}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, color: '#fff', fontWeight: 'bold', fontSize: '13px' }}>
                  {students[0]?.name}
                </p>
                <p style={{ margin: '2px 0 0 0', color: '#94a3b8', fontSize: '12px' }}>
                  Python · Nivel Intermedio
                </p>
              </div>
            </div>
            <div style={{
              background: 'rgba(6,182,212,0.1)',
              borderRadius: '8px',
              padding: '8px',
              textAlign: 'center',
              marginBottom: '8px'
            }}>
              <p style={{ margin: 0, color: '#06b6d4', fontWeight: 'bold', fontSize: '16px' }}>
                {formatTime(currentStudentTime)}
              </p>
              <p style={{ margin: '2px 0 0 0', color: '#94a3b8', fontSize: '11px' }}>
                Tiempo restante
              </p>
            </div>
            <button
              onClick={handleNextStudent}
              style={{
                width: '100%',
                padding: '8px 12px',
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                fontSize: '12px',
                cursor: 'pointer'
              }}
            >
              Siguiente →
            </button>
          </div>

          {/* Queue */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(6,182,212,0.05) 0%, rgba(59,130,246,0.05) 100%)',
            border: '1px solid rgba(6,182,212,0.2)',
            borderRadius: '12px',
            padding: '12px',
            flex: 1,
            overflowY: 'auto'
          }}>
            <p style={{ margin: '0 0 12px 0', color: '#06b6d4', fontWeight: 'bold', fontSize: '12px' }}>
              🚪 COLA DE ESPERA
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {students.slice(1).map((student, idx) => (
                <div
                  key={student.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(6,182,212,0.05)',
                    border: '1px solid rgba(6,182,212,0.1)',
                    borderRadius: '8px',
                    padding: '10px',
                    transition: 'all 200ms ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(6,182,212,0.1)';
                    e.currentTarget.style.borderColor = 'rgba(6,182,212,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(6,182,212,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(6,182,212,0.1)';
                  }}
                >
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    flexShrink: 0
                  }}>
                    {student.avatar}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: 0, color: '#cbd5e1', fontWeight: 'bold', fontSize: '12px' }}>
                      {idx + 1}. {student.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.3);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.5);
        }
      `}</style>
    </div>
  );
}
