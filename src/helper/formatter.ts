export default {
  date: (date: string) => new Intl.DateTimeFormat("en-US").format(new Date(date))
}
