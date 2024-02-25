import { extractKeysValues } from "shared/helpers/extractKeysValues"
import s from "./SplitterRelationshipDrawer.module.scss"

export const SplitterRelationshipDrawer = ({ data, title, helper }) => {
  if (helper(data).length) {
    return (
      <div className={s.splittedTextContainer}>
        <div className={s.titleCnt}>
          <p className={s.sectionTitle}>{title}</p>
        </div>
        {extractKeysValues(helper(data)).map((el) => (
          <div key={`${el.ID}`} className={s.partnerItem}>
            {el.map((el) => (
              <div className={s.keyValueCnt} key={el.translation}>
                <p className={s.key}>{el.translation}:</p>
                <p className={s.value}>{el.value}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }
}
