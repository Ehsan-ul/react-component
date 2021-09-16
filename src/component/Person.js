import { React, Component } from 'react';

// const Person = (props) => {
//   const { name, age } = props;
//   console.log(props);

//   return (
//     <div>
//       <h5>
//         Name: {name}, Age: {age}
//       </h5>
//       <h6>{props.children}</h6>
//       <p>{Math.random()}</p>
//       <hr />
//     </div>
//   );
// };

class Person extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { name, age, children } = this.props;

    return (
      <div>
        <h5>
          Name: {name}, Age: {age}
        </h5>
        <h6>Children: {children}</h6>
        <p>Number: {Math.random()}</p>
        <hr></hr>
      </div>
    );
  }
}

export default Person;
