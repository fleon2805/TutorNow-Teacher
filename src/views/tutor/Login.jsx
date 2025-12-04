import React, { useState } from 'react';
import { LogIn, Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';

export function TutorLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (email && password) {
        localStorage.setItem('tutorAuthenticated', 'true');
        localStorage.setItem('tutorEmail', email);
        window.location.href = '/tutor/dashboard';
      } else {
        setError('Por favor completa todos los campos');
      }
      setLoading(false);
    }, 1000);
  };

  const handleDemo = () => {
    setEmail('tutor@tutornow.com');
    setPassword('demo123');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl mb-6 shadow-2xl shadow-cyan-500/50">
            <LogIn className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">TutorNow</h1>
          <p className="text-cyan-300 font-medium">Plataforma de Tutoría Profesional</p>
        </div>

        {/* Login Card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
          
          <div className="relative bg-slate-900/80 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-8">Inicia Sesión</h2>

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl animate-pulse">
                <p className="text-red-300 text-sm font-medium">⚠️ {error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="group/input">
                <label className="block text-sm font-semibold text-white mb-3">Email o Usuario</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400/60 group-focus-within/input:text-cyan-400 transition-colors" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@ejemplo.com"
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 group-hover/input:border-slate-600"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="group/input">
                <label className="block text-sm font-semibold text-white mb-3">Contraseña</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400/60 group-focus-within/input:text-cyan-400 transition-colors" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-3.5 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 group-hover/input:border-slate-600"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-cyan-400 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Verificando...
                  </>
                ) : (
                  <>
                    Iniciar Sesión
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-8">
              <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent"></div>
              <span className="text-xs text-slate-500 font-medium">O</span>
              <div className="flex-1 h-px bg-gradient-to-l from-slate-700 to-transparent"></div>
            </div>

            {/* Demo Button */}
            <button
              onClick={handleDemo}
              className="w-full py-3 bg-slate-800/50 border border-slate-600/50 hover:border-cyan-400/50 text-white font-medium rounded-xl transition-all duration-300 hover:bg-slate-700/50"
            >
              🎯 Acceso de Demostración
            </button>

            {/* Forgot Password */}
            <div className="mt-6 text-center">
              <button
                type="button"
                className="text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-slate-400 text-xs mt-8">
          © 2025 TutorNow. Todos los derechos reservados.
        </p>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
