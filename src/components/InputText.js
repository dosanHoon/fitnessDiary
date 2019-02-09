import React from "react"
import PropTypes from "prop-types"

const InputText = ({ name, onChange }) => {
  return (
    <p>
      <input
        type="text"
        onChange={e => {
          onChange(e.target.value)
        }}
      />
      <span>{name}</span>
    </p>
  )
}

InputText.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func
}

InputText.defaultProps = {
  onChange: () => {}
}

export default InputText
