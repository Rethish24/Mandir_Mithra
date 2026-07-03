// Global temple data
let templeData = {};

// Load temple data from JSON file
fetch('temples.json')
  .then(res => {
    if (!res.ok) throw new Error('Failed to load temples.json');
    return res.json();
  })
  .then(data => {
    templeData = data;
    addBotMessage("Namaste! 🙏 I'm <strong>Mandir__Mithra</strong>, your <strong>AI-powered</strong> guide to sacred temples of <strong>Telangana & Andhra Pradesh</strong>.<br>ఏం కావాలి? అడగండి — నేను మీకు సమాధానం చెబుతాను! 🪔");
  })
  .catch(err => {
    console.error("Failed to load temple data", err);
    addBotMessage("⚠️ Could not load temple data. Please check if <code>temples.json</code> is in the same folder.");
  });

// Send message function
function sendMessage() {
  const input = document.getElementById("user-message");
  const message = input.value.trim().toLowerCase();
  
  if (message === "") return;

  addUserMessage(input.value); // Show original case

  setTimeout(() => {
    const response = getBotResponse(message);
    addBotMessage(response);
  }, 600);

  input.value = "";
}

// Get response based on user message
function getBotResponse(message) {
  const isTelugu = /[\u0C00-\u0C7F]+/.test(message);
  const lang = isTelugu ? "te" : "en";

  // Greetings
  if (/(hi|hello|namaste)/i.test(message)) {
    return lang === "te"
      ? "నమస్తే! 🙏 <strong>నేను మందిర్__మిత్ర</strong>, తెలంగాణ & ఆంధ్రప్రదేశ్ దేవాలయాల మార్గదర్శి. దేవాలయాల గురించి అడగండి!"
      : "Namaste! 🙏 I'm <strong>Mandir__Mithra</strong>, your <strong>AI-powered</strong> guide to temples of Telangana & Andhra Pradesh.";
  }

  // Help
  if (message.includes("help")) {
    return lang === "te"
      ? "ఇలా అడగండి:<br>• రామప్ప దేవాలయం గురించి చెప్పండి<br>• కనకదుర్గ చూపించండి<br>• శ్రీశైలం ప్రత్యేకత ఏమిటి?<br><br><button onclick='speak(\"సహాయం కోసం నేను మీకు సూచనలు చెప్పాను\")' style='background:#8B4513; color:white; border:none; padding:6px 10px; border-radius:4px; cursor:pointer;'>🔊 వినండి</button>"
      : "Try asking:<br>• Tell me about Ramappa Temple<br>• Show me Kanaka Durga<br>• What is special about Srisailam?<br><br><button onclick='speak(\"Here are some sample questions you can ask.\")' style='background:#8B4513; color:white; border:none; padding:6px 10px; border-radius:4px; cursor:pointer;'>🔊 Listen</button>";
  }

  // Search temples
  for (const key in templeData) {
    const temple = templeData[key];
    const keywords = temple.keywords || [];
    if (keywords.some(kw => message.includes(kw.toLowerCase()))) {
      const name = lang === "te" ? temple.name_te : temple.name_en;
      const location = lang === "te" ? temple.location_te : temple.location_en;
      const dynasty = lang === "te" ? temple.dynasty_te : temple.dynasty_en;
      const facts = lang === "te" ? temple.facts_te : temple.facts_en;
      const architecture = lang === "te" ? temple.architecture_te : temple.architecture_en;

      return `
        <strong>🪔 ${name}</strong><br>
        <em>${location}</em><br><br>
        <strong>📅 నిర్మాణం / Built:</strong> ${temple.built}<br>
        <strong>🏛️ వంశం / Dynasty:</strong> ${dynasty}<br><br>
// Global temple data
let templeData = {};

// Load temple data from JSON file
fetch('temples.json')
  .then(res => {
    if (!res.ok) throw new Error('Failed to load temples.json');
    return res.json();
  })
  .then(data => {
    templeData = data;
    addBotMessage("Namaste! 🙏 I'm <strong>Mandir__Mithra</strong>, your <strong>AI-powered</strong> guide to sacred temples of <strong>Telangana & Andhra Pradesh</strong>.<br>ఏం కావాలి? అడగండి — నేను మీకు సమాధానం చెబుతాను! 🪔");
  })
  .catch(err => {
    console.error("Failed to load temple data", err);
    addBotMessage("⚠️ Could not load temple data. Please check if <code>temples.json</code> is in the same folder.");
  });

// Send message function
function sendMessage() {
  const input = document.getElementById("user-message");
  const message = input.value.trim().toLowerCase();
  
  if (message === "") return;

  addUserMessage(input.value); // Show original case

  setTimeout(() => {
    const response = getBotResponse(message);
    addBotMessage(response);
  }, 600);

  input.value = "";
}

// Get response based on user message
function getBotResponse(message) {
  const isTelugu = /[\u0C00-\u0C7F]+/.test(message);
  const lang = isTelugu ? "te" : "en";

  // Greetings
  if (/(hi|hello|namaste)/i.test(message)) {
    return lang === "te"
      ? "నమస్తే! 🙏 <strong>నేను మందిర్__మిత్ర</strong>, తెలంగాణ & ఆంధ్రప్రదేశ్ దేవాలయాల మార్గదర్శి. దేవాలయాల గురించి అడగండి!"
      : "Namaste! 🙏 I'm <strong>Mandir__Mithra</strong>, your <strong>AI-powered</strong> guide to temples of Telangana & Andhra Pradesh.";
  }

  // Help
  if (message.includes("help")) {
    return lang === "te"
      ? "ఇలా అడగండి:<br>• రామప్ప దేవాలయం గురించి చెప్పండి<br>• కనకదుర్గ చూపించండి<br>• శ్రీశైలం ప్రత్యేకత ఏమిటి?<br><br><button onclick='speak(\"సహాయం కోసం నేను మీకు సూచనలు చెప్పాను\")' style='background:#8B4513; color:white; border:none; padding:6px 10px; border-radius:4px; cursor:pointer;'>🔊 వినండి</button>"
      : "Try asking:<br>• Tell me about Ramappa Temple<br>• Show me Kanaka Durga<br>• What is special about Srisailam?<br><br><button onclick='speak(\"Here are some sample questions you can ask.\")' style='background:#8B4513; color:white; border:none; padding:6px 10px; border-radius:4px; cursor:pointer;'>🔊 Listen</button>";
  }

  // Search temples
  for (const key in templeData) {
    const temple = templeData[key];
    const keywords = temple.keywords || [];
    if (keywords.some(kw => message.includes(kw.toLowerCase()))) {
      const name = lang === "te" ? temple.name_te : temple.name_en;
      const location = lang === "te" ? temple.location_te : temple.location_en;
      const dynasty = lang === "te" ? temple.dynasty_te : temple.dynasty_en;
      const facts = lang === "te" ? temple.facts_te : temple.facts_en;
      const architecture = lang === "te" ? temple.architecture_te : temple.architecture_en;

      return `
        <strong>🪔 ${name}</strong><br>
        <em>${location}</em><br><br>
        <strong>📅 నిర్మాణం / Built:</strong> ${temple.built}<br>
        <strong>🏛️ వంశం / Dynasty:</strong> ${dynasty}<br><br>
        <strong>📖 చరిత్ర / History:</strong> ${facts}<br><br>
        <strong>🎨 వాస్తుశిల్పం / Architecture:</strong> ${architecture}<br><br>
        <img src="${temple.image}" alt="${name}" 
             style="max-width: 100%; border-radius: 8px; border: 1px solid #ddd;">
        <br><small>💡 Image: Public domain / tourism source</small>
        <br><br>
        <button onclick="speak('${name}. ${facts}')" style="background:#8B4513; color:white; border:none; padding:6px 10px; border-radius:4px; cursor:pointer;">
          🔊 Listen (AI Voice)
        </button>
      `;
    }
  }

  // 🔮 AI Fallback: Use Wikipedia for unknown temples
  const query = message.replace(/tell me about|show me|what is|temple/gi, "").trim();
  const wikiTitle = query.split(" ")[0]; // Use first word as temple name
  const wikiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${wikiTitle}`;

  // Return a placeholder while fetching
  const placeholder = lang === "te"
    ? `🔍 వెతుకుతున్నాను... దయచేసి ఓ క్షణం వేచి ఉండండి...`
    : `🔍 Searching AI knowledge base for "${wikiTitle}"... Please wait a moment...`;

  // Fetch from Wikipedia (AI-powered summary)
  fetch(wikiUrl)
    .then(res => res.json())
    .then(data => {
      const title = data.title;
      const summary = data.extract;
      const imgUrl = data.thumbnail?.source || "https://upload.wikimedia.org/wikipedia/commons/6/61/Indian_Pagoda.png";

      const aiResponse = `
        <strong>🤖 AI Guide:</strong> Here's what I found about <strong>${title}</strong>:<br><br>
        ${summary.substring(0, 300)}...<br><br>
        <img src="${imgUrl}" alt="${title}" style="max-width:100%; border-radius:8px;">
        <br><small>📄 Source: Wikipedia (AI-powered summary)</small>
        <br><br>
        <button onclick="speak('${summary}')" style="background:#8B4513; color:white; border:none; padding:6px 10px; border-radius:4px; cursor:pointer;">
          🔊 Listen (AI Voice)
        </button>
      `;
      // Update the last bot message with real AI data
      const chatbox = document.getElementById("chatbox");
      const lastMsg = chatbox.lastElementChild;
      if (lastMsg && lastMsg.classList.contains("bot")) {
        lastMsg.innerHTML = aiResponse;
        scrollToBottom();
      }
    })
    .catch(() => {
      const notFound = lang === "te"
        ? `నేను ఆ దేవాలయం గురించి ఇంకా తెలుసుకోలేదు. కానీ మీరు ఇవి అడగవచ్చు: <em>రామప్ప, శ్రీశైలం, సింహాచలం</em>`
        : `I don't have details about that temple yet. But you can ask about: <em>Ramappa, Srisailam, Simhachalam</em>`;
      
      const chatbox = document.getElementById("chatbox");
      const lastMsg = chatbox.lastElementChild;
      if (lastMsg && lastMsg.classList.contains("bot")) {
        lastMsg.innerHTML = notFound;
        scrollToBottom();
      }
    });

  return placeholder;
}

// Add user message
function addUserMessage(text) {
  const chatbox = document.getElementById("chatbox");
  const msg = document.createElement("p");
  msg.textContent = text;
        <strong>📖 చరిత్ర / History:</strong> ${facts}<br><br>
        <strong>🎨 వాస్తుశిల్పం / Architecture:</strong> ${architecture}<br><br>
        <img src="${temple.image}" alt="${name}" 
             style="max-width: 100%; border-radius: 8px; border: 1px solid #ddd;">
        <br><small>💡 Image: Public domain / tourism source</small>
        <br><br>
        <button onclick="speak('${name}. ${facts}')" style="background:#8B4513; color:white; border:none; padding:6px 10px; border-radius:4px; cursor:pointer;">
          🔊 Listen (AI Voice)
        </button>
      `;
    }
  }

  // 🔮 AI Fallback: Use Wikipedia for unknown temples
  const query = message.replace(/tell me about|show me|what is|temple/gi, "").trim();
  const wikiTitle = query.split(" ")[0]; // Use first word as temple name
  const wikiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${wikiTitle}`;

  // Return a placeholder while fetching
  const placeholder = lang === "te"
    ? `🔍 వెతుకుతున్నాను... దయచేసి ఓ క్షణం వేచి ఉండండి...`
    : `🔍 Searching AI knowledge base for "${wikiTitle}"... Please wait a moment...`;

  // Fetch from Wikipedia (AI-powered summary)
  fetch(wikiUrl)
    .then(res => res.json())
    .then(data => {
      const title = data.title;
      const summary = data.extract;
      const imgUrl = data.thumbnail?.source || "https://upload.wikimedia.org/wikipedia/commons/6/61/Indian_Pagoda.png";

      const aiResponse = `
        <strong>🤖 AI Guide:</strong> Here's what I found about <strong>${title}</strong>:<br><br>
        ${summary.substring(0, 300)}...<br><br>
        <img src="${imgUrl}" alt="${title}" style="max-width:100%; border-radius:8px;">
        <br><small>📄 Source: Wikipedia (AI-powered summary)</small>
        <br><br>
        <button onclick="speak('${summary}')" style="background:#8B4513; color:white; border:none; padding:6px 10px; border-radius:4px; cursor:pointer;">
          🔊 Listen (AI Voice)
        </button>
      `;
      // Update the last bot message with real AI data
      const chatbox = document.getElementById("chatbox");
      const lastMsg = chatbox.lastElementChild;
      if (lastMsg && lastMsg.classList.contains("bot")) {
        lastMsg.innerHTML = aiResponse;
        scrollToBottom();
      }
    })
    .catch(() => {
      const notFound = lang === "te"
        ? `నేను ఆ దేవాలయం గురించి ఇంకా తెలుసుకోలేదు. కానీ మీరు ఇవి అడగవచ్చు: <em>రామప్ప, శ్రీశైలం, సింహాచలం</em>`
        : `I don't have details about that temple yet. But you can ask about: <em>Ramappa, Srisailam, Simhachalam</em>`;
      
      const chatbox = document.getElementById("chatbox");
      const lastMsg = chatbox.lastElementChild;
      if (lastMsg && lastMsg.classList.contains("bot")) {
        lastMsg.innerHTML = notFound;
        scrollToBottom();
      }
    });

  return placeholder;
}

// Add user message
function addUserMessage(text) {
  const chatbox = document.getElementById("chatbox");
  const msg = document.createElement("p");
  msg.textContent = text;
  msg.classList.add("user");
  chatbox.appendChild(msg);
  scrollToBottom();
}

// Add bot message
function addBotMessage(html) {
  const chatbox = document.getElementById("chatbox");
  const msg = document.createElement("p");
  msg.innerHTML = html;
  msg.classList.add("bot");
  chatbox.appendChild(msg);
  scrollToBottom();
}

// Auto-scroll
function scrollToBottom() {
  const chatbox = document.getElementById("chatbox");
  chatbox.scrollTop = chatbox.scrollHeight;
}

// 🔊 Text-to-Speech Function (AI Voice)
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  // Detect Telugu for voice
  utterance.lang = /[\u0C00-\u0C7F]/.test(text) ? "te-IN" : "en-IN";
  utterance.rate = 0.9;  // Natural speed
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

// Enter key to send
document.getElementById("user-message").addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});
