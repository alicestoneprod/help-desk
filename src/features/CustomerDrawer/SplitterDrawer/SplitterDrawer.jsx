import s from "./SplitterDrawer.module.scss"

export const SplitterDrawer = ({ data, title, helper }) => {
  return (
    <div className={s.splittedTextContainer}>
      <div className={s.titleCnt}>
        <p className={s.sectionTitle}>{title}</p>
      </div>
      {helper(data).map((el) => (
        <div className={s.keyValueCnt} key={el.translation}>
          <p className={s.key}>{el.translation}:</p>
          <p className={s.value}>{el.value}</p>
        </div>
      ))}
    </div>
  )
}
