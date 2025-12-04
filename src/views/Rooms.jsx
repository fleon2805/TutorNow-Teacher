import React, { useState, useEffect } from 'react';
import { Send, Code, Video, Mic, LogOut, Users } from 'lucide-react';

export const PrivateRoom = ({ student, onEnd }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const send = () => {
    if(!input) return;
    setMessages([...messages, { text: input, sender: 'me' }]);
    setInput('');
  };

  return (
    <div className="h-full flex gap-4">
      {/* Chat Area */}
      <div className="w-1/3 flex flex-col gap-4">
        <div className="bg-tutor-card p-4 rounded-xl border border-gray-700 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-bold">{student?.name || 'Estudiante'}</span>
            </div>
            <button onClick={onEnd} className="text-red-400 text-sm hover:underline">Finalizar</button>
        </div>
        <div className="flex-1 bg-tutor-card rounded-xl border border-gray-700 p-4 overflow-y-auto space-y-2">
            {messages.map((m, i) => (
                <div key={i} className={`p-2 rounded max-w-[80%] ${m.sender === 'me' ? 'bg-tutor-accent ml-auto' : 'bg-gray-700'}`}>
                    {m.text}
                </div>
            ))}
        </div>
        <div className="flex gap-2">
            <input className="flex-1 bg-tutor-card p-2 rounded border border-gray-600" value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder="Escribe..." />
            <button onClick={send} className="bg-tutor-accent p-2 rounded"><Send size={18}/></button>
        </div>
      </div>
      {/* Code Editor Mock */}
      <div className="flex-1 bg-gray-900 rounded-xl border border-gray-700 p-4 font-mono text-sm text-green-400">
        <div className="flex justify-between text-gray-400 border-b border-gray-700 pb-2 mb-2">
            <span>main.js</span>
            <Code size={16} />
        </div>
        <p>{`// Escribe código en tiempo real aquí\nfunction aprender() {\n  return "Éxito";\n}`}</p>
      </div>
    </div>
  );
};

export const GroupRoom = ({ onEnd }) => {
    return (
        <div className="h-full flex flex-col items-center justify-center bg-tutor-card rounded-xl border border-gray-700">
            <Users size={48} className="text-tutor-accent mb-4" />
            <h1 className="text-2xl font-bold">Sala Grupal Activa</h1>
            <p className="text-gray-400 mb-6">3 Estudiantes conectados</p>
            <button onClick={onEnd} className="bg-red-500/20 text-red-500 px-6 py-2 rounded-lg hover:bg-red-500/30">Salir de la sala</button>
        </div>
    )
}