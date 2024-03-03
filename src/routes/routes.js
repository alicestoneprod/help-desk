import { AreaChartOutlined, UserOutlined } from "@ant-design/icons"
import { DashboardPage, CustomersPage } from "pages"

export const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: AreaChartOutlined,
    page: DashboardPage,
  },
  {
    path: "/customers",
    name: "Customers",
    icon: UserOutlined,
    page: CustomersPage,
  },
]
