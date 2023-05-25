import "./styles.css";
export const TextInput = (props) => {
  const { handleChange, searchValue } = props;
  return (
    <input
      className="text-input"
      type="search"
      onChange={handleChange}
      value={searchValue}
      placeholder="Type your search"
    />
  );
};
