import DefaultExportSample from "./DefaultExportSample"
import { Module1, Module2 } from "./ModuleExportSample"
import Navbar from "./components/Navbar"
// import Input from   "./inputsheet"
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
    </>
  )
}

export default App