import React, { useContext, useState } from 'react'
import "./sidebar.css"
import { context } from '../../context/Context'
const Sidebar = () => {
    const [open, setopen] = useState(false)
    let {onSend,prevprompet , setrecentprompet,newChat} = useContext(context)

   async function calldata(prompt){
       setrecentprompet(prompt)
        await onSend(prompt);
    }
  return (
    <div className="sidebar">
        <div className="top">
        <i onClick={()=>setopen(prev=>!prev)} className="fa-solid fa-bars main-icon"></i>
        <div onClick={()=>newChat()} className="new-chat">
        <i className="fa-solid fa-plus"></i>
        {open?<p>New Chat</p>:""}
        </div>
        <div className="recent-chat">
        {open?<p className='res-p'>Recent</p>:""}
            <div className="all-recent">
                {prevprompet?.map(function(item , idx){
                    return <div onClick={()=>calldata(item)} key={idx} className="rec">
                    <i className="fa-solid fa-message"></i>
                    {open?<p>{item.split(" ").slice(0,3).join(" ")}....</p>:""}
                    </div>
                })}
            </div>
        </div>
        </div>
        <div className="bottom">
            <div className="bottom-div">
            <i className="fa-solid fa-circle-info"></i>
            {open?"Help":""}
            </div>
            <div className="bottom-div">
            <i className="fa-solid fa-arrows-spin"></i>
            {open?"Active":""}
            </div>
            <div className="bottom-div">
            <i className="fa-solid fa-gear"></i>
            {open?"Settings":""}
            </div>
        </div>
    </div>
  )
}

export default Sidebar