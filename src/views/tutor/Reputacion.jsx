import React from 'react';
import { ArrowLeft, Star, Award } from 'lucide-react';

const reviews = [
  { student: 'Carlos García', rating: 5, date: '2024-01-25', comment: 'Excelente profesor, muy paciente y explica conceptos complejos de forma clara.' },
  { student: 'María López', rating: 5, date: '2024-01-20', comment: 'Me ayudó mucho con mis tareas de Python. Super recomendado!' },
  { student: 'Juan Rodríguez', rating: 4, date: '2024-01-18', comment: 'Muy buen tutor. Solo podría mejorar en la disponibilidad.' },
  { student: 'Ana Martínez', rating: 5, date: '2024-01-15', comment: 'Increíble! Aprendí más en 2 sesiones que en todo el semestre.' },
  { student: 'Pedro Sánchez', rating: 5, date: '2024-01-10', comment: 'Profesional, dedicado y muy atento. 100% recomendado.' },
];

const getTutorLevel = (rating) => {
  if (rating >= 4.8) return { level: 'Diamante', emoji: '💎', color: '#a78bfa' };
  if (rating >= 4.5) return { level: 'Oro', emoji: '🏆', color: '#f59e0b' };
  if (rating >= 4.0) return { level: 'Plata', emoji: '🥈', color: '#cbd5e1' };
  return { level: 'Bronce', emoji: '🥉', color: '#d4a574' };
};

export function TutorReputacion({ onNavigate }) {
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(2);
  const totalReviews = reviews.length;
  const tutorLevel = getTutorLevel(avgRating);

  const ratingBreakdown = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(r => r.rating === rating).length
  }));

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
          Reputación ⭐
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
          {totalReviews} reseñas
        </div>
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
        {/* Rating Summary */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(168,85,247,0.1) 100%)',
          border: '1px solid rgba(6,182,212,0.3)',
          borderRadius: '16px',
          padding: '32px 24px',
          maxWidth: '400px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{
              fontSize: '56px',
              fontWeight: 'bold',
              color: '#06b6d4',
              margin: '0 0 8px 0'
            }}>
              {avgRating}
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '4px',
              marginBottom: '16px'
            }}>
              {[1, 2, 3, 4, 5].map(i => (
                <Star
                  key={i}
                  size={24}
                  style={{
                    fill: i <= Math.round(avgRating) ? '#f59e0b' : '#4b5563',
                    color: i <= Math.round(avgRating) ? '#f59e0b' : '#4b5563'
                  }}
                />
              ))}
            </div>
            <p style={{ margin: '0 0 8px 0', color: '#cbd5e1', fontSize: '14px' }}>
              Basado en {totalReviews} reseñas
            </p>
          </div>

          {/* Tutor Level */}
          <div style={{
            background: `linear-gradient(135deg, rgba(${tutorLevel.color === '#a78bfa' ? '167,139,250' : tutorLevel.color === '#f59e0b' ? '245,158,11' : tutorLevel.color === '#cbd5e1' ? '203,213,225' : '212,165,116'},0.2) 0%, rgba(${tutorLevel.color === '#a78bfa' ? '167,139,250' : tutorLevel.color === '#f59e0b' ? '245,158,11' : tutorLevel.color === '#cbd5e1' ? '203,213,225' : '212,165,116'},0.1) 100%)`,
            border: `1px solid ${tutorLevel.color}`,
            borderRadius: '12px',
            padding: '16px',
            textAlign: 'center',
            marginTop: '16px'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>
              {tutorLevel.emoji}
            </div>
            <p style={{ margin: '0 0 4px 0', color: tutorLevel.color, fontSize: '12px', fontWeight: 'bold' }}>
              NIVEL TUTOR
            </p>
            <p style={{ margin: 0, color: tutorLevel.color, fontSize: '20px', fontWeight: 'bold' }}>
              {tutorLevel.level}
            </p>
          </div>
        </div>

        {/* Rating Breakdown */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(6,182,212,0.05) 0%, rgba(59,130,246,0.05) 100%)',
          border: '1px solid rgba(6,182,212,0.2)',
          borderRadius: '16px',
          padding: '24px',
          maxWidth: '600px',
          margin: '0 auto',
          width: '100%'
        }}>
          <h2 style={{ margin: '0 0 20px 0', color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>
            📊 Distribución de Reseñas
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {ratingBreakdown.map(({ rating, count }) => (
              <div key={rating} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '2px', minWidth: '100px' }}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star
                      key={i}
                      size={16}
                      style={{
                        fill: i <= rating ? '#f59e0b' : '#4b5563',
                        color: i <= rating ? '#f59e0b' : '#4b5563'
                      }}
                    />
                  ))}
                </div>
                <div style={{ flex: 1, height: '8px', background: 'rgba(6,182,212,0.1)', borderRadius: '4px' }}>
                  <div style={{
                    height: '100%',
                    width: `${(count / totalReviews) * 100}%`,
                    background: 'linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)',
                    borderRadius: '4px',
                    transition: 'width 300ms ease'
                  }} />
                </div>
                <span style={{ color: '#cbd5e1', fontSize: '14px', fontWeight: 'bold', minWidth: '30px' }}>
                  {count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
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
            💬 Reseñas Recientes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {reviews.map((review, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(6,182,212,0.05)',
                  border: '1px solid rgba(6,182,212,0.1)',
                  borderRadius: '12px',
                  padding: '16px',
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <div>
                    <p style={{ margin: '0 0 4px 0', color: '#06b6d4', fontWeight: 'bold', fontSize: '14px' }}>
                      {review.student}
                    </p>
                    <p style={{ margin: 0, color: '#94a3b8', fontSize: '12px' }}>
                      {new Date(review.date).toLocaleDateString('es-ES')}
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star
                        key={i}
                        size={14}
                        style={{
                          fill: i <= review.rating ? '#f59e0b' : '#4b5563',
                          color: i <= review.rating ? '#f59e0b' : '#4b5563'
                        }}
                      />
                    ))}
                  </div>
                </div>
                <p style={{ margin: 0, color: '#cbd5e1', fontSize: '13px', lineHeight: '1.5' }}>
                  {review.comment}
                </p>
              </div>
            ))}
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
