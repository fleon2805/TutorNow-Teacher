import React from 'react';
import { DollarSign, Clock, Users, CheckCircle } from 'lucide-react';
import { MOCK_REQUESTS } from '../data/mocks';

const StatCard = ({ icon: Icon, label, val, color }) => (
  <div className="bg-tutor-card p-5 rounded-xl border border-gray-700">
    <div className="flex justify-between items-start mb-2">
      <div className={`p-2 rounded-lg bg-tutor-bg ${color}`}><Icon size={20} /></div>
    </div>
    <p className="text-gray-400 text-sm">{label}</p>
    <p className="text-2xl font-bold text-white mt-1">{val}</p>
  </div>
);

export default function DashboardView({ onAccept, setView, showRequestsOnly }) {
  return (
    <div className="space-y-6">
      {!showRequestsOnly && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatCard icon={DollarSign} label="Ganancias Mes" val="$1,250" color="text-green-400" />
            <StatCard icon={Clock} label="Horas Clases" val="24.5h" color="text-tutor-accent" />
            <StatCard icon={Users} label="Total Alumnos" val="12" color="text-yellow-400" />
        </div>
      )}

      <div className="bg-tutor-card p-6 rounded-xl border border-gray-700">
        <h3 className="font-bold text-xl mb-4 text-white">Solicitudes Entrantes (Tiempo Real)</h3>
        <div className="space-y-4">
            {MOCK_REQUESTS.map((req) => (
                <div key={req.id} className="bg-tutor-bg p-4 rounded-lg flex justify-between items-center border-l-4 border-tutor-accent">
                    <div>
                        <h4 className="font-bold">{req.name}</h4>
                        <p className="text-sm text-gray-400">{req.topic} • {req.msg}</p>
                    </div>
                    <button onClick={() => onAccept(req)} className="bg-tutor-accent hover:bg-tutor-hover px-4 py-2 rounded flex items-center gap-2 transition-colors">
                        <CheckCircle size={16} /> Aceptar
                    </button>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}