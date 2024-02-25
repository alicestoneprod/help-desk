import { Drawer } from "antd"
import { SplitterDrawer } from "./SplitterDrawer"
import { SplitterRelationshipDrawer } from "./SplitterRelationshipDrawer"
import { relationshipSearcher } from "shared/helpers/relationshipSearcher"
import { extractKeysValues } from "shared/helpers/extractKeysValues"
import { educationSearcher } from "shared/helpers/educationSearcher"
import { SplitterEducationDrawer } from "./SplitterEducationDrawer"

import s from "./CustomerDrawer.module.scss"

export const CustomerDrawer = ({ open, onClose, currentCustomer }) => {
  if (currentCustomer) {
    const { fullName, ID } = currentCustomer

    const title = `${fullName} (${ID})`
    return (
      <>
        <Drawer title={title} onClose={onClose} open={open} size={"large"}>
          <SplitterDrawer
            data={currentCustomer}
            title='Общие сведения'
            helper={extractKeysValues}
          />
          <SplitterRelationshipDrawer
            data={currentCustomer}
            title='Члены семьи'
            helper={relationshipSearcher}
          />
          <SplitterEducationDrawer
            data={currentCustomer}
            title='Образование'
            helper={educationSearcher}
          />
        </Drawer>
      </>
    )
  }
}
