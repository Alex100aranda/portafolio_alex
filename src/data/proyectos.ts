export interface EnlaceProyecto {
  label: string;
  url: string;
}

export interface ModuloExtra {
  nombre: string;
  descripcion: string;
  url?: string;
  imagenKey: 'obras';
}

export interface Proyecto {
  slug: string;
  nombre: string;
  periodo: string;
  estado: 'produccion' | 'desarrollo';
  resumen: string;
  rol: string;
  resultado: string;
  stack: string[];
  url?: string;
  enlaces?: EnlaceProyecto[];
  imagenKey?: 'redwork' | 'redsic' | 'maderas-arte';
  extra?: ModuloExtra;
}

export const proyectos: Proyecto[] = [
  {
    slug: 'redwork',
    nombre: 'REDWORK',
    periodo: '2025 — presente',
    estado: 'produccion',
    resumen:
      'Marketplace de servicios que conecta a clientes con profesionales de construcción y hogar verificados en CDMX y el Estado de México. Cotizaciones, créditos para trabajos urgentes, planes de membresía, rastreo GPS y verificación biométrica.',
    rol: 'Desarrollador y propietario del producto — arquitectura, backend y capa API móvil',
    resultado:
      'Plataforma multi-rol (cliente, profesional, proveedor) en producción, con backend PHP propio, verificación facial en el registro y una API REST independiente que ahora alimenta una app móvil en Capacitor + Ionic + Vue sin tocar la web existente.',
    stack: ['PHP 8.2', 'MySQL', 'Bootstrap 5', 'face-api.js', 'Leaflet', 'Vue', 'Capacitor'],
    url: 'https://redwork.com.mx',
    imagenKey: 'redwork',
    extra: {
      nombre: 'Control de Obras',
      descripcion:
        'Módulo independiente para que profesionales y clientes den seguimiento al avance de sus proyectos de construcción, con porcentaje de avance y galería por obra.',
      url: 'https://redwork.com.mx/obras/modules/obras/listar.php',
      imagenKey: 'obras',
    },
  },
  {
    slug: 'redsic',
    nombre: 'RedSIC',
    periodo: '2026',
    estado: 'desarrollo',
    resumen:
      'Reconstrucción completa del sitio público de RedSIC (Red Servicios Integrales en Construcción), empresa con 15 años de experiencia en construcción, impermeabilización y mantenimiento en la zona metropolitana de CDMX.',
    rol: 'Desarrollador frontend y arquitecto del proyecto',
    resultado:
      'Sitio estático de alto rendimiento con seis galerías de portafolio filtrables por categoría, páginas de detalle por proyecto, sitemap y datos estructurados para SEO — reemplazando una versión hecha con un builder genérico. Fase 1 (Astro) completada; en camino un panel de administración en Laravel + Filament para que el cliente gestione su propio contenido.',
    stack: ['Astro', 'TypeScript', 'Laravel', 'Filament'],
    url: 'https://redsic.com.mx',
    imagenKey: 'redsic',
  },
  {
    slug: 'maderas-y-arte',
    nombre: 'Maderas & Arte',
    periodo: '2025',
    estado: 'produccion',
    resumen:
      'Landing page para un negocio local de carpintería, con efectos 3D en el fondo, carruseles de proyectos terminados y un chatbot de atención al cliente integrado directamente en el sitio.',
    rol: 'Diseño y desarrollo completo, de cero a producción',
    resultado:
      'Un ejemplo del tipo de trabajo que hago para negocios locales: identidad visual propia, presentación de catálogo/trabajos y un primer contacto automatizado por chatbot, todo desplegado bajo el mismo hosting que administro para REDWORK.',
    stack: ['HTML', 'CSS', 'Three.js', 'JavaScript', 'PHP'],
    url: 'https://redwork.com.mx/carpinteria/',
    imagenKey: 'maderas-arte',
  },
];
