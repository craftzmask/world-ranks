
export default function CheckBox({ isChecked, checkHandler, label }) {
  return (
    <div>
      <input
        type="checkbox"
        id={label}
        checked={isChecked}
        onChange={checkHandler} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}