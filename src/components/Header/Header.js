import React from 'react';
import PropTypes from 'prop-types'
import Css from './header.module.css'
import Button from '../Parts/Button'

const Header = (props) => {
  const doAction = (e) => {
    alert('From Outside');
    console.log('e');
  }
  return (
    <header>
      <h1
        style={{color: 'gray'}}
        >
        {props.data} / {props.title}
      </h1>
      <h1
        style={StyleHeader}
        >
        Another Way to Use Style
      </h1>
      <h1
        className={Css.header}
        >
        Another Way to Use Style
      </h1>
      <Button color="pink" doAction={doAction} text="Click" />
      <Button color="green" doAction={doAction} text="Click Here" />

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

const StyleHeader = {
  color: 'green',
  float: 'right',
  marginTop: 0,

}

export default Header
