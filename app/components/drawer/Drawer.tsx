import Link from "next/link";
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import styles from "@/app/styles/header.module.css";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface DrawerItem {
  name: string;
  href: string;
}

interface TemporaryDrawerProps {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  drawerItems: DrawerItem[];
}

export default function TemporaryDrawer({
  open,
  onClose,
  drawerItems,
}: TemporaryDrawerProps) {
  const toggleDrawer = (state: boolean) => () => {
    onClose(false);
  };

  const DrawerList = (
    <Box 
        sx={{ width: 260 }} 
        role="presentation" 
        onClick={toggleDrawer(false)}
    >
      <div className={styles.closeBtn} onClick={() => toggleDrawer}>
        <ArrowBackIcon />
      </div>
      <List>
        {drawerItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Link href={item.href} style={{ width: "100%" }}>
              <ListItemButton>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer 
        open={open} 
        anchor="left" 
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </>
  );
}
