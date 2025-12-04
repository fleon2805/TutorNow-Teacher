import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Save, Check } from 'lucide-react';

const allTopics = [
  'Python', 'Java', 'JavaScript', 'C++', 'C#', 'Go', 'Rust',
  'React', 'Angular', 'Vue.js', 'Node.js', 'Django', 'Flask', 'Spring Boot', 'Laravel',
  'SQL', 'MongoDB', 'PostgreSQL', 'Firebase',
  'APIs REST', 'GraphQL', 'Microservicios',
  'Ciberseguridad', 'Redes', 'Linux', 'Docker', 'Kubernetes',
  'Estructuras de Datos', 'Algoritmos', 'Programación Competitiva',
  'Machine Learning', 'Data Science', 'IA', 'TensorFlow', 'Pandas'
];

export function TutorTemas({ onNavigate }) {
  const [selectedTopics, setSelectedTopics] = useState(
    ['Python', 'React', 'SQL', 'APIs REST', 'Estructuras de Datos']
  );
  const [saved, setSaved] = useState(false);

  const toggleTopic = (topic) => {
    setSelectedTopics(prev =>
      prev.includes(topic)
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
    setSaved(false);
  };

  const handleSave = () => {
    localStorage.setItem('tutorTopics', JSON.stringify(selectedTopics));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const selectAll = () => {
    setSelectedTopics([...allTopics]);
    setSaved(false);
  };

  const clearAll = () => {
    setSelectedTopics([]);
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
          Especialidades 📚
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
          {selectedTopics.length} seleccionadas
        </div>
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '32px'
      }}>
        <div style={{ maxWidth: '1000px' }}>
          <div style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '24px',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={selectAll}
              style={{
                padding: '10px 16px',
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                color: '#fff',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '13px',
                transition: 'all 200ms ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(6,182,212,0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              ✓ Seleccionar Todo
            </button>
            <button
              onClick={clearAll}
              style={{
                padding: '10px 16px',
                background: 'linear-gradient(135deg, rgba(239,68,68,0.3) 0%, rgba(220,38,38,0.3) 100%)',
                color: '#f87171',
                fontWeight: 'bold',
                border: '1px solid rgba(239,68,68,0.3)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '13px'
              }}
            >
              ✕ Limpiar
            </button>
            <button
              onClick={handleSave}
              style={{
                marginLeft: 'auto',
                padding: '10px 20px',
                background: saved
                  ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                  : 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
                color: '#fff',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '13px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Save size={16} />
              {saved ? '✓ Guardado' : 'Guardar'}
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '12px'
          }}>
            {allTopics.map(topic => (
              <button
                key={topic}
                onClick={() => toggleTopic(topic)}
                style={{
                  padding: '16px 20px',
                  borderRadius: '12px',
                  background: selectedTopics.includes(topic)
                    ? 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
                    : 'linear-gradient(135deg, rgba(6,182,212,0.05) 0%, rgba(59,130,246,0.05) 100%)',
                  border: `1px solid rgba(${selectedTopics.includes(topic) ? '6,182,212,0.5' : '6,182,212,0.2'})`,
                  color: selectedTopics.includes(topic) ? '#fff' : '#cbd5e1',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '14px',
                  transition: 'all 200ms ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  textAlign: 'center',
                  minHeight: '50px'
                }}
                onMouseEnter={(e) => {
                  if (!selectedTopics.includes(topic)) {
                    e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)';
                  }
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  if (!selectedTopics.includes(topic)) {
                    e.currentTarget.style.borderColor = 'rgba(6,182,212,0.2)';
                  }
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {selectedTopics.includes(topic) && <Check size={16} />}
                <span>{topic}</span>
              </button>
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
