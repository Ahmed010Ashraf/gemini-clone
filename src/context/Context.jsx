import { createContext, useState } from "react";
import run from "../config/Gemini";

export const context = createContext()

const Contextprovider = (props)=>{

    const [showresult, setshowresult] = useState(false)
    const [input, setinput] = useState("")
    const [recentprompet, setrecentprompet] = useState("")
    const [prevprompet, setprevprompet] = useState([])
    const [load, setload] = useState(false)
    const [resultdata, setresultdata] = useState("")

    function newChat (){
        setload(false);
        setshowresult(false);
    }


    function typewords(index , word){
        setTimeout(() => {
            setresultdata(prev=>prev+word)
        }, 75*index);
    }

    const onSend = async (prompt)=>{
        setresultdata("")
        setload(true)
        setshowresult(true)
        
        let res ;
        if(prompt !== undefined){
            setrecentprompet(prompt)
            res = await run(prompt)
        }
        else {
            setprevprompet(prev=>[...prev , input]) 
            setrecentprompet(input)
            res = await run(input)
        }
        let newarr1 = res.split("**");
        let newres1 = "";
        for(let i=0; i<newarr1.length; i++){
            if(i===0 || i%2!==1 ){
                newres1 += newarr1[i];
            }
            else {
                newres1 += `<b>[${newarr1[i]}]</b>`;
            }
        }
        let newres2 = newres1.split("*").join("</br>");
        
        let finalarr = newres2.split(" ")
        
        for(let i =0 ; i<finalarr.length ; i++){
            typewords(i ,finalarr[i]+" " );
        }
        setload(false)
        // setresultdata(newres2)
        setinput("")
       
    }
    


    const contextvalue = {setload,newChat,load,setinput,input,setresultdata,resultdata,prevprompet,setprevprompet,setrecentprompet,recentprompet,setshowresult,showresult,onSend};
    return <context.Provider value={contextvalue}>
        {props.children}
    </context.Provider>
}
export default  Contextprovider