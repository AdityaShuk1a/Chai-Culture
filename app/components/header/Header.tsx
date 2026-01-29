"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Drawer from "../drawer/Drawer";
import Button from "../buttons/Button";
import { useRouter } from "next/navigation";
import { LogoImages } from "@/app/data/Image";
import MenuIcon from '@mui/icons-material/Menu';
import styles from "@/app/styles/header.module.css";
import { PageRoutes } from "@/app/routes/PageRoutes";

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  
  const drawerItems = [
    { name: "Home", href: PageRoutes.HOME },
    { name: "About", href: PageRoutes.HOME },
    { name: "Shop", href: PageRoutes.HOME },
    { name: "Contact", href: PageRoutes.HOME },
  ];
  return (
    <div className={styles.header}>
      <div style={{position: "absolute", display: open ? "block" : "none"}}>
        <Drawer open={open} onClose={setOpen} drawerItems={drawerItems} />
      </div>
      <div className={styles.logo}>
        <Image 
            alt="Logo" 
            width={2000} 
            height={2000} 
            src={LogoImages.logo} 
        />
      </div>
      <div className={styles.iconBtn}>
        <div onClick={() => {setOpen(true)}}>
          <MenuIcon fontSize="large" />
        </div>
      </div>
      <div className={styles.nav}>
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <Link href={PageRoutes.HOME}>Home</Link>
            </li>
            <li>
              <Link href={PageRoutes.HOME}>About</Link>
            </li>
            <li>
              <Link href={PageRoutes.SHOP}>Shop</Link>
            </li>
          </ul>
        </nav>
        <Button 
          text="Login/Signup"
          action={() => router.push(PageRoutes.LOGIN_SIGNUP)} 
        />
      </div>
    </div>
  );
};

export default Header;
