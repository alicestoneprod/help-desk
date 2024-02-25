import EChartsReact from "echarts-for-react"
import s from "./Overviews.module.scss"

export const OverviewWrapper = ({ title, desc, children, width, height }) => {
  return (
    <div className={s.overviewWrapper} style={{ width, height }}>
      <div className={s.overviewTitleDescCnt}>
        <p className={s.overviewTitle}>{title}</p>
        <p className={s.overviewDesc}>{desc}</p>
      </div>
      {children}
    </div>
  )
}

export const Overviews = ({ data }) => {
  return data.map((overview) => (
    <OverviewWrapper
      key={overview.title}
      title={overview.title}
      desc={overview.desc}
      height={overview.height}
      width={overview.width}>
      {overview.children}
      <EChartsReact
        option={overview.echarts.option}
        style={overview.echarts.style}
      />
    </OverviewWrapper>
  ))
}
