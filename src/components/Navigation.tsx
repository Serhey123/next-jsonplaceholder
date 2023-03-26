import styled from "styled-components";
import Link from "next/link";

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
`;

export default function Navigation() {
  return (
    <>
      <Nav>
        <Link href="/" style={{fontWeight:'bold', fontSize:'25px', color:'black'}}>{'{JSON}'}</Link>
        <NavLinks>
          <Link href="/posts">Posts</Link>
          <Link href="/contacts">Contacts</Link>
          <Link href="/photos">Photos</Link>
          <Link href="/todos">Todos</Link>
        </NavLinks>
      </Nav>
    </>
  );
}
