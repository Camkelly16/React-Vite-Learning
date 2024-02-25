/* Conditional Rendering = allows you to control what gets rendered
                           in your application based on certain conditions
                           (show, hide, or change components)
*/


import UserGreeting from "./UserGreeting.jsx"
const App =() => {
 return( 
<>

  <UserGreeting isLoggedIn={true} username="Cool Human" />
  <UserGreeting isLoggedIn={false}  />
  <UserGreeting isLoggedIn={true} />
</>
);

}



export default App
