const Filter = ({ filter, onChange }) => {
  return (
    <input
      type="text"
      onChange={target => onChange(target.value)}
      value={filter}
      placeholder="Enter name "
    />
  );
};

export default Filter;
