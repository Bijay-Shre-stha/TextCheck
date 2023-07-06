import React from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle]= useState(
    // {
    //     color: '#031637',
    //         backgroundColor: 'white'
    // });
    let myStyle = {
        color: props.mode==='dark'?'white':'#031637',
        backgroundColor: props.mode==='dark'?'#031637':'white'
    }
    return (
        <div className="container m-5" style={myStyle}>
            <h1 className="m-3">About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze you text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                            
                                TextCheck gives you a way to analyze your text quickly and efficiently. Be it word count, character count, or even the time it takes to read your text, TextCheck has you covered.
                            
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                            
                                TextCheck is a free character counter tool that provides instant character count & word count statistics for a given text. TextCheck reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                            
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                            
                                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                                {/* It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="contain m-3">
                <button type="button" onClick={darkMode} className="btn btn-primary">{btnText}</button>
            </div> */}
        </div>
    )
}
