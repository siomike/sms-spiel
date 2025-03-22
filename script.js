function generateGreeting() {
  const name = document.getElementById("nameInput").value;
  const greeting = document.querySelector('input[name="greeting"]:checked').value;

  const outputTextarea = document.getElementById("outputTextarea");
  outputTextarea.value = ""; // Clear the textarea
  
  const intro 				= `Good day, ${name}! Thank you for choosing OWNDAYS!`
  
  const pickUpMessage 		= `We're glad to inform you that your eyeglasses are now ready for pick up here at OWNDAYS Robinsons Antipolo.`
  
  const frameToFollowMessage= `We're glad to inform you that your lenses have been delivered to our store here at OWNDAYS Robinsons Antipolo.` 
  
  const frameToFollowReqs 	= `Kindly bring your frame and warranty card for assembly.`
  
  const confirmReceipt 		= `Please confirm when you have received this message.`
  
  const storeHours 			= `Store hours:\n10:00 AM - 10:00 PM\nMon - Sun`
  
  const storeHoursFrameToFollow = `Store hours:\n10:00 AM - 9:00 PM\nMon - Sun`
  
  const lineBrk  			= `\n`
  
  const unclaimedMsg 		= `We hope this message finds you well. We appreciate your visit to OWNDAYS Robinsons Antipolo. However, it has come to our attention that there are unclaimed items purchased under your name: `
  
  const ensureMsg			= `To ensure smooth and efficient process, we kindly request you to collect your purhcased items at your earliest convenience. Our team is ready to provide further assistance for any concerns you may have in collecting your said items.` 
  
  const unclaimedReminders  = `Please be reminded on our storage period below: \n\n1) Purchased items will be held by respective OWNDAYS branch for a maxium of 60 days from DATE OF PICK-UP/PURCHASE;\n\n2) After 60 days, purhcased items will be sent to our Head Offie c/o Operations for safekeeping for another 30 days.\n\n`
  
  const unclaimedDisregardMsg 		= `If you have already collected your items, please disregard this message. Thank you.` 
  
  const boilerPlateItems = `<qty, item/s>` 
  
  const plannerDelayMsg = ``
  
  if (name) {
    let message = "";

    if (greeting === "for-pick-up") {
      message = intro 					+ lineBrk + lineBrk + 
				pickUpMessage 			+ lineBrk + lineBrk + 
				confirmReceipt 			+ lineBrk + lineBrk + 
				storeHours
	  
    } else if (greeting === "frame-to-follow") {
      message = intro 					+ lineBrk + lineBrk + 
				frameToFollowMessage 	+ lineBrk + lineBrk + 
				frameToFollowReqs 		+ lineBrk + lineBrk + 
				confirmReceipt 			+ lineBrk + lineBrk + 
				storeHoursFrameToFollow
	  
	  
    }else if (greeting === "unclaimed") {
      message = intro 					+ lineBrk + lineBrk + 
				unclaimedMsg 			+ lineBrk + lineBrk + 
				boilerPlateItems 		+ lineBrk + lineBrk + 
				unclaimedReminders + 
				unclaimedDisregardMsg 	+ lineBrk + lineBrk + 
				storeHours
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