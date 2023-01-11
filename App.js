
import React from 'react';
import ReactDOM from 'react-dom/client'; 

/**
 * <div class="header">
        <h1>Namaste React</h1>
        <ul>
            <li>About Us</li>
            <li>Support</li>
            <li>Home</li>
        </ul>
    </div>
    creating this with react
 */

  const root=ReactDOM.createRoot(document.getElementById("root"));
  
  const container=React.createElement(
    "div",
    {
      id:"container",
    },
    [React.createElement(
      "h1",
      { id :"h1"},
      "namaste react",
    ),
    React.createElement("ul", {id :"ul"},[React.createElement(
        "li",
        { id :"li1"},
        "ABOUT US",
      ),React.createElement(
        "li",
        { id :"li2"},
        "SUPPORT",
      ),React.createElement(
        "li",
        { id :"li3"},
        "HOME",
      ),]
    )]
  )
  //using JSX - is html like syntax (not an html)inside javascript
  const heading2=<h1>Hello jsx</h1> // this syntax browser don't understand so
  // babel will internally convert this into 
//  const heading2= React.createElement(
//     "h1",{ },"hello jsx",)
    //so that browser can understand it 
  
    // functional component

    const HeaderComponent = () =>{
      return(
          <div>
            {heading2} 
        <h2>functional component</h2>
        <h2> this is h2 tag</h2>
          </div>
      )
    }
  
  
    root.render(<HeaderComponent/>);

