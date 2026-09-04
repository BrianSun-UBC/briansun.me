'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { ArrowUp, Mail, X } from 'lucide-react';

const emailAddress = 'briansun@alumni.ubc.ca';
const subject = 'Message from briansun.me';

export function ContactComposer() {
  const [message, setMessage] = useState('');
  const [chooserOpen, setChooserOpen] = useState(false);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    const messageField = messageRef.current;

    if (!messageField) return;

    messageField.style.height = 'auto';
    messageField.style.height = `${messageField.scrollHeight}px`;
  }, [message]);

  function showSendOptions() {
    if (!message.trim()) {
      messageRef.current?.focus();
      return;
    }
    setChooserOpen(true);
  }

  function sendWith(client: 'gmail' | 'default') {
    const encodedSubject = encodeURIComponent(subject);
    const encodedMessage = encodeURIComponent(message.trim());

    if (client === 'gmail') {
      const gmailUrl =
        `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}` +
        `&su=${encodedSubject}&body=${encodedMessage}`;
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedMessage}`;
    }

    setChooserOpen(false);
  }

  return (
    <div className="contact-composer-shell">
      <div className="contact-actions">
        <button
          className="primary-action"
          type="button"
          onClick={() => messageRef.current?.focus()}
        >
          <Mail aria-hidden="true" /> Contact
        </button>
      </div>

      {chooserOpen ? (
        <dialog
          open
          className="send-panel"
          id="send-options"
          aria-labelledby="send-options-title"
          onKeyDown={(event) => {
            if (event.key === 'Escape') setChooserOpen(false);
          }}
        >
          <div className="send-panel-heading">
            <h3 id="send-options-title">Where do you want to send this?</h3>
            <button
              className="send-panel-close"
              type="button"
              aria-label="Close send options"
              onClick={() => setChooserOpen(false)}
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <div className="send-options">
            <button type="button" onClick={() => sendWith('gmail')}>
              <span className="option-dot" aria-hidden="true" />
              Gmail web client
            </button>
            <button type="button" onClick={() => sendWith('default')}>
              <span className="option-dot" aria-hidden="true" />
              Default mail app
            </button>
          </div>
        </dialog>
      ) : null}

      <form
        className="message-composer"
        onSubmit={(event) => {
          event.preventDefault();
          showSendOptions();
        }}
      >
        <label className="sr-only" htmlFor="contact-message">
          Message for Brian
        </label>
        <textarea
          id="contact-message"
          ref={messageRef}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Write Brian a message..."
          rows={1}
          required
        />
        <button
          className="composer-send"
          type="submit"
          aria-label="Choose how to send this message"
          aria-controls="send-options"
          aria-expanded={chooserOpen}
          disabled={!message.trim()}
        >
          <ArrowUp aria-hidden="true" />
        </button>
      </form>
      <p className="composer-hint">Feel free to send me a message.</p>
    </div>
  );
}
