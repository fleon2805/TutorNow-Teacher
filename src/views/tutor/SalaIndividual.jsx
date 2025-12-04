import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, LogOut, Clock, User } from 'lucide-react';

const mockMessages = [
  { sender: 'student', name: 'Carlos García', message: 'Hola! ¿Podemos empezar con los ejercicios de variables?', time: '14:02' },
  { sender: 'tutor', message: 'Claro! Vamos a comenzar con lo básico. ¿Tienes algún editor de Python instalado?', time: '14:03' },
  { sender: 'student', name: 'Carlos García', message: 'Sí, tengo VSCode instalado con Python 3.11', time: '14:03' },
  { sender: 'tutor', message: 'Perfecto! Ahora voy a compartir algunos ejemplos contigo...', time: '14:04' },
];

export function SalaIndividual({ onNavigate }) {
  const [messages, setMessages] = useState(mockMessages);
  const [inputValue, setInputValue] = useState('');
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [sessionActive, setSessionActive] = useState(true);

  useEffect(() => {
    if (!sessionActive) return;
    const interval = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [sessionActive]);

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

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleEndSession = () => {
    setSessionActive(false);
    setTimeout(() => onNavigate('dashboard'), 1000);
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
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 'bold'
          }}>
            CG
          </div>
          <div>
            <p style={{ margin: 0, color: '#fff', fontWeight: 'bold', fontSize: '14px' }}>
              Carlos García
            </p>
            <p style={{ margin: '2px 0 0 0', color: '#94a3b8', fontSize: '12px' }}>
              Python · Sesión 1:1
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
        gridTemplateColumns: '1fr 300px',
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
                    CG
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

        {/* Sidebar - Code Editor & Tools */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {/* Code Editor Placeholder */}
          <div style={{
            flex: 1,
            background: 'linear-gradient(135deg, rgba(6,182,212,0.05) 0%, rgba(59,130,246,0.05) 100%)',
            border: '1px solid rgba(6,182,212,0.2)',
            borderRadius: '12px',
            padding: '12px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}>
            <p style={{ margin: '0 0 8px 0', color: '#06b6d4', fontWeight: 'bold', fontSize: '12px' }}>
              📝 Editor de Código
            </p>
            <div style={{
              flex: 1,
              background: '#1e1b4b',
              borderRadius: '8px',
              border: '1px solid rgba(6,182,212,0.1)',
              padding: '8px',
              fontFamily: 'monospace',
              fontSize: '11px',
              color: '#cbd5e1',
              overflow: 'auto'
            }}>
              <code>{`# Python Code
def greet(name):
    return f"¡Hola {name}!"

print(greet("Carlos"))`}</code>
            </div>
          </div>

          {/* Resources Panel */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(6,182,212,0.05) 0%, rgba(59,130,246,0.05) 100%)',
            border: '1px solid rgba(6,182,212,0.2)',
            borderRadius: '12px',
            padding: '12px'
          }}>
            <p style={{ margin: '0 0 8px 0', color: '#06b6d4', fontWeight: 'bold', fontSize: '12px' }}>
              📚 Recursos
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}>
              {['Python Docs', 'Tutorial', 'Ejercicios'].map((resource, idx) => (
                <button
                  key={idx}
                  style={{
                    padding: '8px 12px',
                    background: 'rgba(6,182,212,0.1)',
                    border: '1px solid rgba(6,182,212,0.2)',
                    borderRadius: '6px',
                    color: '#cbd5e1',
                    fontSize: '11px',
                    cursor: 'pointer',
                    transition: 'all 200ms ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(6,182,212,0.2)';
                    e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(6,182,212,0.1)';
                    e.currentTarget.style.borderColor = 'rgba(6,182,212,0.2)';
                  }}
                >
                  {resource}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
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
