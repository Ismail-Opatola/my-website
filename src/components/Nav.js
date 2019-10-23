import React from "react"
import Link from "./Link"
// import { makeStyles } from '@material-ui/core/styles';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import Button from '@material-ui/core/Button';
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
// import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import {
  // FaTwitter,
  // FaGithub,
  FaMedium,
  FaHandHolding,
  //   FaHandHoldingHeart,
  // FaYoutube,
  // FaLinkedin,
} from "react-icons/fa"
import { FiCodesandbox } from "react-icons/fi"

import Person from "@material-ui/icons/PersonOutlined"
import FormatTextdirectionRToL from "@material-ui/icons/FormatAlignLeft"

const Nav = () => {
  return (
    <List component="ul">
      <ListItem key={"About"}>
        <ListItemIcon>
          <Person />
        </ListItemIcon>
        <ListItemText primary={"About"} />
      </ListItem>
      <ListItem key={"Work"}>
        <ListItemIcon>
          <FiCodesandbox size={16} rotate={30} />
        </ListItemIcon>
        <ListItemText primary={"Work"} />
      </ListItem>
      <ListItem key={"Blog"}>
        <ListItemIcon>
          <FormatTextdirectionRToL />
        </ListItemIcon>
        <ListItemText primary={"Blog"} />
      </ListItem>

      <Divider component="li" />

      <ListItem key={"Medium"}>
        <Link
          component={Link}
          to="https://medium.com/Opatola-Ismail"
          rel="noopener noreferrer"
          target="_blank"
        >
          <ListItemIcon>
            <FaMedium size={16} />
          </ListItemIcon>
          <ListItemText primary={"Medium"} />
        </Link>
      </ListItem>
      <ListItem button key={"Hire me"}>
        <ListItemIcon>
          <FaHandHolding />
        </ListItemIcon>
        <ListItemText primary={"Hire me"} />
      </ListItem>
      <ListItem button key={"Contact"}>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary={"Contact"} />
      </ListItem>
    </List>
  )
}
export default Nav

// const Nav2 = () => (
//   <>
//     <List>
//       {["About", "Experience", "Skills", "Potfolio", "Blog"].map((text, index) => (
//         <ListItem button key={`${text}2`}>
//           <ListItemIcon>
//             {index % 2 === 0 ? <FormatTextdirectionRToL /> : <MailIcon />}
//           </ListItemIcon>
//           <ListItemText primary={text} />
//         </ListItem>
//       ))}
//     </List>
//     <Divider />
//     <List>
//       {["Medium", "Hire me"].map((text, index) => (
//         <ListItem button key={`${text}2`}>
//           <ListItemIcon>
//             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//           </ListItemIcon>
//           <ListItemText primary={text} />
//         </ListItem>
//       ))}
//     </List>
//   </>
// )
// module.exports = {Nav, Nav2};
// module.exports = {Nav, Nav2};
