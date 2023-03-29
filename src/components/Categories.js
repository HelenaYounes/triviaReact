import { CListGroup, CListGroupItem } from "@coreui/react";

const Categories = ({ menu, onPickCategory }) => {
  return (
    <CListGroup>
      {menu.map((cat, index) => (
        <CListGroupItem
          key={index}
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
