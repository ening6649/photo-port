// npx create-react-app photo-port

// React components must always return a single parent JSX element.
// .. but this parent jsx element may have many children element
// the first will fail , if section is inside div. then will not fail
// return (
    <section>
      <h1 id="about">Who am I?</h1>
    </section>
    <div>
    </div>
  );

// the outermost element must have a key attribute that s set to be unique
// ..here category.name is the key . usually it will be an ID
  {categories.map((category) => (
    <li
      className="mx-1"
      key={category.name}
    >
      <span>
        {category.name}
      </span>
    </li>
  ))}

// use built in event listener onClick() method. 
{categories.map((category) => (
    <li
      className="mx-1"
      key={category.name}
    >
      <span onClick={categorySelected} >
        {category.name}
      </span>
    </li>
  ))}

//   console log a template literal
function categorySelected(name) {
    console.log(`${name} clicked`)
  }


// should be in a function , otherwise the function will be called whenever the
// ..component renders as well
onClick={() => categorySelected(category.name)}

// A snapshot is a serialized version of the DOM node structure, enabled by Jest.

// When changes are made to a component's element, such as a change in text content, 
// ..button label, or attribute, it will cause the stored snapshot to become stale.
// .. A new snapshot can be written at the command line that contains 
// ..the instance of the test runner by typing u to update, or rewrite, a new snapshot.

//Press u in the test runner instance to update the snapshots

// when adding images must have an alt attribute and img tag
// ..because we want the images to share a grid with other images
// .. rather than takee up the entire page
function Gallery(props) {
    const currentCategory = {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    };
    return (
      <section>
        <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
        <p>{currentCategory.name}</p>
        <div className="flex-row">
            <img
              src={photo}
              alt="Commercial Example"
              className="img-thumbnail mx-1"
            />
        </div>
      </section>
    );
  }

//react hooks will trigger re-renders to a component
// ..allow you to easily manage state within a component
import React, { useState } from "react"

function SomeComponent() {
    // useState() returns an array
    // first item is the value of your state, second is a setter
    // ..allows to set the state to something else 
    // these can be named whatever we want
    // 0 refers to the initial state 
  const [seconds, setSeconds] = useState(0)

  function startStopwatch() {
    let updatedSeconds = seconds;
    setInterval(() => {
      updatedSeconds += 1;
      console.log(updatedSeconds);
    //   rather than using += to chanage seconds, use updated state as an argument
    //  must use a new variable updatedSeconds to keep track of seconds in real time
    // ..because setSeconds is asynch
      setSeconds(updatedSeconds);
    }, 1000);
  }

return (
  <div>
    {seconds}
    <button onClick={startStopwatch} >Start</button>
  </div>
)
}

// only call hooks from react functions
// only call hoooks at the top lvl. cannot use them inside for loops
// ..nested functions or conditionals 

// because components are functions, we can pass in any type of argument we want. Rather than passing it 
// ..in through parentheses, though, you need to pass them in as attributes on the component in JSX. 
// ..This is JSX, so you can name those attributes whatever you want, without the need for the data- prefix. 
// ..Then within the Child component, props is nothing more than the name of the parameter,
// .. which you could change to be whatever you want.
function App() {
    return <Child somename="Lyza" ></Child>
  }
  
function Child(props) {
    return <div>{props.somename}</div>
  }

// document.title, which will change the tab's text content

// The main difference between useEffect and useState is that useEffect
// ..is an API that reflects the lifecycle methods of the component, 
// ..such as when the component mounts, unmounts, or updates. 

// htmlFor instead of For , className instead of class 

// if form data is maintained by the state of the component , controlled component
// ..otherwise uncontrolled 

// assign value taken from the input field in the UI with e.target.value and assign
// .. this value to the porperty formState.name
// ...formState the spread operator to retain the other key-value pairs in this object
// .. without which, the formState object would be overwritten to only contain the 
// ..name:value key pair
function handleChange(e) {
    setFormState({...formState, name: e.target.value })
  }
  
  console.log(formState);

// make the property name a dynamic variable that s determined by the form element
// .. so as to not create a different handleChange for email, message and name
// e.target.name the name actually refers to the name attribute of the form element
// .. and therefore matches the property names of all formState (name,email and message)
setFormState({...formState, [e.target.name]: e.target.value })

// basic modal with a backdrop and container
<div className="modalBackdrop">
  <div className="modalContainer">
    <h3 className="modalTitle">Photo Name</h3>
    <img alt="current category" />
    <p>
      Photo Description
    </p>
    <button type="button">
      Close this modal
    </button>
  </div>
</div>

// closures enable access to the state of the modal parent component, Photolist.