import React from 'react'

const Input = ({ value, onChange }) => {
  return (
    <input
      onChange={onChange}
      id="input"
      type="text"
      placeholder="Write something here..."
      value={value}
    />
  )
}

export default Input
