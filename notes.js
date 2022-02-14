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
  const [seconds, setSeconds] = useState(0)

  function startStopwatch() {
    let updatedSeconds = seconds;
    setInterval(() => {
      updatedSeconds += 1;
      console.log(updatedSeconds);
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
