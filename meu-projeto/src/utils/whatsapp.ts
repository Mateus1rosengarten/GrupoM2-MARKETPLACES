export function sendWhatsApp(message: string) {
  const phone = "5511988504105";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
