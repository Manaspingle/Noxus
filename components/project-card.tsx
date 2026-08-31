import { ArrowUp, Users, GitBranch } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import type { Project } from '@/lib/data';

const statusConfig: Record<Project['status'], { label: string; className: string }> = {
  'looking-for-team': { label: 'Looking for Team', className: 'bg-amber-500/15 text-amber-600 border-amber-500/30' },
  'in-progress': { label: 'In Progress', className: 'bg-sky-500/15 text-sky-600 border-sky-500/30' },
  completed: { label: 'Completed', className: 'bg-emerald-500/15 text-emerald-600 border-emerald-500/30' },
};

export function ProjectCard({ project }: { project: Project }) {
  const status = statusConfig[project.status];

  return (
    <Card className="group flex flex-col overflow-hidden p-0 transition-all hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
      <div
        className="relative h-28 w-full"
        style={{ background: project.cover }}
      >
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute right-3 top-3">
          <Badge variant="outline" className={`border-0 bg-background/80 backdrop-blur-sm font-normal ${status.className}`}>
            {status.label}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start gap-3">
          <Avatar className="h-9 w-9 ring-1 ring-border">
            <AvatarImage src={project.authorAvatar} alt={project.author} />
            <AvatarFallback>{project.author[0]}</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="text-sm font-medium leading-tight">{project.author}</p>
            <p className="text-xs text-muted-foreground">{project.college}</p>
          </div>
          <span className="ml-auto text-xs text-muted-foreground">{project.postedDaysAgo}d ago</span>
        </div>

        <h3 className="mt-4 font-display text-base font-semibold leading-tight transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap gap-1">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              {project.collaborators}
            </span>
            <button className="flex items-center gap-1 transition-colors hover:text-primary">
              <ArrowUp className="h-3.5 w-3.5" />
              {project.upvotes}
            </button>
          </div>
          <Button size="sm" variant="outline">
            <GitBranch className="mr-1.5 h-3.5 w-3.5" />
            View
          </Button>
        </div>
      </div>
    </Card>
  );
}
