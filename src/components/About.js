import { Link } from 'react-router-dom'
import Counter from './Counter'

const About = () => {
  return (
    <div className="mb-5 mt-5">
      <Counter />
      <hr />
      <h4>Version 0.0.1</h4>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About
