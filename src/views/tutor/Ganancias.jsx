import React, { useState } from 'react';
import { ArrowLeft, TrendingUp, Download, Calendar } from 'lucide-react';

const earningsData = [
  { date: '2024-01-15', student: 'Carlos García', hours: 2, ratePerHour: 50, total: 100, status: 'Completado' },
  { date: '2024-01-18', student: 'María López', hours: 1.5, ratePerHour: 50, total: 75, status: 'Completado' },
  { date: '2024-01-20', student: 'Juan Rodríguez', hours: 3, ratePerHour: 50, total: 150, status: 'Completado' },
  { date: '2024-01-22', student: 'Ana Martínez', hours: 1, ratePerHour: 50, total: 50, status: 'Completado' },
  { date: '2024-01-25', student: 'Carlos García', hours: 2, ratePerHour: 50, total: 100, status: 'Completado' },
  { date: '2024-01-28', student: 'Pedro Sánchez', hours: 1.5, ratePerHour: 50, total: 75, status: 'Completado' },
];

const monthlyData = [
  { month: 'Enero', earnings: 550 },
  { month: 'Febrero', earnings: 720 },
  { month: 'Marzo', earnings: 620 },
  { month: 'Abril', earnings: 810 },
  { month: 'Mayo', earnings: 950 },
  { month: 'Junio', earnings: 1100 },
];

export function TutorGanancias({ onNavigate }) {
  const totalThisMonth = earningsData.reduce((sum, item) => sum + item.total, 0);
  const totalSessions = earningsData.length;
  const avgPerSession = totalThisMonth / totalSessions;
  const maxValue = Math.max(...monthlyData.map(d => d.earnings));

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
          Ganancias 💰
        </h1>
        <button style={{
          padding: '10px 16px',
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          color: '#fff',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '13px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Download size={16} />
          Exportar
        </button>
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}>
        {/* Stats Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto',
          width: '100%'
        }}>
          {[
            { label: 'Ganancias Este Mes', value: `$${totalThisMonth}`, icon: '💵', color: 'rgba(6,182,212,' },
            { label: 'Sesiones Completadas', value: totalSessions, icon: '📚', color: 'rgba(16,185,129,' },
            { label: 'Promedio por Sesión', value: `$${avgPerSession.toFixed(2)}`, icon: '📊', color: 'rgba(168,85,247,' },
            { label: 'Tarifa Actual/Hora', value: '$50.00', icon: '⏱️', color: 'rgba(248,113,113,' }
          ].map((stat, idx) => (
            <div
              key={idx}
              style={{
                background: `linear-gradient(135deg, ${stat.color}0.1) 0%, ${stat.color}0.05) 100%)`,
                border: `1px solid ${stat.color}0.3)`,
                borderRadius: '16px',
                padding: '24px',
                backdropFilter: 'blur(10px)',
                boxShadow: `inset 0 1px 0 0 ${stat.color}0.1)`,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <div style={{ fontSize: '32px' }}>{stat.icon}</div>
              <p style={{ margin: 0, color: '#94a3b8', fontSize: '14px', fontWeight: 'bold' }}>
                {stat.label}
              </p>
              <p style={{ margin: 0, color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(6,182,212,0.05) 0%, rgba(59,130,246,0.05) 100%)',
          border: '1px solid rgba(6,182,212,0.2)',
          borderRadius: '16px',
          padding: '24px',
          maxWidth: '800px',
          margin: '0 auto',
          width: '100%'
        }}>
          <h2 style={{ margin: '0 0 20px 0', color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>
            📈 Ganancias por Mes
          </h2>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', height: '180px' }}>
            {monthlyData.map((data, idx) => (
              <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '100%',
                  height: `${(data.earnings / maxValue) * 150}px`,
                  background: `linear-gradient(180deg, #06b6d4 0%, #3b82f6 100%)`,
                  borderRadius: '8px 8px 0 0',
                  transition: 'all 200ms ease'
                }}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 15px rgba(6,182,212,0.5)'}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                />
                <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 'bold' }}>
                  ${data.earnings}
                </span>
                <span style={{ fontSize: '10px', color: '#64748b' }}>
                  {data.month}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Earnings Table */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(6,182,212,0.05) 0%, rgba(59,130,246,0.05) 100%)',
          border: '1px solid rgba(6,182,212,0.2)',
          borderRadius: '16px',
          overflow: 'hidden',
          maxWidth: '1000px',
          margin: '0 auto',
          width: '100%'
        }}>
          <div style={{ padding: '24px', borderBottom: '1px solid rgba(6,182,212,0.1)' }}>
            <h2 style={{ margin: 0, color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>
              📋 Historial de Sesiones
            </h2>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '14px'
            }}>
              <thead>
                <tr style={{ background: 'rgba(6,182,212,0.1)', borderBottom: '1px solid rgba(6,182,212,0.2)' }}>
                  {['Fecha', 'Estudiante', 'Horas', 'Tarifa/h', 'Total', 'Estado'].map(header => (
                    <th
                      key={header}
                      style={{
                        padding: '12px 16px',
                        textAlign: 'left',
                        color: '#06b6d4',
                        fontWeight: 'bold'
                      }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {earningsData.map((item, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: '1px solid rgba(6,182,212,0.1)',
                      background: idx % 2 === 0 ? 'transparent' : 'rgba(6,182,212,0.02)'
                    }}
                  >
                    <td style={{ padding: '12px 16px', color: '#cbd5e1' }}>
                      {new Date(item.date).toLocaleDateString('es-ES')}
                    </td>
                    <td style={{ padding: '12px 16px', color: '#cbd5e1' }}>{item.student}</td>
                    <td style={{ padding: '12px 16px', color: '#cbd5e1' }}>{item.hours}h</td>
                    <td style={{ padding: '12px 16px', color: '#cbd5e1' }}>${item.ratePerHour}</td>
                    <td style={{ padding: '12px 16px', color: '#10b981', fontWeight: 'bold' }}>
                      ${item.total}
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{
                        background: 'rgba(16,185,129,0.2)',
                        color: '#10b981',
                        padding: '4px 12px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: 'bold'
                      }}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
