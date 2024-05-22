import React from 'react';

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData,
  editable,
}) => {
  const [value, setValue] = React.useState(initialValue);

  const onChange = e => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    updateMyData(index, id, value);
  };

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return editable ? (
    <input value={value} onChange={onChange} onBlur={onBlur} />
  ) : (
    <span>{value}</span>
  );
};

export default EditableCell;
