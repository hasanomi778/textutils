import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('')
    const upCase = ()=>{
        let newTxt = text.toLocaleUpperCase();
        setText(newTxt);
    }
    const lowCase = ()=>{
        let newTxt = text.toLocaleLowerCase();
        setText(newTxt);
    }
    const clearTxt = ()=>{
        let newTxt = '';
        setText(newTxt);
    }
    const handleChange = (event)=>{
        setText(event.target.value);
    }

    return (
        <div className="textareaHolder">
            <div className="container">
                <div className="txtHolder">
                    <label htmlFor="myBox">{props.txtHeading}</label>
                    <textarea id='myBox' placeholder='Enter Your Text Here' value={text} onChange={handleChange}></textarea>
                    <button disabled={text.length===0} className='btn btn-primary' onClick={upCase}>Convart To Uppercase</button>
                    <button disabled={text.length===0} className='btn btn-secondary' onClick={lowCase}>Convart To Lowercase</button>
                    <button disabled={text.length===0} className='btn btn-danger' onClick={clearTxt}>Clear Text</button>
                </div>
                <div className="text_summary">
                    <h2 className="h2">Here's Your Text Summary -</h2>
                    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words & {text.length} Characters</p>
                    <p>You Need Approximately {0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} min To Read This</p>
                </div>
            </div>
        </div>
    )
}
