
import Navbar from "./components/Navbar"
const App = () => {
    const data={
        appname:"hello"
    }
    const logodata="mylogo"
    const testy="djfhsdhfh"
    const ki="hi"
  return (
    <>
        <p className="text-red-500">{testy}</p>
        {logodata}
        <Navbar appdata={data} logo={logodata} vi={ki}></Navbar>
    </>
  )
}

export default App

//  function App(){
//     return(
//         <div>
//             HelloW World
//         </div>
//     );
// }

// // export default App
// function App1(){
//     return(
//         <div>
//             HelloT World
//         </div>
//     );
// }

// const App2=() => {
//     return(
//         <div>
//             Hello World
//         </div>
//     );
// }
// //export default App2
// export { App,App1};