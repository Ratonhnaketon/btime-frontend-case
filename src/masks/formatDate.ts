import dayjs from "dayjs";

export default function formatDate(date?: Date | null) {
  const datetime = dayjs(date)

  if (!datetime.isValid()) return ''

  return datetime.format('DD/MM/YYYY')
}