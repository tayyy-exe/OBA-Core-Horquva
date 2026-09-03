'use client';

import { useState } from 'react';

type AgentComposerProps = {
  onSend: (message: string) => void;
};

export function AgentComposer({ onSend }: AgentComposerProps) {
  const [message, setMessage] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage) return;

    onSend(trimmedMessage);
    setMessage('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-2"
    >
      <textarea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Ask something about your organization..."
        rows={2}
        className="min-h-[44px] w-full resize-none bg-transparent px-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none"
      />

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={!message.trim()}
          className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default AgentComposer;