
import React from "react"

function PrintButton() {


  function onClick() {
    window.print()
  }

  return (
    <button
      onClick={onClick}
      className="non-printable"
      style={{
        width: `100px`,
        height: `50px`,
        fontSize: `1.25rem`,
        fontWeight: `bold`,
        borderRadius: `2rem`,
        textTransform: `uppercase`,
        border: `1px solid var(--main-color)`,
        background: `var(--main-bg)`,
        color: `var(--main-color)`
      }}>
      Print
   </button>
  )
}

export default PrintButton
