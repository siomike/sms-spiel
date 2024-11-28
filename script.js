function generateGreeting() {
  const name = document.getElementById("nameInput").value;
  const greeting = document.querySelector('input[name="greeting"]:checked').value;

  const outputTextarea = document.getElementById("outputTextarea");
  outputTextarea.value = ""; // Clear the textarea

  if (name) {
    let message = "";

    if (greeting === "for-pick-up") {
      message = `Good day, ${name}!\n` + `\n` + 
                `Thank you for choosing OWNDAYS!\n` + `\n` + 
                `We're glad to inform you that your eyeglasses are ready for pick up here at OWNDAYS Robinsons Antipolo.\n` + `\n` + 
                `Please confirm when you have received this message.\n` + `\n` + 
                `Thank you.\n` + `\n` + 
                `Store hours:\n` +
                `10:00 AM - 10:00 PM\n` +
                `Mon - Sun`;
    } else if (greeting === "frame-to-follow") {
      message = `Good day, ${name}!\n` + `\n` + 
                `Thank you for choosing OWNDAYS!\n` + `\n` + 
                `We're glad to inform you that your lenses have been delivered to our store here at OWNDAYS Robinsons Antipolo.\n` +  `\n` + 
                `Kindly bring your frame of choice and receipt for assembly.\n` + `\n` + 
                `Please confirm when you have received this message.\n` + `\n` + 
                `Thank you.\n` + `\n` + 
                `Store Hours:\n` +
                `10:00 AM - 10:00 PM\n` +
                `Mon - Sun`;
    }else if (greeting === "unclaimed") {
      message = `Good day, ${name}!\n` + `\n` + 
                `We hope this message finds you well. We appreciate your visit to OWNDAYS Robinsons Antipolo. However, it has come to our attention that there are unclaimed items purchased under your name.\n` + `\n` + 
                `To ensure smooth and efficient process, we kindly request you to collect your purhcased items at your earliest convenience. Our team is ready to provide further assistance for any concerns you may have in collecting your said items. \n` +  `\n` + 
                `Please be reminded on our storage period below: \n` + `\n` + 
                `1) Purchased items will be held by respective OWNDAYS branch for a maxium of 60 days from DATE OF PICK-UP/PURCHASE;\n` + 
								`2) After 60 days, purhcased items will be sent to our Head Offie c/o Operations for safekeeping for another 30 days.\n ` + `\n` + 
                `If you have already collected your items, please disregard this message. Thank you. \n` + `\n` + 
                `Store Hours:\n` +
                `10:00 AM - 10:00 PM\n` +
                `Mon - Sun`;
    }

    outputTextarea.value = message;
  } else {
    outputTextarea.value = "Please enter a name.";
  }
}

function copyOutput() {
  const textarea = document.getElementById("outputTextarea");
  textarea.select();
  navigator.clipboard.writeText(textarea.value);
}

function clearTextarea() {
  document.getElementById("outputTextarea").value = "";
}