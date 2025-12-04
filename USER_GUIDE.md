# 🎓 TutorNow - Guía Rápida de Usuario

## 🚀 Inicio Rápido

**Servidor activo en**: http://localhost:5173

---

## 📱 Módulos Disponibles

### 1️⃣ **Login / Inicio de Sesión**
- Pantalla inicial de la aplicación
- Ingresa cualquier email y contraseña
- Tu sesión se guarda automáticamente

### 2️⃣ **Dashboard**
- **Panel principal** con toda tu información
- **Sidebar izquierdo**: Menú de navegación (expandible/colapsable)
- **Top bar**: Hora actual, disponibilidad, notificaciones
- **Estadísticas**: Ganancias, sesiones, calificación, tarifa
- **Botones de acción rápida**: Sala Grupal, Solicitudes 1:1
- **Sesiones próximas**: Lista de tus próximas clases

### 3️⃣ **Solicitudes Individuales** 💬
- **Manage**: Ver todas las solicitudes de estudiantes
- **Detalles**: Nombre, tema, nivel, mensaje del estudiante
- **Acciones**: Aceptar (abre Sala Individual) o Rechazar
- **Mock data**: 4 estudiantes con solicitudes reales

### 4️⃣ **Disponibilidad** 📅
- **Calendario semanal**: Lunes a Domingo
- **4 turnos por día**: Mañana (06:00-12:00), Tarde (12:00-18:00), Noche (18:00-00:00), Madrugada (00:00-06:00)
- **Toggles**: Activa/desactiva cada turno
- **Acciones rápidas**: Habilitar/Deshabilitar todos los turnos
- **Guardado**: Se guarda automáticamente en localStorage

### 5️⃣ **Especialidades** 🎯
- **30+ temas disponibles**: Python, Java, React, SQL, Ciberseguridad, Machine Learning, etc.
- **Selección múltiple**: Elige todas tus especialidades
- **Acciones**: Seleccionar Todo, Limpiar, Guardar
- **Contador**: Muestra cuántas especialidades has seleccionado

### 6️⃣ **Ganancias** 💰
- **Resumen**: Total este mes, sesiones completadas, promedio, tarifa
- **Gráfico**: Ganancias de los últimos 6 meses
- **Tabla**: Historial completo de sesiones con detalles
- **Exportar**: Descarga tu reporte (placeholder para backend)

### 7️⃣ **Reputación** ⭐
- **Calificación**: Tu promedio de estrellas (1-5)
- **Nivel**: Bronce → Plata → Oro → Diamante
- **Gráfico**: Distribución de reseñas (cuántas de cada tipo)
- **Reseñas**: Lista de comentarios recientes de estudiantes

### 8️⃣ **Sala Individual** 🎓
- **Chat**: Comunicación en tiempo real con el estudiante
- **Editor de código**: Área para compartir ejemplos
- **Temporizador**: Controla cuánto tiempo lleva la sesión
- **Recursos**: Links a documentación y ejercicios
- **Finalizar**: Botón para terminar la sesión y volver

### 9️⃣ **Sesión Grupal** 👥
- **Chat grupal**: Comunicación con múltiples estudiantes
- **Cola de espera**: Panel lateral mostrando la fila
- **Turno actual**: Quién está siendo atendido ahora
- **Temporizador**: 9 minutos por estudiante
- **Botón "Siguiente"**: Avanza al próximo estudiante

### 🔟 **Configuración** ⚙️
- **Perfil**: Edita email, teléfono, biografía
- **Enlaces**: Añade URLs de portfolio y GitHub
- **Seguridad**: Cambia tu contraseña
- **Guardado**: Botón para guardar todos los cambios

---

## 🎮 Cómo Navegar

### Opción 1: Sidebar (Recomendado)
```
1. Haz clic en cualquier item del sidebar izquierdo
2. El módulo se carga automáticamente
3. El botón "Volver" en la esquina superior izquierda te devuelve al Dashboard
```

### Opción 2: Acciones Rápidas
```
1. En el Dashboard, encontrarás dos botones grandes
2. "Sala Grupal" → Te lleva a la sesión grupal
3. "Solicitudes 1:1" → Te lleva a gestionar solicitudes
```

### Opción 3: Aceptar Solicitud
```
1. Ve a "Solicitudes Individuales"
2. Haz clic en el botón "ACEPTAR" de un estudiante
3. Se abrirá automáticamente la Sala Individual
```

### Opción 4: Volver al Dashboard
```
1. En cualquier pantalla, haz clic en el botón "Volver" (esquina superior izquierda)
2. O haz clic en "Dashboard" en el sidebar
```

---

## 💡 Tips & Trucos

### Dashboard
- 🔴 **Disponibilidad**: Haz clic para activar/desactivar tu disponibilidad
- 🔔 **Notificaciones**: La campana muestra notificaciones (visual feedback)
- ⏱️ **Reloj**: Se actualiza cada segundo con la hora actual
- 📊 **Estadísticas**: Hover sobre las tarjetas para ver más detalles

### Solicitudes
- 👤 **Avatares**: Los colores del avatar corresponden al estudiante
- 📋 **Detalles**: El panel derecho muestra la información completa
- ✅ **Aceptar**: Te lleva directamente a la Sala Individual del estudiante
- ❌ **Rechazar**: Elimina la solicitud (visual feedback)

### Disponibilidad
- 📅 **Calendario**: Haz clic en los toggles para cambiar disponibilidad
- ⚡ **Acciones rápidas**: Usa "Habilitar Todo" para trabajar 7x4 turnos
- 💾 **Auto-guardado**: Se guarda en localStorage al cambiar

### Especialidades
- ✔️ **Seleccionar Todo**: Elige todas las especialidades rápidamente
- 🧹 **Limpiar**: Deselecciona todo de una vez
- 💾 **Guardar**: Los cambios se persisten en localStorage

### Sala Individual
- 💬 **Chat**: Escribe y presiona ENTER o haz clic en el botón enviar
- ⏱️ **Temporizador**: Muestra HH:MM:SS en tiempo real
- 💻 **Código**: Es un placeholder, pero muestra el concepto
- 🔴 **Finalizar**: Cierra la sesión y vuelve al Dashboard

### Sesión Grupal
- 👁️ **Turno actual**: El estudiante con la animación pulse está siendo atendido
- 🚪 **Cola**: Los demás estudiantes en la lista esperan su turno
- ⏰ **Tiempo**: Cada estudiante tiene 9 minutos (contador automático)
- ➡️ **Siguiente**: Avanza al próximo estudiante en la cola

### Configuración
- 📝 **Textarea**: Para la biografía, puedes escribir múltiples líneas
- 🔐 **Contraseña**: Mínimo 6 caracteres, debe coincidir
- 👁️ **Ver/Ocultar**: Toggle para mostrar/ocultar contraseña
- 💾 **Guardado**: Confirma con mensaje verde

---

## 🎨 Controles de Interfaz

### Botones
- **Azul Gradiente** (Cyan→Blue): Acciones principales
- **Verde** (#10b981): Confirmación/Éxito
- **Púrpura** (#a855f7): Opcionales/Secundarias
- **Rojo Transparente**: Cerrar/Eliminar/Logout

### Hovers
- Los botones cambian de color y tienen efecto glow
- Las tarjetas se elevan (transform: translateY)
- Los inputs tienen bordes más brillantes

### Animaciones
- ⭐ Pulse: Elementos activos parpadean suavemente
- 🚀 Transiciones: Todo es suave (200ms ease)
- 📱 Scrollbars: Personalizadas con tema cyan

---

## 📊 Datos Mock (Lo que Ves)

### Tutor Principal
- **Nombre**: (Desde tutorMocks.js)
- **Especialidades**: Python, React, SQL, APIs REST, Estructuras de Datos
- **Calificación**: 4.8 ⭐ (Nivel: Diamante 💎)
- **Tarifa**: $50/hora

### Estudiantes (Solicitudes)
1. 👤 **Carlos García** - Python (Principiante)
2. 👤 **María López** - React (Intermedio)
3. 👤 **Juan Rodríguez** - SQL (Avanzado)
4. 👤 **Ana Martínez** - APIs REST (Principiante)

### Sesiones Próximas
- 5 sesiones programadas para hoy y mañana
- Horarios realistas con estudiantes diferentes
- Temas variados (Python, React, JavaScript, etc.)

### Reseñas
- 5 reseñas recientes de estudiantes
- Calificaciones 4-5 estrellas
- Comentarios positivos auténticos

---

## ⚙️ Configuración Guardada

Tu aplicación guarda automáticamente en `localStorage`:

```
tutorAuthenticated    → Tu sesión
tutorEmail           → Tu email
tutorTopics          → Especialidades seleccionadas
tutorConfig          → Datos de perfil (email, teléfono, biografía, etc.)
tutorPassword        → Tu contraseña (local)
```

---

## 🔴 Limitaciones (Mock Data)

⚠️ Recuerda que esto es una **demo estática**:
- ❌ Los cambios no persisten en un servidor real
- ❌ Los chats son simulados
- ❌ Los temporizadores son locales
- ❌ Las ganancias son mock data
- ❌ Los estudiantes no pueden conectarse realmente

✅ **Para producción**, necesitarás:
- Backend (Node.js, Python, etc.)
- Base de datos (PostgreSQL, MongoDB, etc.)
- WebSockets para chat en tiempo real
- Autenticación segura (JWT, OAuth)
- Video/Audio (WebRTC)

---

## 🆘 Troubleshooting

### "La página es blanca"
- Abre la consola (F12) y busca errores
- Recarga la página (Ctrl+R)
- Verifica que http://localhost:5173 esté activo

### "Los estilos se ven raros"
- Limpia el caché del navegador
- Presiona Ctrl+Shift+R para recargar sin caché
- Los estilos son inline, debería verse bien

### "Los botones no funcionan"
- Verifica que tengas sesión iniciada (Login primero)
- Prueba con la consola del navegador abierta (F12)
- Recarga la página

### "Las sesiones grupales se ven lentas"
- El temporizador actualiza cada segundo (es normal)
- Es simulado, no es WebSocket real
- En producción usarías Socket.io

---

## 📞 Información Técnica

- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.5 (rolldown-vite)
- **Estilos**: Inline CSS (no Tailwind en DOM)
- **Icons**: Lucide React (20-24px)
- **Persistencia**: localStorage
- **Responsividad**: Grid responsive

---

## ✨ Características Destacadas

✅ 10 módulos completamente funcionales
✅ Navegación fluida y sin errores
✅ Estilos consistentes con paleta profesional
✅ Animaciones suaves y feedback visual
✅ Datos mock realistas
✅ Temporizadores en tiempo real
✅ Chat simulado
✅ Guardado automático
✅ Sidebar collapsible
✅ Completamente responsive

---

**¡Disfruta usando TutorNow! 🚀**

Para más información, consulta `COMPLETION_REPORT.md`
