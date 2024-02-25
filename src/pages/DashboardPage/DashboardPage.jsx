import { Overviews } from "components/Overviews"
import { overview_mock } from "shared/mocks/overview_mock"

import s from "./DashboardPage.module.scss"

export const DashboardPage = () => {
  return (
    <div className={s.dashboardPageCnt}>
      <div className={s.titleCnt}>
        <p className={s.title}>Dashboard</p>
      </div>
      <div className={s.overviewsCnt}>
        <Overviews data={overview_mock} />
      </div>
    </div>
  )
}
