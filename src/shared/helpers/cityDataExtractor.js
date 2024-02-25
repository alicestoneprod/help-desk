import { customers_mock } from "shared/mocks/customers_mock"

export const cityDataExtractor = () => {
  let cities = []

  const cityToData = (cityName) => {
    const cityInArray = cities.find((el) => el.name === cityName)
    if (cityInArray) {
      cities = cities.map((el) =>
        el.name === cityInArray.name ? { ...el, value: el.value + 1 } : el
      )
    } else {
      cities.push({ value: 1, name: cityName })
    }
  }

  customers_mock.forEach((customer) => cityToData(customer.city))

  return cities
}
