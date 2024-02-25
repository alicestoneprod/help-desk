import { Layout } from "features/Layout"
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./AppRouter"
import { ConfigProvider } from "antd"
import ruRU from "antd/locale/ru_RU"
import "styles/globals.scss"

function App() {
  return (
    <ConfigProvider locale={ruRU}>
      <BrowserRouter>
        <Layout>
          <AppRouter />
        </Layout>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
