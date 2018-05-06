const extractValue = (obj, fieldHierarchy) => {
  let value = obj

  fieldHierarchy.forEach((field) => {
    value = value[field]
  })

  return value
}

export const mapListToChartSeries = (list, fieldHierarchy) => {
  return list.map((item) => (
    { y: item.projectName, x: extractValue(item, fieldHierarchy) }
  ))
}
