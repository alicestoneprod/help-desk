import { education_mock } from "shared/mocks/education_mock"

export const educationSearcher = (data) => {
  if (data) {
    const educationData = education_mock.find(
      (education) => education.ID === data.ID
    )
    let resultObj = {}
    for (let key in educationData) {
      if (key !== "ID") {
        resultObj = { ...resultObj, [key]: educationData[key] }
      }
    }
    console.log(resultObj)
    return resultObj
  }
}
