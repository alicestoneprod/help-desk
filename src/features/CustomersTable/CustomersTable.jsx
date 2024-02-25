import { useRef, useState } from "react"
import { SearchOutlined } from "@ant-design/icons"
import { Button, Input, Space, Table } from "antd"
import Highlighter from "react-highlight-words"
import { birthdayConverter } from "shared/helpers/birthdayConverter"
import s from "./CustomersTable.module.scss"

export const CustomersTable = ({ data, onOpenDrawer }) => {
  // Отображение не даты рождения, а возраста в таблице
  const dataSource = data.map((customer) => {
    return { ...customer, age: birthdayConverter(customer.birthday) }
  })

  const [searchText, setSearchText] = useState("")
  const [searchedColumn, setSearchedColumn] = useState("")
  const searchInput = useRef(null)
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  }
  const handleReset = (clearFilters) => {
    clearFilters()
    setSearchText("")
  }
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Введите данные`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type='primary'
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size='small'
            style={{
              width: 90,
            }}>
            Искать
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size='small'
            style={{
              width: 90,
            }}>
            Сбросить
          </Button>
          <Button
            type='link'
            size='small'
            onClick={() => {
              close()
            }}>
            выйти
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100)
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  })
  const columns = [
    {
      title: "ФИО",
      dataIndex: "fullName",
      key: "fullName",
      width: "20%",
      ...getColumnSearchProps("fullName"),
    },
    {
      title: "Возраст",
      dataIndex: "age",
      key: "age",
      width: "10%",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Пол",
      dataIndex: "gender",
      key: "gender",
      width: "10%",
      filters: [
        {
          text: "мужской",
          value: "мужской",
        },
        {
          text: "женский",
          value: "женский",
        },
      ],
      onFilter: (value, record) => record.gender === value,
    },
    {
      title: "Город",
      dataIndex: "city",
      key: "city",
      width: "20%",
      ...getColumnSearchProps("city"),
    },
    {
      title: "Телефон",
      dataIndex: "phone",
      key: "phone",
      width: "20%",
      ...getColumnSearchProps("phone"),
    },
    {
      title: "Почта",
      dataIndex: "email",
      key: "email",
      width: "20%",
      ...getColumnSearchProps("email"),
    },
  ]
  return (
    <Table
      columns={columns}
      className={s.table}
      dataSource={dataSource}
      bordered
      rowKey={(record) => record.ID}
      onRow={(record) => {
        return {
          onDoubleClick: () => {
            onOpenDrawer(record)
          },
        }
      }}
    />
  )
}
