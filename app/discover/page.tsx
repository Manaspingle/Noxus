'use client';

import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Users, FolderGit2, Trophy, GraduationCap, X } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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

export default function DiscoverPage() {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('peers');
  const [activeFilter, setActiveFilter] = useState('All Years');

  const filterSet = filterOptions[activeTab];

  const filteredPeers = useMemo(() => {
    return peers.filter((p) => {
      const matchesQuery =
        !query ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.college.toLowerCase().includes(query.toLowerCase()) ||
        p.skills.some((s) => s.toLowerCase().includes(query.toLowerCase())) ||
        p.interests.some((i) => i.toLowerCase().includes(query.toLowerCase()));
      const matchesFilter =
        activeFilter === 'All Years' || p.year === activeFilter;
      return matchesQuery && matchesFilter;
    });
  }, [query, activeFilter]);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
        p.techStack.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      const matchesFilter =
        activeFilter === 'All' ||
        p.status.replace('-', ' ') === activeFilter.toLowerCase();
      return matchesQuery && matchesFilter;
    });
  }, [query, activeFilter]);

  const filteredHackathons = useMemo(() => {
    return hackathons.filter((h) => {
      const matchesQuery =
        !query ||
        h.title.toLowerCase().includes(query.toLowerCase()) ||
        h.organizer.toLowerCase().includes(query.toLowerCase()) ||
        h.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      const matchesFilter =
        activeFilter === 'All' || h.mode === activeFilter;
      return matchesQuery && matchesFilter;
    });
  }, [query, activeFilter]);

  const filteredMentors = useMemo(() => {
    return mentors.filter((m) => {
      const matchesQuery =
        !query ||
        m.name.toLowerCase().includes(query.toLowerCase()) ||
        m.company.toLowerCase().includes(query.toLowerCase()) ||
        m.expertise.some((e) => e.toLowerCase().includes(query.toLowerCase()));
      const matchesFilter =
        activeFilter === 'All' || m.availability === activeFilter;
      return matchesQuery && matchesFilter;
    });
  }, [query, activeFilter]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setActiveFilter(filterOptions[tab][0]);
  };

  const counts = {
    peers: filteredPeers.length,
    projects: filteredProjects.length,
    hackathons: filteredHackathons.length,
    mentors: filteredMentors.length,
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Discover
          </h1>
          <p className="mt-2 text-muted-foreground">
            Find peers, projects, hackathons, and mentors across the NOXUS ecosystem.
          </p>
        </div>

        {/* Search + Filter bar */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name, skill, tag, college..."
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

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <TabsList className="mb-6 grid w-full grid-cols-2 sm:flex sm:w-auto sm:grid-cols-none">
            <TabsTrigger value="peers" className="gap-1.5">
              <Users className="h-4 w-4" />
              Peers
              <span className="ml-1 text-xs text-muted-foreground">({counts.peers})</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="gap-1.5">
              <FolderGit2 className="h-4 w-4" />
              Projects
              <span className="ml-1 text-xs text-muted-foreground">({counts.projects})</span>
            </TabsTrigger>
            <TabsTrigger value="hackathons" className="gap-1.5">
              <Trophy className="h-4 w-4" />
              Hackathons
              <span className="ml-1 text-xs text-muted-foreground">({counts.hackathons})</span>
            </TabsTrigger>
            <TabsTrigger value="mentors" className="gap-1.5">
              <GraduationCap className="h-4 w-4" />
              Mentors
              <span className="ml-1 text-xs text-muted-foreground">({counts.mentors})</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="peers" className="mt-0">
            {filteredPeers.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredPeers.map((peer) => (
                  <PeerCard key={peer.id} peer={peer} />
                ))}
              </div>
            ) : (
              <EmptyState query={query} />
            )}
          </TabsContent>

          <TabsContent value="projects" className="mt-0">
            {filteredProjects.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <EmptyState query={query} />
            )}
          </TabsContent>

          <TabsContent value="hackathons" className="mt-0">
            {filteredHackathons.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filteredHackathons.map((hackathon) => (
                  <HackathonCard key={hackathon.id} hackathon={hackathon} />
                ))}
              </div>
            ) : (
              <EmptyState query={query} />
            )}
          </TabsContent>

          <TabsContent value="mentors" className="mt-0">
            {filteredMentors.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filteredMentors.map((mentor) => (
                  <MentorCard key={mentor.id} mentor={mentor} />
                ))}
              </div>
            ) : (
              <EmptyState query={query} />
            )}
          </TabsContent>
        </Tabs>
      </div>

      <SiteFooter />
    </div>
  );
}

function EmptyState({ query }: { query: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
        <Search className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold">No results found</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {query
          ? `Nothing matches "${query}". Try a different search term or filter.`
          : 'Try adjusting your filters to see more results.'}
      </p>
    </div>
  );
}
