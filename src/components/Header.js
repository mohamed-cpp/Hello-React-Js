import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <header>
      <h1>{props.data} / {props.title}</h1>
    </header>
  )
}

Header.defaultProps = {
  data: 'Title Here',
  title: 'Empty Tag' // if data did not pass it will be that
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
