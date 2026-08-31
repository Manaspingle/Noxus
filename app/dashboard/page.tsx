import Link from 'next/link';
import {
  Users,
  FolderGit2,
  Trophy,
  TrendingUp,
  ArrowRight,
  Sparkles,
  ThumbsUp,
  GitBranch,
  Calendar,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { currentStudent, projects, hackathons, messages } from '@/lib/data';

export default function DashboardPage() {
  const student = currentStudent;
  const recentProjects = projects.slice(0, 3);
  const upcomingHackathon = hackathons[0];
  const recentMessages = messages.slice(0, 3);

  const stats = [
    { icon: Users, label: 'Connections', value: student.connections, change: '+12 this week', color: 'text-teal-600 bg-teal-500/10' },
    { icon: FolderGit2, label: 'Active Projects', value: 3, change: '2 in progress', color: 'text-sky-600 bg-sky-500/10' },
    { icon: Trophy, label: 'Hackathons', value: 4, change: '1 upcoming', color: 'text-amber-600 bg-amber-500/10' },
    { icon: TrendingUp, label: 'Profile Views', value: 287, change: '+34% this week', color: 'text-violet-600 bg-violet-500/10' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Welcome back, {student.name.split(' ')[0]}!
          </h1>
          <p className="mt-1 text-muted-foreground">
            Here's what's happening in your network today.
          </p>
        </div>
        <Button asChild className="shadow-lg shadow-primary/25">
          <Link href="/dashboard/discover">
            <Sparkles className="mr-2 h-4 w-4" />
            Find Opportunities
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-5">
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.color}`}>
              <stat.icon className="h-5 w-5" />
            </div>
            <div className="mt-3 font-display text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
            <p className="mt-1 text-xs font-medium text-primary">{stat.change}</p>
          </Card>
        ))}
      </div>

      {/* AI Match banner */}
      <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-r from-primary/5 via-teal-500/5 to-transparent p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold">AI Match: 3 new recommendations</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Based on your skills in TypeScript, React, and Python — we found projects and mentors that fit.
              </p>
            </div>
          </div>
          <Button size="sm" className="shrink-0" asChild>
            <Link href="/dashboard/discover">
              View Matches
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent projects */}
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold">Your Projects</h2>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/projects">View all</Link>
            </Button>
          </div>
          <div className="mt-4 space-y-3">
            {recentProjects.map((project) => (
              <div
                key={project.id}
                className="flex items-center gap-4 rounded-xl border border-border/60 p-3 transition-colors hover:border-primary/30"
              >
                <div
                  className="h-12 w-12 shrink-0 rounded-lg"
                  style={{ background: project.cover }}
                />
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold">{project.title}</h3>
                  <p className="truncate text-xs text-muted-foreground">
                    {project.techStack.slice(0, 3).join(' · ')}
                  </p>
                </div>
                <div className="hidden items-center gap-3 text-xs text-muted-foreground sm:flex">
                  <span className="flex items-center gap-1">
                    <GitBranch className="h-3 w-3" />
                    {project.collaborators}
                  </span>
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="h-3 w-3" />
                    {project.upvotes}
                  </span>
                </div>
                <Badge
                  variant="outline"
                  className={`font-normal ${
                    project.status === 'in-progress'
                      ? 'bg-sky-500/15 text-sky-600 border-sky-500/30'
                      : project.status === 'completed'
                      ? 'bg-emerald-500/15 text-emerald-600 border-emerald-500/30'
                      : 'bg-amber-500/15 text-amber-600 border-amber-500/30'
                  }`}
                >
                  {project.status === 'in-progress' ? 'Active' : project.status === 'completed' ? 'Done' : 'Recruiting'}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent messages */}
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold">Messages</h2>
            <Badge variant="secondary" className="font-normal">2 new</Badge>
          </div>
          <div className="mt-4 space-y-1">
            {recentMessages.map((msg) => (
              <div
                key={msg.id}
                className="flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-muted/50"
              >
                <div className="relative">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={msg.avatar} alt={msg.name} />
                    <AvatarFallback>{msg.name[0]}</AvatarFallback>
                  </Avatar>
                  {msg.online && (
                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-background bg-emerald-500" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="truncate text-sm font-medium">{msg.name}</p>
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                  <p className="truncate text-xs text-muted-foreground">{msg.preview}</p>
                </div>
                {msg.unread && <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />}
              </div>
            ))}
          </div>
          <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
            <Link href="/dashboard/messages">Open Messages</Link>
          </Button>
        </Card>
      </div>

      {/* Upcoming hackathon + Profile completeness */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="overflow-hidden p-0">
          <div
            className="relative h-24"
            style={{ background: upcomingHackathon.banner }}
          >
            <div className="absolute inset-0 bg-dots opacity-20" />
          </div>
          <div className="p-5">
            <Badge variant="outline" className="mb-2 font-normal bg-amber-500/15 text-amber-600 border-amber-500/30">
              <Clock className="mr-1 h-3 w-3" />
              {upcomingHackathon.daysLeft} days left
            </Badge>
            <h3 className="font-display text-base font-semibold">{upcomingHackathon.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{upcomingHackathon.date} · {upcomingHackathon.location}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {upcomingHackathon.registrations.toLocaleString()} registered
              </span>
              <Button size="sm">Register</Button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="font-display text-lg font-semibold">Profile Completeness</h2>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Your profile is 85% complete</span>
              <span className="font-semibold text-primary">85%</span>
            </div>
            <Progress value={85} className="mt-2 h-2" />
          </div>
          <div className="mt-4 space-y-2">
            {[
              { label: 'Add profile photo', done: true },
              { label: 'Add bio and skills', done: true },
              { label: 'Add at least 1 project', done: true },
              { label: 'Connect GitHub account', done: false },
              { label: 'Add portfolio link', done: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm">
                {item.done ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                ) : (
                  <div className="h-4 w-4 rounded-full border-2 border-muted-foreground/30" />
                )}
                <span className={item.done ? 'text-muted-foreground line-through' : 'text-foreground'}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
