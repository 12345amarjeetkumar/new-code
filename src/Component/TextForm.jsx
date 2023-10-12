import {useState} from 'react'


export default function TextForm(props) {
  const[text,setText]=useState("")

 const handleUpclick=()=>{
    let newtext=text.toUpperCase();
    setText(newtext)
    props.Showalert("convert to upperCase","success")
 }
 const handleOnChange=(event)=>{
    
    setText(event.target.value)
 }

 const handleLowclick=()=>{
  let newtext=text.toLowerCase();
  setText(newtext)
  props.Showalert("convert lower CAse","success")
 }

 const handleCopy=()=>{
  var text=document.getElementById("myBox")
  text.select()
  navigator.clipboard.writeText(text.value)
  props.Showalert("copy","success")
 }
const handleextraspace=()=>{
  let newtext=text.split(/[ ]+/)
  setText(newtext.join(" "))
  props.Showalert("ExtraSpaceHandle","success")
}
 

const Textdelete=()=>{
  setText("");
  props.Showalert("Delete Text","success")
}
  

  return (
    <>
    <div className='container' style={{color:props.mode==="dark"?"white":"#042743"}}>
    <h1>{props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"gray":"white",color:props.mode==="dark"?"white":"#042743"}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 " onClick={handleUpclick}>convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLowclick}>convert To LowerCase</button>
<button className="btn btn-danger mx-2" onClick={Textdelete}>Dlete</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>copyText</button>
<button className="btn btn-primary mx-2" onClick={handleextraspace}>RemoveExtraspace</button>
</div>
<div className="container" style={{color:props.mode==="dark"?"white":"#042743"}}>
<h1> your text summary</h1>
<p> {text.length>0?text.split(" ").length:0 }words,charater {text.length}</p>
<p>{0.008*text.split(" ").length}Minutes</p>
<h3>Preview</h3>
<p>{text.length>0?text:"Enter somthing above textbox to preview here"}</p>
</div>
</>
  )
}
