export const birthdayConverter = (date) => {
  let birthDate = new Date(date)
  const currentDate = new Date()

  let age = currentDate.getFullYear() - birthDate.getFullYear()

  let currentMonth = currentDate.getMonth()
  let birthMonth = birthDate.getMonth()
  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDate.getDate() < birthDate.getDate())
  ) {
    age--
  }

  return age
}
