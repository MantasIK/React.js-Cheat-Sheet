// Importing React and ReactDOM from your npm modules to actually use React
import React from "react";
import ReactDOM from "react-dom"; // Only need ReactDOM if this is the component that gets injected into HTML
// Import child components in order to use them
import NameGiver from "./NameGiver";

//Class - based component, has a state to hold on to

class App extends React.Component {
  constructor(props) {
    /* Create a constructor to receive props, super them as well */
    super(props); //To access props that were drilled we use this.props.propName

    //This is your state
    this.state = {
      name: "person I don't know",
      number: 0,
      gender: null
    };

    /* ALWAYS BIND YOUR METHODS INSIDE THE CONSTRUCTOR */

    this.notInvokedImmediately = this.notInvokedImmediately.bind(this);
    this.increaseNumberBySettingState = this.increaseNumberBySettingState.bind(
      this
    );
    this.changeNameByGrabbingValueFromChild = this.changeNameByGrabbingValueFromChild.bind(
      this
    );
  }

  /****************************  METHODS FOR THE COMPONENT  ****************************/

  notInvokedImmediately() {
    console.log(
      "This method does not have the braces () next to it inside the jsx tag so it it will only run when clicked, no need to wrap in arrow function"
    );
  }

  increaseNumberBySettingState() {
    let newNumber = this.state.number;
    newNumber += 1;

    // Change the state by using setState. That will RE-RENDER the page to show changes!
    this.setState({
      number: newNumber
    });
  }

  changeNameByGrabbingValueFromChild(event) {
    this.setState({ name: event.target.value });
  }

  /****************************  COMPONENT DID MOUNT: TO DO THINGS BEFORE THE WEBSITE RENDERS ****************************/
  // If you need to do something like an async call and get data before the website open, do it here

  // componentDidMount() {
  //   /* Beep Boop I'm calling an API or something */
  //   var data = "Joseph claps on 3.. 2.. 1 CLAP";

  //   this.setState({ name: data });
  // }

  // Same family but run when either the state or props changed, componentDidMount technically runs only once. Google for more
  componentDidUpdate(prevProps, prevState) {
    if (prevState.stateName !== this.state.stateName) {
      console.log("state/props have changed has changed.");
    }

    if (prevState.propsName !== this.state.propsName) {
      console.log("state/props have changed has changed.");
    }
  }

  /******************************************  JSX STUFF *************************************************/

  render() {
    return (
      <div>
        {/* Comments inside return() statement are wrapped in curlies, don't be alarmed */}
        {/* Always remember to refer to items in state by this.state.itemName */}
        <div>Hello, {this.state.name}!</div>
        {/* The <br /> just jumps down a line (on screen), think of it as a dividor visually */}
        <br />
        <div>The current number is {this.state.number}</div>
        <br />
        {/* onClick, onChange and many others are specific react props that have functionality. In this case: onClick= 'run the method' */}
        <button onClick={this.notInvokedImmediately}>
          I am not invoked immediately
        </button>
        <br />
        <br />
        {/*  If you have a method end with braces(), put them inside and anonymous function, that's it. */}
        <button onClick={() => console.log("I have braces (), wrap me up!")}>
          I am invoked immediately
        </button>
        <br />
        <br />
        <button onClick={this.increaseNumberBySettingState}>
          I increase the number
        </button>
        <br />
        <br />
        {/* To 'drill' a prop (value or method) into the child component, just name it assign */}
        <NameGiver propName={this.changeNameByGrabbingValueFromChild} />

        <br />
        <br />
        {/* React does not allow if/else statements, instead we use ternary operators to conditionally render, if you change this.state.gender, it will trigger */}
        {this.state.gender !== null ? <div>You {this.state.gender}</div> : null}
      </div>
    );
  }
  //
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);

//Or ReactDOM.render(<App />, document.getElementById("app"));  (It's the same thing)
