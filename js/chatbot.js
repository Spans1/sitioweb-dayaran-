
function toggleChat() {
    const chat = document.getElementById("chatbox");
    chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

function handleKey(event) {
    if (event.key === "Enter") sendMessage();
}

function sendMessage() {
    const input = document.getElementById("userInput");
    const messages = document.getElementById("messages");
    const text = input.value.trim();
    if (!text) return;
    messages.innerHTML += `<p><strong>Tú:</strong> ${text}</p>`;
    setTimeout(() => {
    messages.innerHTML += `<p><strong>SYRDIA:</strong> Estoy procesando tu consulta: "${text}"</p>`;
    messages.scrollTop = messages.scrollHeight;
    }, 800);
    input.value = "";
}