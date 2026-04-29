import PublicFooter from './_components/PublicFooter'
import PublicHeader from './_components/PublicHeader'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <PublicHeader />
      {children}
      <PublicFooter />
    
      <script dangerouslySetInnerHTML={{ __html: `const PROJECT_ID = "48cb8dd7-0c81-4727-8256-13acd5e976e7";
const API_ENDPOINT = "https://ai-editor-backend-vsqh.onrender.com/api/chat";

(function () {
  const host = document.createElement("div");
  host.id = "__chat_widget_host__";
  host.style.cssText = "position:fixed;bottom:24px;right:24px;z-index:999999;display:flex;flex-direction:column;align-items:flex-end;";
  document.body.appendChild(host);

  const shadow = host.attachShadow({ mode: "open" });

  const style = document.createElement("style");
  style.textContent = \`
    *{box-sizing:border-box;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;}

    #bubble{
      width:56px;height:56px;border-radius:50%;background:#1a1a1a;border:none;cursor:pointer;
      display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,0.25);
      transition:transform 0.2s,box-shadow 0.2s;flex-shrink:0;
    }
    #bubble:hover{transform:scale(1.08);box-shadow:0 6px 20px rgba(0,0,0,0.32);}
    #bubble svg{width:26px;height:26px;fill:white;}

    #panel{
      width:360px;height:520px;background:#fff;border-radius:16px;
      box-shadow:0 8px 40px rgba(0,0,0,0.18);display:flex;flex-direction:column;overflow:hidden;
      margin-bottom:12px;
      transform:translateY(20px) scale(0.97);opacity:0;pointer-events:none;
      transition:transform 0.28s cubic-bezier(.4,0,.2,1),opacity 0.28s cubic-bezier(.4,0,.2,1);
    }
    #panel.open{transform:translateY(0) scale(1);opacity:1;pointer-events:all;}

    #header{
      background:#1a1a1a;color:#fff;padding:16px 18px;display:flex;align-items:center;
      justify-content:space-between;flex-shrink:0;
    }
    #header-title{font-size:15px;font-weight:600;letter-spacing:0.01em;}
    #close-btn{
      background:none;border:none;color:#fff;cursor:pointer;padding:4px;border-radius:6px;
      display:flex;align-items:center;justify-content:center;opacity:0.8;transition:opacity 0.15s;
    }
    #close-btn:hover{opacity:1;}
    #close-btn svg{width:18px;height:18px;stroke:white;fill:none;}

    #messages{
      flex:1;overflow-y:auto;padding:16px 14px;display:flex;flex-direction:column;gap:10px;
      scroll-behavior:smooth;
    }
    #messages::-webkit-scrollbar{width:5px;}
    #messages::-webkit-scrollbar-track{background:transparent;}
    #messages::-webkit-scrollbar-thumb{background:#ddd;border-radius:99px;}

    .msg{max-width:82%;padding:10px 13px;border-radius:14px;font-size:13.5px;line-height:1.5;word-break:break-word;}
    .msg.user{align-self:flex-end;background:#1a1a1a;color:#fff;border-bottom-right-radius:4px;}
    .msg.assistant{align-self:flex-start;background:#f0f0f0;color:#1a1a1a;border-bottom-left-radius:4px;}

    .msg-confirm{align-self:flex-start;display:flex;flex-direction:column;gap:8px;max-width:82%;}
    .msg-confirm .confirm-text{background:#f0f0f0;color:#1a1a1a;padding:10px 13px;border-radius:14px;border-bottom-left-radius:4px;font-size:13.5px;line-height:1.5;}
    .confirm-buttons{display:flex;gap:8px;}
    .confirm-btn{
      padding:7px 14px;border-radius:8px;border:none;cursor:pointer;font-size:13px;font-weight:500;
      transition:opacity 0.15s,transform 0.1s;
    }
    .confirm-btn:hover{opacity:0.85;transform:translateY(-1px);}
    .confirm-btn.pr{background:#1a1a1a;color:#fff;}
    .confirm-btn.undo{background:#e5e5e5;color:#1a1a1a;}

    .typing{align-self:flex-start;background:#f0f0f0;padding:11px 14px;border-radius:14px;border-bottom-left-radius:4px;display:flex;gap:5px;align-items:center;}
    .typing span{width:7px;height:7px;border-radius:50%;background:#888;display:inline-block;animation:bounce 1.2s infinite ease-in-out;}
    .typing span:nth-child(1){animation-delay:0s;}
    .typing span:nth-child(2){animation-delay:0.18s;}
    .typing span:nth-child(3){animation-delay:0.36s;}
    @keyframes bounce{0%,80%,100%{transform:translateY(0);}40%{transform:translateY(-6px);}}

    #input-row{
      display:flex;gap:8px;padding:12px 14px;border-top:1px solid #ebebeb;flex-shrink:0;background:#fff;
    }
    #user-input{
      flex:1;border:1.5px solid #e0e0e0;border-radius:10px;padding:9px 12px;font-size:13.5px;
      outline:none;resize:none;transition:border-color 0.18s;line-height:1.45;max-height:100px;overflow-y:auto;
      color:#1a1a1a;
    }
    #user-input:focus{border-color:#1a1a1a;}
    #send-btn{
      background:#1a1a1a;color:#fff;border:none;border-radius:10px;padding:9px 15px;cursor:pointer;
      font-size:13.5px;font-weight:500;transition:opacity 0.15s,transform 0.1s;flex-shrink:0;
    }
    #send-btn:hover{opacity:0.85;transform:translateY(-1px);}
    #send-btn:active{transform:translateY(0);}
    #send-btn:disabled{opacity:0.45;cursor:not-allowed;transform:none;}
  \`;
  shadow.appendChild(style);

  const panel = document.createElement("div");
  panel.id = "panel";
  panel.innerHTML = \`
    <div id="header">
      <span id="header-title">Chat with us</span>
      <button id="close-btn" aria-label="Close chat">
        <svg viewBox="0 0 24 24" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
    <div id="messages"></div>
    <div id="input-row">
      <textarea id="user-input" rows="1" placeholder="Type a message…"></textarea>
      <button id="send-btn">Send</button>
    </div>
  \`;

  const bubble = document.createElement("button");
  bubble.id = "bubble";
  bubble.setAttribute("aria-label", "Open chat");
  bubble.innerHTML = \`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
  </svg>\`;

  shadow.appendChild(panel);
  shadow.appendChild(bubble);

  const messagesEl = shadow.getElementById("messages");
  const userInput = shadow.getElementById("user-input");
  const sendBtn = shadow.getElementById("send-btn");
  const closeBtn = shadow.getElementById("close-btn");

  let isOpen = false;
  let isWaiting = false;
  const conversation = [];

  function togglePanel() {
    isOpen = !isOpen;
    panel.classList.toggle("open", isOpen);
    if (isOpen) {
      setTimeout(() => userInput.focus(), 280);
    }
  }

  bubble.addEventListener("click", togglePanel);
  closeBtn.addEventListener("click", togglePanel);

  function formatText(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br>");
  }

  function appendMessage(role, text) {
    const div = document.createElement("div");
    div.classList.add("msg", role);
    div.innerHTML = formatText(text);
    messagesEl.appendChild(div);
    scrollToBottom();
    return div;
  }

  function showTyping() {
    const div = document.createElement("div");
    div.classList.add("typing");
    div.id = "__typing__";
    div.innerHTML = "<span></span><span></span><span></span>";
    messagesEl.appendChild(div);
    scrollToBottom();
    return div;
  }

  function removeTyping() {
    const t = shadow.getElementById("__typing__");
    if (t) t.remove();
  }

  function scrollToBottom() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function showConfirmButtons(pendingChange, replyText) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("msg-confirm");

    const textDiv = document.createElement("div");
    textDiv.classList.add("confirm-text");
    textDiv.innerHTML = formatText(replyText);

    const btnRow = document.createElement("div");
    btnRow.classList.add("confirm-buttons");

    const prBtn = document.createElement("button");
    prBtn.classList.add("confirm-btn", "pr");
    prBtn.textContent = "✅ Create PR";

    const undoBtn = document.createElement("button");
    undoBtn.classList.add("confirm-btn", "undo");
    undoBtn.textContent = "↩️ Undo";

    btnRow.appendChild(prBtn);
    btnRow.appendChild(undoBtn);
    wrapper.appendChild(textDiv);
    wrapper.appendChild(btnRow);
    messagesEl.appendChild(wrapper);
    scrollToBottom();

    prBtn.addEventListener("click", async () => {
      prBtn.disabled = true;
      undoBtn.disabled = true;
      prBtn.textContent = "Sending…";
      try {
        const res = await fetch(API_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ projectId: PROJECT_ID, message: "confirm", confirmChangeId: pendingChange.id })
        });
        const data = await res.json();
        wrapper.remove();
        appendMessage("assistant", data.reply || "Done!");
        conversation.push({ role: "assistant", content: data.reply || "Done!" });
      } catch (e) {
        wrapper.remove();
        appendMessage("assistant", "Sorry, something went wrong. Please try again.");
      }
    });

    undoBtn.addEventListener("click", () => {
      location.reload();
    });
  }

  function applyDomOperations(ops) {
    if (!ops || !Array.isArray(ops)) return;
    ops.forEach(op => {
      try {
        const el = document.querySelector(op.selector);
        if (!el) return;
        if (op.op === "replace_content") el.innerHTML = op.html;
        else if (op.op === "replace_attr") el.setAttribute(op.attr, op.value);
        else if (op.op === "replace_style") Object.assign(el.style, op.styles);
        else if (op.op === "add_class") el.classList.add(...op.classes);
        else if (op.op === "remove_class") el.classList.remove(...op.classes);
        else if (op.op === "insert_after") el.insertAdjacentHTML("afterend", op.html);
        else if (op.op === "remove") el.remove();
      } catch (e) {
        console.warn("[ChatWidget] DOM op failed:", op, e);
      }
    });
  }

  async function sendMessage() {
    const text = userInput.value.trim();
    if (!text || isWaiting) return;

    userInput.value = "";
    userInput.style.height = "auto";
    isWaiting = true;
    sendBtn.disabled = true;

    conversation.push({ role: "user", content: text });
    appendMessage("user", text);

    const typing = showTyping();

    let pageHtml = "";
    try { pageHtml = document.documentElement.outerHTML.slice(0, 200000); } catch (e) {}

    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId: PROJECT_ID, message: text, pageHtml })
      });

      removeTyping();

      if (!res.ok) throw new Error("HTTP " + res.status);

      const data = await res.json();

      if (data.domOperations) {
        applyDomOperations(data.domOperations);
      }

      if (data.pendingChange) {
        showConfirmButtons(data.pendingChange, data.reply || "");
        conversation.push({ role: "assistant", content: data.reply || "" });
      } else {
        const reply = data.reply || "No response received.";
        appendMessage("assistant", reply);
        conversation.push({ role: "assistant", content: reply });
      }

    } catch (e) {
      removeTyping();
      const errMsg = "Sorry, something went wrong. Please try again.";
      appendMessage("assistant", errMsg);
      conversation.push({ role: "assistant", content: errMsg });
    } finally {
      isWaiting = false;
      sendBtn.disabled = false;
      userInput.focus();
    }
  }

  sendBtn.addEventListener("click", sendMessage);

  userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  userInput.addEventListener("input", () => {
    userInput.style.height = "auto";
    userInput.style.height = Math.min(userInput.scrollHeight, 100) + "px";
  });
})();` }} />
      
      <script dangerouslySetInnerHTML={{ __html: `const PROJECT_ID = "48cb8dd7-0c81-4727-8256-13acd5e976e7";
const API_ENDPOINT = "https://ai-editor-backend-vsqh.onrender.com/api/chat";

(function () {
  const host = document.createElement("div");
  host.id = "ai-chat-widget-host";
  host.style.cssText = "position:fixed;bottom:24px;right:24px;z-index:999999;display:flex;flex-direction:column;align-items:flex-end;";
  document.body.appendChild(host);

  const shadow = host.attachShadow({ mode: "open" });

  const style = document.createElement("style");
  style.textContent = \`
    *{box-sizing:border-box;margin:0;padding:0;}
    .bubble{
      width:56px;height:56px;border-radius:50%;background:#1a1a1a;
      border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;
      box-shadow:0 4px 16px rgba(0,0,0,0.25);transition:transform 0.2s,box-shadow 0.2s;
      flex-shrink:0;
    }
    .bubble:hover{transform:scale(1.08);box-shadow:0 6px 22px rgba(0,0,0,0.32);}
    .bubble svg{width:26px;height:26px;fill:white;}
    .panel{
      width:360px;height:520px;background:#fff;border-radius:16px;
      box-shadow:0 8px 40px rgba(0,0,0,0.18);display:flex;flex-direction:column;
      overflow:hidden;margin-bottom:12px;
      transform-origin:bottom right;
      transition:transform 0.28s cubic-bezier(0.34,1.56,0.64,1),opacity 0.22s ease;
    }
    .panel.hidden{transform:scale(0.85) translateY(24px);opacity:0;pointer-events:none;}
    .panel.visible{transform:scale(1) translateY(0);opacity:1;pointer-events:all;}
    .header{
      background:#1a1a1a;color:#fff;padding:0 16px;height:54px;
      display:flex;align-items:center;justify-content:space-between;flex-shrink:0;
    }
    .header-title{font-family:system-ui,sans-serif;font-size:15px;font-weight:600;letter-spacing:0.01em;}
    .close-btn{
      background:none;border:none;cursor:pointer;color:#fff;
      display:flex;align-items:center;justify-content:center;
      width:32px;height:32px;border-radius:50%;transition:background 0.15s;
    }
    .close-btn:hover{background:rgba(255,255,255,0.15);}
    .close-btn svg{width:18px;height:18px;fill:white;}
    .messages{
      flex:1;overflow-y:auto;padding:16px 14px;
      display:flex;flex-direction:column;gap:10px;
      font-family:system-ui,sans-serif;font-size:14px;line-height:1.5;
    }
    .messages::-webkit-scrollbar{width:4px;}
    .messages::-webkit-scrollbar-track{background:transparent;}
    .messages::-webkit-scrollbar-thumb{background:#ddd;border-radius:2px;}
    .msg{max-width:82%;padding:9px 13px;border-radius:14px;word-break:break-word;}
    .msg.user{
      align-self:flex-end;background:#1a1a1a;color:#fff;
      border-bottom-right-radius:3px;
    }
    .msg.assistant{
      align-self:flex-start;background:#f0f0f0;color:#1a1a1a;
      border-bottom-left-radius:3px;
    }
    .msg.error{
      align-self:flex-start;background:#fff0f0;color:#c0392b;
      border:1px solid #fcd0d0;border-bottom-left-radius:3px;
    }
    .typing{align-self:flex-start;background:#f0f0f0;padding:10px 14px;border-radius:14px;border-bottom-left-radius:3px;}
    .typing span{display:inline-block;width:7px;height:7px;border-radius:50%;background:#999;margin:0 2px;animation:bounce 1.2s infinite;}
    .typing span:nth-child(2){animation-delay:0.2s;}
    .typing span:nth-child(3){animation-delay:0.4s;}
    @keyframes bounce{0%,60%,100%{transform:translateY(0);}30%{transform:translateY(-6px);}}
    .confirm-row{display:flex;gap:8px;margin-top:6px;flex-wrap:wrap;}
    .confirm-btn{
      padding:7px 13px;border-radius:8px;border:none;cursor:pointer;
      font-family:system-ui,sans-serif;font-size:13px;font-weight:600;
      transition:opacity 0.15s,transform 0.1s;
    }
    .confirm-btn:hover{opacity:0.85;transform:translateY(-1px);}
    .confirm-btn.pr{background:#1a1a1a;color:#fff;}
    .confirm-btn.undo{background:#e5e5e5;color:#1a1a1a;}
    .input-row{
      display:flex;align-items:center;gap:8px;padding:10px 12px;
      border-top:1px solid #ebebeb;flex-shrink:0;background:#fff;
    }
    .input-field{
      flex:1;border:1.5px solid #e0e0e0;border-radius:10px;
      padding:9px 12px;font-family:system-ui,sans-serif;font-size:14px;
      outline:none;transition:border-color 0.18s;resize:none;
      line-height:1.4;max-height:100px;overflow-y:auto;
      background:#fafafa;color:#1a1a1a;
    }
    .input-field:focus{border-color:#1a1a1a;background:#fff;}
    .send-btn{
      width:38px;height:38px;border-radius:10px;background:#1a1a1a;
      border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;
      flex-shrink:0;transition:opacity 0.15s,transform 0.1s;
    }
    .send-btn:hover{opacity:0.82;transform:translateY(-1px);}
    .send-btn:disabled{opacity:0.4;cursor:not-allowed;transform:none;}
    .send-btn svg{width:18px;height:18px;fill:white;}
  \`;
  shadow.appendChild(style);

  // Panel
  const panel = document.createElement("div");
  panel.className = "panel hidden";

  // Header
  const header = document.createElement("div");
  header.className = "header";
  header.innerHTML = \`
    <span class="header-title">Chat with us</span>
    <button class="close-btn" aria-label="Close chat">
      <svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="white" stroke-width="2.2" stroke-linecap="round" fill="none"/></svg>
    </button>
  \`;
  panel.appendChild(header);

  // Messages
  const messagesEl = document.createElement("div");
  messagesEl.className = "messages";
  panel.appendChild(messagesEl);

  // Input row
  const inputRow = document.createElement("div");
  inputRow.className = "input-row";
  const inputField = document.createElement("textarea");
  inputField.className = "input-field";
  inputField.placeholder = "Type a message…";
  inputField.rows = 1;
  const sendBtn = document.createElement("button");
  sendBtn.className = "send-btn";
  sendBtn.innerHTML = \`<svg viewBox="0 0 24 24"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>\`;
  inputRow.appendChild(inputField);
  inputRow.appendChild(sendBtn);
  panel.appendChild(inputRow);

  // Bubble
  const bubble = document.createElement("button");
  bubble.className = "bubble";
  bubble.setAttribute("aria-label", "Open chat");
  bubble.innerHTML = \`<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>\`;

  shadow.appendChild(panel);
  shadow.appendChild(bubble);

  // State
  let isOpen = false;
  let isWaiting = false;
  const conversation = [];
  let typingEl = null;
  let currentPendingChangeId = null;
  let confirmRowEl = null;

  function togglePanel() {
    isOpen = !isOpen;
    if (isOpen) {
      panel.classList.remove("hidden");
      panel.classList.add("visible");
      inputField.focus();
    } else {
      panel.classList.remove("visible");
      panel.classList.add("hidden");
    }
  }

  bubble.addEventListener("click", togglePanel);
  header.querySelector(".close-btn").addEventListener("click", togglePanel);

  function formatText(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br>");
  }

  function addMessage(role, text) {
    const div = document.createElement("div");
    div.className = "msg " + role;
    div.innerHTML = formatText(text);
    messagesEl.appendChild(div);
    scrollToBottom();
    return div;
  }

  function addErrorMessage(text) {
    const div = document.createElement("div");
    div.className = "msg error";
    div.innerHTML = formatText(text);
    messagesEl.appendChild(div);
    scrollToBottom();
  }

  function showTyping() {
    typingEl = document.createElement("div");
    typingEl.className = "typing";
    typingEl.innerHTML = "<span></span><span></span><span></span>";
    messagesEl.appendChild(typingEl);
    scrollToBottom();
  }

  function hideTyping() {
    if (typingEl) { typingEl.remove(); typingEl = null; }
  }

  function scrollToBottom() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function removeConfirmRow() {
    if (confirmRowEl) { confirmRowEl.remove(); confirmRowEl = null; }
    currentPendingChangeId = null;
  }

  function showConfirmRow(pendingChange) {
    removeConfirmRow();
    currentPendingChangeId = pendingChange.id || pendingChange.confirmChangeId || pendingChange;
    confirmRowEl = document.createElement("div");
    confirmRowEl.className = "confirm-row";

    const prBtn = document.createElement("button");
    prBtn.className = "confirm-btn pr";
    prBtn.textContent = "✅ Create PR";

    const undoBtn = document.createElement("button");
    undoBtn.className = "confirm-btn undo";
    undoBtn.textContent = "↩️ Undo";

    confirmRowEl.appendChild(prBtn);
    confirmRowEl.appendChild(undoBtn);
    messagesEl.appendChild(confirmRowEl);
    scrollToBottom();

    prBtn.addEventListener("click", async () => {
      removeConfirmRow();
      await sendConfirm(currentPendingChangeId === null ? pendingChange.id || pendingChange.confirmChangeId || pendingChange : currentPendingChangeId);
    });

    undoBtn.addEventListener("click", () => {
      removeConfirmRow();
      location.reload();
    });
  }

  function applyDomOperations(ops) {
    if (!ops || !Array.isArray(ops)) return;
    ops.forEach(op => {
      try {
        const el = document.querySelector(op.selector);
        if (!el) return;
        if (op.op === "replace_content") { el.innerHTML = op.html; }
        else if (op.op === "replace_attr") { el.setAttribute(op.attr, op.value); }
        else if (op.op === "replace_style") { Object.assign(el.style, op.styles); }
        else if (op.op === "add_class") { el.classList.add(...(Array.isArray(op.classes) ? op.classes : [op.classes])); }
        else if (op.op === "remove_class") { el.classList.remove(...(Array.isArray(op.classes) ? op.classes : [op.classes])); }
        else if (op.op === "insert_after") { el.insertAdjacentHTML("afterend", op.html); }
        else if (op.op === "remove") { el.remove(); }
      } catch (e) { console.warn("DOM op error:", e); }
    });
  }

  async function sendConfirm(confirmChangeId) {
    setWaiting(true);
    showTyping();
    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId: PROJECT_ID, message: "confirm", confirmChangeId })
      });
      const data = await res.json();
      hideTyping();
      if (data.domOperations) applyDomOperations(data.domOperations);
      if (data.reply) { addMessage("assistant", data.reply); }
      if (data.pendingChange) { showConfirmRow(data.pendingChange); }
    } catch (e) {
      hideTyping();
      addErrorMessage("Sorry, something went wrong. Please try again.");
    } finally {
      setWaiting(false);
    }
  }

  function setWaiting(val) {
    isWaiting = val;
    sendBtn.disabled = val;
    inputField.disabled = val;
  }

  async function sendMessage() {
    const message = inputField.value.trim();
    if (!message || isWaiting) return;
    removeConfirmRow();
    inputField.value = "";
    inputField.style.height = "auto";
    addMessage("user", message);
    conversation.push({ role: "user", content: message });
    setWaiting(true);
    showTyping();

    var pageHtml = document.documentElement.outerHTML.slice(0, 200000);

    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId: PROJECT_ID, message, pageHtml })
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.` }} />
      
      <script dangerouslySetInnerHTML={{ __html: `const PROJECT_ID = "48cb8dd7-0c81-4727-8256-13acd5e976e7";
const API_ENDPOINT = "https://ai-editor-backend-vsqh.onrender.com/api/chat";

(function () {
  const host = document.createElement("div");
  host.id = "ai-chat-widget-host";
  host.style.cssText = "position:fixed;bottom:24px;right:24px;z-index:999999;display:flex;flex-direction:column;align-items:flex-end;";
  document.body.appendChild(host);

  const shadow = host.attachShadow({ mode: "open" });

  const style = document.createElement("style");
  style.textContent = \`
    *{box-sizing:border-box;margin:0;padding:0;}
    .bubble{
      width:56px;height:56px;border-radius:50%;background:#1a1a1a;border:none;cursor:pointer;
      display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,0.25);
      transition:transform 0.2s,box-shadow 0.2s;flex-shrink:0;
    }
    .bubble:hover{transform:scale(1.08);box-shadow:0 6px 20px rgba(0,0,0,0.35);}
    .bubble svg{width:26px;height:26px;fill:white;}
    .panel{
      width:360px;height:520px;background:#fff;border-radius:16px;
      box-shadow:0 8px 40px rgba(0,0,0,0.18);display:flex;flex-direction:column;
      overflow:hidden;margin-bottom:12px;
      transform-origin:bottom right;
      animation:none;
    }
    .panel.open{animation:slideUp 0.25s cubic-bezier(0.22,1,0.36,1) forwards;}
    .panel.close{animation:slideDown 0.2s ease-in forwards;}
    @keyframes slideUp{
      from{opacity:0;transform:scale(0.85) translateY(24px);}
      to{opacity:1;transform:scale(1) translateY(0);}
    }
    @keyframes slideDown{
      from{opacity:1;transform:scale(1) translateY(0);}
      to{opacity:0;transform:scale(0.85) translateY(24px);}
    }
    .header{
      background:#1a1a1a;color:#fff;padding:0 16px;height:56px;
      display:flex;align-items:center;justify-content:space-between;flex-shrink:0;
    }
    .header-title{font-size:15px;font-weight:600;font-family:system-ui,sans-serif;letter-spacing:0.01em;}
    .close-btn{
      background:none;border:none;cursor:pointer;color:#fff;opacity:0.75;
      display:flex;align-items:center;justify-content:center;padding:4px;border-radius:6px;
      transition:opacity 0.15s;
    }
    .close-btn:hover{opacity:1;}
    .close-btn svg{width:20px;height:20px;fill:white;}
    .messages{
      flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;
      font-family:system-ui,sans-serif;font-size:14px;line-height:1.5;
    }
    .messages::-webkit-scrollbar{width:5px;}
    .messages::-webkit-scrollbar-track{background:transparent;}
    .messages::-webkit-scrollbar-thumb{background:#ddd;border-radius:4px;}
    .msg{max-width:82%;padding:10px 13px;border-radius:14px;word-break:break-word;}
    .msg.user{
      align-self:flex-end;background:#1a1a1a;color:#fff;border-bottom-right-radius:4px;
    }
    .msg.assistant{
      align-self:flex-start;background:#f0f0f0;color:#1a1a1a;border-bottom-left-radius:4px;
    }
    .msg.error{
      align-self:flex-start;background:#fff0f0;color:#c0392b;border-bottom-left-radius:4px;
      border:1px solid #fcc;
    }
    .confirm-row{display:flex;gap:8px;margin-top:6px;flex-wrap:wrap;}
    .confirm-btn{
      padding:7px 13px;border-radius:8px;border:none;cursor:pointer;font-size:13px;
      font-family:system-ui,sans-serif;font-weight:500;transition:opacity 0.15s;
    }
    .confirm-btn:hover{opacity:0.82;}
    .confirm-btn.yes{background:#1a1a1a;color:#fff;}
    .confirm-btn.undo{background:#e0e0e0;color:#1a1a1a;}
    .typing{display:flex;align-items:center;gap:5px;padding:12px 14px;}
    .dot{width:7px;height:7px;border-radius:50%;background:#aaa;animation:bounce 1.2s infinite ease-in-out;}
    .dot:nth-child(2){animation-delay:0.2s;}
    .dot:nth-child(3){animation-delay:0.4s;}
    @keyframes bounce{
      0%,80%,100%{transform:translateY(0);}
      40%{transform:translateY(-7px);}
    }
    .input-row{
      display:flex;align-items:center;gap:8px;padding:12px;border-top:1px solid #ebebeb;flex-shrink:0;
    }
    .input-field{
      flex:1;border:1px solid #ddd;border-radius:10px;padding:9px 13px;font-size:14px;
      font-family:system-ui,sans-serif;outline:none;resize:none;transition:border-color 0.15s;
      line-height:1.45;max-height:120px;overflow-y:auto;background:#fafafa;
    }
    .input-field:focus{border-color:#1a1a1a;background:#fff;}
    .send-btn{
      width:38px;height:38px;border-radius:10px;background:#1a1a1a;border:none;cursor:pointer;
      display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:opacity 0.15s;
    }
    .send-btn:hover{opacity:0.82;}
    .send-btn svg{width:18px;height:18px;fill:white;}
    .hidden{display:none!important;}
  \`;
  shadow.appendChild(style);

  // Panel
  const panel = document.createElement("div");
  panel.className = "panel hidden";

  // Header
  const header = document.createElement("div");
  header.className = "header";
  const headerTitle = document.createElement("span");
  headerTitle.className = "header-title";
  headerTitle.textContent = "Chat with us";
  const closeBtn = document.createElement("button");
  closeBtn.className = "close-btn";
  closeBtn.setAttribute("aria-label", "Close chat");
  closeBtn.innerHTML = \`<svg viewBox="0 0 24 24"><path d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7A1 1 0 005.7 7.11L10.59 12 5.7 16.89a1 1 0 001.41 1.41L12 13.41l4.89 4.89a1 1 0 001.41-1.41L13.41 12l4.89-4.89a1 1 0 000-1.4z"/></svg>\`;
  header.appendChild(headerTitle);
  header.appendChild(closeBtn);

  // Messages
  const messagesEl = document.createElement("div");
  messagesEl.className = "messages";

  // Input row
  const inputRow = document.createElement("div");
  inputRow.className = "input-row";
  const inputField = document.createElement("textarea");
  inputField.className = "input-field";
  inputField.placeholder = "Type a message…";
  inputField.rows = 1;
  const sendBtn = document.createElement("button");
  sendBtn.className = "send-btn";
  sendBtn.setAttribute("aria-label", "Send");
  sendBtn.innerHTML = \`<svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>\`;
  inputRow.appendChild(inputField);
  inputRow.appendChild(sendBtn);

  panel.appendChild(header);
  panel.appendChild(messagesEl);
  panel.appendChild(inputRow);

  // Bubble
  const bubble = document.createElement("button");
  bubble.className = "bubble";
  bubble.setAttribute("aria-label", "Open chat");
  bubble.innerHTML = \`<svg viewBox="0 0 24 24"><path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H6l-2 2V4h16v10z"/></svg>\`;

  shadow.appendChild(panel);
  shadow.appendChild(bubble);

  // State
  let isOpen = false;
  let isWaiting = false;
  const conversation = [];

  function formatText(text) {
    // Bold
    let html = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    // Newlines
    html = html.replace(/\n/g, "<br>");
    return html;
  }

  function scrollToBottom() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function addMessage(role, text) {
    const div = document.createElement("div");
    div.className = "msg " + role;
    div.innerHTML = formatText(text);
    messagesEl.appendChild(div);
    scrollToBottom();
    return div;
  }

  function addErrorMessage() {
    const div = document.createElement("div");
    div.className = "msg error";
    div.textContent = "Sorry, something went wrong. Please try again.";
    messagesEl.appendChild(div);
    scrollToBottom();
  }

  function showTyping() {
    const div = document.createElement("div");
    div.className = "msg assistant typing-indicator";
    div.innerHTML = \`<div class="typing"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>\`;
    messagesEl.appendChild(div);
    scrollToBottom();
    return div;
  }

  function applyDomOperations(ops) {
    if (!ops || !Array.isArray(ops)) return;
    ops.forEach(function (op) {
      try {
        const el = document.querySelector(op.selector);
        if (!el) return;
        if (op.op === "replace_content") {
          el.innerHTML = op.html;
        } else if (op.op === "replace_attr") {
          el.setAttribute(op.attr, op.value);
        } else if (op.op === "replace_style") {
          Object.assign(el.style, op.styles);
        } else if (op.op === "add_class") {
          const cls = Array.isArray(op.classes) ? op.classes : op.classes.split(" ");
          el.classList.add(...cls);
        } else if (op.op === "remove_class") {
          const cls = Array.isArray(op.classes) ? op.classes : op.classes.split(" ");
          el.classList.remove(...cls);
        } else if (op.op === "insert_after") {
          el.insertAdjacentHTML("afterend", op.html);
        } else if (op.op === "remove") {
          el.remove();
        }
      } catch (e) {
        console.warn("DOM op failed:", e);
      }
    });
  }

  function addConfirmButtons(pendingChange, replyDiv) {
    const row = document.createElement("div");
    row.className = "confirm-row";

    const yesBtn = document.createElement("button");
    yesBtn.className = "confirm-btn yes";
    yesBtn.textContent = "✅ Create PR";

    const undoBtn = document.createElement("button");
    undoBtn.className = "confirm-btn undo";
    undoBtn.textContent = "↩️ Undo";

    row.appendChild(yesBtn);
    row.appendChild(undoBtn);
    replyDiv.appendChild(row);
    scrollToBottom();

    yesBtn.addEventListener("click", async function () {
      yesBtn.disabled = true;
      undoBtn.disabled = true;
      yesBtn.style.opacity = "0.5";
      undoBtn.style.opacity = "0.5";
      row.remove();
      await sendConfirm(pendingChange.confirmChangeId);
    });

    undoBtn.addEventListener("click", function () {
      location.reload();
    });
  }

  async function sendConfirm(confirmChangeId) {
    if (isWaiting) return;
    isWaiting = true;
    const typingEl = showTyping();
    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId: PROJECT_ID, message: "confirm", confirmChangeId }),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      typingEl.remove();
      if (data.domOperations) applyDomOperations(data.domOperations);
      const replyDiv = addMessage("assistant", data.reply || "");
      if (data.pendingChange) addConfirmButtons(data.pendingChange, replyDiv);
    } catch (e) {
      typingEl.remove();
      addErrorMessage();
    } finally {
      isWaiting = false;
    }
  }

  async function sendMessage() {
    if (isWaiting) return;
    const text = inputField.value.trim();
    if (!text) return;
    inputField.value = "";
    inputField.style.height = "auto";
    conversation.push({ role: "user", content: text });
    addMessage("user", text);
    isWaiting = true;
    const typingEl = showTyping();

    const pageHtml = document.documentElement.outerHTML.slice(0, 200000);

    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId: PROJECT_ID, message: text, pageHtml }),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      typingEl.remove();
      if (data.domOperations) applyDomOperations(data.domOperations);
      const replyDiv = addMessage("assistant", data.reply || "");
      conversation.push({ role: "assistant", content: data.reply || "" });
      if (data.pendingChange) addConfirmButtons(data.pendingChange, replyDiv);
    } catch (e) {
      typingEl.remove();
      addErrorMessage();
    } finally {
      isWaiting = false;` }} />
      
      <script dangerouslySetInnerHTML={{ __html: `const PROJECT_ID = "48cb8dd7-0c81-4727-8256-13acd5e976e7";
const API_ENDPOINT = "https://ai-editor-backend-vsqh.onrender.com/api/chat";

(function () {
  const host = document.createElement("div");
  host.id = "ai-chat-widget-host";
  host.style.cssText = "position:fixed;bottom:24px;right:24px;z-index:999999;display:flex;flex-direction:column;align-items:flex-end;";
  document.body.appendChild(host);

  const shadow = host.attachShadow({ mode: "open" });

  const style = document.createElement("style");
  style.textContent = \`
    *{box-sizing:border-box;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;}
    #bubble{width:56px;height:56px;border-radius:50%;background:#1a1a1a;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,0.3);transition:transform 0.2s,box-shadow 0.2s;flex-shrink:0;}
    #bubble:hover{transform:scale(1.08);box-shadow:0 6px 20px rgba(0,0,0,0.4);}
    #bubble svg{width:26px;height:26px;fill:white;}
    #panel{width:360px;height:520px;background:#fff;border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,0.18);display:flex;flex-direction:column;margin-bottom:12px;overflow:hidden;transform-origin:bottom right;transition:transform 0.25s cubic-bezier(0.4,0,0.2,1),opacity 0.25s cubic-bezier(0.4,0,0.2,1);}
    #panel.hidden{transform:scale(0.85) translateY(20px);opacity:0;pointer-events:none;}
    #panel.visible{transform:scale(1) translateY(0);opacity:1;pointer-events:all;}
    #header{background:#1a1a1a;color:#fff;padding:16px 18px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;}
    #header-title{font-size:15px;font-weight:600;letter-spacing:0.01em;}
    #close-btn{background:none;border:none;cursor:pointer;color:#fff;display:flex;align-items:center;justify-content:center;padding:4px;border-radius:6px;transition:background 0.15s;}
    #close-btn:hover{background:rgba(255,255,255,0.15);}
    #close-btn svg{width:18px;height:18px;fill:white;}
    #messages{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;}
    #messages::-webkit-scrollbar{width:4px;}
    #messages::-webkit-scrollbar-track{background:transparent;}
    #messages::-webkit-scrollbar-thumb{background:#ddd;border-radius:4px;}
    .msg{max-width:80%;padding:10px 13px;border-radius:14px;font-size:13.5px;line-height:1.5;word-break:break-word;}
    .msg.user{align-self:flex-end;background:#1a1a1a;color:#fff;border-bottom-right-radius:4px;}
    .msg.assistant{align-self:flex-start;background:#f0f0f0;color:#1a1a1a;border-bottom-left-radius:4px;}
    .msg.error{align-self:flex-start;background:#fff0f0;color:#c0392b;border:1px solid #fcc;}
    .msg b{font-weight:700;}
    .confirm-row{display:flex;gap:8px;margin-top:4px;align-self:flex-start;}
    .confirm-btn{padding:7px 13px;border-radius:8px;border:none;cursor:pointer;font-size:13px;font-weight:600;transition:opacity 0.15s;}
    .confirm-btn:hover{opacity:0.85;}
    .confirm-btn.pr{background:#1a1a1a;color:#fff;}
    .confirm-btn.undo{background:#e0e0e0;color:#1a1a1a;}
    #input-row{display:flex;gap:8px;padding:12px 14px;border-top:1px solid #ebebeb;flex-shrink:0;background:#fff;}
    #msg-input{flex:1;border:1px solid #ddd;border-radius:10px;padding:9px 12px;font-size:13.5px;outline:none;resize:none;height:40px;line-height:1.4;transition:border-color 0.15s;}
    #msg-input:focus{border-color:#1a1a1a;}
    #send-btn{width:40px;height:40px;border-radius:10px;background:#1a1a1a;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:opacity 0.15s;}
    #send-btn:hover{opacity:0.82;}
    #send-btn svg{width:18px;height:18px;fill:white;}
    #send-btn:disabled{opacity:0.4;cursor:not-allowed;}
    .typing-dots{display:flex;align-items:center;gap:4px;padding:10px 13px;background:#f0f0f0;border-radius:14px;border-bottom-left-radius:4px;align-self:flex-start;}
    .typing-dots span{width:7px;height:7px;border-radius:50%;background:#999;display:inline-block;animation:dot-bounce 1.2s infinite ease-in-out;}
    .typing-dots span:nth-child(1){animation-delay:0s;}
    .typing-dots span:nth-child(2){animation-delay:0.2s;}
    .typing-dots span:nth-child(3){animation-delay:0.4s;}
    @keyframes dot-bounce{0%,80%,100%{transform:translateY(0);}40%{transform:translateY(-6px);}}
  \`;
  shadow.appendChild(style);

  const panel = document.createElement("div");
  panel.id = "panel";
  panel.className = "hidden";
  panel.innerHTML = \`
    <div id="header">
      <span id="header-title">Chat with us</span>
      <button id="close-btn" aria-label="Close chat">
        <svg viewBox="0 0 24 24"><path d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7A1 1 0 005.7 7.11L10.59 12 5.7 16.89a1 1 0 001.41 1.41L12 13.41l4.89 4.89a1 1 0 001.41-1.41L13.41 12l4.89-4.89a1 1 0 000-1.4z"/></svg>
      </button>
    </div>
    <div id="messages"></div>
    <div id="input-row">
      <input id="msg-input" type="text" placeholder="Type a message…" autocomplete="off"/>
      <button id="send-btn" aria-label="Send">
        <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
      </button>
    </div>
  \`;
  shadow.appendChild(panel);

  const bubble = document.createElement("button");
  bubble.id = "bubble";
  bubble.setAttribute("aria-label", "Open chat");
  bubble.innerHTML = \`<svg viewBox="0 0 24 24"><path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>\`;
  shadow.appendChild(bubble);

  const messagesEl = shadow.getElementById("messages");
  const msgInput = shadow.getElementById("msg-input");
  const sendBtn = shadow.getElementById("send-btn");
  const closeBtn = shadow.getElementById("close-btn");

  let isOpen = false;
  let isWaiting = false;
  let conversation = [];

  function togglePanel() {
    isOpen = !isOpen;
    if (isOpen) {
      panel.classList.remove("hidden");
      panel.classList.add("visible");
      msgInput.focus();
    } else {
      panel.classList.remove("visible");
      panel.classList.add("hidden");
    }
  }

  bubble.addEventListener("click", togglePanel);
  closeBtn.addEventListener("click", togglePanel);

  msgInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });

  sendBtn.addEventListener("click", handleSend);

  function formatText(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
      .replace(/\n/g, "<br>");
  }

  function appendMessage(role, text) {
    const div = document.createElement("div");
    div.className = "msg " + role;
    div.innerHTML = formatText(text);
    messagesEl.appendChild(div);
    scrollToBottom();
    return div;
  }

  function appendError() {
    const div = document.createElement("div");
    div.className = "msg error";
    div.textContent = "Sorry, something went wrong. Please try again.";
    messagesEl.appendChild(div);
    scrollToBottom();
  }

  function showTyping() {
    const div = document.createElement("div");
    div.className = "typing-dots";
    div.id = "typing-indicator";
    div.innerHTML = "<span></span><span></span><span></span>";
    messagesEl.appendChild(div);
    scrollToBottom();
    return div;
  }

  function removeTyping() {
    const el = shadow.getElementById("typing-indicator");
    if (el) el.remove();
  }

  function scrollToBottom() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function setWaiting(val) {
    isWaiting = val;
    sendBtn.disabled = val;
    msgInput.disabled = val;
  }

  function applyDomOperations(ops) {
    if (!Array.isArray(ops)) return;
    ops.forEach(function (op) {
      try {
        const el = document.querySelector(op.selector);
        if (!el) return;
        if (op.op === "replace_content") {
          el.innerHTML = op.html;
        } else if (op.op === "replace_attr") {
          el.setAttribute(op.attr, op.value);
        } else if (op.op === "replace_style") {
          Object.assign(el.style, op.styles);
        } else if (op.op === "add_class") {
          const cls = Array.isArray(op.classes) ? op.classes : [op.classes];
          el.classList.add(...cls);
        } else if (op.op === "remove_class") {
          const cls = Array.isArray(op.classes) ? op.classes : [op.classes];
          el.classList.remove(...cls);
        } else if (op.op === "insert_after") {
          el.insertAdjacentHTML("afterend", op.html);
        } else if (op.op === "remove") {
          el.remove();
        }
      } catch (e) {
        console.warn("DOM op failed:", op, e);
      }
    });
  }

  function showConfirmButtons(pendingChange) {
    const row = document.createElement("div");
    row.className = "confirm-row";

    const prBtn = document.createElement("button");
    prBtn.className = "confirm-btn pr";
    prBtn.textContent = "✅ Create PR";

    const undoBtn = document.createElement("button");
    undoBtn.className = "confirm-btn undo";
    undoBtn.textContent = "↩️ Undo";

    row.appendChild(prBtn);
    row.appendChild(undoBtn);
    messagesEl.appendChild(row);
    scrollToBottom();

    prBtn.addEventListener("click", async function () {
      row.remove();
      setWaiting(true);
      const typingEl = showTyping();
      try {
        const res = await fetch(API_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            projectId: PROJECT_ID,
            message: "confirm",
            confirmChangeId: pendingChange.id
          })
        });
        const data = await res.json();
        removeTyping();
        if (data.domOperations) applyDomOperations(data.domOperations);
        if (data.reply) {
          conversation.push({ role: "assistant", content: data.reply });
          appendMessage("assistant", data.reply);
        }
        if (data.pendingChange) showConfirmButtons(data.pendingChange);
      } catch (e) {
        removeTyping();
        appendError();
      } finally {
        setWaiting(false);
      }
    });

    undoBtn.addEventListener("click", function () {
      location.reload();
    });
  }

  async function handleSend() {
    if (isWaiting) return;
    const text = msgInput.value.trim();
    if (!text) return;

    msgInput.value = "";
    conversation.push({ role: "user", content: text });
    appendMessage("user", text);
    setWaiting(true);
    const typingEl = showTyping();

    var pageHtml = document.documentElement.outerHTML.slice(0, 200000);

    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectId: PROJECT_ID,
          message: text,
          pageHtml: pageHtml
        })
      });

      if (!res.ok) throw new Error("HTTP " + res.status);

      const data = await res.json();
      removeTyping();

      if (data.domOperations) applyDomOperations(data.domOperations);

      if (data.reply) {
        conversation.push({ role: "assistant", content: data.reply });
        appendMessage("assistant", data.reply);
      }

      if (data.pendingChange) {
        showConfirmButtons(data.pendingChange);
      }
    } catch (e) {
      removeTyping();
      appendError();
    } finally {
      setWaiting(false);
    }
  }
})();` }} />
      
      <script dangerouslySetInnerHTML={{ __html: `(function() {
  const PROJECT_ID = "48cb8dd7-0c81-4727-8256-13acd5e976e7";
  const API_ENDPOINT = "https://ai-editor-backend-vsqh.onrender.com/api/chat";

  const host = document.createElement('div');
  host.id = 'ai-chat-widget-host';
  host.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:999999;display:flex;flex-direction:column;align-items:flex-end;';
  document.body.appendChild(host);

  const shadow = host.attachShadow({ mode: 'open' });

  const style = document.createElement('style');
  style.textContent = \`
    *{box-sizing:border-box;margin:0;padding:0;}
    .bubble{width:56px;height:56px;border-radius:50%;background:#1a1a1a;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,0.25);transition:transform 0.2s,box-shadow 0.2s;flex-shrink:0;}
    .bubble:hover{transform:scale(1.08);box-shadow:0 6px 20px rgba(0,0,0,0.32);}
    .bubble svg{width:26px;height:26px;fill:white;}
    .panel{width:360px;height:520px;background:#fff;border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,0.18);display:flex;flex-direction:column;overflow:hidden;margin-bottom:12px;transform-origin:bottom right;transition:transform 0.25s cubic-bezier(0.4,0,0.2,1),opacity 0.25s cubic-bezier(0.4,0,0.2,1);}
    .panel.hidden{transform:scale(0.85) translateY(20px);opacity:0;pointer-events:none;}
    .panel.visible{transform:scale(1) translateY(0);opacity:1;pointer-events:all;}
    .header{background:#1a1a1a;color:#fff;padding:0 16px;height:52px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;}
    .header-title{font-family:system-ui,-apple-system,sans-serif;font-size:15px;font-weight:600;letter-spacing:0.01em;}
    .close-btn{background:none;border:none;cursor:pointer;color:#fff;display:flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;transition:background 0.15s;}
    .close-btn:hover{background:rgba(255,255,255,0.15);}
    .close-btn svg{width:18px;height:18px;stroke:white;fill:none;}
    .messages{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;font-family:system-ui,-apple-system,sans-serif;}
    .messages::-webkit-scrollbar{width:4px;}
    .messages::-webkit-scrollbar-track{background:transparent;}
    .messages::-webkit-scrollbar-thumb{background:#ddd;border-radius:2px;}
    .msg{max-width:82%;padding:9px 13px;border-radius:14px;font-size:13.5px;line-height:1.5;word-wrap:break-word;}
    .msg.user{align-self:flex-end;background:#1a1a1a;color:#fff;border-bottom-right-radius:4px;}
    .msg.assistant{align-self:flex-start;background:#f0f0f0;color:#1a1a1a;border-bottom-left-radius:4px;}
    .msg.error{align-self:flex-start;background:#fff0f0;color:#c0392b;border:1px solid #f5c6cb;border-bottom-left-radius:4px;}
    .typing{align-self:flex-start;background:#f0f0f0;border-radius:14px;border-bottom-left-radius:4px;padding:10px 14px;display:flex;gap:5px;align-items:center;}
    .typing span{width:7px;height:7px;background:#999;border-radius:50%;display:inline-block;animation:bounce 1.2s infinite ease-in-out;}
    .typing span:nth-child(1){animation-delay:0s;}
    .typing span:nth-child(2){animation-delay:0.18s;}
    .typing span:nth-child(3){animation-delay:0.36s;}
    @keyframes bounce{0%,60%,100%{transform:translateY(0);}30%{transform:translateY(-6px);}}
    .confirm-row{display:flex;gap:8px;margin-top:4px;flex-wrap:wrap;}
    .confirm-btn{padding:7px 13px;border:none;border-radius:8px;cursor:pointer;font-size:12.5px;font-family:system-ui,-apple-system,sans-serif;font-weight:500;transition:opacity 0.15s;}
    .confirm-btn.pr{background:#1a1a1a;color:#fff;}
    .confirm-btn.undo{background:#e8e8e8;color:#1a1a1a;}
    .confirm-btn:hover{opacity:0.8;}
    .confirm-btn:disabled{opacity:0.5;cursor:not-allowed;}
    .input-row{padding:12px;border-top:1px solid #ebebeb;display:flex;gap:8px;flex-shrink:0;background:#fff;}
    .input-field{flex:1;border:1px solid #e0e0e0;border-radius:10px;padding:9px 12px;font-size:13.5px;font-family:system-ui,-apple-system,sans-serif;outline:none;resize:none;transition:border-color 0.15s;line-height:1.4;}
    .input-field:focus{border-color:#1a1a1a;}
    .send-btn{background:#1a1a1a;color:#fff;border:none;border-radius:10px;padding:9px 15px;cursor:pointer;font-size:13.5px;font-family:system-ui,-apple-system,sans-serif;font-weight:600;transition:opacity 0.15s;white-space:nowrap;}
    .send-btn:hover{opacity:0.8;}
    .send-btn:disabled{opacity:0.45;cursor:not-allowed;}
  \`;
  shadow.appendChild(style);

  const panel = document.createElement('div');
  panel.className = 'panel hidden';

  const header = document.createElement('div');
  header.className = 'header';
  header.innerHTML = \`<span class="header-title">Chat with us</span><button class="close-btn" aria-label="Close chat"><svg viewBox="0 0 24 24" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>\`;

  const messagesEl = document.createElement('div');
  messagesEl.className = 'messages';

  const inputRow = document.createElement('div');
  inputRow.className = 'input-row';

  const inputField = document.createElement('textarea');
  inputField.className = 'input-field';
  inputField.placeholder = 'Type a message…';
  inputField.rows = 1;

  const sendBtn = document.createElement('button');
  sendBtn.className = 'send-btn';
  sendBtn.textContent = 'Send';

  inputRow.appendChild(inputField);
  inputRow.appendChild(sendBtn);
  panel.appendChild(header);
  panel.appendChild(messagesEl);
  panel.appendChild(inputRow);

  const bubble = document.createElement('button');
  bubble.className = 'bubble';
  bubble.setAttribute('aria-label', 'Open chat');
  bubble.innerHTML = \`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H6l-2 2V4h16v10z"/></svg>\`;

  shadow.appendChild(panel);
  shadow.appendChild(bubble);

  let isOpen = false;
  let isWaiting = false;
  const conversation = [];

  function togglePanel() {
    isOpen = !isOpen;
    if (isOpen) {
      panel.classList.remove('hidden');
      panel.classList.add('visible');
      inputField.focus();
      scrollToBottom();
    } else {
      panel.classList.remove('visible');
      panel.classList.add('hidden');
    }
  }

  bubble.addEventListener('click', togglePanel);
  header.querySelector('.close-btn').addEventListener('click', togglePanel);

  function scrollToBottom() {
    setTimeout(() => { messagesEl.scrollTop = messagesEl.scrollHeight; }, 30);
  }

  function formatText(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  function appendMessage(role, text) {
    const div = document.createElement('div');
    div.className = 'msg ' + (role === 'user' ? 'user' : role === 'error' ? 'error' : 'assistant');
    div.innerHTML = formatText(text);
    messagesEl.appendChild(div);
    scrollToBottom();
    return div;
  }

  function showTyping() {
    const div = document.createElement('div');
    div.className = 'typing';
    div.innerHTML = '<span></span><span></span><span></span>';
    messagesEl.appendChild(div);
    scrollToBottom();
    return div;
  }

  function applyDomOperations(ops) {
    if (!ops || !Array.isArray(ops)) return;
    ops.forEach(op => {
      try {
        const el = document.querySelector(op.selector);
        if (!el) return;
        if (op.op === 'replace_content') {
          el.innerHTML = op.html;
        } else if (op.op === 'replace_attr') {
          el.setAttribute(op.attr, op.value);
        } else if (op.op === 'replace_style') {
          Object.assign(el.style, op.styles);
        } else if (op.op === 'add_class') {
          const cls = Array.isArray(op.classes) ? op.classes : op.classes.split(' ');
          el.classList.add(...cls);
        } else if (op.op === 'remove_class') {
          const cls = Array.isArray(op.classes) ? op.classes : op.classes.split(' ');
          el.classList.remove(...cls);
        } else if (op.op === 'insert_after') {
          el.insertAdjacentHTML('afterend', op.html);
        } else if (op.op === 'remove') {
          el.remove();
        }
      } catch(e) {}
    });
  }

  function showPendingChange(pendingChange, replyDiv) {
    const row = document.createElement('div');
    row.className = 'confirm-row';

    const prBtn = document.createElement('button');
    prBtn.className = 'confirm-btn pr';
    prBtn.textContent = '✅ Create PR';

    const undoBtn = document.createElement('button');
    undoBtn.className = 'confirm-btn undo';
    undoBtn.textContent = '↩️ Undo';

    row.appendChild(prBtn);
    row.appendChild(undoBtn);
    messagesEl.appendChild(row);
    scrollToBottom();

    prBtn.addEventListener('click', async () => {
      prBtn.disabled = true;
      undoBtn.disabled = true;
      const typing = showTyping();
      try {
        const res = await fetch(API_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ projectId: PROJECT_ID, message: 'confirm', confirmChangeId: pendingChange.id })
        });
        const data = await res.json();
        typing.remove();
        row.remove();
        if (data.domOperations) applyDomOperations(data.domOperations);
        if (data.reply) {
          appendMessage('assistant', data.reply);
          conversation.push({ role: 'assistant', content: data.reply });
        }
        if (data.pendingChange) showPendingChange(data.pendingChange, null);
      } catch(e) {
        typing.remove();
        row.remove();
        appendMessage('error', 'Sorry, something went wrong. Please try again.');
      }
    });

    undoBtn.addEventListener('click', () => {
      location.reload();
    });
  }

  async function sendMessage() {
    const text = inputField.value.trim();
    if (!text || isWaiting) return;

    inputField.value = '';
    inputField.style.height = 'auto';
    isWaiting = true;
    sendBtn.disabled = true;
    inputField.disabled = true;

    appendMessage('user', text);
    conversation.push({ role: 'user', content: text });

    const typing = showTyping();

    try {
      const pageHtml = document.documentElement.outerHTML.slice(0, 200000);
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId: PROJECT_ID, message: text, pageHtml })
      });

      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();

      typing.remove();

      if (data.domOperations) applyDomOperations(data.domOperations);

      const reply = data.reply || '';
      if (reply) {
        appendMessage('assistant', reply);
        conversation.push({ role: 'assistant', content: reply });
      }

      if (data.pendingChange) {
        showPendingChange(data.pendingChange, null);
      }
    } catch(e) {
      typing.remove();
      appendMessage('error', 'Sorry, something went wrong. Please try again.');
    } finally {
      isWaiting = false;
      sendBtn.disabled = false;
      inputField.disabled = false;
      inputField.focus();
    }
  }

  sendBtn.addEventListener('click', sendMessage);

  inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  inputField.addEventListener('input', () => {
    inputField.style.height = 'auto';
    inputField.style.height = Math.min(inputField.scrollHeight, 100) + 'px';
  });
})();` }} />
      </main>
  )
}
