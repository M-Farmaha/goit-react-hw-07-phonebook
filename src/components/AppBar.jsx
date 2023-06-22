import {
  NavList,
  Header,
  NavLinkStyled,
  PhonebookTitle,
  NavWrap,
} from '../components/styled';

export const AppBar = () => {
  return (
    <Header>
      <NavWrap>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <NavList>
          <li>
            <NavLinkStyled to="/">Contacts</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="register">Sign Up</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="login">Sign In</NavLinkStyled>
          </li>
        </NavList>
      </NavWrap>
    </Header>
  );
};
