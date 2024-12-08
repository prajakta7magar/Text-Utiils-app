import React, { useState } from 'react';

export default function TextForm(props) {
  const [Text, setText] = useState('');
  const [isFirstCheckDone, setIsFirstCheckDone] = useState(false);
  const [btnText, setBtnText] = useState('Convert to Uppercase');

  const handleOnClick = () => {
    if (!isFirstCheckDone && /[A-Z]/.test(Text)) {
      alert('Your text already contains uppercase letters');
      setIsFirstCheckDone(true);
      setBtnText('Convert to Lowercase');
    } else {
      if (Text === Text.toUpperCase()) {
        setText(Text.toLowerCase());
        setBtnText('Convert to Uppercase');
        props.showalert("Converted to Lowercase", "success");
      } else {
        setText(Text.toUpperCase());
        setBtnText('Convert to Lowercase');
        props.showalert("Converted to Uppercase", "success");
      }
    }
  };

  const handleOnClear = () => {
    setText('');
    props.showalert("Text is cleared", "success");
  };

  const handleOnCopy = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text is copied", "success");
  };

  const handleOnReplace = () => {
    setText('No text to replace');
    props.showalert("Text is replaced", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Mode and Theme Styling
  const darkModeStyles = {
    backgroundColor: '#333',
    color: 'white',
  };

  const lightModeStyles = {
    backgroundColor: 'white',
    color: 'black',
  };

  const greenThemeStyles = {
    backgroundColor: 'green',
    color: 'white',
  };

  const lightGreenThemeStyles = {
    backgroundColor: 'white',
    color: 'black',
  };

  const currentModeStyles = props.mode === 'dark' ? darkModeStyles : lightModeStyles;
  const currentThemeStyles = props.theme === 'green' ? greenThemeStyles : lightGreenThemeStyles;

  const combinedStyles = {
    ...currentModeStyles,
    ...currentThemeStyles,
    padding: '10px',
    border: '1px solid',
  };

  const characterCount = (text) => text.replace(/\s/g, '').length;

  return (
    <>
      <div className="container my-4" style={{ color: currentModeStyles.color }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            value={Text}
            onChange={handleOnChange}
            rows="8"
            style={combinedStyles}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleOnClick}>
          {btnText}
        </button>
        <button className="btn btn-primary mx-3" onClick={handleOnClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleOnCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleOnReplace}>
          Replace
        </button>
      </div>

      {/* Text Summary Section */}
      <div className="container my-3" style={currentModeStyles}>
        <h2>Your Text Summary</h2>
        <p>{Text.split(/\s+/).filter((word) => word.length !== 0).length} words and {characterCount(Text)} characters</p>
        <p>{0.008 * Text.split(/\s+/).filter((word) => word.length !== 0).length} minutes read</p>
      </div>

      {/* Preview Section */}
      <div className="container my-3" style={currentModeStyles}>
        <h2>Preview</h2>
        <p>{Text.length > 0 ? Text : 'Nothing to preview'}</p>
      </div>
    </>
  );
}
