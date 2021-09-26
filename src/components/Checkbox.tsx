import React, { useReducer } from "react";

interface ICheckboxProps {
  // eslint-disable-next-line react/require-default-props
  id?: string;
  label?: string;
}

const Checkbox = (props: ICheckboxProps) => {
  const [checked, setChecked] = useReducer((check) => !check, false);
  const { label, ...inputProps } = props;

  return (
    <>
      {label && <label htmlFor="checkbox">{label}</label>}
      <input
        {...inputProps}
        type="checkbox"
        checked={checked}
        onChange={setChecked}
      />
    </>
  );
};

export default Checkbox;
