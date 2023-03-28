import { CListGroup, CListGroupItem } from '@coreui/react'

const Header = ({menu}) => {
    // const handleClick = () => {

    // }
    return (
        <CListGroup>
            {menu.map(cat => <CListGroupItem component="button" onClick={(e) => console.log(e)}>{cat[0]}</CListGroupItem>)}
      </CListGroup>
    );
}

export default Header;
