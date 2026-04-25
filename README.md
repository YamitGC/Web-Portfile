# 🌐 Portafolio Web — Yamit Garcia

Portafolio personal desarrollado con HTML, CSS y JavaScript puro (Vanilla JS). Incluye una página principal con información personal y proyectos, y una página secundaria dedicada a las mascotas del autor.

---

## 📁 Estructura del proyecto

```
/
├── index.html          # Página principal del portafolio
├── pets.html           # Página de mascotas
├── script.js           # Lógica de interacción (formulario de contacto)
├── style.css           # Punto de entrada de estilos (importa todos los módulos CSS)
│
├── css/
│   ├── variables.css   # Variables CSS globales (colores, fuentes, espaciado, etc.)
│   ├── base.css        # Reset y estilos base del body
│   ├── portfolio.css   # Estilos específicos del portafolio (header, home, proyectos, footer)
│   ├── pets.css        # Estilos específicos de la página de mascotas
│   └── responsive.css  # Media queries para tablets y móviles
│
└── assets/
    ├── inventario.png
    ├── estudiantes.jpg
    ├── gestion-clientes.jpg
    ├── chop.jpeg
    ├── gato.jpeg
    ├── junior.jpeg
    ├── perro1.jpeg
    ├── pollo.jpeg
    └── fondo.jpg
```

---

## 🧩 Páginas

### `index.html` — Portafolio principal
Contiene tres secciones principales:
- **Home (`#home`):** Presentación personal de Yamit Garcia.
- **Proyectos (`#projects`):** Cards con links a repositorios de GitHub (proyectos Python).
- **Footer / Contacto (`#contact_me`):** Links a redes sociales y formulario de contacto interactivo.

### `pets.html` — Mis Mascotas
Página secundaria con un catálogo visual de las mascotas del autor, organizado en cards con foto, nombre y descripción.

---

## 🎨 Arquitectura CSS

Los estilos están modularizados e importados desde `style.css`:

| Archivo | Contenido |
|---|---|
| `variables.css` | Tokens de diseño: colores, tipografía, espaciado, sombras, transiciones |
| `base.css` | Reset universal (`*`) y fuente base del `body` |
| `portfolio.css` | Header, sección Home, cards de proyectos, footer y formulario |
| `pets.css` | Header, sección Home, cards de mascotas y footer de la página de mascotas |
| `responsive.css` | Breakpoints: `1024px` (tablet), `768px` (móvil grande), `480px` (móvil pequeño) |

---

## ⚡ JavaScript — `script.js`

Maneja la interacción del formulario de contacto:

1. Escucha el evento `submit` del formulario `#contact-form`.
2. Previene el comportamiento por defecto (recarga de página).
3. Captura el nombre del usuario y muestra un mensaje de confirmación en `#mensaje-interactivo`.
4. Aplica estilos al mensaje desde JS (color verde, negrita).
5. Reinicia el formulario con `reset()`.

> **Nota:** El formulario es solo una simulación visual. No envía datos a ningún servidor real.

---

## 🚀 Cómo usar

1. Clona o descarga el repositorio.
2. Asegúrate de que las imágenes estén en la carpeta `/assets/`.
3. Abre `index.html` en tu navegador. No requiere servidor ni dependencias externas.

---

## 🛠️ Tecnologías

- HTML5 semántico
- CSS3 modular con Custom Properties (variables)
- JavaScript ES6 (Vanilla JS)
- Diseño responsive con Media Queries
- Tipografía del sistema (`Trebuchet MS` stack)

---

## 👤 Autor

**Yamit Garcia**
- GitHub: [@YamitGC](https://github.com/YamitGC)