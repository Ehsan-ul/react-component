import { React, Component } from 'react';
import './App.css';
import Person from './component/Person';

// functional component
// function App() {
//   return (
//     <div className='App'>
//       <h2>This is Heading 2</h2>
//       <Person />
//     </div>
//   );
// }

// class component

class App extends Component {
  // react 16.8 e constructor and supper likha lage na. direct state likhlei hoy
  // constructor() {
  //   super();
  //   this.state = {};
  // }

  render() {
    return (
      <div className='App'>
        <h2>This is a Heading</h2>
        <Person name='Sajjad' age='25'>
          This is a children text
        </Person>
        <Person name='Nasir' age='23' />
      </div>
    );
  }
}

export default App;
