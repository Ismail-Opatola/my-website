import React from "react"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const TopSvg = props => {
  const matches = useMediaQuery(theme => theme.breakpoints.up("sm"))

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={props.style}
      viewBox="0 0 1920 1080"
      className={props.topSvg}
      width={props.width}
      height={props.height}
      preserveAspectRatio={props.pAR}
    >
      <path
        d="M0,0H1920V313.242S1655,250,1719,422.333,1623,750,1463.757,710C1219,634,1245.914,1076.912,915,886-30.455,340.546,0,652.3,0,652.3Z"
        fill={props.fill}
        opacity="0.93"
        transform="translate(0.112)"
        style={{ padding: "0", margin: "0"}}
      />
    </svg>
  )
}

// const TopSvg = ({ topSvg , topSvgPath }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" className={topSvg}>
//     <path d="M0,0H1920V313.242S1655,250,1719,422.333,1623,750,1463.757,710C1219,634,1245.914,1076.912,915,886-30.455,340.546,0,652.3,0,652.3Z" className={topSvgPath} />
//   </svg>
// )

export default TopSvg
