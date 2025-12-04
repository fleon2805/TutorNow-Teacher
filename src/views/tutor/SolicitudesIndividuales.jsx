import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle, Clock, User, FileText } from 'lucide-react';

const mockSolicitudes = [
  { id: 1, studentName: 'Carlos Rodríguez', email: 'carlos@example.com', topic: 'Python - Funciones Avanzadas', level: 'Intermedio', message: 'No entiendo cómo funcionan los decoradores en Python', time: '5 min', avatar: '👨' },
  { id: 2, studentName: 'María García', email: 'maria@example.com', topic: 'React - Hooks', level: 'Inicial', message: 'Necesito ayuda con useState y useEffect', time: '12 min', avatar: '👩' },
  { id: 3, studentName: 'Juan López', email: 'juan@example.com', topic: 'SQL - Queries Complejos', level: 'Avanzado', message: '¿Cómo optimizar mis consultas?', time: '23 min', avatar: '👨' },
  { id: 4, studentName: 'Ana Martínez', email: 'ana@example.com', topic: 'JavaScript - Async', level: 'Intermedio', message: 'Entender Promises y Async/Await', time: '34 min', avatar: '👩' },
];

export function TutorSolicitudesIndividuales({ onNavigate }) {
  const [activeRequest, setActiveRequest] = useState(null);

  const handleAccept = (requestId) => {
    setTimeout(() => {
      onNavigate('sala-individual');
    }, 300);
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
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#3b82f6';
            e.currentTarget.style.transform = 'translateX(-4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#06b6d4';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          <ArrowLeft size={20} />
          Volver
        </button>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#fff', margin: 0 }}>
          Solicitudes 1:1 💬
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
          {mockSolicitudes.length} pendientes
        </div>
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px',
        padding: '32px',
        overflowY: 'auto'
      }}>
        {/* Requests List */}
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>
            Cola de Solicitudes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {mockSolicitudes.map((request) => (
              <button
                key={request.id}
                onClick={() => setActiveRequest(request)}
                style={{
                  padding: '16px 20px',
                  borderRadius: '12px',
                  background: activeRequest?.id === request.id
                    ? 'linear-gradient(135deg, rgba(6,182,212,0.3) 0%, rgba(59,130,246,0.3) 100%)'
                    : 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(59,130,246,0.1) 100%)',
                  border: `1px solid rgba(${activeRequest?.id === request.id ? '6,182,212,0.5' : '6,182,212,0.2'})`,
                  color: '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 200ms ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
                onMouseEnter={(e) => {
                  if (activeRequest?.id !== request.id) {
                    e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(59,130,246,0.15) 100%)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeRequest?.id !== request.id) {
                    e.currentTarget.style.borderColor = 'rgba(6,182,212,0.2)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(59,130,246,0.1) 100%)';
                  }
                }}
              >
                <span style={{ fontSize: '24px' }}>{request.avatar}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 4px 0', color: '#fff' }}>
                    {request.studentName}
                  </p>
                  <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {request.topic}
                  </p>
                </div>
                <span style={{ fontSize: '12px', color: '#64748b', whiteSpace: 'nowrap' }}>
                  {request.time}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Request Details */}
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>
            Detalles
          </h2>
          {activeRequest ? (
            <div style={{
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(6,182,212,0.05) 0%, rgba(59,130,246,0.05) 100%)',
              border: '1px solid rgba(6,182,212,0.2)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              {/* Student Info */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    fontSize: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {activeRequest.avatar}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', margin: '0 0 4px 0' }}>
                      {activeRequest.studentName}
                    </h3>
                    <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>
                      {activeRequest.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Topic and Level */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px'
              }}>
                <div style={{ padding: '16px', background: 'rgba(15,23,42,0.5)', borderRadius: '12px', border: '1px solid rgba(34,211,238,0.1)' }}>
                  <p style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 'bold', margin: '0 0 8px 0', textTransform: 'uppercase' }}>
                    Tema
                  </p>
                  <p style={{ fontSize: '14px', color: '#06b6d4', fontWeight: 'bold', margin: 0 }}>
                    {activeRequest.topic}
                  </p>
                </div>
                <div style={{ padding: '16px', background: 'rgba(15,23,42,0.5)', borderRadius: '12px', border: '1px solid rgba(34,211,238,0.1)' }}>
                  <p style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 'bold', margin: '0 0 8px 0', textTransform: 'uppercase' }}>
                    Nivel
                  </p>
                  <p style={{ fontSize: '14px', color: '#f59e0b', fontWeight: 'bold', margin: 0 }}>
                    {activeRequest.level}
                  </p>
                </div>
              </div>

              {/* Message */}
              <div>
                <p style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 'bold', margin: '0 0 8px 0', textTransform: 'uppercase' }}>
                  Mensaje
                </p>
                <div style={{
                  padding: '16px',
                  background: 'rgba(15,23,42,0.7)',
                  borderRadius: '12px',
                  border: '1px solid rgba(34,211,238,0.1)',
                  color: '#e2e8f0'
                }}>
                  <p style={{ margin: 0 }}>{activeRequest.message}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                <button
                  onClick={() => handleAccept(activeRequest.id)}
                  style={{
                    flex: 1,
                    padding: '14px 24px',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: '#fff',
                    fontWeight: 'bold',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'all 200ms ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(16,185,129,0.4)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <CheckCircle size={18} />
                  Aceptar
                </button>
                <button
                  style={{
                    flex: 1,
                    padding: '14px 24px',
                    background: 'linear-gradient(135deg, rgba(239,68,68,0.3) 0%, rgba(220,38,38,0.3) 100%)',
                    color: '#f87171',
                    fontWeight: 'bold',
                    border: '1px solid rgba(239,68,68,0.3)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'all 200ms ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(239,68,68,0.5) 0%, rgba(220,38,38,0.5) 100%)';
                    e.currentTarget.style.borderColor = 'rgba(239,68,68,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(239,68,68,0.3) 0%, rgba(220,38,38,0.3) 100%)';
                    e.currentTarget.style.borderColor = 'rgba(239,68,68,0.3)';
                  }}
                >
                  <XCircle size={18} />
                  Rechazar
                </button>
              </div>
            </div>
          ) : (
            <div style={{
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(6,182,212,0.05) 0%, rgba(59,130,246,0.05) 100%)',
              border: '1px solid rgba(6,182,212,0.2)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '400px',
              textAlign: 'center'
            }}>
              <FileText size={48} style={{ color: '#06b6d4', marginBottom: '16px', opacity: 0.5 }} />
              <p style={{ color: '#94a3b8', margin: 0 }}>
                Selecciona una solicitud
              </p>
            </div>
          )}
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
