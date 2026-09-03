'use client';

import { useRef, useState } from 'react';
import { ArrowUp, Mail } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const emailAddress = 'briansun@alumni.ubc.ca';
const subject = 'Message from briansun.me';

export function ContactComposer() {
  const [message, setMessage] = useState('');
  const [chooserOpen, setChooserOpen] = useState(false);
  const messageRef = useRef<HTMLTextAreaElement>(null);

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
    <>
      <div className="contact-actions">
        <button
          className="primary-action"
          type="button"
          onClick={() => messageRef.current?.focus()}
        >
          <Mail aria-hidden="true" /> Contact
        </button>
      </div>

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
          disabled={!message.trim()}
        >
          <ArrowUp aria-hidden="true" />
        </button>
      </form>
      <p className="composer-hint">Feel free to send me a message.</p>

      <Dialog open={chooserOpen} onOpenChange={setChooserOpen}>
        <DialogContent className="send-dialog">
          <DialogHeader>
            <DialogTitle>Where do you want to send this?</DialogTitle>
            <DialogDescription className="sr-only">
              Choose Gmail in your browser or your device&apos;s default mail
              application.
            </DialogDescription>
          </DialogHeader>
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
        </DialogContent>
      </Dialog>
    </>
  );
}
