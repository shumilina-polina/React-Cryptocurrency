import s from "./SelectCurrency.module.scss";

export const SelectCurrency = () => {
  return (
    <div className={s.select_wrapper}>
      <select className={s.select}>
        <option>USD</option>
        <option>EUR</option>
        <option>RUB</option>
      </select>
    </div>
  );
};
