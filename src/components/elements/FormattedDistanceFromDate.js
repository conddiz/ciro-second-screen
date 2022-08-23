import {
    parse,
    format,
    formatDistance,
    formatRelative,
    subDays,
} from 'date-fns'

import { pt } from 'date-fns/locale'

const FormattedDistanceFromDate = ({
    dateString,
    dateFormatFrom = 'yyyy-MM-DDTHH:mm:ss',
    dateFormatTo = 'dd/MM/yyyy HH:mm',
}) => {
    console.log('entrada', dateString)
    const data = parse(dateString, dateFormatFrom, new Date())
    console.log('data', data)
    return (
        <time dateTime={dateString}>
            {formatDistance(data, new Date(), { addSuffix: false, locale: pt })}
        </time>
    )
}

export { FormattedDistanceFromDate }
