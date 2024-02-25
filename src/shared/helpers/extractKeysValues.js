import { translations } from "shared/constants/translations"

export const extractKeysValues = (data) => {
  if (data) {
    if (Array.isArray(data)) {
      return extractKeysFromArray(data)
    } else {
      return extractKeysFromObject(data)
    }
  }
}

const extractKeysFromArray = (data) => {
  const result = []
  let item = []
  data.forEach((el) => {
    for (let key in el) {
      const ru = translations.find((translation) => translation.key === key)
      const value = el[key]
      const translated = ru?.translation
      if (translated !== "Партнер") {
        item.push({ translation: translated, value })
      } else if (!translated) {
        result.push({ translation: key, value })
      }
    }
    result.push(item)
    item = []
  })
  return result
}

const extractKeysFromObject = (data) => {
  const result = []
  for (let key in data) {
    const ru = translations.find((translation) => translation.key === key)
    const value = data[key]
    const translated = ru?.translation
    if (translated) {
      result.push({ translation: translated, value })
    } else {
      result.push({ translation: key, value })
    }
  }
  return result
}
