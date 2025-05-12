import React from 'react'
import classes from './navbarlist.module.css'
import { MdMenu } from "react-icons/md";

const NavBarList = () => {
 const options = [
    { name: "Today`s Deals" },
    { name: "Prime Video" },
    { name: "Registry" },
    { name: "Customer Service" },
    { name: "Fift Cards" },
    { name: "Sell" },
  ];
  return (
    <>
      <div className={classes.navbarBanner}>
        <div className={classes.nabarBann}>
          <div className={classes.optionsNavbar}>
            <MdMenu sx={{ fontSize: "24px" }} />
            <div className={classes.allOptionsNavbar}>All</div>
          </div>

          {
            options.map((item, ind) => {
              return (
                <div className={classes.optionsNavbar} key={ind}>
                  <div className={classes.allOptionsNavbar}>{item.name}</div>
                </div>
              );
            })
          }

        
        </div>
      </div>
    </>
  );
}

export default NavBarList
