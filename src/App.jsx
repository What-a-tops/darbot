import { useState } from 'react';
import {Chatbot, validateInput} from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
import Bot from "./components/image/bot.svg";

import './App.css';
function App() {
  const [showBot, toggleBot] = useState(false);
  let img = '';
  if (showBot) {
    img = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
  } else {
    img = <img src={Bot} alt='' />
  }

  // Define your custom validation function
// const customValidator = (inputText) => {
//   // Perform your validation logic here
//   // For example, let's check if the input contains a specific word
//   if (inputText.toLowerCase().includes('hello')) {
//     return {
//       isValid: true, // Input is valid
//     };
//   } else {
//     return {
//       isValid: false, // Input is invalid
//       errorMessage: "Please enter a message containing 'hello'.",
//     };
//   }
// };

  return (
    <div className="App">
      {showBot && (
        
            <Chatbot
              actionProvider={ActionProvider}
              messageParser={MessageParser}
              config={config}
              headerText='Chatbot'
              placeholderText='Chat here...'
              validator={validateInput}
              runInitialMessagesWithHistory
            />
        )}
  
      <button className='open-button' onClick={() => toggleBot((prev) => !prev)}>
        {img}
      </button>
    </div>
  );
}

export default App;
