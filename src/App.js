import React from 'react'
import Header from './components/Header/Header'

function App() {
  const NAME = "Mohamed"
  return (
    <div className="App">
      <Header data="Hello From App.js" />
      <h1>Hello {NAME}</h1>
    </div>
  );
}
// if you want use classes
// class App extends React.Component {
//   render() {
//     return <h1>Here</h1>
//   }
// }

export default App;
