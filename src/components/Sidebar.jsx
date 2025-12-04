import React from 'react';
import { LayoutDashboard, Clock, BookOpen, MessageSquare, Users, DollarSign, Star, Settings, LogOut } from 'lucide-react';

const Sidebar = ({ activeView, setView, onLogout }) => {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'availability', icon: Clock, label: 'Disponibilidad' },
    { id: 'topics', icon: BookOpen, label: 'Mis Temas' },
    { id: 'requests', icon: MessageSquare, label: 'Solicitudes', badge: 'New' },
    { id: 'group', icon: Users, label: 'Sala Grupal' },
    { id: 'earnings', icon: DollarSign, label: 'Ganancias' },
    { id: 'reputation', icon: Star, label: 'Reputación' },
    { id: 'settings', icon: Settings, label: 'Configuración' },
  ];

  return (
    <aside className="w-64 bg-tutor-card border-r border-gray-700 flex flex-col h-screen fixed md:relative z-10 transition-transform">
      <div className="p-6 flex items-center gap-2 text-tutor-accent">
        <div className="w-8 h-8 rounded bg-tutor-accent flex items-center justify-center text-white font-bold">T</div>
        <span className="text-xl font-bold text-white">TutorNow</span>
      </div>

      <nav className="flex-1 px-4 space-y-2 overflow-y-auto mt-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
              activeView === item.id ? 'bg-tutor-accent text-white shadow-lg' : 'text-gray-400 hover:bg-tutor-bg hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </div>
            {item.badge && <span className="bg-red-500 text-[10px] px-2 rounded-full">{item.badge}</span>}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-700">
        <button onClick={onLogout} className="w-full flex items-center gap-2 text-gray-400 hover:text-red-400 p-2">
          <LogOut size={18} /> Cerrar Sesión
        </button>
      </div>
    </aside>
  );
};
export default Sidebar;