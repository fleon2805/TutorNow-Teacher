import React, { useState } from 'react';
import { ArrowLeft, Save } from 'lucide-react';

const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const shifts = [
  { id: 'morning', label: 'Mañana', time: '06:00-12:00', icon: '🌅' },
  { id: 'afternoon', label: 'Tarde', time: '12:00-18:00', icon: '☀️' },
  { id: 'evening', label: 'Noche', time: '18:00-23:59', icon: '🌙' },
  { id: 'night', label: 'Madrugada', time: '00:00-06:00', icon: '🌃' },
];

export function TutorDisponibilidad({ onNavigate }) {
  const [schedule, setSchedule] = useState(
    daysOfWeek.reduce((acc, day) => ({
      ...acc,
      [day]: { morning: true, afternoon: true, evening: true, night: false }
    }), {})
  );
  const [quickAvailable, setQuickAvailable] = useState(true);
  const [saved, setSaved] = useState(false);

  const toggleShift = (day, shiftId) => {
    setSchedule(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [shiftId]: !prev[day][shiftId]
      }
    }));
    setSaved(false);
  };

  const handleSave = () => {
    localStorage.setItem('tutorSchedule', JSON.stringify(schedule));
    localStorage.setItem('tutorQuickAvailability', quickAvailable);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const enableAll = () => {
    const newSchedule = {};
    daysOfWeek.forEach(day => {
      newSchedule[day] = { morning: true, afternoon: true, evening: true, night: true };
    });
    setSchedule(newSchedule);
    setSaved(false);
  };

  const disableAll = () => {
    const newSchedule = {};
    daysOfWeek.forEach(day => {
      newSchedule[day] = { morning: false, afternoon: false, evening: false, night: false };
    });
    setSchedule(newSchedule);
    setSaved(false);
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
          Disponibilidad ⏰
        </h1>
        <div style={{
          padding: '8px 16px',
          background: quickAvailable ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.2)',
          border: `1px solid rgba(${quickAvailable ? '16,185,129,0.5' : '239,68,68,0.5'})`,
          borderRadius: '10px',
          color: quickAvailable ? '#10b981' : '#ef4444',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          {quickAvailable ? '🟢 Disponible Ahora' : '🔴 No Disponible'}
        </div>
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '32px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr',
          gap: '32px',
          maxWidth: '1400px'
        }}>
          {/* Sidebar Controls */}
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>
              Controles
            </h2>
            <div style={{
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(6,182,212,0.05) 0%, rgba(59,130,246,0.05) 100%)',
              border: '1px solid rgba(6,182,212,0.2)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <button
                onClick={() => setQuickAvailable(!quickAvailable)}
                style={{
                  padding: '16px 20px',
                  background: quickAvailable
                    ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                    : 'linear-gradient(135deg, rgba(239,68,68,0.3) 0%, rgba(220,38,38,0.3) 100%)',
                  color: quickAvailable ? '#fff' : '#f87171',
                  fontWeight: 'bold',
                  border: quickAvailable ? 'none' : '1px solid rgba(239,68,68,0.3)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                {quickAvailable ? '🟢 Disponible' : '🔴 No Disponible'}
              </button>

              <div style={{ borderTop: '1px solid rgba(34,211,238,0.2)', paddingTop: '16px' }}>
                <p style={{ fontSize: '12px', color: '#94a3b8', margin: '0 0 12px 0', fontWeight: 'bold', textTransform: 'uppercase' }}>
                  Acciones Rápidas
                </p>
                <button
                  onClick={enableAll}
                  style={{
                    width: '100%',
                    padding: '10px 16px',
                    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                    color: '#fff',
                    fontWeight: 'bold',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    marginBottom: '8px'
                  }}
                >
                  ✓ Habilitar Todo
                </button>
                <button
                  onClick={disableAll}
                  style={{
                    width: '100%',
                    padding: '10px 16px',
                    background: 'linear-gradient(135deg, rgba(239,68,68,0.3) 0%, rgba(220,38,38,0.3) 100%)',
                    color: '#f87171',
                    fontWeight: 'bold',
                    border: '1px solid rgba(239,68,68,0.3)',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '13px'
                  }}
                >
                  ✕ Deshabilitar Todo
                </button>
              </div>

              <button
                onClick={handleSave}
                style={{
                  width: '100%',
                  padding: '14px 20px',
                  background: saved
                    ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                    : 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
                  color: '#fff',
                  fontWeight: 'bold',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  transition: 'all 200ms ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '16px'
                }}
              >
                <Save size={18} />
                {saved ? '✓ Guardado' : 'Guardar'}
              </button>
            </div>
          </div>

          {/* Schedule Grid */}
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>
              Horario Semanal
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '12px'
            }}>
              {daysOfWeek.map(day => (
                <div
                  key={day}
                  style={{
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(6,182,212,0.05) 0%, rgba(59,130,246,0.05) 100%)',
                    border: '1px solid rgba(6,182,212,0.2)',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#fff',
                    minWidth: '100px'
                  }}>
                    {day}
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flex: 1 }}>
                    {shifts.map(shift => (
                      <button
                        key={shift.id}
                        onClick={() => toggleShift(day, shift.id)}
                        title={shift.time}
                        style={{
                          flex: 1,
                          padding: '10px 8px',
                          background: schedule[day]?.[shift.id]
                            ? 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
                            : 'linear-gradient(135deg, rgba(100,116,139,0.2) 0%, rgba(71,85,105,0.2) 100%)',
                          color: schedule[day]?.[shift.id] ? '#fff' : '#94a3b8',
                          fontWeight: 'bold',
                          border: `1px solid rgba(${schedule[day]?.[shift.id] ? '6,182,212,0.5' : '100,116,139,0.2'})`,
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontSize: '12px',
                          transition: 'all 200ms ease'
                        }}
                      >
                        {shift.icon}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
