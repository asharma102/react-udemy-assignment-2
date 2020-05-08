import React, { useState } from "react";
import Validation from "./Validation/Validation";
import './App.css';
import ValidationComponent from "./Validation/Validation";
import CharComponent from "./CharComponent/CharComponent";

const app = (props) => {

  const [textInputValue, setTextInputValue] = useState({
    textBoxOutput: {
      InputValue: null,
      charCount: null
    }
  });

  const textChangeHandler = (event) => {
    const textValue = { ...textInputValue }
    textValue.textBoxOutput.InputValue = event.target.value;
    textValue.textBoxOutput.charCount = textValue.textBoxOutput.InputValue.length
    setTextInputValue({ textBoxOutput: textValue.textBoxOutput })
    //console.log(textInputValue);
  }

  const deleteChar = (charIndex) => {
    const textValue = { ...textInputValue };
    let str = textValue.textBoxOutput.InputValue.split('');
    str.splice(charIndex, 1);
    textValue.textBoxOutput.InputValue = str.join('');
    setTextInputValue({ textBoxOutput: textValue.textBoxOutput })
    console.log(textValue.textBoxOutput.InputValue);
  }


  let displayCharacter = null;
  let txtString = textInputValue.textBoxOutput.InputValue;

  if (textInputValue.textBoxOutput.InputValue !== null) {

    displayCharacter = (
      <div>
        {
          txtString.split('').map((char, index) => {
            return <CharComponent
              charValue={char}
              click={() => deleteChar(index)}
              key={index} />

          })
        }
      </div>

    )
  }





  return (
    <div className="App">
      <ol>
        <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
        <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
        <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
        <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
        <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
        <li>When you click a CharComponent, it should be removed from the entered text.</li>
      </ol>
      <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      <fieldset>
        <legend>Assignment - Done</legend>
        <input type='text' onChange={(event) => textChangeHandler(event)} textLength='5' value={textInputValue.textBoxOutput.InputValue} />
        <p>Text Box value : {textInputValue.textBoxOutput.InputValue}</p>
        <ValidationComponent minLength='5' textLength={textInputValue.textBoxOutput.charCount} />

        <div>{displayCharacter} </div>
      </fieldset>
    </div>
  );
}

export default app;
