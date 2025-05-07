# Autopartes Website

## Personalización de Colores del Sitio Web

Este sitio web ha sido diseñado para ser fácilmente personalizable, especialmente en lo que respecta a los colores. A continuación se muestra cómo modificar los colores del sitio:

### Cambiar los Colores del Tema

Para cambiar los colores del sitio web, edite el archivo `/styles/main.css` y modifique las variables CSS definidas al inicio del archivo:

```css
:root {
    /* Primary Theme Colors - Change these to customize your site */
    --primary-color: #2196F3; /* Main theme color (currently blue) */
    --secondary-color: #4dabf5; /* Lighter version of primary color */
    --accent-color: #1976D2; /* Darker version for accents and highlights */
    
    /* Text and Background Colors */
    --text-color: #ffffff; /* Text on dark backgrounds */
    --text-dark: #333333; /* Text on light backgrounds */
    --bg-color: #121212; /* Very dark gray, almost black */
    --dark-bg: #1a1a1a; /* Slightly lighter than bg-color for contrast */
    --darker-bg: #0a0a0a; /* Darker than bg-color for cards and containers */
    
    /* UI Element Colors */
    --light-gray: #333333; /* Dark gray for light elements */
    --border-color: #444444; /* Slightly lighter gray for borders */
}
```

### Elementos que Cambian con los Colores

- **--primary-color**: Cambia todos los elementos principales como botones, enlaces, iconos destacados y bordes de la barra de navegación.
- **--secondary-color**: Versión más clara del color principal, utilizada para efectos hover y elementos secundarios.
- **--accent-color**: Versión más oscura utilizada para acentos y resaltes.
- **--bg-color**: Color de fondo principal del sitio.
- **--text-color**: Color del texto sobre fondos oscuros.
- **--text-dark**: Color del texto sobre fondos claros.

### Personalización de la Imagen del Hero

Para cambiar la imagen de fondo en la sección principal del home, edite el archivo `/pages/Home.js` y busque la variable `heroImageUrl`:

```javascript
// Default hero image - can be replaced with your own
const heroImageUrl = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
```

Reemplace la URL con la dirección de su propia imagen.

### Paletas de Color Sugeridas

#### Tema Rojo (Original)
```css
--primary-color: #e30022;
--secondary-color: #ff4444;
--accent-color: #ff0000;
```

#### Tema Azul (Actual)
```css
--primary-color: #2196F3;
--secondary-color: #4dabf5;
--accent-color: #1976D2;
```

#### Tema Verde
```css
--primary-color: #4CAF50;
--secondary-color: #81C784;
--accent-color: #388E3C;
```

#### Tema Naranja
```css
--primary-color: #FF9800;
--secondary-color: #FFB74D;
--accent-color: #F57C00;
```

#### Tema Púrpura
```css
--primary-color: #9C27B0;
--secondary-color: #BA68C8;
--accent-color: #7B1FA2;
```