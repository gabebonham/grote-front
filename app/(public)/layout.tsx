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
    .bubble:hover{transform:scale(1.08);box-shadow:0 6px 20px rgba(0,0,0,0.35);}
    .bubble svg{width:26px;height:26px;fill:white;}
    .panel{width:360px;height:520px;background:#fff;border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,0.18);display:flex;flex-direction:column;overflow:hidden;margin-bottom:12px;transform-origin:bottom right;transition:transform 0.28s cubic-bezier(0.34,1.56,0.64,1),opacity 0.22s ease;transform:scale(0.85) translateY(20px);opacity:0;pointer-events:none;}
    .panel.open{transform:scale(1) translateY(0);opacity:1;pointer-events:all;}
    .header{background:#1a1a1a;color:#fff;padding:0 16px;height:52px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;}
    .header-title{font-family:system-ui,-apple-system,sans-serif;font-size:15px;font-weight:600;letter-spacing:0.01em;}
    .close-btn{background:none;border:none;cursor:pointer;color:#fff;display:flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;transition:background 0.15s;}
    .close-btn:hover{background:rgba(255,255,255,0.15);}
    .close-btn svg{width:18px;height:18px;fill:white;}
    .messages{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;font-family:system-ui,-apple-system,sans-serif;font-size:14px;line-height:1.5;}
    .messages::-webkit-scrollbar{width:4px;}
    .messages::-webkit-scrollbar-track{background:transparent;}
    .messages::-webkit-scrollbar-thumb{background:#ddd;border-radius:4px;}
    .msg{max-width:82%;padding:9px 13px;border-radius:14px;word-break:break-word;}
    .msg.user{align-self:flex-end;background:#1a1a1a;color:#fff;border-bottom-right-radius:4px;}
    .msg.assistant{align-self:flex-start;background:#f0f0f0;color:#1a1a1a;border-bottom-left-radius:4px;}
    .msg.error{align-self:flex-start;background:#fff0f0;color:#c0392b;border:1px solid #fcc;border-bottom-left-radius:4px;}
    .typing{align-self:flex-start;background:#f0f0f0;padding:10px 16px;border-radius:14px;border-bottom-left-radius:4px;display:flex;align-items:center;gap:5px;}
    .dot{width:7px;height:7px;border-radius:50%;background:#999;animation:bounce 1.2s infinite ease-in-out;}
    .dot:nth-child(1){animation-delay:0s;}
    .dot:nth-child(2){animation-delay:0.2s;}
    .dot:nth-child(3){animation-delay:0.4s;}
    @keyframes bounce{0%,60%,100%{transform:translateY(0);}30%{transform:translateY(-6px);}}
    .input-row{display:flex;align-items:center;padding:10px 12px;border-top:1px solid #ececec;gap:8px;flex-shrink:0;background:#fff;}
    .input-field{flex:1;border:1px solid #e0e0e0;border-radius:22px;padding:9px 14px;font-size:14px;font-family:system-ui,-apple-system,sans-serif;outline:none;resize:none;transition:border-color 0.15s;background:#fafafa;color:#1a1a1a;line-height:1.4;}
    .input-field:focus{border-color:#1a1a1a;background:#fff;}
    .send-btn{width:38px;height:38px;border-radius:50%;background:#1a1a1a;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background 0.15s,transform 0.15s;}
    .send-btn:hover{background:#333;transform:scale(1.07);}
    .send-btn:disabled{background:#ccc;cursor:not-allowed;transform:none;}
    .send-btn svg{width:17px;height:17px;fill:white;margin-left:2px;}
    .confirm-row{display:flex;gap:8px;margin-top:6px;flex-wrap:wrap;}
    .confirm-btn{padding:7px 13px;border-radius:10px;border:none;cursor:pointer;font-size:13px;font-family:system-ui,-apple-system,sans-serif;font-weight:600;transition:opacity 0.15s,transform 0.15s;}
    .confirm-btn:hover{opacity:0.85;transform:scale(1.03);}
    .confirm-btn.pr{background:#1a1a1a;color:#fff;}
    .confirm-btn.undo{background:#f0f0f0;color:#1a1a1a;}
  \`;
  shadow.appendChild(style);

  const panel = document.createElement('div');
  panel.className = 'panel';

  const header = document.createElement('div');
  header.className = 'header';
  header.innerHTML = \`<span class="header-title">Chat with us</span><button class="close-btn" aria-label="Close chat"><svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="white" stroke-width="2.2" stroke-linecap="round" fill="none"/></svg></button>\`;

  const messagesEl = document.createElement('div');
  messagesEl.className = 'messages';

  const inputRow = document.createElement('div');
  inputRow.className = 'input-row';

  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.className = 'input-field';
  inputField.placeholder = 'Type a message...';
  inputField.setAttribute('autocomplete', 'off');

  const sendBtn = document.createElement('button');
  sendBtn.className = 'send-btn';
  sendBtn.setAttribute('aria-label', 'Send');
  sendBtn.innerHTML = \`<svg viewBox="0 0 24 24"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>\`;

  inputRow.appendChild(inputField);
  inputRow.appendChild(sendBtn);

  panel.appendChild(header);
  panel.appendChild(messagesEl);
  panel.appendChild(inputRow);

  const bubble = document.createElement('button');
  bubble.className = 'bubble';
  bubble.setAttribute('aria-label', 'Open chat');
  bubble.innerHTML = \`<svg viewBox="0 0 24 24"><path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z"/></svg>\`;

  shadow.appendChild(panel);
  shadow.appendChild(bubble);

  let isOpen = false;
  let isWaiting = false;
  const conversation = [];

  function togglePanel() {
    isOpen = !isOpen;
    panel.classList.toggle('open', isOpen);
    if (isOpen) inputField.focus();
  }

  bubble.addEventListener('click', togglePanel);
  header.querySelector('.close-btn').addEventListener('click', togglePanel);

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
    div.className = 'msg ' + role;
    div.innerHTML = formatText(text);
    messagesEl.appendChild(div);
    scrollToBottom();
    return div;
  }

  function appendError(text) {
    const div = document.createElement('div');
    div.className = 'msg error';
    div.textContent = text;
    messagesEl.appendChild(div);
    scrollToBottom();
  }

  function showTyping() {
    const div = document.createElement('div');
    div.className = 'typing';
    div.id = 'typing-indicator';
    div.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
    messagesEl.appendChild(div);
    scrollToBottom();
    return div;
  }

  function removeTyping() {
    const t = shadow.querySelector('#typing-indicator');
    if (t) t.remove();
  }

  function scrollToBottom() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function setWaiting(val) {
    isWaiting = val;
    sendBtn.disabled = val;
    inputField.disabled = val;
  }

  function applyDomOperations(ops) {
    if (!ops || !Array.isArray(ops)) return;
    ops.forEach(function(op) {
      try {
        const el = document.querySelector(op.selector);
        if (!el) return;
        if (op.op === 'replace_content') { el.innerHTML = op.html; }
        else if (op.op === 'replace_attr') { el.setAttribute(op.attr, op.value); }
        else if (op.op === 'replace_style') { Object.assign(el.style, op.styles); }
        else if (op.op === 'add_class') { el.classList.add(...(Array.isArray(op.classes) ? op.classes : [op.classes])); }
        else if (op.op === 'remove_class') { el.classList.remove(...(Array.isArray(op.classes) ? op.classes : [op.classes])); }
        else if (op.op === 'insert_after') { el.insertAdjacentHTML('afterend', op.html); }
        else if (op.op === 'remove') { el.remove(); }
      } catch(e) {}
    });
  }

  function showConfirmButtons(pendingChange, assistantMsgEl) {
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
    assistantMsgEl.appendChild(document.createElement('br'));
    assistantMsgEl.appendChild(row);
    scrollToBottom();

    prBtn.addEventListener('click', function() {
      row.remove();
      sendConfirm(pendingChange.confirmChangeId);
    });

    undoBtn.addEventListener('click', function() {
      location.reload();
    });
  }

  async function sendConfirm(confirmChangeId) {
    setWaiting(true);
    const typingEl = showTyping();
    try {
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId: PROJECT_ID, message: 'confirm', confirmChangeId })
      });
      removeTyping();
      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      if (data.domOperations) applyDomOperations(data.domOperations);
      const msgEl = appendMessage('assistant', data.reply || '');
      if (data.pendingChange) showConfirmButtons(data.pendingChange, msgEl);
    } catch(e) {
      removeTyping();
      appendError('Sorry, something went wrong. Please try again.');
    } finally {
      setWaiting(false);
    }
  }

  async function sendMessage() {
    const text = inputField.value.trim();
    if (!text || isWaiting) return;
    inputField.value = '';
    conversation.push({ role: 'user', content: text });
    appendMessage('user', text);
    setWaiting(true);
    const typingEl = showTyping();
    var pageHtml = document.documentElement.outerHTML.slice(0, 200000);
    try {
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId: PROJECT_ID, message: text, pageHtml })
      });
      removeTyping();
      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      if (data.domOperations) applyDomOperations(data.domOperations);
      const reply = data.reply || '';
      conversation.push({ role: 'assistant', content: reply });
      const msgEl = appendMessage('assistant', reply);
      if (data.pendingChange) showConfirmButtons(data.pendingChange, msgEl);
    } catch(e) {
      removeTyping();
      appendError('Sorry, something went wrong. Please try again.');
    } finally {
      setWaiting(false);
      inputField.focus();
    }
  }

  sendBtn.addEventListener('click', sendMessage);
  inputField.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  appendMessage('assistant', 'Hi there! 👋 How can I help you today?');
})();` }} />
      </main>
  )
}
