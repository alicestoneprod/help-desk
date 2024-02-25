import { ageDataExtractor } from "shared/helpers/ageDataExtractor"
import { cityDataExtractor } from "shared/helpers/cityDataExtractor"

export const cityPieOption = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "right",
    type: "scroll",
  },
  title: [
    {
      text: "Статистика по городам",
      right: "40%",
      top: "15%",
    },
  ],
  series: [
    {
      name: "Кол-во человек",
      type: "pie",
      radius: ["100", "70%"],
      center: ["40%", "50%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 26,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: cityDataExtractor(),
    },
  ],
}

export const ageBarOption = {
  title: [
    {
      text: "Статистика по возрасту",
      right: "40%",
      top: "5%",
    },
  ],
  xAxis: {
    type: "category",
    data: ageDataExtractor()[0],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: ageDataExtractor()[1],
      type: "bar",
      label: {
        show: true,
        position: "inside",
      },
    },
  ],
}
