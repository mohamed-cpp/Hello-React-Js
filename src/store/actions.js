const increment = (numb) => {
  return {
    type: "INC",
    payload: numb ?? 1
  }
}

const decrement = (numb) => {
  return {
    type: "DEC",
    payload: numb ?? 1
  }
}

export {increment, decrement};