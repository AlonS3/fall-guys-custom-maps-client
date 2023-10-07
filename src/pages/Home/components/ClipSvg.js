import React from "react"

const ClipSvg = () => {
  return (
    <svg style={{ position: "absolute" }} width="0" height="0" viewBox="50 50 1 1">
      <defs>
        <clipPath id="myClip" clipPathUnits="userSpaceOnUse">
          <path d="m399.5 147.9 200-130.01L800 147.93v-17.88L599.5 0l-200 130-200-130L0 129.78v17.9L199.5 17.9l200 130z" />
          <path d="m400.02 300.36 199.5-139.99L800 300.62v-42.71L599.48 117.63l-199.5 140.01-200.47-139.98L0 256.81v42.67l199.49-139.14 200.53 140.02z" />
          <path d="m400.02 434 199.49-139.99L800 434.48v-30.52L599.49 263.47 399.98 403.48 199.49 263.49 0 403.17v30.52l199.51-139.7L400.02 434z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ClipSvg
