// Mock data for tutor application
export const tutorData = {
  id: 'tutor-001',
  name: 'Carlos García',
  email: 'carlos.garcia@tutornow.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
  specialties: ['Java', 'Python', 'SQL', 'Ciberseguridad', 'APIs REST'],
  rating: 4.8,
  reviews: 127,
  level: 'Oro',
  availability: {
    status: 'Disponible',
    currentHour: '14:30'
  },
  schedule: {
    lunes: { morning: true, afternoon: true, evening: true, night: false },
    martes: { morning: true, afternoon: true, evening: true, night: false },
    miercoles: { morning: false, afternoon: true, evening: true, night: false },
    jueves: { morning: true, afternoon: true, evening: true, night: false },
    viernes: { morning: true, afternoon: true, evening: true, night: true },
    sabado: { morning: false, afternoon: true, evening: true, night: false },
    domingo: { morning: false, afternoon: false, evening: true, night: false }
  },
  earnings: {
    thisMonth: 1250.50,
    thisWeek: 340.00,
    totalEarnings: 8745.30,
    ratePerHour: 35.00
  }
};

export const upcomingSessions = [
  {
    id: 'session-001',
    studentName: 'Juan Pérez',
    studentAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Juan',
    topic: 'Python - Funciones Avanzadas',
    startTime: '2025-12-03 16:00',
    duration: 60,
    type: 'individual',
    status: 'scheduled'
  },
  {
    id: 'session-002',
    studentName: 'Grupo de Programación',
    topic: 'Java - Orientación a Objetos',
    startTime: '2025-12-03 17:30',
    duration: 90,
    type: 'group',
    studentsCount: 8,
    status: 'scheduled'
  },
  {
    id: 'session-003',
    studentName: 'María López',
    studentAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
    topic: 'SQL - Consultas Complejas',
    startTime: '2025-12-04 10:00',
    duration: 45,
    type: 'individual',
    status: 'scheduled'
  }
];

export const individualRequests = [
  {
    id: 'req-001',
    studentName: 'Alejandro González',
    studentAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alejandro',
    topic: 'Java - Excepciones',
    message: 'Tengo problemas entendiendo try-catch y custom exceptions',
    timestamp: '2025-12-03 14:25',
    priority: 'high',
    status: 'pending'
  },
  {
    id: 'req-002',
    studentName: 'Sofia Rodríguez',
    studentAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia',
    topic: 'Python - Decoradores',
    message: 'No entiendo cómo funcionan los decoradores en Python',
    timestamp: '2025-12-03 14:15',
    priority: 'medium',
    status: 'pending'
  },
  {
    id: 'req-003',
    studentName: 'Luis Martínez',
    studentAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Luis',
    topic: 'Ciberseguridad - Firewalls',
    message: 'Ayuda con configuración de reglas de firewall',
    timestamp: '2025-12-03 13:50',
    priority: 'low',
    status: 'pending'
  }
];

export const sessionHistory = [
  {
    id: 'hist-001',
    studentName: 'Juan Pérez',
    topic: 'Python - Listas',
    date: '2025-12-02',
    duration: 60,
    earnings: 35.00,
    rating: 5,
    review: 'Excelente explicación, muy paciente'
  },
  {
    id: 'hist-002',
    studentName: 'María López',
    topic: 'SQL - JOINs',
    date: '2025-12-01',
    duration: 45,
    earnings: 26.25,
    rating: 4,
    review: 'Muy bueno, algo rápido en algunos temas'
  },
  {
    id: 'hist-003',
    studentName: 'Grupo Programación',
    topic: 'Java - POO',
    date: '2025-11-30',
    duration: 90,
    earnings: 52.50,
    rating: 5,
    review: 'Sesión grupal excelente'
  },
  {
    id: 'hist-004',
    studentName: 'Carlos López',
    topic: 'APIs REST',
    date: '2025-11-29',
    duration: 30,
    earnings: 17.50,
    rating: 4,
    review: 'Buena sesión'
  }
];

export const tutorReviews = [
  {
    id: 'review-001',
    studentName: 'Juan Pérez',
    rating: 5,
    comment: 'Excelente tutor, muy paciente y explica de forma clara',
    date: '2025-12-02'
  },
  {
    id: 'review-002',
    studentName: 'María López',
    rating: 4,
    comment: 'Buenas explicaciones, podría ir más lento en algunos temas',
    date: '2025-12-01'
  },
  {
    id: 'review-003',
    studentName: 'Sofía Rodríguez',
    rating: 5,
    comment: 'Increíble, resolvió todas mis dudas en la primera sesión',
    date: '2025-11-30'
  },
  {
    id: 'review-004',
    studentName: 'Alejandro González',
    rating: 4,
    comment: 'Muy bueno, recomendado',
    date: '2025-11-28'
  }
];

export const allTopics = [
  'Java',
  'Python',
  'SQL',
  'Ciberseguridad',
  'Redes',
  'APIs REST',
  'Estructuras de datos',
  'Angular',
  'React',
  'Spring',
  'Laravel',
  'NodeJS',
  'Docker',
  'Git',
  'Linux'
];

export const groupSessions = [
  {
    id: 'group-001',
    topic: 'Java - Orientación a Objetos',
    maxStudents: 10,
    currentStudents: [
      { id: '1', name: 'Juan Pérez', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Juan' },
      { id: '2', name: 'María López', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria' },
      { id: '3', name: 'Carlos García', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos' }
    ],
    queue: [
      { id: '4', name: 'Sofía Rodríguez', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia', waitTime: 5 },
      { id: '5', name: 'Alejandro González', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alejandro', waitTime: 15 }
    ],
    timePerStudent: 15,
    elapsedTime: 8,
    status: 'active'
  }
];

export const earningsHistory = [
  { date: '2025-12-03', amount: 105.00, sessions: 3 },
  { date: '2025-12-02', amount: 87.50, sessions: 2 },
  { date: '2025-12-01', amount: 122.75, sessions: 4 },
  { date: '2025-11-30', amount: 70.00, sessions: 2 },
  { date: '2025-11-29', amount: 140.25, sessions: 5 },
  { date: '2025-11-28', amount: 61.25, sessions: 2 },
  { date: '2025-11-27', amount: 96.50, sessions: 3 }
];
