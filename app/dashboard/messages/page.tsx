'use client';

import { useState } from 'react';
import { Search, Send, Phone, Video, Info } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { messages } from '@/lib/data';

export default function DashboardMessagesPage() {
  const [selectedId, setSelectedId] = useState(messages[0].id);
  const [draft, setDraft] = useState('');
  const selected = messages.find((m) => m.id === selectedId) || messages[0];

  const chatMessages = [
    { sender: 'them', text: selected.preview, time: '2m ago' },
    { sender: 'me', text: 'That sounds great! I\'d love to hear more about what you have in mind.', time: '1m ago' },
    { sender: 'them', text: 'Perfect. Let\'s set up a call this week to discuss the architecture.', time: '30s ago' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Messages</h1>
        <p className="mt-1 text-muted-foreground">Stay connected with your network.</p>
      </div>

      <Card className="grid h-[calc(100vh-16rem)] grid-cols-1 overflow-hidden p-0 sm:grid-cols-3 lg:grid-cols-4">
        {/* Conversation list */}
        <div className="border-r border-border/60 sm:col-span-1 lg:col-span-1">
          <div className="border-b border-border/60 p-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search messages..." className="h-9 pl-9 text-sm" />
            </div>
          </div>
          <div className="overflow-y-auto scrollbar-thin" style={{ maxHeight: 'calc(100% - 57px)' }}>
            {messages.map((msg) => (
              <button
                key={msg.id}
                onClick={() => setSelectedId(msg.id)}
                className={cn(
                  'flex w-full items-start gap-3 border-b border-border/40 p-3 text-left transition-colors hover:bg-muted/50',
                  selectedId === msg.id && 'bg-primary/5'
                )}
              >
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={msg.avatar} alt={msg.name} />
                    <AvatarFallback>{msg.name[0]}</AvatarFallback>
                  </Avatar>
                  {msg.online && (
                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-background bg-emerald-500" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="truncate text-sm font-semibold">{msg.name}</p>
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                  <p className="truncate text-xs text-muted-foreground">{msg.preview}</p>
                </div>
                {msg.unread && <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />}
              </button>
            ))}
          </div>
        </div>

        {/* Chat panel */}
        <div className="flex flex-col sm:col-span-2 lg:col-span-3">
          {/* Chat header */}
          <div className="flex items-center justify-between border-b border-border/60 p-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={selected.avatar} alt={selected.name} />
                <AvatarFallback>{selected.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">{selected.name}</p>
                <p className="text-xs text-muted-foreground">
                  {selected.online ? 'Online now' : 'Offline'}
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Info className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto scrollbar-thin p-4">
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                className={cn('flex', msg.sender === 'me' ? 'justify-end' : 'justify-start')}
              >
                <div
                  className={cn(
                    'max-w-[75%] rounded-2xl px-4 py-2.5 text-sm',
                    msg.sender === 'me'
                      ? 'rounded-br-sm bg-primary text-primary-foreground'
                      : 'rounded-bl-sm bg-muted text-foreground'
                  )}
                >
                  <p>{msg.text}</p>
                  <p className={cn(
                    'mt-1 text-xs',
                    msg.sender === 'me' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  )}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-border/60 p-4">
            <form
              onSubmit={(e) => { e.preventDefault(); setDraft(''); }}
              className="flex items-center gap-2"
            >
              <Input
                placeholder="Type a message..."
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={!draft.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
}
