export default {
  date: (date: string) => new Intl.DateTimeFormat("en-US").format(new Date(date)),
  currency: (price: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(price)
}
