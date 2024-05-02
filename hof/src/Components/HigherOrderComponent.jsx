import React, { Component } from "react";

export class HigherOrderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }

  // display all items
  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  // filter based on the userType

  renderItemsType = () => {
    const data = this.state.userData;
    const filteredData = data.filter((ele) => {
      return ele.user_type === "Designer";
    });

    // console.log(filteredData);

    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

// filter name starting from letter j

 renderItemsNameJ = () => {
    const data = this.state.userData;
    const filteredData = data.filter((ele) => {
      return ele.name[0].toLowerCase() === "j";
    });

    // console.log(filteredData);

    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

//   filter based on age

renderItemsAge = () => {
    const data = this.state.userData;
    const filteredData = data.filter((ele) => {
      return ele.age>28 || ele.age<=50;
    });

    // console.log(filteredData);

    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

// total number experience by designer

renderItemsExperience = () => {
    const data = this.state.userData;
    const Experienced = data.reduce((acc,num) => {
      if(num.user_type==="Designer") {
      acc+=num.years
      }
      return acc;
    },0);

    return Experienced;
  };

  render() {
    return (
      <div>
        <h1>higher order function</h1>
        <div className="box"> {this.renderItems()} </div>

        <div className="box">{this.renderItemsType()}</div>

        <div className="box">{this.renderItemsNameJ()}</div>

        <div className="box">{this.renderItemsAge()}</div>

        <div className="box">{this.renderItemsExperience()}</div>

      </div>
    );
  }
}

export default HigherOrderComponent;
