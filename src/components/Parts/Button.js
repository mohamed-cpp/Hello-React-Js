import React from 'react';
import PropTypes from 'prop-types'
const Button = ({color, text, doAction}) => {

  // const doButtonActionInside = (e) => {
  //   alert(color)
  //   console.log(e);
  // }

  return (
    <div className="flex items-center justify-center">
      <button onClick={doAction} className={`mt-2 mb-5 bg-${color}-500 hover:bg-${color}-400 text-white font-bold py-2 px-4 border-b-4 border-${color}-700 hover:border-${color}-500 rounded`}>
        {text}
      </button>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}


export default Button
