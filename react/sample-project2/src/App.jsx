import DefaultExportSample from "./DefaultExportSample";
import Navbar from "./components/Navbar"
import { Module1,Module2 } from "./ModuleExportSample"
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
        <DefaultExportSample/>
        <Module1/>

        <Module2/>
        <div>exporting two functions</div>
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