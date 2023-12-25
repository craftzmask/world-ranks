import clsx from 'clsx';

export default function CheckBox({ isChecked, checkHandler, label }) {
  return (
    <div className="flex items-center mt-3">
      <div
        className={clsx({
          "flex items-center justify-center h-6 w-6 bg-container border-2 border-slate-gray rounded hover:cursor-pointer": true,
          "bg-sky-blue": isChecked
        })}
        onClick={checkHandler}
      >
        {isChecked && (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6" stroke="#D2D5DA" stroke-width="2" stroke-linecap="round" />
          </svg>
        )}
      </div>
      <p className="select-none ml-3 text-sm text-silver">{label}</p>
    </div>
  );
}