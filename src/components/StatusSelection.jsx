import CheckBox from './CheckBox';

export default function StatusSelection({
  isUnitedNationMember,
  setIsUnitedNationMember,
  isIndependent,
  setIsIndependent
}) {

  return (
    <div className="mt-7">
      <p className="block text-xs text-slate-gray font-semibold mb-2">Status</p>
      <div>
        <CheckBox
          isChecked={isUnitedNationMember}
          checkHandler={() => setIsUnitedNationMember(!isUnitedNationMember)}
          label="Member of the United Nations" />

        <CheckBox
          isChecked={isIndependent}
          checkHandler={() => setIsIndependent(!isIndependent)}
          label="Independent" />
      </div>
    </div>
  );
}