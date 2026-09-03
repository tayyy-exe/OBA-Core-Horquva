'use client';

import { useState } from 'react';
import AgentMessage from './AgentMessage';
import AgentComposer from './AgentComposer';

type Message = {
  id: number;
  role: 'user' | 'assistant';
  content: string;
};

const startingMessages: Message[] = [
  {
    id: 1,
    role: 'user',
    content: "What's our biggest organizational risk?",
  },
  {
    id: 2,
    role: 'assistant',
    content:
      'Ask me a question about your organization and I’ll show the relevant analysis here.',
  },
];

export function AgentPanel() {
  const [messages, setMessages] = useState<Message[]>(startingMessages);

  function handleSend(message: string) {
    const newMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: message,
    };

    setMessages((currentMessages) => [
      ...currentMessages,
      newMessage,
    ]);
  }

  return (
    <section className="flex h-full w-[400px] shrink-0 flex-col border-l border-[var(--border-subtle)] bg-[var(--bg-surface)]">
      {/* Header */}
      <header className="border-b border-[var(--border-subtle)] px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="live-dot" />

          <div>
            <h2 className="text-base font-semibold text-[var(--text-primary)]">
              OBA Agent
            </h2>

            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              Executive organizational assistant
            </p>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="mx-auto w-full">
          {messages.map((message) => (
            <AgentMessage
              key={message.id}
              role={message.role}
              content={message.content}
            />
          ))}
        </div>
      </div>

      {/* Composer */}
      <footer className="border-t border-[var(--border-subtle)] p-4">
        <div className="mx-auto w-full">
          <AgentComposer onSend={handleSend} />
        </div>
      </footer>
    </section>
  );
}

export default AgentPanel;