const WHATSAPP_NUMBER = "51978205516";

export const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent("Hola, me gustaría más información");

export function getProductQuoteUrl(productName: string) {
  return (
    `https://wa.me/${WHATSAPP_NUMBER}?text=` +
    encodeURIComponent(
      `Hola, me gustaría cotizar el equipo "${productName}"`,
    )
  );
}
