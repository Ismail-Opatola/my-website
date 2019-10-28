import React from "react"
import Link from "./Link"
import clsx from "clsx"
import { makeStyles, lighten } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import WorkOutline from "@material-ui/icons/WorkOutline"
import Person from "@material-ui/icons/PersonPin"
import FormatTextdirectionRToL from "@material-ui/icons/FormatAlignLeft"

import {
  // FaGithub,
  FaMedium,
  FaTwitter,
  FaGithubAlt,
  // FaYoutube,
  // FaLinkedin,
} from "react-icons/fa"
import { FiCodesandbox } from "react-icons/fi"

const useStyles = makeStyles(theme => ({
  list: {
    maxWidth: "100%",
    flexDirection: "column",
    color: "Whitesmoke",
    flexGrow: 0.5,
  },
  listItem: {
    width: "100%",
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  ListItemIcon: {
    color: theme.palette.primary.main,
  },
  customFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap",
  },
}))

const Nav = props => {
  const classes = useStyles()

  const [state, setState] = React.useState({
    hover: false,
    about: false,
    work: false,
    blog: false,
    hire: false,
    medium: false,
    twitter: false,
    github: false,
  })

  const toggleHover = (s = "") => {
    if (
      s === "a" ||
      s === "w" ||
      s === "b" ||
      s === "h" ||
      s === "m" ||
      s === "t" ||
      s === "g"
    )
      setState({ [s]: !state.s })

    return
  }

  const mixedClasses = clsx(classes.listItem, classes.customFlex)
  const mixedClassesIcon = s => {
    if (
      s === "a" ||
      s === "w" ||
      s === "b" ||
      s === "h" ||
      s === "m" ||
      s === "t" ||
      s === "g"
    ) {
      return state[s]
        ? clsx(classes.ListItemIcon, "ld", "ld-bounce")
        : clsx(classes.ListItemIcon)
    }
    return
  }

  const handleHoverA = () => {
    toggleHover("a")
  }
  const handleHoverW = () => {
    toggleHover("w")
  }
  const handleHoverB = () => {
    toggleHover("b")
  }
  const handleHoverH = () => {
    toggleHover("h")
  }
  const handleHoverM = () => {
    toggleHover("m")
  }
  const handleHoverT = () => {
    toggleHover("t")
  }
  const handleHoverG = () => {
    toggleHover("g")
  }

  return (
    <List component="ul" className={(classes.customFlex, classes.list)}>
      <ListItem
        key={"About"}
        button
        className={classes.listItem}
        onMouseEnter={() => handleHoverA()}
        onMouseLeave={() => handleHoverA()}
      >
        <Link
          to="/"
          className={mixedClasses}
          style={{ textDecoration: "none" }}
        >
          <ListItemIcon className={mixedClassesIcon("a")}>
            <Person />
          </ListItemIcon>
          <ListItemText primary="About" />
        </Link>
      </ListItem>
      <ListItem
        key={"Work"}
        button
        onMouseEnter={() => handleHoverW()}
        onMouseLeave={() => handleHoverW()}
      >
        <Link
          to="/#work"
          className={mixedClasses}
          style={{ textDecoration: "none" }}
        >
          <ListItemIcon className={mixedClassesIcon("w")}>
            <FiCodesandbox size={24} />
          </ListItemIcon>
          <ListItemText primary="Work" />
        </Link>
      </ListItem>
      <ListItem
        key={"Blog"}
        button
        onMouseEnter={() => handleHoverB()}
        onMouseLeave={() => handleHoverB()}
      >
        <Link
          to="/blog"
          className={mixedClasses}
          style={{ textDecoration: "none" }}
        >
          <ListItemIcon className={mixedClassesIcon("b")}>
            <FormatTextdirectionRToL />
          </ListItemIcon>
          <ListItemText primary="Blog" />
        </Link>
      </ListItem>

      <br />
      <Divider component="li" style={{ display: "block" }} />
      <br />

      <ListItem
        button
        key={"Hire me"}
        onMouseEnter={() => handleHoverH()}
        onMouseLeave={() => handleHoverH()}
      >
        <ListItemIcon className={mixedClassesIcon("h")}>
          <WorkOutline />
        </ListItemIcon>
        <ListItemText primary={"Hire me"} />
      </ListItem>
      <ListItem
        key={"Medium"}
        button
        onMouseEnter={() => handleHoverM()}
        onMouseLeave={() => handleHoverM()}
      >
        <a
          href="https://medium.com/@opatolamails"
          rel="noopener noreferrer"
          target="_blank"
          className={mixedClasses}
        >
          <ListItemIcon className={mixedClassesIcon("m")}>
            <FaMedium size={24} />
          </ListItemIcon>
          <ListItemText primary={"Medium"} />
        </a>
      </ListItem>
      <ListItem
        key={"Twitter"}
        button
        onMouseEnter={() => handleHoverT()}
        onMouseLeave={() => handleHoverT()}
      >
        <a
          href="https://twitter.com/opatolaismail"
          rel="noopener noreferrer"
          target="_blank"
          className={mixedClasses}
        >
          <ListItemIcon className={mixedClassesIcon("t")}>
            <FaTwitter size={24} />
          </ListItemIcon>
          <ListItemText primary={"Twitter"} />
        </a>
      </ListItem>
      <ListItem
        key={"Github"}
        button
        onMouseEnter={() => handleHoverG()}
        onMouseLeave={() => handleHoverG()}
      >
        <a
          href="https://github.com/Ismail-Opatola"
          rel="noopener noreferrer"
          target="_blank"
          className={mixedClasses}
        >
          <ListItemIcon className={mixedClassesIcon("g")}>
            <FaGithubAlt size={24} />
          </ListItemIcon>
          <ListItemText primary={"Github"} />
        </a>
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

/*

// First, create each components in a different file: Staff.js and Employee.js. Export them like this: export { Staff }; and export { Employee };

// Now create another file to handle multiple exports. Let's call it About.js and here is the content:

// export * from './Staff';
// export * from './Employee';
// Now just use it as you did:

// import { Staff, Employee } from "./components/About";

*/
