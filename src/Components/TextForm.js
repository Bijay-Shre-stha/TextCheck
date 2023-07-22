import React, { useState } from "react";

export default function TextForm(props) {
    
    const handleUpCase = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    };

    const handleLowerCase = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    };

    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");
    };

    const handleExtraSpace = () => {
        console.log("Extra space was clicked" + text);
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed", "success");
    }

    const handleClear = () => {
        console.log("Clear was clicked" + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared", "success");
    }

    const handleArrangement = () => {
        console.log("Arrangement was clicked" + text);
        let newText = text.split(/[.] /).map(sentence => {
            return sentence.charAt(0).toUpperCase() + sentence.slice(1);
        }).join(". ");
        setText(newText);
        props.showAlert("Text arranged", "success");
    }

    const handleSpacing = () => {
        let newText = text.replace(/[.]/g, ". ");
        setText(newText);
        props.showAlert("Text arranged", "success");
    }

    const handleOnChange = (event) => {
        console.log("On change");
        //console.log(event.target.value)
        setText(event.target.value);
    };

    // const count = () => {
    //     if (text.length > 0) {
    //         return text.trim().split(/[ ]+/).length;
    //     }
    //     else {
    //         return 0;
    //     }
    // }
    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading} </h1>
                <div className="mb-3" >
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#031637' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                        id="myBox" rows="8" spellCheck="true"
                    ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary m-3" onClick={handleUpCase}>Convert to Upper case</button>
                <button disabled={text.length===0} className="btn btn-primary m-3" onClick={handleLowerCase}>Convert to Lower case</button>
                <button disabled={text.length===0} className="btn btn-primary m-3" onClick={handleCopyText}>Copy text</button>
                <button disabled={text.length===0} className="btn btn-primary m-3" onClick={handleSpacing}>Spacing</button>
                <button disabled={text.length===0} className="btn btn-primary m-3" onClick={handleArrangement}>Arrangement</button>
                <button disabled={text.length===0} className="btn btn-primary m-3" onClick={handleExtraSpace}>Remove extra space</button>
                <button disabled={text.length===0} className="btn btn-danger m-3" onClick={handleClear} >Clear text</button>
            </div>
            <div className="contain m-3 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
                </p>
                <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to read</p>
                <p>{0.008 * 60 * text.split(" ").filter((element)=>{return element.length!==0}).length} Seconds to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : " Nothing to Preview~! "}</p>
            </div>
        </>
    );
}
