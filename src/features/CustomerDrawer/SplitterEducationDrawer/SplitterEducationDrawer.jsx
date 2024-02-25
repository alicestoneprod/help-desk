import s from "./SplitterEducationDrawer.module.scss"
import { extractKeysValues } from "shared/helpers/extractKeysValues"

export const SplitterEducationDrawer = ({ data, title, helper }) => {
  if (Object.keys(helper(data)).length) {
    return (
      <div className={s.splittedTextContainer}>
        <div className={s.titleCnt}>
          <p className={s.sectionTitle}>{title}</p>
        </div>
        {extractKeysValues(helper(data)).map((el) => (
          <div className={s.keyValueCnt} key={el.translation}>
            <p className={s.key}>{el.translation}:</p>
            <p className={s.value}>{el.value}</p>
          </div>
        ))}
      </div>
    )
  }
}
