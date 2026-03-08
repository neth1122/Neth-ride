document.addEventListener("DOMContentLoaded", () => {
    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input");
    const chatContainer = document.getElementById("chat-container");
    const chatSubmit = document.getElementById("chat-submit");

    const PHONE = "+353 87 711 2323";

    const appendMessage = (role, content) => {
        // Remove empty state
        if (chatContainer.querySelector(".bi-chat-dots")) {
            chatContainer.innerHTML = "";
        }

        const msgDiv = document.createElement("div");
        msgDiv.className = `message message-${role}`;
        msgDiv.textContent = content;
        chatContainer.appendChild(msgDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    };

    const fakeAIResponse = (issue) => {
        const text = issue.toLowerCase();

        if (text.includes("leak") || text.includes("water")) {
            return `It sounds like you may have a water leak. Leaks can quickly cause property damage if left unchecked.
If possible, turn off your main water supply and avoid using nearby taps.
For proper diagnosis and repair, call ${PHONE}.`;
        }

        if (text.includes("radiator") || text.includes("heating")) {
            return `Cold or uneven radiators are often caused by trapped air or pressure issues.
You can try bleeding the radiator, but if the problem continues, professional attention is advised.
Call ${PHONE} for heating support in Dundrum.`;
        }

        if (text.includes("boiler")) {
            return `Boiler problems can be unsafe and should not be handled without proper training.
If you notice unusual noises, leaks, or loss of heat, avoid tampering with the unit.
Contact our certified plumber immediately at ${PHONE}.`;
        }

        if (text.includes("toilet") || text.includes("blocked")) {
            return `Blocked or overflowing toilets should be handled promptly to prevent further damage.
Avoid repeated flushing and shut off the water valve if possible.
Call ${PHONE} for fast assistance.`;
        }

        return `Thanks for the details. Plumbing issues can escalate quickly if ignored.
For accurate diagnosis and safe repairs, we recommend speaking directly with a professional.
Please call ${PHONE} for immediate help.`;
    };

    chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;

        // User message
        chatInput.value = "";
        appendMessage("user", text);

        // Loading state
        chatSubmit.disabled = true;
        const loadingDiv = document.createElement("div");
        loadingDiv.className = "message message-assistant opacity-50";
        loadingDiv.id = "temp-loading";
        loadingDiv.innerHTML = "Diagnosing the issue...";
        chatContainer.appendChild(loadingDiv);

        setTimeout(() => {
            loadingDiv.remove();
            const reply = fakeAIResponse(text);
            appendMessage("assistant", reply);
            chatSubmit.disabled = false;
        }, 700);
    });
});
