'use client';

import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Users, FolderGit2, Trophy, GraduationCap, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { PeerCard } from '@/components/peer-card';
import { ProjectCard } from '@/components/project-card';
import { HackathonCard } from '@/components/hackathon-card';
import { MentorCard } from '@/components/mentor-card';
import { peers, projects, hackathons, mentors } from '@/lib/data';

const filterOptions: Record<string, string[]> = {
  peers: ['All Years', '1st Year', '2nd Year', '3rd Year', '4th Year'],
  projects: ['All', 'Looking for Team', 'In Progress', 'Completed'],
  hackathons: ['All', 'In-Person', 'Hybrid', 'Online'],
  mentors: ['All', 'Available', 'Limited', 'Booked'],
};

export default function DashboardDiscoverPage() {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('peers');
  const [activeFilter, setActiveFilter] = useState('All Years');

  const filterSet = filterOptions[activeTab];

  const filteredPeers = useMemo(() => {
    return peers.filter((p) => {
      const q = !query ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.college.toLowerCase().includes(query.toLowerCase()) ||
        p.skills.some((s) => s.toLowerCase().includes(query.toLowerCase()));
      const f = activeFilter === 'All Years' || p.year === activeFilter;
      return q && f;
    });
  }, [query, activeFilter]);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const q = !query ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      const f = activeFilter === 'All' || p.status.replace('-', ' ') === activeFilter.toLowerCase();
      return q && f;
    });
  }, [query, activeFilter]);

  const filteredHackathons = useMemo(() => {
    return hackathons.filter((h) => {
      const q = !query ||
        h.title.toLowerCase().includes(query.toLowerCase()) ||
        h.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      const f = activeFilter === 'All' || h.mode === activeFilter;
      return q && f;
    });
  }, [query, activeFilter]);

  const filteredMentors = useMemo(() => {
    return mentors.filter((m) => {
      const q = !query ||
        m.name.toLowerCase().includes(query.toLowerCase()) ||
        m.expertise.some((e) => e.toLowerCase().includes(query.toLowerCase()));
      const f = activeFilter === 'All' || m.availability === activeFilter;
      return q && f;
    });
  }, [query, activeFilter]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setActiveFilter(filterOptions[tab][0]);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Discover</h1>
        <p className="mt-1 text-muted-foreground">
          Find peers, projects, hackathons, and mentors matched to your profile.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by name, skill, tag..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-thin">
          <SlidersHorizontal className="h-4 w-4 shrink-0 text-muted-foreground" />
          {filterSet.map((option) => (
            <button
              key={option}
              onClick={() => setActiveFilter(option)}
              className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                activeFilter === option
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/70'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <TabsList className="grid w-full grid-cols-2 sm:flex sm:w-auto sm:grid-cols-none">
          <TabsTrigger value="peers" className="gap-1.5">
            <Users className="h-4 w-4" /> Peers
          </TabsTrigger>
          <TabsTrigger value="projects" className="gap-1.5">
            <FolderGit2 className="h-4 w-4" /> Projects
          </TabsTrigger>
          <TabsTrigger value="hackathons" className="gap-1.5">
            <Trophy className="h-4 w-4" /> Hackathons
          </TabsTrigger>
          <TabsTrigger value="mentors" className="gap-1.5">
            <GraduationCap className="h-4 w-4" /> Mentors
          </TabsTrigger>
        </TabsList>

        <TabsContent value="peers" className="mt-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPeers.map((p) => <PeerCard key={p.id} peer={p} />)}
          </div>
        </TabsContent>
        <TabsContent value="projects" className="mt-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        </TabsContent>
        <TabsContent value="hackathons" className="mt-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredHackathons.map((h) => <HackathonCard key={h.id} hackathon={h} />)}
          </div>
        </TabsContent>
        <TabsContent value="mentors" className="mt-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMentors.map((m) => <MentorCard key={m.id} mentor={m} />)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
