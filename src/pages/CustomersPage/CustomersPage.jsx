import { useState } from "react"
import { useDrawer } from "shared/hooks/useDrawer"
import { CustomersTable } from "features/CustomersTable"
import { CustomerDrawer } from "features/CustomerDrawer"
import { customers_mock as data } from "shared/mocks/customers_mock"
import s from "./CustomersPage.module.scss"

export const CustomersPage = () => {
  const [currentCustomer, setCurrentCustomer] = useState()
  const { open, onOpen, onClose } = useDrawer()

  const onOpenDrawer = (record) => {
    setCurrentCustomer(record)
    onOpen()
  }

  const onCloseDrawer = () => {
    setCurrentCustomer()
    onClose()
  }

  return (
    <div className={s.customersPageCnt}>
      <div className={s.titleCnt}>
        <p className={s.title}>Customers</p>
      </div>
      <div className={s.customersCount}>Всего: {data.length} записей</div>
      <div className={s.tableCnt}>
        <CustomersTable data={data} onOpenDrawer={onOpenDrawer} />
      </div>
      <CustomerDrawer
        open={open}
        onClose={onCloseDrawer}
        currentCustomer={currentCustomer}
      />
    </div>
  )
}
