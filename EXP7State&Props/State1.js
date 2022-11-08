import React from "react";
class State1 extends React.Component {

    constructor(props) {
      super(props);
      this.state = {brand: "Toyota"};
    }
    render() {
      return (
        <div>
          <h1>This is Example of State, My Car Brand is {this.state.brand}</h1>
        </div>
      );
    }
  }

  export default State1;