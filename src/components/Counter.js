import React from 'react'
import Button from './Parts/Button'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../store/actions'

const Counter = () => {
  // const count = useSelector(state => state.reducer1.count) // combineReducers
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  return (
    <div>
      <div> {count} </div>
      <div>
      <Button color={'red'} doAction={() =>dispatch(decrement(2))} text={'-'} />
      <Button color={'green'} doAction={ () =>dispatch(increment(4))} text={'+'} />
      </div>
    </div>
  )
}

export default Counter
