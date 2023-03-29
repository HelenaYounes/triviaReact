import { CListGroup, CListGroupItem } from "@coreui/react";

const Categories = ({ menu, onPickCategory }) => {
  return (
    <CListGroup>
      {menu.map((cat) => (
        <CListGroupItem
          component="button"
          onClick={(e) => onPickCategory(e.target.firstChild)}
        >
          {cat}
        </CListGroupItem>
      ))}
    </CListGroup>
  );
};

export default Categories;
