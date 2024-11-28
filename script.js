function generateGreeting() {
    const name = document.getElementById("nameInput").value;
    const greeting = document.querySelector('input[name="greeting"]:checked').value;
  
    const outputTextarea = document.getElementById("outputTextarea");
    outputTextarea.value = ""; // Clear the textarea
  
    if (name) {
      let message = "";
  
      if (greeting === "greeting1") {
        message = `Good day, ${name}!\n` +
                  `Thank you for choosing OWNDAYS!\n` + `\n` + 
                  `We're glad to inform you that your eyeglasses are ready for pick up here at OWNDAYS Robinsons Antipolo.\n` + `\n` + 
                  `Please confirm when you have received this message.\n` + `\n` + 
                  `Thank you.\n` + `\n` + 
                  `Store hours:\n` +
                  `10:00 AM - 10:00 PM\n` +
                  `Mon - Sun`;
                  
      } else if (greeting === "greeting2") {
        message = `Good day, ${name}!\n` +
                  `Thank you for choosing OWNDAYS!\n` + `\n` + 
                  `We're glad to inform you that your lenses have been delivered to our store here at OWNDAYS Robinsons Antipolo.\n` +  `\n` + 
                  `Kindly bring your frame of choice and receipt for assembly.\n` + `\n` + 
                  `Please confirm when you have received this message.\n` + `\n` + 
                  `Thank you.\n` + `\n` + 
                  `Store Hours:\n` +
                  `10:00 AM - 10:00 PM\n` +
                  `Mon - Sun`;
      }
  
      outputTextarea.value = message;
    } else {
      outputTextarea.value = "Please enter a name.";
    }
  }function copyOutput() {
    const textarea = document.getElementById("outputTextarea");
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
  }