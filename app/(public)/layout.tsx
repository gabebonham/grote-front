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
      </main>
  )
}
