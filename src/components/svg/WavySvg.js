import React from "react"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const WavySvg = props => {
  const matches_sm_up = useMediaQuery(theme => theme.breakpoints.up("sm")),
  matches_sm_down = useMediaQuery(theme => theme.breakpoints.down("sm"));
  if (matches_sm_up) {
    return (
      <svg
        id="SVGRoot"
        // width="100vw"
        // height="100%"
        // preserveAspectRatio="none"
        viewBox="0 0 900 600"
        className={props.className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="wavy-bottom" >
          <path
            className="wavy-bottom-path"
            d="m899.89 155.18c-2.7808-0.75961-131.08-28.064-101.42 64.689 30.005 93.83-37.562 173.18-112.22 151.4-114.75-41.38-102.13 199.77-257.27 95.827-403.5-270.34-427.85-153.95-428.97-130.9-0.11077 2.2719 0 3.6539 0 3.6539v260.14h899.89z"
          />
        </g>
        <g className="wavy-top" transform="matrix(.46887 0 0 .5573 -.19223 -1.883)">
          <path
            className="wavy-top-path"
            d="m0.13786 1.8607h1919.8v298.84s-264.98-60.334-200.98 104.08c63.995 164.41-95.992 312.6-255.22 274.44-244.74-72.506-217.82 350.04-548.71 167.91-945.37-520.38-914.92-222.96-914.92-222.96z"
          />
        </g>
      </svg>
    )
  } else if (matches_sm_down) {
    return (
      <svg
        id="SVGRoot"
        // width="100vw"
        // height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 400 600"
        className={props.className}
        xmlns="http://www.w3.org/2000/svg"
      >
      <g id="g1399" transform="translate(-140 74.302)">
       <g id="g1406" transform="matrix(.44458 0 0 .57676 139.92 179.64)" strokeWidth="1.9748">
        <g id="g1410">
         <path id="path1393" class="a" d="m0.17446-440.29h899.72l0.1069 640.67s-124.24-33.624-94.233 58.004c30.005 91.626-45.007 174.21-119.66 152.95-114.75-40.408-102.13 195.08-257.27 93.577-443.25-290.01-428.97-124.26-428.97-124.26z" fill="#152347" opacity=".93" strokeWidth="1.9748" className="wavy-top-path"/>
         <path id="path1397" d="m899.89 189.86c-2.7808-0.75961-131.08-28.064-101.42 64.689 30.005 93.83-37.562 173.18-112.22 151.4-114.75-41.38-102.13 199.77-257.27 95.827-403.5-270.34-427.85-153.95-428.97-130.9-0.11077 2.2719 0 3.6539 0 3.6539l0.17446 225.47h899.72z" fill="#f3efef" opacity=".93" strokeWidth="1.9748" className="wavy-bottom-path"/>
        </g>
       </g>
      </g>
      <g id="layer1-3" transform="matrix(.53038 0 0 1 -1037.3 -5.6984)">
       <g id="g817" transform="matrix(.46887 0 0 .5573 -.19223 -1.883)" strokeWidth="2.6862" className="wavy-top">
        <path id="path815" class="a" d="m0.13786 1.8607h1919.8v298.84s-264.98-60.334-200.98 104.08c63.995 164.41-95.992 312.6-255.22 274.44-244.74-72.506-217.82 350.04-548.71 167.91-945.37-520.38-914.92-222.96-914.92-222.96z" fill="#152347" opacity=".93" strokeWidth="2.6862" className="wavy-top-path"/>
       </g>
       <path id="path819" d="m899.89 155.18c-2.7808-0.75961-131.08-28.064-101.42 64.689 30.005 93.83-37.562 173.18-112.22 151.4-114.75-41.38-102.13 199.77-257.27 95.827-403.5-270.34-427.85-153.95-428.97-130.9-0.11077 2.2719 0 3.6539 0 3.6539v260.14h899.89z" fill="#f3efef" opacity=".93" strokeWidth="1.3731" className="wavy-bottom-path"/>
      </g>
      </svg>
    )
  } else {

    return (
      <svg
      id="SVGRoot"
      // width="100vw"
      // height="100%"
      // preserveAspectRatio="none"
      viewBox="0 0 1920 1080"
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      >
      <g className="wavy-bottom">
      <path
      className="wavy-bottom-path"
      d="m1919.7 281.84c-5.9309-1.363-279.58-50.356-216.32 116.08 63.995 168.36-80.112 310.74-239.34 271.66-244.74-74.25-217.83 358.46-548.71 171.95-860.58-485.09-912.53-276.25-914.92-234.88-0.23616 4.0766 0 6.5564 0 6.5564v466.79h1919.3z"
      />
      </g>
      <g className="wavy-top">
      <path
      className="wavy-top-path"
      d="m0.13786 1.8607h1919.8v298.84s-264.98-60.334-200.98 104.08c63.995 164.41-95.992 312.6-255.22 274.44-244.74-72.506-217.82 350.04-548.71 167.91-945.37-520.38-914.92-222.96-914.92-222.96z"
      />
      </g>
      </svg>
    )
  }

}

export default WavySvg

// const WavySvg = props => {
//   const matches = useMediaQuery(theme => theme.breakpoints.up("sm"))
//
//   return (
//     <svg
//     id="SVGRoot"
//     // width="100vw"
//     // height="100%"
//     // preserveAspectRatio="none"
//     viewBox="0 0 1920 1080"
//     className={props.className}
//     xmlns="http://www.w3.org/2000/svg"
//     >
//     <g className="wavy-top">
//     <path
//     className="wavy-top-path"
//     d="m0.13786 1.8607h1919.8v298.84s-264.98-60.334-200.98 104.08c63.995 164.41-95.992 312.6-255.22 274.44-244.74-72.506-217.82 350.04-548.71 167.91-945.37-520.38-914.92-222.96-914.92-222.96z"
//     />
//     </g>
//     <g className="wavy-bottom">
//     <path
//     className="wavy-bottom-path"
//     d="m1919.7 300.58c-5.9309-1.331-263.7-58.333-200.44 104.19 63.995 164.41-95.991 312.6-255.22 274.44-244.74-72.506-217.83 350.04-548.71 167.91-860.58-473.7-912.53-269.76-914.92-229.36-0.23616 3.9809 0 6.4024 0 6.4024v455.83h1919.3z"/>
//     </g>
//     </svg>
//   )
// }
