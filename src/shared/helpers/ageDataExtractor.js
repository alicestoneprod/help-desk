import { customers_mock } from "shared/mocks/customers_mock"
import { birthdayConverter } from "./birthdayConverter"

export const ageDataExtractor = () => {
  const newData = customers_mock.map((customer) => {
    return { ...customer, age: birthdayConverter(customer.birthday) }
  })

  let ageArray = []
  const barArray = []
  const resultAgesArray = []

  newData.forEach((el) => {
    ageArray.push(el.age)
  })

  const sortedAgeArray = ageArray.sort((a, b) => a - b)
  const minAge = sortedAgeArray[0]
  const maxAge = sortedAgeArray[sortedAgeArray.length - 1]

  for (let i = minAge; i < maxAge; i += 5) {
    const barStart = i
    const barEnd = i + 5
    const count = ageArray.filter(
      (age) => age >= barStart && age < barEnd
    ).length
    barArray.push(`${barStart}-${barEnd}`)
    resultAgesArray.push(count)
  }

  return [barArray, resultAgesArray]
}
