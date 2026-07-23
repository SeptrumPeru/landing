import categorySensor from "../images/categories/category-sensor.jpg";
import categoryFlow from "../images/categories/category-flow.jpg";
import categoryFilter from "../images/categories/category-filter.jpg";
import categoryUv from "../images/categories/category-uv.jpg";
import categoryValve from "../images/categories/category-valve.jpg";
import categoryAccessory from "../images/categories/category-accessory.jpg";

export const categories = [
  {
    slug: "sensores-e-instrumentacion",
    name: "Sensores e Instrumentación",
    description:
      "Sensores de pH, ORP, oxígeno disuelto, conductividad y temperatura para monitoreo en línea y otros usos.",
    image: categorySensor,
  },
  {
    slug: "medicion-de-flujo",
    name: "Medición de Flujo",
    description:
      "Caudalímetros y sensores de flujo para control preciso en procesos industriales.",
    image: categoryFlow,
  },
  {
    slug: "filtracion",
    name: "Filtración",
    description:
      "Filtros industriales para sólidos, sedimentos y partículas en sistemas de agua para uso humano e industrial.",
    image: categoryFilter,
  },
  {
    slug: "sistemas-uv",
    name: "Sistemas UV",
    description:
      "Equipos de desinfección ultravioleta para tratamiento seguro y eficiente del agua.",
    image: categoryUv,
  },
  {
    slug: "valvulas",
    name: "Válvulas",
    description:
      "Válvulas industriales para control y regulación de flujo en procesos hidráulicos.",
    image: categoryValve,
  },
  {
    slug: "accesorios-y-repuestos",
    name: "Accesorios y Repuestos",
    description:
      "Componentes y repuestos originales para mantenimiento y optimización de equipos.",
    image: categoryAccessory,
  },
] as const;

export type Category = (typeof categories)[number];

export function getCategoryByName(name: string): Category | undefined {
  return categories.find((c) => c.name === name);
}
