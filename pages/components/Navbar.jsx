import { useState } from "react";
import { NavbarStyles } from "../../styles/NavbarStyles";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const showMenu = () => setMenu(!menu);

  return (
    <>
      <NavbarStyles menu={menu}>
        <div className="contain">
          <h1 className="title">
            Chess
            <Image
              className="logo"
              src="/king-logo.svg"
              width="35px"
              height="35px"
            ></Image>
          </h1>
          <div className="menu" onClick={showMenu}>
            <MenuIcon></MenuIcon>
          </div>
          <ul>
            <li onClick={showMenu}>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/Home">Jugar</Link>
            </li>
          </ul>
        </div>
      </NavbarStyles>
    </>
  );
}

export default Navbar;
