# CryptoBrosV2

CryptoBrosV2 es una aplicación web desarrollada con React y Tailwind CSS que permite a los usuarios buscar y visualizar información sobre diversas criptomonedas. La aplicación utiliza la API de CoinDesk para obtener datos actualizados sobre las criptomonedas.

## Funcionalidades

- **Búsqueda de Criptomonedas**: Los usuarios pueden buscar criptomonedas por nombre o símbolo utilizando la barra de búsqueda.
- **Paginación**: La aplicación muestra las criptomonedas en páginas de 5 elementos cada una, permitiendo a los usuarios navegar entre las páginas.
- **Información Detallada**: Cada tarjeta de criptomoneda muestra el nombre, símbolo, precio actual, cambio porcentual en 24 horas y el rango en la toplist.
- **Más Información**: Cada tarjeta incluye un botón que redirige a la página de Binance para obtener más información sobre la criptomoneda seleccionada.
- **Formulario de Contacto**: Los usuarios pueden rellenar un formulario de contacto para enviar consultas.
- **Información de Contacto**: La página de contacto incluye información de contacto y un mapa de ubicación.

## Estructura del Proyecto

La estructura del proyecto está organizada de la siguiente manera:

```markdown
├── src/
│   ├── components/
│   │   ├── Coin/
│   │   │   ├── CoinCard.tsx
│   │   │   ├── InfoButton.tsx
│   │   │   ├── NoResults.tsx
│   │   │   ├── SearchBar.tsx
│   │   ├── contact/
│   │   │   ├── contactform.tsx
│   │   │   ├── contactinfo.tsx
│   │   │   ├── contactpage.tsx
│   │   │   ├── formfield.tsx
│   │   │   ├── formfields.tsx
│   │   ├── ui/
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── InfoItem.tsx
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── NavItem.tsx
│   │   │   │   ├── Navbar.tsx
│   │   │   ├── Pagination/
│   │   │   │   ├── Pagination.tsx
│   ├── routes/
│   │   ├── about.tsx
│   │   ├── home.tsx
│   │   ├── noticias.tsx
│   ├── types/
│   │   ├── Coin.ts
│   ├── root.tsx
│   ├── app.css
│   ├── index.tsx

## Niveles de Anidamiento

### Página de Inicio (`home.tsx`)

1. **Home Component**: Componente principal que contiene la lógica de búsqueda, paginación y renderizado de las tarjetas de criptomonedas.
   - **SearchBar Component**: Barra de búsqueda para filtrar criptomonedas.
   - **CoinCard Component**: Tarjeta que muestra la información de cada criptomoneda.
     - **InfoButton Component**: Botón que redirige a la página de Binance para obtener más información.
   - **NoResults Component**: Mensaje que se muestra cuando no se encuentran resultados de búsqueda.
   - **Pagination Component**: Componente de paginación para navegar entre las páginas de resultados.

### Página de Contacto (`contactpage.tsx`)

1. **ContactPage Component**: Componente principal que contiene el formulario de contacto y la información de contacto.
   - **ContactForm Component**: Formulario de contacto para enviar consultas.
     - **FormFields Component**: Contiene los campos del formulario.
       - **FormField Component**: Representa un solo campo del formulario.
   - **ContactInfo Component**: Muestra la información de contacto y el mapa de ubicación.

### Otros Componentes

- **Header Component**: Encabezado de la aplicación que incluye la barra de navegación.
  - **Navbar Component**: Barra de navegación con enlaces a diferentes páginas.
    - **NavItem Component**: Representa un solo elemento de navegación.
- **Footer Component**: Pie de página de la aplicación que incluye enlaces a políticas y redes sociales.
  - **InfoItem Component**: Representa un solo enlace de información en el pie de página.

## Estilos

La aplicación utiliza Tailwind CSS para el diseño y la estilización, proporcionando una experiencia de usuario moderna y responsiva.

---

Hecho co ❤️ por el equipo A.
