# 🎯 GUÍA DE NAVEGACIÓN - TutorNow

## 🚀 Inicio Rápido

### 1. Acceso al Sistema
```
URL: http://localhost:5173
Email: tutor@tutornow.com
Contraseña: demo123
```

O usa el botón **"Cargar Datos de Demo"** en la pantalla de login.

---

## 📍 Mapeo de Rutas

La aplicación usa estas rutas internas (en `App.jsx`):

| Ruta | Componente | Descripción |
|------|-----------|------------|
| `/tutor/login` | TutorLogin | Pantalla de autenticación |
| `/tutor/dashboard` | TutorDashboard | Panel principal |
| `/tutor/disponibilidad` | TutorDisponibilidad | Configurar horario |
| `/tutor/temas` | TutorTemas | Seleccionar especialidades |
| `/tutor/solicitudes` | TutorSolicitudesIndividuales | Cola de estudiantes |
| `/tutor/sala-individual` | SalaIndividual | Chat 1:1 |
| `/tutor/sala-grupal` | SesionGrupal | Chat grupal |
| `/tutor/ganancias` | TutorGanancias | Estadísticas financieras |
| `/tutor/reputacion` | TutorReputacion | Calificaciones y reseñas |
| `/tutor/configuracion` | TutorConfiguracion | Editar perfil |

---

## 🔄 Flujo de Navegación Recomendado

### 1️⃣ **Configuración Inicial**
```
Login → Dashboard → Disponibilidad → Temas → Configuración
```

### 2️⃣ **Gestión de Sesiones**
```
Dashboard → Solicitudes 1:1 → Aceptar → Sala Individual
O
Dashboard → Sala Grupal (si hay sesión programada)
```

### 3️⃣ **Revisión de Desempeño**
```
Dashboard → Ganancias / Reputación
```

---

## 📱 Componentes Principales

### **Dashboard Principal**
- **Ubicación:** Primera pantalla después del login
- **Elementos clave:**
  - Control de disponibilidad (On/Off)
  - Próximas sesiones
  - Estadísticas rápidas
  - Acceso directo a salas

### **Disponibilidad**
- **Objetivo:** Configurar tu horario de trabajo
- **Característica:** Selecciona turnos por día (Mañana, Tarde, Noche, Madrugada)
- **Botón:** "Disponible Ahora" para activación inmediata

### **Temas**
- **Objetivo:** Especificar qué enseñas
- **Opción:** Seleccionar múltiples temas de una lista predefinida
- **Guardado:** Automático en localStorage

### **Solicitudes 1:1**
- **Objetivo:** Gestionar estudiantes individuales
- **Acción:** Click en solicitud → Ver detalles → Aceptar/Rechazar

### **Sala Individual**
- **Objetivo:** Tutoría 1:1 con estudiante
- **Funciones:**
  - Chat en vivo
  - Temporizador
  - Editor de código
  - Botones multimedia

### **Sala Grupal**
- **Objetivo:** Tutoría con múltiples estudiantes
- **Funciones:**
  - Turnos individuales
  - Cola de espera
  - Chat grupal + individual
  - Controles de tiempo

### **Ganancias**
- **Objetivo:** Revisar ingresos
- **Visualización:**
  - Gráfico de ganancias diarias
  - Tabla de historial
  - Estadísticas

### **Reputación**
- **Objetivo:** Ver calificaciones y reseñas
- **Información:**
  - Nivel (Bronce/Plata/Oro/Diamante)
  - Rating promedio
  - Reseñas de estudiantes

### **Configuración**
- **Objetivo:** Editar perfil profesional
- **Opciones:**
  - Información personal
  - Contraseña
  - Enlaces profesionales
  - Preferencias

---

## 💾 Datos Locales

### LocalStorage Keys
```javascript
localStorage.tutorAuthenticated  // true/false
localStorage.tutorEmail         // email del tutor
localStorage.tutorSchedule      // horario semanal
localStorage.tutorTopics        // temas seleccionados
```

### Para Limpiar Datos
```javascript
// En la consola del navegador:
localStorage.clear();
```

---

## 🎨 Personalización

### Cambiar Colores Primarios
Edita `tailwind.config.js`:
```javascript
tutor: {
  bg: '#0D1B2A',          // Azul oscuro
  card: '#1B263B',        // Azul tarjetas
  accent: '#4DA8DA',      // Celeste
  hover: '#00B4D8',       // Turquesa
  text: '#E0E1DD',        // Gris texto
}
```

### Agregar Nuevos Temas
Edita `src/data/tutorMocks.js` - array `allTopics`:
```javascript
export const allTopics = [
  'Java',
  'Python',
  'Mi Nuevo Tema', // Agrega aquí
  ...
];
```

---

## 🔄 Flujos Principales

### ✅ Flujo: Aceptar una Solicitud
1. Dashboard → Click "Atender solicitudes individuales"
2. SolicitudesIndividuales → Click en una solicitud
3. Ver detalles del estudiante
4. Click botón "Aceptar Sesión"
5. Se abre SalaIndividual automáticamente

### ✅ Flujo: Configurar Horario
1. Dashboard → Click "Disponibilidad" (en sidebar)
2. TutorDisponibilidad → Seleccionar días/turnos
3. Click "Guardar Horario"
4. Datos se guardan en localStorage

### ✅ Flujo: Actualizar Perfil
1. Dashboard → Configuración
2. Editar campos deseados
3. Cambiar contraseña si es necesario
4. Click "Guardar Cambios"

---

## 📊 Datos Mock Disponibles

### Tutor (Carlos García)
```javascript
{
  name: 'Carlos García',
  email: 'carlos@tutornow.com',
  specialties: ['Java', 'Python', 'SQL', 'Ciberseguridad', 'APIs REST'],
  rating: 4.8,
  level: 'Oro'
}
```

### Sesiones Próximas
- 3 sesiones programadas (individuales y grupales)
- Información de estudiantes con avatares
- Horarios reales

### Solicitudes Pendientes
- 3 solicitudes de estudiantes
- Diferentes prioridades
- Descripciones de problemas

---

## 🎯 Tips y Trucos

### 💡 1. Prueba el Toggle de Disponibilidad
En el dashboard, puedes cambiar tu estado de disponible/no disponible.

### 💡 2. Observa las Animaciones
Cada transición tiene animaciones suaves:
- Fade-in (desvanecimiento)
- Slide-up (deslizamiento)
- Scale (zoom)

### 💡 3. Ver Cambios en Tiempo Real
Las estadísticas se actualizan mientras usas la app.

### 💡 4. Guardar Datos Localmente
Los cambios se guardan automáticamente en localStorage:
```javascript
// Verificar datos guardados:
console.log(localStorage);
```

### 💡 5. Testing de Diferentes Vistas
Navega por todas las vistas para ver:
- Diseño responsive
- Coherencia de colores
- Consistencia de animaciones

---

## 🚨 Casos de Uso - Testing

### Caso 1: "Nuevo Tutor Configura Su Perfil"
1. Login
2. Ir a Disponibilidad → Configurar horario
3. Ir a Temas → Seleccionar especialidades
4. Ir a Configuración → Editar información
5. Resultado: Perfil completamente configurado

### Caso 2: "Tutor Atiende Solicitudes"
1. Dashboard
2. Atender solicitudes 1:1
3. Seleccionar una solicitud
4. Revisar detalles
5. Aceptar → Abre Sala Individual
6. Resultado: En sesión tutoreo

### Caso 3: "Revisar Ganancias y Reputación"
1. Dashboard
2. Ir a Ganancias → Ver estadísticas
3. Volver → Ir a Reputación
4. Ver calificaciones y reseñas
5. Resultado: Análisis completo de desempeño

---

## 🔧 Solución de Problemas

### ❌ Los datos no se guardan
**Solución:** Verifica que localStorage no esté deshabilitado en el navegador.

### ❌ Las animaciones son lentas
**Solución:** Reduce la velocidad de la red simulada en DevTools.

### ❌ Estilos no se aplican correctamente
**Solución:** Limpia la caché del navegador (Ctrl+Shift+Delete).

### ❌ El servidor no inicia
**Solución:** Verifica que el puerto 5173 esté disponible.

---

## 📚 Recursos Útiles

- **Tailwind CSS:** https://tailwindcss.com
- **Lucide Icons:** https://lucide.dev
- **React Docs:** https://react.dev
- **Vite:** https://vitejs.dev

---

**Última actualización:** Diciembre 2025  
**Versión:** 1.0.0
