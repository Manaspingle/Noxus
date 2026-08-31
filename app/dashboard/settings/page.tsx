'use client';

import { useState } from 'react';
import { User, Bell, Shield, Palette, Globe, Check } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { currentStudent } from '@/lib/data';

const tabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'privacy', label: 'Privacy', icon: Shield },
  { id: 'appearance', label: 'Appearance', icon: Palette },
] as const;

type TabId = typeof tabs[number]['id'];

export default function DashboardSettingsPage() {
  const [activeTab, setActiveTab] = useState<TabId>('profile');
  const [notifications, setNotifications] = useState({
    messages: true,
    connections: true,
    projectUpdates: true,
    hackathonAlerts: false,
    mentorReminders: true,
    weeklyDigest: false,
  });
  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showOnline: true,
    allowMessages: true,
    showInSearch: true,
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Settings</h1>
        <p className="mt-1 text-muted-foreground">Manage your account and preferences.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Settings nav */}
        <Card className="h-fit p-4 lg:col-span-1">
          <nav className="flex gap-1 lg:flex-col">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </Card>

        {/* Settings content */}
        <div className="lg:col-span-3">
          {activeTab === 'profile' && (
            <Card className="p-6">
              <h2 className="font-display text-lg font-semibold">Profile Information</h2>
              <p className="mt-1 text-sm text-muted-foreground">Update your personal details and public profile.</p>
              <Separator className="my-6" />

              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={currentStudent.avatar} alt={currentStudent.name} />
                  <AvatarFallback className="text-2xl">{currentStudent.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" size="sm">Change Photo</Button>
                  <p className="mt-2 text-xs text-muted-foreground">JPG, PNG or GIF. Max 2MB.</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">Full Name</label>
                  <Input defaultValue={currentStudent.name} className="mt-1.5" />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input defaultValue={currentStudent.email} className="mt-1.5" />
                </div>
                <div>
                  <label className="text-sm font-medium">College</label>
                  <Input defaultValue={currentStudent.college} className="mt-1.5" />
                </div>
                <div>
                  <label className="text-sm font-medium">Major</label>
                  <Input defaultValue={currentStudent.major} className="mt-1.5" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium">Bio</label>
                  <textarea
                    defaultValue={currentStudent.bio}
                    rows={3}
                    className="mt-1.5 flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button className="shadow-lg shadow-primary/25">
                  <Check className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </Card>
          )}

          {activeTab === 'notifications' && (
            <Card className="p-6">
              <h2 className="font-display text-lg font-semibold">Notification Preferences</h2>
              <p className="mt-1 text-sm text-muted-foreground">Choose what updates you want to receive.</p>
              <Separator className="my-6" />
              <div className="space-y-1">
                {[
                  { key: 'messages', label: 'Direct Messages', desc: 'When someone sends you a message' },
                  { key: 'connections', label: 'New Connections', desc: 'When someone connects with you' },
                  { key: 'projectUpdates', label: 'Project Updates', desc: 'Comments and upvotes on your projects' },
                  { key: 'hackathonAlerts', label: 'Hackathon Alerts', desc: 'New hackathons matching your interests' },
                  { key: 'mentorReminders', label: 'Mentor Session Reminders', desc: 'Before your scheduled sessions' },
                  { key: 'weeklyDigest', label: 'Weekly Digest', desc: 'A summary of your week, every Monday' },
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-muted/50">
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                    <Switch
                      checked={notifications[item.key as keyof typeof notifications]}
                      onCheckedChange={(c) => setNotifications({ ...notifications, [item.key]: c })}
                    />
                  </div>
                ))}
              </div>
            </Card>
          )}

          {activeTab === 'privacy' && (
            <Card className="p-6">
              <h2 className="font-display text-lg font-semibold">Privacy & Visibility</h2>
              <p className="mt-1 text-sm text-muted-foreground">Control who can see and interact with your profile.</p>
              <Separator className="my-6" />
              <div className="space-y-1">
                {[
                  { key: 'profileVisible', label: 'Public Profile', desc: 'Your profile is visible to all NOXUS users' },
                  { key: 'showOnline', label: 'Show Online Status', desc: 'Display when you are active' },
                  { key: 'allowMessages', label: 'Allow Direct Messages', desc: 'Let anyone send you messages' },
                  { key: 'showInSearch', label: 'Appear in Search', desc: 'Show up in discovery and search results' },
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-muted/50">
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                    <Switch
                      checked={privacy[item.key as keyof typeof privacy]}
                      onCheckedChange={(c) => setPrivacy({ ...privacy, [item.key]: c })}
                    />
                  </div>
                ))}
              </div>
            </Card>
          )}

          {activeTab === 'appearance' && (
            <Card className="p-6">
              <h2 className="font-display text-lg font-semibold">Appearance</h2>
              <p className="mt-1 text-sm text-muted-foreground">Customize how NOXUS looks for you.</p>
              <Separator className="my-6" />
              <div>
                <label className="text-sm font-medium">Theme</label>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {[
                    { name: 'Light', bg: 'bg-background border-2', active: true },
                    { name: 'Dark', bg: 'bg-neutral-900', active: false },
                    { name: 'System', bg: 'bg-gradient-to-br from-background to-neutral-900', active: false },
                  ].map((theme) => (
                    <button
                      key={theme.name}
                      className={`rounded-xl border-2 p-4 text-center transition-all ${
                        theme.active ? 'border-primary shadow-lg shadow-primary/10' : 'border-border hover:border-primary/40'
                      }`}
                    >
                      <div className={`mx-auto h-12 w-12 rounded-lg ${theme.bg}`} />
                      <p className="mt-2 text-sm font-medium">{theme.name}</p>
                      {theme.active && (
                        <Badge variant="secondary" className="mt-1 text-xs">Active</Badge>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <label className="text-sm font-medium">Accent Color</label>
                <div className="mt-3 flex gap-3">
                  {['bg-primary', 'bg-blue-500', 'bg-emerald-500', 'bg-amber-500', 'bg-rose-500'].map((color, i) => (
                    <button
                      key={color}
                      className={`h-10 w-10 rounded-full ${color} ring-offset-2 transition-all hover:scale-110 ${
                        i === 0 ? 'ring-2 ring-primary ring-offset-background' : ''
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
