export const ListItem = ({ string, index }) => {
  return <h2 key={"list_item_" + index}>{string}</h2>;
};
