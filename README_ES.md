# TutorNow - Plataforma de Tutoría en Línea

Prototipo funcional completamente estático de una plataforma de tutoría en línea para tutores. Diseñado con React, Tailwind CSS y animaciones modernas.

## 📋 Descripción General

TutorNow es una aplicación web 100% estática (sin conexión a base de datos) que simula el flujo completo de un tutor en un sistema de tutoría en línea. Incluye 10 módulos principales con animaciones suave y un diseño profesional y moderno.

## 🎯 Módulos Implementados

### 1. **Inicio de Sesión** (`Login.jsx`)
- Autenticación visual del tutor
- Validación de email y contraseña
- Opción de "Acceso de Demostración" para pruebas rápidas
- Recuperación de contraseña (placeholder)
- Animaciones fade-in y slide-up

### 2. **Dashboard Principal** (`Dashboard.jsx`)
- Panel de bienvenida del tutor
- Control de disponibilidad (Disponible/No disponible)
- Visualización de hora actual en tiempo real
- Próximas sesiones programadas
- Estadísticas rápidas (Ganancias, Sesiones, Tarifa/hora)
- Botones de acceso rápido a salas grupales e individuales

### 3. **Configuración de Disponibilidad** (`Disponibilidad.jsx`)
- Horario semanal (Lunes a Domingo)
- 4 turnos por día: Mañana, Tarde, Noche, Madrugada
- "Disponible Ahora" para activación inmediata
- Guardar configuración en localStorage
- Visualización del progreso (días activos)

### 4. **Mis Temas y Especialidades** (`Temas.jsx`)
- 15+ temas de enseñanza disponibles
- Categorización por tipo: Lenguajes, Bases de Datos, Seguridad, etc.
- Selección múltiple con checkmark visual
- Guardar selección en localStorage

### 5. **Solicitudes Individuales 1:1** (`SolicitudesIndividuales.jsx`)
- Cola en tiempo real de solicitudes de estudiantes
- Información del estudiante con avatar
- Prioridades: Urgente, Normal, Baja
- Panel de detalles con descripción del problema
- Botones Aceptar/Rechazar
- Indicador de actualización en tiempo real

### 6. **Sala Individual de Tutoría** (`SalaIndividual.jsx`)
- Chat en vivo entre tutor y estudiante
- Temporizador de sesión en tiempo real
- Botones multimedia: Imágenes, Código, Emojis
- Editor de código simple (lado derecho)
- Interfaz inmersiva a pantalla completa
- Botón para terminar sesión

### 7. **Sesión Grupal** (`SesionGrupal.jsx`)
- Soporte para múltiples estudiantes
- Turno actual destacado
- Cola de espera con tiempo de espera
- Controles de tiempo por estudiante
- Chat grupal + chat 1:1 simultáneos
- Botón "Siguiente Estudiante"

### 8. **Panel de Ganancias** (`Ganancias.jsx`)
- Estadísticas financieras: Mes, Semana, Total Acumulado
- Gráfico de barras animado (últimos 7 días)
- Tabla de historial de sesiones con detalles
- Promedio diario y mejor día
- Exportar reporte (placeholder)

### 9. **Reputación y Calificaciones** (`Reputacion.jsx`)
- Nivel profesional: Bronce, Plata, Oro, Diamante
- Calificación promedio (0-5 estrellas)
- Distribución de calificaciones
- Reseñas de estudiantes con filtros
- Logros desbloqueables
- Estadísticas de desempeño

### 10. **Configuración del Perfil** (`Configuracion.jsx`)
- Editar información personal
- Cambiar foto de perfil
- Administrar biografía
- Enlaces profesionales (GitHub, Portafolio)
- Cambio de contraseña con visualización
- Preferencias y notificaciones

## 🎨 Paleta de Colores

**Colores Principales:**
- Azul Oscuro: `#0D1B2A` - Headers, backgrounds
- Azul Tarjetas: `#1B263B` - Cards y componentes
- Celeste Acento: `#4DA8DA` - Botones, highlights
- Turquesa: `#00B4D8` - Hover, elementos destacados

**Colores Secundarios:**
- Gris Suave: `#E0E1DD` - Fondos neutros
- Gris Texto: `#778DA9` - Texto secundario

**Estados:**
- Éxito: Verde `#06D6A0`
- Advertencia: Naranja `#FAA307`
- Error: Rojo `#EF476F`

## ✨ Animaciones Implementadas

1. **fade-in**: Desvanecimiento suave al entrar
2. **slide-up**: Deslizamiento desde abajo
3. **slide-down**: Deslizamiento desde arriba
4. **slide-left/right**: Deslizamientos horizontales
5. **scale-in**: Zoom al entrar
6. **pulse-glow**: Efecto de brillo pulsante
7. **bounce-soft**: Rebote suave
8. **spin-slow**: Rotación lenta

Todas las animaciones son configurables y reutilizables.

## 📦 Estructura de Carpetas

```
src/
├── views/tutor/
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Disponibilidad.jsx
│   ├── Temas.jsx
│   ├── SolicitudesIndividuales.jsx
│   ├── SalaIndividual.jsx
│   ├── SesionGrupal.jsx
│   ├── Ganancias.jsx
│   ├── Reputacion.jsx
│   └── Configuracion.jsx
├── data/
│   └── tutorMocks.js
├── index.css
├── App.jsx
└── main.jsx
```

## 💾 Almacenamiento Local

La aplicación usa `localStorage` para simular persistencia:
- `tutorAuthenticated` - Estado de autenticación
- `tutorEmail` - Email del tutor
- `tutorSchedule` - Horario de disponibilidad
- `tutorTopics` - Temas seleccionados

## 🚀 Cómo Usar

### Instalación
```bash
npm install
```

### Ejecutar en Desarrollo
```bash
npm run dev
```

### Build para Producción
```bash
npm run build
```

### Preview
```bash
npm run preview
```

## 🔧 Tecnologías Utilizadas

- **React 19.2.0** - Framework UI
- **Tailwind CSS 4.1.17** - Utility-first CSS
- **Vite** - Build tool
- **Lucide React** - Iconografía
- **Styled JSX** - Estilos inline (para animaciones)

## 📋 Datos Mock

Todos los datos de ejemplo se encuentran en `src/data/tutorMocks.js`:
- Información del tutor
- Sesiones próximas
- Solicitudes de estudiantes
- Historial de sesiones
- Reseñas y ratings
- Ganancias por día

## 🎯 Características

✅ 100% funcional sin backend  
✅ Responsive (desktop-first)  
✅ Animaciones suaves en todas las transiciones  
✅ Paleta de colores profesional  
✅ Datos simulados realistas  
✅ LocalStorage para persistencia  
✅ Componentes reutilizables  
✅ Validaciones visuales  
✅ Interfaces intuitivas  
✅ Código limpio y bien estructurado  

## 🔐 Credenciales de Acceso Demo

- **Email:** tutor@tutornow.com
- **Contraseña:** demo123
- O usa el botón "Cargar Datos de Demo" en el login

## 📝 Notas Importantes

- Esta es una **aplicación puramente estática** sin backend
- Los datos se guardan en localStorage (no persisten entre navegadores)
- Las animaciones se ejecutan en CSS/JS sin dependencias externas
- El diseño es 100% responsive
- Se puede usar como base para un proyecto real con backend

## 🎓 Casos de Uso Demostrables

1. **Gestionar Disponibilidad**: Configura tu horario de atención
2. **Gestionar Especialidades**: Selecciona qué temas enseñas
3. **Aceptar Solicitudes**: Simula aceptar/rechazar estudiantes
4. **Ver Ganancias**: Visualiza estadísticas financieras
5. **Editar Perfil**: Personaliza tu información profesional

## 🎉 Conclusión

TutorNow es un prototipo completo y funcional que demuestra cómo sería una plataforma de tutoría profesional. Está listo para ser presentado, demostrado o utilizarse como base para desarrollo futuro.

---

**Versión:** 1.0.0  
**Última actualización:** Diciembre 2025  
**Estado:** Completamente Funcional ✅
