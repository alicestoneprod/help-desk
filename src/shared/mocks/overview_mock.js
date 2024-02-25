import { ageBarOption, cityPieOption } from "shared/constants/echartsOptions"

export const overview_mock = [
  {
    title: "Overview",
    desc: "Information about the more  cities of costumers",
    height: 1000,
    width: 628,
    echarts: {
      option: cityPieOption,
      style: { height: "800px" },
    },
  },
  {
    title: "Customers",
    desc: "Information about the age of costumers",
    height: 500,
    width: 700,
    echarts: {
      option: ageBarOption,
      style: { height: "450px" },
    },
  },
]
