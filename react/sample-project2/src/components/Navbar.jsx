
import React ,{useState} from 'react'

const Navbar= ({ appdata,logo,vi})=>{
    const[numberstate,setNumberstate]=useState(0)
    const[stringstate,setStringstate]=useState("a")
    const[arraystate,setArraystate]=useState([
        "a",false,0
    ])
    console.log(numberstate)
    console.log(stringstate)
    console.log(arraystate)
    return(
        <>
        {appdata.appname}{logo}{vi}</>
    )
}
    
export default Navbar