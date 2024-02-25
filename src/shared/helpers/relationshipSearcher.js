import { customers_mock } from "shared/mocks/customers_mock"
import { relationship_mock } from "shared/mocks/relationship_mock"

export const relationshipSearcher = (data) => {
  if (data) {
    const partnerData = relationship_mock.filter((el) => el.ID === data.ID)
    const resultData = partnerData.map((el) => {
      {
        const partnersInfo = customers_mock.find(
          (customer) => customer.ID === el.partner
        )
        return { ...el, ...partnersInfo }
      }
    })
    return resultData
  }
}
