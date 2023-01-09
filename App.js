


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
  const header=React.createElement(
    "div",
    {},
    "hello js"
  )
  const heading = React.createElement(
    "h1",
    {},
    "namaste react",
  );
  
  root.render(header);

  console.log(heading);
