const messages = require("./data.json");

const generateRandomMessage = (data = messages) => {
  // Generate a random index
  let randomIndex = Math.floor(Math.random() * data.length)
  let generatedMessage = [];
  // If the data only has 1 element we instantly return that element
  if (data.length === 1) {
    generatedMessage = data.toString();
  }
  // Determine a random index
  let retrievedMessage = data[randomIndex];
  // Push elements of data into the generatedMessage array
  Object.values(retrievedMessage).forEach((values) => {
    generatedMessage.push(values);
  });
  // Log & return
  console.log(generatedMessage.join(""));
  return generatedMessage
};

module.exports = { generateRandomMessage }
