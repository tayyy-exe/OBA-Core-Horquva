'use client';

type AgentMessageProps = {
  role: 'user' | 'assistant';
  content: string;
};

export function AgentMessage({ role, content }: AgentMessageProps) {
  const isUser = role === 'user';

  return (
    <div
      className={`mb-6 flex w-full ${
        isUser ? 'justify-end' : 'justify-start'
      }`}
    >
      <div
        className={`flex max-w-[85%] items-start gap-3 ${
          isUser ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
            isUser
              ? 'bg-[var(--accent-dim)] text-[var(--accent)]'
              : 'bg-[var(--bg-hover)] text-[var(--text-primary)]'
          }`}
        >
          {isUser ? 'Y' : 'AI'}
        </div>

        <div
          className={`min-w-0 rounded-2xl px-4 py-3 ${
            isUser
              ? 'rounded-tr-sm border border-[var(--accent-border)] bg-[var(--accent-dim)]'
              : 'rounded-tl-sm border border-[var(--border-subtle)] bg-[var(--bg-elevated)]'
          }`}
        >
          <p
            className={`mb-1 text-xs font-medium ${
              isUser
                ? 'text-[var(--accent)]'
                : 'text-[var(--text-secondary)]'
            }`}
          >
            {isUser ? 'You' : 'OBA Agent'}
          </p>

          <p className="whitespace-pre-wrap break-words text-sm leading-6 text-[var(--text-primary)]">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AgentMessage;