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
  host.id = "__chat-widget-host__";
  host.style.cssText = "position:fixed;bottom:24px;right:24px;z-index:999999;display:flex;flex-direction:column;align-items:flex-end;";
  document.body.appendChild(host);

  const shadow = host.attachShadow({ mode: "open" });

  const style = document.createElement("style");
  style.textContent = \`
    *{box-sizing:border-box;margin:0;padding:0;}
    .bubble{
      width:56px;height:56px;border-radius:50%;background:#1a1a1a;border:none;cursor:pointer;
      display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,0.25);
      transition:transform .2s,box-shadow .2s;flex-shrink:0;
    }
    .bubble:hover{transform:scale(1.08);box-shadow:0 6px 20px rgba(0,0,0,0.35);}
    .bubble svg{width:26px;height:26px;fill:white;}
    .panel{
      width:360px;height:520px;background:#fff;border-radius:16px;
      box-shadow:0 8px 40px rgba(0,0,0,0.18);display:flex;flex-direction:column;
      margin-bottom:12px;overflow:hidden;
      transform-origin:bottom right;
      transition:transform .28s cubic-bezier(.4,0,.2,1),opacity .28s cubic-bezier(.4,0,.2,1);
    }
    .panel.hidden{transform:scale(.85) translateY(20px);opacity:0;pointer-events:none;}
    .panel.visible{transform:scale(1) translateY(0);opacity:1;pointer-events:all;}
    .header{
      background:#1a1a1a;color:#fff;padding:16px 18px;display:flex;align-items:center;
      justify-content:space-between;flex-shrink:0;
    }
    .header-title{font-family:sans-serif;font-size:15px;font-weight:600;letter-spacing:.01em;}
    .close-btn{
      background:none;border:none;cursor:pointer;color:#fff;display:flex;align-items:center;
      justify-content:center;padding:4px;border-radius:6px;transition:background .15s;
    }
    .close-btn:hover{background:rgba(255,255,255,.15);}
    .close-btn svg{width:18px;height:18px;stroke:white;fill:none;}
    .messages{flex:1;overflow-y:auto;padding:16px 14px;display:flex;flex-direction:column;gap:10px;}
    .messages::-webkit-scrollbar{width:4px;}
    .messages::-webkit-scrollbar-track{background:transparent;}
    .messages::-webkit-scrollbar-thumb{background:#ddd;border-radius:4px;}
    .msg{max-width:82%;padding:10px 13px;border-radius:14px;font-family:sans-serif;font-size:13.5px;line-height:1.5;word-break:break-word;}
    .msg.user{background:#1a1a1a;color:#fff;align-self:flex-end;border-bottom-right-radius:4px;}
    .msg.assistant{background:#f0f0f0;color:#1a1a1a;align-self:flex-start;border-bottom-left-radius:4px;}
    .msg.error{background:#fff0f0;color:#c0392b;align-self:flex-start;border-bottom-left-radius:4px;}
    .typing{display:flex;align-items:center;gap:5px;padding:12px 14px;background:#f0f0f0;border-radius:14px;border-bottom-left-radius:4px;align-self:flex-start;}
    .typing span{width:7px;height:7px;background:#999;border-radius:50%;animation:bounce .9s infinite ease-in-out;}
    .typing span:nth-child(2){animation-delay:.15s;}
    .typing span:nth-child(3){animation-delay:.3s;}
    @keyframes bounce{0%,80%,100%{transform:translateY(0);}40%{transform:translateY(-6px);}}
    .confirm-row{display:flex;gap:8px;margin-top:6px;flex-wrap:wrap;}
    .confirm-btn{
      padding:7px 13px;border:none;border-radius:8px;font-family:sans-serif;font-size:12.5px;
      cursor:pointer;font-weight:600;transition:opacity .15s;
    }
    .confirm-btn:hover{opacity:.85;}
    .confirm-btn.yes{background:#1a1a1a;color:#fff;}
    .confirm-btn.undo{background:#e8e8e8;color:#1a1a1a;}
    .input-row{
      display:flex;gap:8px;padding:12px 14px;border-top:1px solid #ebebeb;flex-shrink:0;background:#fff;
    }
    .input-row input{
      flex:1;border:1px solid #ddd;border-radius:10px;padding:9px 13px;
      font-family:sans-serif;font-size:13.5px;outline:none;transition:border-color .2s;background:#fafafa;
    }
    .input-row input:focus{border-color:#1a1a1a;background:#fff;}
    .send-btn{
      background:#1a1a1a;color:#fff;border:none;border-radius:10px;padding:9px 15px;
      font-family:sans-serif;font-size:13px;font-weight:600;cursor:pointer;transition:opacity .15s;white-space:nowrap;
    }
    .send-btn:hover{opacity:.8;}
    .send-btn:disabled{opacity:.4;cursor:not-allowed;}
  \`;
  shadow.appendChild(style);

  const panel = document.createElement("div");
  panel.className = "panel hidden";
  panel.innerHTML = \`
    <div class="header">
      <span class="header-title">Chat with us</span>
      <button class="close-btn" aria-label="Close chat">
        <svg viewBox="0 0 24 24" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
    <div class="messages" id="messages"></div>
    <div class="input-row">
      <input type="text" id="chat-input" placeholder="Type a message…" autocomplete="off"/>
      <button class="send-btn" id="send-btn">Send</button>
    </div>
  \`;
  shadow.appendChild(panel);

  const bubble = document.createElement("button");
  bubble.className = "bubble";
  bubble.setAttribute("aria-label", "Open chat");
  bubble.innerHTML = \`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4C2.897 2 2 2.897 2 4v13c0 1.103.897 2 2 2h4l4 4 4-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-2 9h-4v4h-4v-4H6V7h4V3h4v4h4v4z"/>
  </svg>\`;
  shadow.appendChild(bubble);

  let isOpen = false;
  let isWaiting = false;
  const conversation = [];

  const messagesEl = panel.querySelector("#messages");
  const inputEl = panel.querySelector("#chat-input");
  const sendBtn = panel.querySelector("#send-btn");

  function togglePanel() {
    isOpen = !isOpen;
    if (isOpen) {
      panel.classList.remove("hidden");
      panel.classList.add("visible");
      inputEl.focus();
    } else {
      panel.classList.remove("visible");
      panel.classList.add("hidden");
    }
  }

  bubble.addEventListener("click", togglePanel);
  panel.querySelector(".close-btn").addEventListener("click", togglePanel);

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
    const el = document.createElement("div");
    el.className = "typing";
    el.id = "typing-indicator";
    el.innerHTML = "<span></span><span></span><span></span>";
    messagesEl.appendChild(el);
    scrollToBottom();
    return el;
  }

  function removeTyping() {
    const el = shadow.getElementById("typing-indicator");
    if (el) el.remove();
  }

  function scrollToBottom() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
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

  function appendConfirmButtons(pendingChange) {
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
    messagesEl.appendChild(row);
    scrollToBottom();

    yesBtn.addEventListener("click", async function () {
      yesBtn.disabled = true;
      undoBtn.disabled = true;
      row.remove();
      const typing = showTyping();
      setWaiting(true);
      try {
        const res = await fetch(API_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ projectId: PROJECT_ID, message: "confirm", confirmChangeId: pendingChange.id })
        });
        const data = await res.json();
        removeTyping();
        applyDomOperations(data.domOperations);
        appendMessage("assistant", data.reply || "Done!");
        if (data.pendingChange) appendConfirmButtons(data.pendingChange);
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

  function setWaiting(val) {
    isWaiting = val;
    sendBtn.disabled = val;
    inputEl.disabled = val;
  }

  async function sendMessage() {
    const text = inputEl.value.trim();
    if (!text || isWaiting) return;
    inputEl.value = "";

    conversation.push({ role: "user", content: text });
    appendMessage("user", text);

    const typing = showTyping();
    setWaiting(true);

    var pageHtml = document.documentElement.outerHTML.slice(0, 200000);

    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId: PROJECT_ID, message: text, pageHtml: pageHtml })
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      removeTyping();
      applyDomOperations(data.domOperations);
      const reply = data.reply || "";
      conversation.push({ role: "assistant", content: reply });
      appendMessage("assistant", reply);
      if (data.pendingChange) appendConfirmButtons(data.pendingChange);
    } catch (e) {
      removeTyping();
      appendError();
    } finally {
      setWaiting(false);
      inputEl.focus();
    }
  }

  sendBtn.addEventListener("click", sendMessage);
  inputEl.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
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
    *{box-sizing:border-box;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;}
    .bubble-btn{
      width:56px;height:56px;border-radius:50%;background:#1a1a1a;border:none;cursor:pointer;
      display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,0.28);
      transition:transform 0.2s,box-shadow 0.2s;flex-shrink:0;
    }
    .bubble-btn:hover{transform:scale(1.08);box-shadow:0 6px 20px rgba(0,0,0,0.36);}
    .bubble-btn svg{width:28px;height:28px;fill:white;}
    .panel{
      width:360px;height:520px;background:#fff;border-radius:16px;
      box-shadow:0 8px 40px rgba(0,0,0,0.22);display:flex;flex-direction:column;
      margin-bottom:12px;overflow:hidden;
      transform-origin:bottom right;
      animation:slideUp 0.25s cubic-bezier(0.22,1,0.36,1) both;
    }
    @keyframes slideUp{
      from{opacity:0;transform:scale(0.85) translateY(30px);}
      to{opacity:1;transform:scale(1) translateY(0);}
    }
    .panel.closing{
      animation:slideDown 0.2s cubic-bezier(0.55,0,1,0.45) both;
    }
    @keyframes slideDown{
      from{opacity:1;transform:scale(1) translateY(0);}
      to{opacity:0;transform:scale(0.85) translateY(30px);}
    }
    .header{
      background:#1a1a1a;color:#fff;padding:16px 18px;display:flex;
      align-items:center;justify-content:space-between;flex-shrink:0;
    }
    .header-title{font-size:16px;font-weight:600;letter-spacing:0.01em;}
    .close-btn{
      background:none;border:none;cursor:pointer;color:#fff;display:flex;
      align-items:center;justify-content:center;padding:4px;border-radius:6px;
      transition:background 0.15s;
    }
    .close-btn:hover{background:rgba(255,255,255,0.15);}
    .close-btn svg{width:20px;height:20px;fill:white;}
    .messages{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;}
    .messages::-webkit-scrollbar{width:5px;}
    .messages::-webkit-scrollbar-track{background:transparent;}
    .messages::-webkit-scrollbar-thumb{background:#ddd;border-radius:4px;}
    .msg{max-width:82%;padding:10px 14px;border-radius:14px;font-size:14px;line-height:1.5;word-break:break-word;}
    .msg.user{
      align-self:flex-end;background:#1a1a1a;color:#fff;
      border-bottom-right-radius:4px;
    }
    .msg.assistant{
      align-self:flex-start;background:#f0f0f0;color:#1a1a1a;
      border-bottom-left-radius:4px;
    }
    .msg.error{
      align-self:flex-start;background:#fff0f0;color:#c0392b;border:1px solid #fcc;
      border-bottom-left-radius:4px;
    }
    .typing-dots{display:flex;align-items:center;gap:5px;padding:12px 16px;}
    .typing-dots span{
      width:8px;height:8px;border-radius:50%;background:#aaa;
      animation:dot-bounce 1.2s infinite ease-in-out;
    }
    .typing-dots span:nth-child(1){animation-delay:0s;}
    .typing-dots span:nth-child(2){animation-delay:0.2s;}
    .typing-dots span:nth-child(3){animation-delay:0.4s;}
    @keyframes dot-bounce{
      0%,80%,100%{transform:translateY(0);}
      40%{transform:translateY(-8px);}
    }
    .confirm-row{display:flex;gap:8px;margin-top:6px;flex-wrap:wrap;}
    .confirm-btn{
      padding:7px 13px;border-radius:8px;border:none;cursor:pointer;
      font-size:13px;font-weight:600;transition:opacity 0.15s;
    }
    .confirm-btn:hover{opacity:0.82;}
    .confirm-btn.yes{background:#1a1a1a;color:#fff;}
    .confirm-btn.undo{background:#e8e8e8;color:#1a1a1a;}
    .input-row{
      display:flex;gap:8px;padding:12px 14px;border-top:1px solid #ebebeb;flex-shrink:0;
    }
    .input-field{
      flex:1;border:1px solid #ddd;border-radius:10px;padding:9px 13px;
      font-size:14px;outline:none;resize:none;transition:border-color 0.15s;
      font-family:inherit;line-height:1.4;
    }
    .input-field:focus{border-color:#1a1a1a;}
    .send-btn{
      background:#1a1a1a;color:#fff;border:none;border-radius:10px;
      padding:9px 16px;cursor:pointer;font-size:14px;font-weight:600;
      transition:opacity 0.15s;white-space:nowrap;
    }
    .send-btn:hover{opacity:0.82;}
    .send-btn:disabled{opacity:0.45;cursor:not-allowed;}
  \`;
  shadow.appendChild(style);

  let conversation = [];
  let isOpen = false;
  let isWaiting = false;
  let pendingChangeId = null;

  // --- Bubble button ---
  const bubbleBtn = document.createElement("button");
  bubbleBtn.className = "bubble-btn";
  bubbleBtn.setAttribute("aria-label", "Open chat");
  bubbleBtn.innerHTML = \`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10H6v-2h12v2zm0-3H6V7h12v2z"/>
  </svg>\`;
  shadow.appendChild(bubbleBtn);

  let panelEl = null;
  let messagesEl = null;
  let inputField = null;
  let sendBtn = null;

  function formatText(text) {
    if (!text) return "";
    let html = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    // bold
    html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    // newlines
    html = html.replace(/\n/g, "<br>");
    return html;
  }

  function scrollToBottom() {
    if (messagesEl) {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }
  }

  function addMessage(role, text) {
    const div = document.createElement("div");
    div.className = \`msg ${role}\`;
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

  function showTypingDots() {
    const wrap = document.createElement("div");
    wrap.className = "msg assistant";
    wrap.style.padding = "0";
    wrap.innerHTML = \`<div class="typing-dots"><span></span><span></span><span></span></div>\`;
    wrap.dataset.typing = "true";
    messagesEl.appendChild(wrap);
    scrollToBottom();
    return wrap;
  }

  function removeTypingDots() {
    const el = messagesEl.querySelector("[data-typing='true']");
    if (el) el.remove();
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

  function showConfirmButtons(changeId, replyDiv) {
    pendingChangeId = changeId;
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
    replyDiv.appendChild(document.createElement("br"));
    replyDiv.appendChild(row);
    scrollToBottom();

    yesBtn.addEventListener("click", async function () {
      row.remove();
      setWaiting(true);
      const dots = showTypingDots();
      try {
        const res = await fetch(API_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            projectId: PROJECT_ID,
            message: "confirm",
            confirmChangeId: pendingChangeId,
          }),
        });
        const data = await res.json();
        removeTypingDots();
        if (data.domOperations) applyDomOperations(data.domOperations);
        const aDiv = addMessage("assistant", data.reply || "");
        if (data.pendingChange) {
          showConfirmButtons(data.pendingChange.id, aDiv);
        }
        conversation.push({ role: "assistant", content: data.reply || "" });
      } catch (e) {
        removeTypingDots();
        addErrorMessage();
      } finally {
        pendingChangeId = null;
        setWaiting(false);
      }
    });

    undoBtn.addEventListener("click", function () {
      location.reload();
    });
  }

  function setWaiting(val) {
    isWaiting = val;
    if (sendBtn) sendBtn.disabled = val;
    if (inputField) inputField.disabled = val;
  }

  async function sendMessage() {
    if (isWaiting) return;
    const text = inputField.value.trim();
    if (!text) return;
    inputField.value = "";
    inputField.style.height = "";

    conversation.push({ role: "user", content: text });
    addMessage("user", text);
    setWaiting(true);
    const dots = showTypingDots();

    var pageHtml = document.documentElement.outerHTML.slice(0, 200000);

    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectId: PROJECT_ID,
          message: text,
          pageHtml: pageHtml,
        }),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      removeTypingDots();
      if (data.domOperations) applyDomOperations(data.domOperations);
      const aDiv = addMessage("assistant", data.reply || "");
      if (data.pendingChange) {
        showConfirmButtons(data.pendingChange.id, aDiv);
      }
      conversation.push({ role: "assistant", content: data.reply || "" });
    } catch (e) {
      removeTypingDots();
      addErrorMessage();
    } finally {
      setWaiting(false);
    }
  }

  function buildPanel() {
    const panel = document.createElement("div");
    panel.className = "panel";

    // Header
    const header = document.createElement("div");
    header.className = "header";
    const title = document.createElement("span");
    title.className = "header-title";
    title.textContent = "Chat with us";
    const closeBtn = document.createElement("button");
    closeBtn.className = "close-btn";
    closeBtn.setAttribute("aria-label", "Close chat");
    closeBtn.innerHTML = \`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>\`;
    header.appendChild(title);
    header.appendChild(closeBtn);
    panel.appendChild(header);

    // Messages
    messagesEl = document.createElement("div");
    messagesEl.className = "messages";
    panel.appendChild(messagesEl);

    // Re-render stored conversation
    conversation.forEach(function (` }} />
      </main>
  )
}
