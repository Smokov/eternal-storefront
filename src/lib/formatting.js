export function formatPrice(number) {
  const floatNumber = parseFloat(number || 0) || 0;
  const num = floatNumber.toFixed(Math.max(0, Math.floor(2)));
  return "R$" + num;
}
