import React from 'react';
import { Link } from 'react-router-dom'
import Counter from './Counter'
import {FormattedMessage} from 'react-intl'

const About = () => {
  return (
    <div className="mb-5 mt-5">
      <Counter />
      <hr />
      <h4>
      <FormattedMessage
          id="ver"
          defaultMessage="Version {vers}"
          description="Version 0.0.1"
          values={{ vers: "0.0.1" }}/>
      </h4>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About
