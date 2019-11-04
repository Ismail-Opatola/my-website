import React from "react"
import Typography from "@material-ui/core/Typography"
import Link from "../Link"

export default function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center" display="block">
        {'Copyright © '}
        <Link color="inherit" to={"/"}>
          Ismail Development
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
