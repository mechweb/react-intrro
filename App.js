
import React from 'react';
import ReactDOM from 'react-dom/client'; 

  //using JSX - is html like syntax (not an html)inside javascript
  const heading2=<h1>This is jsx</h1> // this syntax browser don't understand so
  // babel will internally convert this into 
//  const heading2= React.createElement(
//     "h1",{ },"hello jsx",)
    //so that browser can understand it 
  
    /**
     * Header
     *     - logo(Title)
     *     - Nav Items(right side)
     *     - cart
     * Body
     *     - Search bar
     *     - RestaurantList
     *        - RestaurantCard (many cards)
     *             -image
     *             -name
     *             -rating
     *             -cuisines
     * Footer
     *     - links
     *     - copyright
     */
    // functional component
    const root=ReactDOM.createRoot(document.getElementById("root"));

    const Title = ()=>{
     return(
      <a href="/" ><img alt="logo" className="logo" src="https://www.lavillalincoln.com/uploads/1/3/3/5/133546046/published/new-la-villa-logo-glow.png?1656111708"></img></a>
      

      )}

      const RestaurantCard=()=>{
        return(
          <div className='card'>
            <img className="logo"src='https://b.zmtcdn.com/data/pictures/chains/9/19293449/c9fbbf2eed4d4ab83ce63b114e76b57f.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*'></img>
            <h2>Burger King</h2>
            <h3>Burger,American</h3>     
            <h4>4.2 rating</h4>
        </div>
        )
      }
    const Header = () =>{
      return(
          <div className='header'>
             <Title/>
             <div className='nav-item'>
              <ul className='nav'>
                <li>Home</li>
                <li>About </li>
                <li>Contact</li>
                <li>Cart</li>
              </ul>

             </div>
          
          </div>
      )
    }
    const Body = () =>{
      return(
        <>
        <RestaurantCard/>
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

