import {format, parseISO} from "date-fns";

export default function Date({dateString}: {dateString: string}) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'yy/MM/dd')}</time>
}