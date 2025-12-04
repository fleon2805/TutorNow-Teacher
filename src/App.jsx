import React, { useState, useEffect } from 'react';
import { TutorLogin } from './views/tutor/Login';
import { TutorDashboard } from './views/tutor/Dashboard';
import { TutorDisponibilidad } from './views/tutor/Disponibilidad';
import { TutorTemas } from './views/tutor/Temas';
import { TutorSolicitudesIndividuales } from './views/tutor/SolicitudesIndividuales';
import { SalaIndividual } from './views/tutor/SalaIndividual';
import { SesionGrupal } from './views/tutor/SesionGrupal';
import { TutorGanancias } from './views/tutor/Ganancias';
import { TutorReputacion } from './views/tutor/Reputacion';
import { TutorConfiguracion } from './views/tutor/Configuracion';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeView, setActiveView] = useState('dashboard');

  useEffect(() => {
    const isAuth = localStorage.getItem('tutorAuthenticated') === 'true';
    setIsAuthenticated(isAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('tutorAuthenticated');
    localStorage.removeItem('tutorEmail');
    setIsAuthenticated(false);
  };

  const handleLogin = () => {
    localStorage.setItem('tutorAuthenticated', 'true');
    setIsAuthenticated(true);
  };

  const renderContent = () => {
    switch(activeView) {
      case 'dashboard':
        return <TutorDashboard onNavigate={setActiveView} />;
      case 'disponibilidad':
        return <TutorDisponibilidad onNavigate={setActiveView} />;
      case 'temas':
        return <TutorTemas onNavigate={setActiveView} />;
      case 'solicitudes':
        return <TutorSolicitudesIndividuales onNavigate={setActiveView} />;
      case 'sala-individual':
        return <SalaIndividual onNavigate={setActiveView} />;
      case 'sala-grupal':
        return <SesionGrupal onNavigate={setActiveView} />;
      case 'ganancias':
        return <TutorGanancias onNavigate={setActiveView} />;
      case 'reputacion':
        return <TutorReputacion onNavigate={setActiveView} />;
      case 'configuracion':
        return <TutorConfiguracion onNavigate={setActiveView} />;
      default:
        return <TutorDashboard onNavigate={setActiveView} />;
    }
  };

  if (!isAuthenticated) {
    return <TutorLogin onLogin={handleLogin} />;
  }

  return (
    <div>
      {renderContent()}
    </div>
  );
}

export default App;