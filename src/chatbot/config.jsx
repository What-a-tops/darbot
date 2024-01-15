import { createChatBotMessage } from "react-chatbot-kit";

import BotAvatar from "../components/BotAvatar/BotAvatar";

import Widgets from "../components/Widgets";
import ReactInfo from "../components/Widgets/React";
import AboutReact from "../components/Widgets/React/About"

import Git from "../components/Widgets/Git";
import AboutGit from "../components/Widgets/Git/About"
import Flow from "../components/Widgets/Git/Flow"
import Development from "../components/Widgets/Git/About/Development"

import JsInfo from "../components/Widgets/Js";
import Contents from "../components/Widgets/Js/Contents";

const botName = 'DarBot';

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Hello! I'm ${botName}. What can I do for you today?`, {
      widget: "options",
    }),
  ],
  customComponents: {
    // Replaces the default header
    header: () => <div style={{ backgroundColor: '#A100FF', color:'white', padding: "10px"}}>{botName}</div>,
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#A100FF',
    },
    chatButton: {
      backgroundColor: '#A100FF',
    },
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Widgets {...props} />,
    },

    //React
    {
      widgetName: "ReactInfo",
      widgetFunc: (props) => <ReactInfo {...props} />,
    },  

    {
      widgetName: "HowTo",
      widgetFunc: (props) => <AboutReact {...props} />,
    },
    

    //Git
    {
      widgetName: "GitInfo",
      widgetFunc: (props) => <Git {...props} />,
    },

    {
      widgetName: "AboutGit",
      widgetFunc: (props) => <AboutGit {...props} />,
    },

    {
      widgetName: "GitFlow",
      widgetFunc: (props) => <Flow {...props} />,
    },


    //In Depth Git

    {
      widgetName: "LocalGit",
      widgetFunc: (props) => <Development {...props} />,
    },

    {
      widgetName: "StgGit",
      widgetFunc: (props) => <Development {...props} />,
    },

    {
      widgetName: "ProdGit",
      widgetFunc: (props) => <Development {...props} />,
    },


    //JS

    {
      widgetName: "JsInfo",
      widgetFunc: (props) => <JsInfo {...props} />,
    },

    {
      widgetName: "AboutJS",
      widgetFunc: (props) => <Contents {...props} />,
    },

    {
      widgetName: "JsFramework",
      widgetFunc: (props) => <Contents {...props} />,
    },

    {
      widgetName: "JQuery",
      widgetFunc: (props) => <Contents {...props} />,
    },
  ],
};

export default config;
