function generatePrompt() {
    // Get form values
    const scene = document.getElementById("scene").value;
    const character = document.getElementById("character").value;
    const movement = document.getElementById("movement").value;
    const camera = document.getElementById("camera").value;
    const sound = document.getElementById("sound").value;
    const color = document.getElementById("color").value;
    const effects = document.getElementById("effects").value;

    // Build the prompt dynamically
    let prompt = `Scene Context: ${scene}\n`;
    prompt += `Character Description: ${character}\n`;
    prompt += `Narrative Movement: ${movement}\n`;
    prompt += `Camera Work: ${camera}\n`;
    prompt += `Sound & Music: ${sound}\n`;
    prompt += `Color Grading and Tone: ${color}\n`;
    
    if (effects) {
        prompt += `Special Effects: ${effects}\n`;
    }

    // Display the generated prompt
    document.getElementById("output").textContent = prompt;
}

function copyToClipboard() {
    const output = document.getElementById("output").textContent;
    
    // Create a temporary text area element to hold the prompt
    const textArea = document.createElement("textarea");
    textArea.value = output;
    document.body.appendChild(textArea);
    
    // Select and copy the text
    textArea.select();
    document.execCommand("copy");
    
    // Remove the temporary text area
    document.body.removeChild(textArea);
    
    // Notify the user
    alert("Prompt copied to clipboard!");
}
