import React, { useState } from 'react'

export default function Form1(props) {

    const [text, setText] = useState('');
    const [textState, setTextState] = useState(['']);
    const [currentStateIndex, setCurrentStateIndex] = useState(0);


    const handleChange = (event) => {
        const newText = event.target.value;
        setText(newText);
        if (newText.charAt(newText.length - 1) === ' ') modifyText(newText);
    }

    const toUpperCase = () => {
        const modifiedText = text.toUpperCase();
        setText(modifiedText);
        modifyText(modifiedText);

    }

    const toLowerCase = () => {
        const modifiedText = text.toLowerCase();
        setText(modifiedText);
        modifyText(modifiedText);
    }

    const toggleCase = () => {
        const modifiedText = (text.split('').map(char => {
            if (char.toUpperCase() === char) {
                return char.toLowerCase();
            } else {
                return char.toUpperCase();
            }
        }).join(''));
        setText(modifiedText);
        modifyText(modifiedText);

    }

    const capitalizeWords = () => {
        const modifiedText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
        setText(modifiedText);
        modifyText(modifiedText);
    }

    const capitalizeSentences = () => {
        const modifiedText = text.replace(/(^\w|\.\s\w)/g, char => char.toUpperCase());
        setText(modifiedText);
        modifyText(modifiedText);
    }


    const removeXspace = () => {
        const modifiedText = (text.replace(/\s+/g, ' '));
        setText(modifiedText);
        modifyText(modifiedText);

    }

    const minify = () => {
        const modifiedText = (text.split(' ').join(''));
        setText(modifiedText);
        modifyText(modifiedText);
    }

    const addSpaceAfterPunctuation = () => {
        const modifiedText = text.replace(/([.,!?])\s*/g, '$1 ');
        setText(modifiedText);
        modifyText(modifiedText);
    }

    const reverse = () => {
        const modifiedText = (text.split('').reverse().join(''));
        setText(modifiedText);
        modifyText(modifiedText);
    }

    const reverseWords = () => {
        const modifiedText = (text.split(' ').reverse().join(' '));
        setText(modifiedText);
        modifyText(modifiedText);
    }

    const copy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success");
    }

    const ClearText = () => {
        setText('');
        modifyText('');
    }

    function modifyText(newText) {
        setTextState(prevState => {
            const newState = prevState.slice(0, currentStateIndex + 1).concat(newText);
            setCurrentStateIndex(newState.length - 1);
            return newState;
        });
    }

    const undo = () => {
        if (currentStateIndex > 0) {
            setCurrentStateIndex(prevIndex => prevIndex - 1);
            setText(textState[currentStateIndex - 1]);
        }
    };

    const redo = () => {
        if (currentStateIndex < textState.length - 1) {
            setCurrentStateIndex(prevIndex => prevIndex + 1);
            setText(textState[currentStateIndex + 1]);
        }
    };

    return (
        <>
            <div>
                <form>
                    <div className="mb-3">
                        <textarea type="text" className="form-control" style={
                            {
                                backgroundColor: props.mode === 'dark' ? '#2b3035' : 'white',
                                color: props.mode === 'dark' ? 'white' : 'black'
                            }
                        }
                            id="exampleInputName" cols="1" rows="6" value={text} onChange={handleChange} />
                    </div>
                </form>
                <span>Case Manipulation:</span>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={toUpperCase}>UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={toLowerCase}>LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={toggleCase}>ToggleCase</button>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={capitalizeWords}>Capitalize Words</button>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={capitalizeSentences}>Capitalize Sentences</button>


                <hr className='my-1' />
                <span>Spaces:</span>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={removeXspace}>Remove Extra space</button>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={minify}>Minify</button>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={addSpaceAfterPunctuation}>Add Space After Punctuation</button>
                <hr className='my-1' />
                <span>Text Reversal:</span>s
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={reverse}>Reverse</button>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={reverseWords}>Reverse Words</button>
                <hr className='my-1' />
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={copy}>Copy</button>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={undo}>Undo</button>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={redo}>Redo</button>
                <button disabled={text.length===0} className="btn btn-primary m-1" onClick={ClearText}>Clear</button>
            </div>
            <div className="container my-1">
                <p className='my-1'>Text Analysis:</p>
                <p className='my-1'>Words: {text === '' ? 0 : text.split(/\s+/).length}</p>
                <p className='my-1'>Characters: {text.length}</p>
                <p className='my-1'>Reading Time: {text === '' ? 0 : Math.floor(text.split(' ').length / 238)}
                    min {Math.floor((text.split(' ').length % 238) / 4)}sec</p>
                <p className='my-1'>Speaking Time: {text === '' ? 0 : Math.floor(text.split(' ').length / 160)}
                    min {Math.floor((text.split(' ').length % 160) / 2.5)}sec</p>
            </div>
        </>
    )
}