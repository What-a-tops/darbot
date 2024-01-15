import datas from './datas.json'
const botName = 'DarBot';
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage(`Hi! I'm ${botName}. What can I do with you today?`, {
      widget: "options",
      payload: {
                contents: datas[0].contents
            } 
    });
    this.addMessageToState(message);
  };

  errorMessage = () => {
    const message = this.createChatBotMessage("Sorry, I'm not quite sure what you mean.");
    this.addMessageToState(message);
  };

  handleReactInfo = () => {
    const message = this.createChatBotMessage(
      "Certainly!, Please select below.",
      {
        widget: "ReactInfo",
        payload: { 
          desc: datas[0].contents[0].desc,
          link: datas[0].contents[0].link
        }
      }
    );

    this.addMessageToState(message);
  };

  handleHowTo = () => {
    const message = this.createChatBotMessage(
      "Sure!, Please see the descriptions below.",
      {
        widget: "HowTo",
        payload: { 
          desc: datas[0].contents[1].desc,
          link: datas[0].contents[1].link
        }
      }
    );

    this.addMessageToState(message);
  };

  //GIT
  handleGitInfo = () => {
    const message = this.createChatBotMessage(
      "Certainly!, Please select below.",
      {
        widget: "GitInfo",
        payload: { 
          contents: datas[1].contents,
        }
      }
    );

    this.addMessageToState(message);
  };

  handleGitAbout = () => {
    const message = this.createChatBotMessage(
      "Okay!, Here we go.",
      {
        widget: "AboutGit",
        payload: { 
          desc: datas[1].contents[0].description,
          developments: datas[1].contents[0].developments,
          link: datas[1].contents[0].link
        }
      }
    );

    this.addMessageToState(message);
  };

  handleGitFlow = () => {
    const message = this.createChatBotMessage(
      "Okay!, Here we go.",
      {
        widget: "GitFlow",
        payload: { 
          desc: datas[1].contents[1].desc,
          link: datas[1].contents[1].link
        }
      }
    );

    this.addMessageToState(message);
  };

  handleGitLocal = () => {
    const message = this.createChatBotMessage(
      "Alright!, Here we go.",
      {
        widget: "LocalGit",
        payload: { 
          type: 'local',
          name: datas[1].contents[0].developments[0].name,
          desc: datas[1].contents[0].developments[0].desc,
          link: datas[1].contents[0].developments[0].link,
        }
      }
    );

    this.addMessageToState(message);
  };

  handleGitStg = () => {
    const message = this.createChatBotMessage(
      "Alright!, Here we go.",
      {
        widget: "StgGit",
        payload: { 
          type: 'stg',
          name: datas[1].contents[0].developments[1].name,
          desc: datas[1].contents[0].developments[1].desc,
          link: datas[1].contents[0].developments[1].link,
        }
      }
    );

    this.addMessageToState(message);
  };

  handleGitProd = () => {
    const message = this.createChatBotMessage(
      "Alright!, Here we go.",
      {
        widget: "ProdGit",
        payload: { 
          type: 'prod',
          name: datas[1].contents[0].developments[2].name,
          desc: datas[1].contents[0].developments[2].desc,
          link: datas[1].contents[0].developments[2].link, 
        }
      }
    );

    this.addMessageToState(message);
  };
  //   const message = this.createChatBotMessage(
  //     "Alright!, Here we go.",
  //     {
  //       widget: "GuideBlogs",
  //     }
  //   );

  //   this.addMessageToState(message);
  // };

  //JS

  handleJsInfo = () => {
    const message = this.createChatBotMessage(
      "Sure!, You may choose below.",
      {
        widget: "JsInfo",
        payload: { 
          contents: datas[2].contents,
        }
      }
    );

    this.addMessageToState(message);
  };

  handleAboutJs = () => {
    const message = this.createChatBotMessage(
      "Sure!, Here we go.",
      {
        widget: "AboutJS",
        payload: { 
          contents: datas[2].contents[0],
        }
      }
    );

    this.addMessageToState(message);
  };

  handleJsFramework = () => {
    const message = this.createChatBotMessage(
      "Sure!, Here we go.",
      {
        widget: "JsFramework",
        payload: { 
          contents: datas[2].contents[1],
        }
      }
    );

    this.addMessageToState(message);
  };

  handleJQuery = () => {
    const message = this.createChatBotMessage(
      "Alright!, Here we go.",
      {
        widget: "JQuery",
        payload: { 
          contents: datas[2].contents[2],
        }
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
