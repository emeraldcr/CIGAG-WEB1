import {
  Award,
  Baby,
  BarChart3,
  Dna,
  Droplets,
  Facebook,
  FlaskConical,
  GitBranch,
  Globe,
  Instagram,
  Layers,
  Linkedin,
  LucideIcon,
  Mail,
  MapPin,
  Microscope,
  Phone,
  ShieldCheck,
  Target,
  Users,
  Youtube,
} from "lucide-react";

export const contact = {
  phone: "+57 300 000 0000",
  email: "info@cigac.com",
  location: "Colombia · Venezuela · México",
  whatsappUrl: "https://wa.me/573000000000",
};

export const brand = {
  name: "CIGAC",
  mark: "CIG",
  descriptor: "Genética Bovina",
  description:
    "Centro de Investigación en Genética y Asistencia de Campos. Biotecnología reproductiva bovina para fincas y empresas agropecuarias.",
};

export const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Catálogo Genético", href: "#catalogo" },
  { label: "Laboratorio", href: "#laboratorio" },
  { label: "Resultados", href: "#resultados" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export const hero = {
  eyebrow: "Biotecnología Reproductiva Bovina",
  title: "Genética bovina avanzada para aumentar la productividad de su finca",
  highlightedWord: "productividad",
  description:
    "Fertilización in vitro, embriones, semen, ADN y asesoría genética para ganadería tropical e internacional.",
  image:
    "https://images.unsplash.com/photo-1500595046743-cd271d694d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcmVtaXVtJTIwY2F0dGxlJTIwYm92aW5lJTIwbGl2ZXN0b2NrJTIwZmFybXxlbnwxfHx8fDE3ODExNTMxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  trustIndicators: [
    { value: "+10 años", label: "de experiencia" },
    { value: "FIV", label: "Fertilización in vitro" },
    { value: "100%", label: "Enfoque científico" },
  ],
};

export type IconContent = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const stats = [
  {
    icon: Award,
    value: "+10 años",
    label: "de experiencia",
    description: "Trayectoria comprobada en biotecnología reproductiva",
  },
  {
    icon: FlaskConical,
    value: "Laboratorio",
    label: "especializado",
    description: "Infraestructura científica de alto nivel para FIV y embriones",
  },
  {
    icon: Globe,
    value: "Nacional e",
    label: "internacional",
    description: "Cobertura en múltiples países con ganadería tropical",
  },
  {
    icon: Layers,
    value: "Soluciones",
    label: "genéticas integrales",
    description: "Desde diagnóstico hasta seguimiento de resultados",
  },
];

export const services: IconContent[] = [
  {
    icon: Microscope,
    title: "Fertilización In Vitro",
    description:
      "Producción de embriones en laboratorio con protocolos FIV para bovinos de alto valor genético.",
  },
  {
    icon: Baby,
    title: "Transferencia de Embriones",
    description:
      "Programa de TE con selección de receptoras y monitoreo completo para maximizar tasas de preñez.",
  },
  {
    icon: GitBranch,
    title: "Embriones Sexados",
    description:
      "Selección del sexo del ternero mediante tecnología genómica avanzada con alta precisión.",
  },
  {
    icon: Droplets,
    title: "Venta y Evaluación de Semen",
    description:
      "Catálogo de semen de toros de élite, evaluación andrológica y pruebas de fertilidad.",
  },
  {
    icon: Dna,
    title: "Pruebas de ADN",
    description:
      "Análisis genómico para identidad, filiación y evaluación del potencial genético animal.",
  },
  {
    icon: BarChart3,
    title: "Asesoría Genética",
    description:
      "Consultoría en mejoramiento genético y planes reproductivos para explotaciones ganaderas.",
  },
];

export const workflowSteps = [
  {
    number: "01",
    title: "Diagnóstico de la finca",
    description:
      "Evaluamos el estado del hato, objetivos productivos y condiciones ambientales para definir la estrategia.",
  },
  {
    number: "02",
    title: "Selección genética",
    description:
      "Identificamos reproductores y donantes ideales según mérito genético, fenotipo y metas comerciales.",
  },
  {
    number: "03",
    title: "Ejecución biotecnológica",
    description:
      "Aplicamos protocolos FIV, transferencia embrionaria, semen, ADN o asesoría con trazabilidad técnica.",
  },
  {
    number: "04",
    title: "Seguimiento y resultados",
    description:
      "Acompañamos el proceso con control reproductivo, indicadores y ajustes para mejorar el desempeño.",
  },
];

export const institutionalHighlights = [
  { icon: ShieldCheck, title: "Protocolos confiables", description: "Procesos estandarizados para reducir variabilidad operativa." },
  { icon: Target, title: "Enfoque productivo", description: "Cada recomendación responde a objetivos medibles del negocio." },
  { icon: Users, title: "Acompañamiento técnico", description: "Equipo cercano durante diagnóstico, ejecución y seguimiento." },
];

export const geneticCatalog = [
  {
    breed: "Brahman Rojo",
    focus: "Adaptabilidad tropical",
    traits: ["Rusticidad", "Eficiencia reproductiva", "Líneas maternas"],
  },
  {
    breed: "Gyr Lechero",
    focus: "Producción de leche",
    traits: ["Persistencia", "Ubre funcional", "Longevidad"],
  },
  {
    breed: "Nelore",
    focus: "Carne y conversión",
    traits: ["Precocidad", "Musculatura", "Rendimiento"],
  },
  {
    breed: "Girolando",
    focus: "Doble propósito",
    traits: ["Balance productivo", "Resistencia", "Fertilidad"],
  },
];

export const testimonials = [
  {
    ranch: "Hacienda El Progreso",
    country: "Colombia",
    challenge: "Baja eficiencia reproductiva en donantes élite.",
    solution: "Programa FIV con selección de receptoras y seguimiento técnico.",
    result: "Mejor planificación de nacimientos y mayor consistencia del programa embrionario.",
    quote: "El acompañamiento técnico nos permitió ordenar el proceso y tomar decisiones con datos.",
    author: "Director de producción",
  },
  {
    ranch: "Agropecuaria La Reserva",
    country: "Venezuela",
    challenge: "Necesidad de acelerar mejoramiento genético sin ampliar inventario.",
    solution: "Catálogo de semen, evaluación genética y transferencia embrionaria.",
    result: "Avance genético más claro y selección de cruces alineada al mercado.",
    quote: "La asesoría convirtió el plan reproductivo en una herramienta estratégica.",
    author: "Gerencia técnica",
  },
  {
    ranch: "Rancho Santa Clara",
    country: "México",
    challenge: "Falta de trazabilidad en filiación y potencial genómico.",
    solution: "Pruebas de ADN y plan de selección de reemplazos.",
    result: "Mayor control del inventario genético y decisiones de descarte más objetivas.",
    quote: "Hoy tenemos una base más confiable para crecer con genética comprobada.",
    author: "Propietario",
  },
];

export const quickLinks = navigation.filter((item) => item.label !== "Resultados");
export const serviceLinks = services.map((service) => service.title);

export const socialLinks = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "YouTube", href: "#", icon: Youtube },
];

export const contactItems = [
  { label: contact.phone, icon: Phone },
  { label: contact.email, icon: Mail },
  { label: contact.location, icon: MapPin },
];

export const catalogBenefits = [
  "Evaluación de líneas genéticas según clima y objetivo productivo.",
  "Cruces recomendados con foco en fertilidad, rendimiento y longevidad.",
  "Acompañamiento para integrar genética, nutrición y manejo reproductivo.",
];

export const finalCtaImage =
  "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzY2llbnRpZmljJTIwbGFib3JhdG9yeSUyMGJpb3RlY2hub2xvZ3klMjByZXNlYXJjaHxlbnwxfHx8fDE3ODExNTMxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080";
