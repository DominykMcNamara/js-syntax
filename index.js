const messages = require("./data.json");

const randomIndexGenerator = () => {
  return Math.floor(Math.random() * messages.length);
};

const generateRandomMessage = (data = messages) => {
  let generatedMessage = [];
  let randomIndex = randomIndexGenerator();
  if (data.length === 1) {
    return generatedMessage.toString();
  }
  let retrievedMessage = data[randomIndex];
  Object.values(retrievedMessage).forEach((values) => {
    
  });
};
generateRandomMessage(messages);
