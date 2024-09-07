import React, { useContext } from "react";
import "./main.css";
import img1 from "../../assets/it director.png";
import img2 from '../../assets/images.png'
import { context } from "../../context/Context";
const Main = () => {
    let {setload,load,setinput,input,setresultdata,resultdata,prevprompet,setprevprompet,setrecentprompet,recentprompet,setshowresult,showresult,onSend} = useContext(context)
  return (
    <div className="main">
      <div className="top-main">
        <p>Gemini</p>
        <img src={img1} alt="" />
      </div>
      <div className="middle-main">
        
        {!showresult?<>
        <div className="text">
        <p className="p-one">Hello,Dev</p>
        <p className="p-two">how can i help you...?</p>
      </div>
      <div className="boxs">
          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, commodi.
            </p>
            <i className="fa-solid fa-toolbox"></i>
          </div>
          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, commodi.
            </p>
            <i className="fa-solid fa-toolbox"></i>
          </div>
          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, commodi.
            </p>
            <i className="fa-solid fa-toolbox"></i>
          </div>
          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, commodi.
            </p>
            <i className="fa-solid fa-toolbox"></i>
          </div>
        </div>
        </>:<div className="result">

          <div className="result-title">
            <img src={img1} alt="" />
            <p>{recentprompet}</p>
          </div>
          <div className="result-data">
            <img src={img2} alt="" />
            {load ? <div className="loader">
              <hr />
              <hr />
              <hr />
            </div>:
            
            <p dangerouslySetInnerHTML={{__html:resultdata}}></p>
            }
          </div>
          
          </div>}
      </div>
      <div className="bottom-main">
        <div className="cont">
            <input onChange={(e)=>setinput(e.target.value)} value={input} type="text" placeholder="Enter your prompt here" />
            <i onClick={()=>onSend()}  className="fa-solid fa-paper-plane"></i>
        </div>
        <p className="bottom-p">all rights Reserved to ENG : Ahmed Ashraf</p>
      </div>
    </div>
  );
};

export default Main;
