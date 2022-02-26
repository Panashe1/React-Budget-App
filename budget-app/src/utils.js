//this is used to format currency across the app
export const currencyFormatter = new Intl.NumberFormat(undefined, {
  currency: "aud",
  style: "currency",
  minimumFractionDigits: 0,
});
