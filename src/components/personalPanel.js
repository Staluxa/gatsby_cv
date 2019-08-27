import React from "react"
import PropTypes from "prop-types"


const PersonalPanel = ({ title, list, info }) => {
  return (
    <section style={{
      padding: `0.5rem 0`
    }}>
      <h2>
        {title}
      </h2>
      {
        (list &&
          <ul>
            {
              info.map(({ label, value }, i) => {
                return <li key={i}>
                  <b>{label}</b> - {value}
                </li>
              })
            }
          </ul>)
        || info.map(({value}, i) => <p key={i}>{value}</p>)
      }
    </section>
  )
}


PersonalPanel.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.bool.isRequired,
  info: PropTypes.array.isRequired
}

export default PersonalPanel
