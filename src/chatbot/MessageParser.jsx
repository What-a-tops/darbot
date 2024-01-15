class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello") || lowercase.includes("hi")) {
      this.actionProvider.greet();
    } else if (lowercase.includes("React") || lowercase.includes("react")) {
      this.actionProvider.handlePersonaInfo();
    } else if (lowercase.includes("Git") || lowercase.includes("git")) {
      this.actionProvider.handleBlogsInfo();
    } else if (lowercase.includes("Javascript") || lowercase.includes("javascript") || 
                lowercase.includes("js") || lowercase.includes("jsx")) {
      this.actionProvider.handleYamInfo();
    } else {
      this.actionProvider.errorMessage();
    }
  }
}

export default MessageParser;
