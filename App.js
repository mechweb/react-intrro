
import React from 'react';
import ReactDOM from 'react-dom/client'; 

  //using JSX - is html like syntax (not an html)inside javascript
  const heading2=<h1>This is jsx</h1> // this syntax browser don't understand so
  // babel will internally convert this into 
//  const heading2= React.createElement(
//     "h1",{ },"hello jsx",)
    //so that browser can understand it 
  
    // functional component
    const root=ReactDOM.createRoot(document.getElementById("root"));

    const Title = ()=>{
     return(
      <h1 key="title2" >Functional Component</h1>
    )}
    const Header = () =>{
      return(
          <div>
             <Title/>
          </div>
      )
    }
    const Body = () =>{
      return(
        <>
        <h2>body</h2>
        </>
      )
    }

    const Footer = () =>{
      return(
           <>
           <h2>footer</h2>
           </>
      )
    }
    const AppLayout= () =>{
      return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
      )
    }
   
    root.render(<AppLayout/>);

