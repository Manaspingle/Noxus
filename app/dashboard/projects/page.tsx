import { Plus, GitBranch, ThumbsUp, Users, MoreHorizontal } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { projects } from '@/lib/data';

const statusConfig: Record<string, { label: string; className: string }> = {
  'looking-for-team': { label: 'Looking for Team', className: 'bg-amber-500/15 text-amber-600 border-amber-500/30' },
  'in-progress': { label: 'In Progress', className: 'bg-sky-500/15 text-sky-600 border-sky-500/30' },
  completed: { label: 'Completed', className: 'bg-emerald-500/15 text-emerald-600 border-emerald-500/30' },
};

export default function DashboardProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">My Projects</h1>
          <p className="mt-1 text-muted-foreground">
            Manage your projects, track progress, and find collaborators.
          </p>
        </div>
        <Button className="shadow-lg shadow-primary/25">
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const status = statusConfig[project.status];
          return (
            <Card key={project.id} className="group flex flex-col overflow-hidden p-0 transition-all hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
              <div className="relative h-24" style={{ background: project.cover }}>
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute right-3 top-3">
                  <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-background/80 backdrop-blur-sm text-muted-foreground transition-colors hover:text-foreground">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <Badge variant="outline" className={`mb-3 w-fit font-normal ${status.className}`}>
                  {status.label}
                </Badge>
                <h3 className="font-display text-base font-semibold leading-tight transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
                  <div className="flex -space-x-2">
                    <Avatar className="h-7 w-7 ring-2 ring-background">
                      <AvatarImage src={project.authorAvatar} alt={project.author} />
                      <AvatarFallback className="text-xs">{project.author[0]}</AvatarFallback>
                    </Avatar>
                    {project.collaborators > 1 && (
                      <div className="flex h-7 w-7 items-center justify-center rounded-full ring-2 ring-background bg-muted text-xs font-medium">
                        +{project.collaborators - 1}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <GitBranch className="h-3 w-3" />
                      {project.collaborators}
                    </span>
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="h-3 w-3" />
                      {project.upvotes}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}

        {/* Create new card */}
        <button className="flex min-h-[280px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-border p-5 text-center transition-colors hover:border-primary/40 hover:bg-primary/5">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-muted-foreground">
            <Plus className="h-6 w-6" />
          </div>
          <h3 className="mt-4 font-medium text-sm">Start a new project</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Share your idea and find collaborators
          </p>
        </button>
      </div>
    </div>
  );
}
