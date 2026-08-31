'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Compass,
  User,
  FolderGit2,
  MessageSquare,
  Settings,
  Rocket,
  Menu,
  X,
  LogOut,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { currentStudent } from '@/lib/data';

const iconMap = {
  LayoutDashboard,
  Compass,
  User,
  FolderGit2,
  MessageSquare,
  Settings,
};

const navItems = [
  { label: 'Overview', href: '/dashboard', icon: 'LayoutDashboard' as const },
  { label: 'Discover', href: '/dashboard/discover', icon: 'Compass' as const },
  { label: 'My Profile', href: '/profile', icon: 'User' as const },
  { label: 'My Projects', href: '/dashboard/projects', icon: 'FolderGit2' as const },
  { label: 'Messages', href: '/dashboard/messages', icon: 'MessageSquare' as const, badge: 2 },
  { label: 'Settings', href: '/dashboard/settings', icon: 'Settings' as const },
];

export function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const NavContent = () => (
    <>
      <Link href="/" className="flex items-center gap-2 px-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sidebar-accent text-white shadow-lg shadow-sidebar-accent/30">
          <Rocket className="h-5 w-5" />
        </div>
        <span className="font-display text-xl font-bold tracking-tight text-sidebar-foreground">
          NOXUS
        </span>
      </Link>

      <nav className="mt-8 flex flex-1 flex-col gap-1">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          const active =
            pathname === item.href ||
            (item.href !== '/dashboard' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all',
                active
                  ? 'bg-sidebar-accent text-white shadow-lg shadow-sidebar-accent/20'
                  : 'text-sidebar-muted-foreground hover:bg-sidebar-muted hover:text-sidebar-foreground'
              )}
            >
              <Icon
                className={cn(
                  'h-[18px] w-[18px] transition-transform group-hover:scale-110',
                  active ? 'text-white' : 'text-sidebar-muted-foreground'
                )}
              />
              {item.label}
              {item.badge && (
                <span className="ml-auto flex h-5 min-w-[20px] items-center justify-center rounded-full bg-sidebar-accent px-1.5 text-xs font-semibold text-white">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-3">
        <div className="rounded-xl bg-sidebar-muted/60 p-4">
          <div className="flex items-center gap-2 text-sidebar-foreground">
            <Sparkles className="h-4 w-4 text-sidebar-accent" />
            <span className="text-sm font-semibold">AI Match</span>
          </div>
          <p className="mt-1.5 text-xs text-sidebar-muted-foreground">
            3 new project matches based on your skills.
          </p>
          <Button
            size="sm"
            className="mt-3 w-full bg-sidebar-accent text-white hover:bg-sidebar-accent/90"
            asChild
          >
            <Link href="/dashboard/discover">View matches</Link>
          </Button>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-sidebar-border p-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src={currentStudent.avatar} alt={currentStudent.name} />
            <AvatarFallback>{currentStudent.name[0]}</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-sidebar-foreground">
              {currentStudent.name}
            </p>
            <p className="truncate text-xs text-sidebar-muted-foreground">
              {currentStudent.college}
            </p>
          </div>
          <button
            className="text-sidebar-muted-foreground transition-colors hover:text-sidebar-foreground"
            aria-label="Sign out"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile top bar */}
      <div className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-border bg-background px-4 lg:hidden">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Rocket className="h-4 w-4" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">NOXUS</span>
        </Link>
        <button
          onClick={() => setMobileOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 flex h-full w-72 flex-col bg-sidebar p-5">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute right-4 top-4 text-sidebar-muted-foreground"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
            <NavContent />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col bg-sidebar p-5 lg:flex">
        <NavContent />
      </aside>
    </>
  );
}
