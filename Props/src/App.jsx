// props = read-only properties that are shared between components.
//         A parent component can send data to a child component
//         <Component key=value />



import Student from "./Student.jsx"

const App = ()=> {
  return(

    <>
    <Student name="Jake" age={40} isStudent={true} />
    <Student name="Tom" age={25} isStudent={false} />
    <Student name="Tim" age={35} isStudent={true} />
    <Student name="Cam" age={55} isStudent={false} />
    <Student />
    </>
  );
}
export default App
