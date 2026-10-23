# Proyecto App Móviles

Aplicación android nativa desarrollada como proyecto de la asignatura de Dispositivos Móviles.

## 📱 Descripción

App móvil construida en Android con autenticación mediante Firebase y inicio de sesión con Google, diseñada para ofrecer una experiencia fluida al usuario.

## 🛠️ Tecnologías

- **Lenguaje:** Java
- **Plataforma:** Android (SDK 35)
- **SDK Mínimo:** 24 (Android 7.0)
- **Autenticación:** Firebase Auth
- **Login Social:** Google Sign-In
- **UI:** Material Design + ConstraintLayout

## ✨ Funcionalidades

- Inicio de sesión con Firebase Authentication
- Autenticación con cuenta de Google
- Interfaz basada en Material Design
- Compatibilidad con Android 7.0 en adelante

## 🚀 Cómo ejecutar

### Requisitos
- Android Studio (última versión recomendada)
- JDK 11 o superior
- Dispositivo o emulador con Android 7.0+

### Pasos
1. Clonar el repositorio
   ```bash
   git clone https://github.com/FranciscoAguilarCuadra/Proyecto_app_moviles.git
   ```

2. Abrir el proyecto en Android Studio

3. Configurar Firebase:
   - Crear un proyecto en [Firebase Console](https://console.firebase.google.com/)
   - Habilitar Firebase Authentication
   - Habilitar Google Sign-In
   - Descargar `google-services.json` y colocarlo en `app/`

4. Sincronizar y ejecutar

## 📂 Estructura del proyecto

```
Proyecto_app_moviles/
├── app/
│   ├── src/
│   ├── build.gradle
│   └── google-services.json  (no incluido)
├── gradle/
├── build.gradle
└── settings.gradle
```

## 📋 Configuración de Firebase

1. Ir a [Firebase Console](https://console.firebase.google.com/)
2. Crear un nuevo proyecto
3. Agregar una app Android con el package name: `cl.grupo6.proyecto_app_moviles`
4. Descargar `google-services.json`
5. Habilitar **Email/Password** y **Google** en Authentication > Sign-in method

## 👨‍💻 Autor

**Francisco Aguilar Cuadra**

---

*Proyecto académico - Asignatura de Dispositivos Móviles*
