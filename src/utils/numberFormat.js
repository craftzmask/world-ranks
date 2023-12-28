export const numberFormat = number => {
  return `${number}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}