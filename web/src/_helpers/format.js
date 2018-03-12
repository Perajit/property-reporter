import { format } from 'd3-format'

export const formatSiPrefix = format('.2s')

export const formatDecimal = (n, decimalPoint = 2) => Number(n.toFixed(decimalPoint)).toLocaleString()

export const formatCurrency = (n, decimalPoint) => `฿${formatDecimal(n, decimalPoint)}`
