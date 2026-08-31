import {
  MapPin,
  Mail,
  Users,
  FolderGit2,
  Trophy,
  Star,
  Award,
  Rocket,
  Sparkles,
  ThumbsUp,
  Link2,
  Calendar,
  GitBranch,
} from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { currentStudent, projects } from '@/lib/data';

const achievementIcons: Record<string, typeof Trophy> = {
  Trophy,
  Star,
  Award,
  Users,
  Rocket,
};

const activityIcons: Record<string, typeof FolderGit2> = {
  project: FolderGit2,
  connection: Users,
  hackathon: Trophy,
  endorsement: ThumbsUp,
};

export default function ProfilePage() {
  const student = currentStudent;
  const studentProjects = projects.slice(0, 4);
  const maxEndorsement = Math.max(...Object.values(student.skillEndorsements));

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Cover + Avatar */}
      <div className="relative">
        <div className="h-48 w-full bg-gradient-to-r from-primary via-teal-500 to-cyan-500 sm:h-56">
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="-mt-16 flex flex-col gap-4 sm:-mt-20 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end">
              <Avatar className="h-32 w-32 ring-4 ring-background shadow-xl sm:h-36 sm:w-36">
                <AvatarImage src={student.avatar} alt={student.name} />
                <AvatarFallback className="text-4xl">{student.name[0]}</AvatarFallback>
              </Avatar>
              <div className="pb-2 text-center sm:text-left">
                <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {student.name}
                </h1>
                <p className="mt-1 text-muted-foreground">
                  {student.major} · {student.year}
                </p>
                <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground sm:justify-start">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {student.college}
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="h-3.5 w-3.5" />
                    {student.email}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pb-2">
              <Button variant="outline" size="sm">
                <Link2 className="mr-1.5 h-3.5 w-3.5" />
                Share
              </Button>
              <Button size="sm" className="shadow-lg shadow-primary/25">
                <Users className="mr-1.5 h-3.5 w-3.5" />
                Connect
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { icon: Users, label: 'Connections', value: student.connections },
            { icon: FolderGit2, label: 'Projects', value: student.projects },
            { icon: Trophy, label: 'Achievements', value: student.achievements.length },
            { icon: Star, label: 'Endorsements', value: 109 },
          ].map((stat) => (
            <Card key={stat.label} className="p-4 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <stat.icon className="h-5 w-5" />
              </div>
              <div className="mt-2 font-display text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Left column */}
          <div className="space-y-6 lg:col-span-2">
            {/* About */}
            <Card className="p-6">
              <h2 className="font-display text-lg font-semibold">About</h2>
              <p className="mt-3 text-sm text-muted-foreground">{student.bio}</p>
            </Card>

            {/* Skills with endorsements */}
            <Card className="p-6">
              <h2 className="font-display text-lg font-semibold">Skills & Endorsements</h2>
              <div className="mt-4 space-y-4">
                {Object.entries(student.skillEndorsements).map(([skill, count]) => (
                  <div key={skill}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{skill}</span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <ThumbsUp className="h-3 w-3" />
                        {count}
                      </span>
                    </div>
                    <Progress
                      value={(count / maxEndorsement) * 100}
                      className="mt-1.5 h-1.5"
                    />
                  </div>
                ))}
              </div>
            </Card>

            {/* Projects */}
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-lg font-semibold">Projects</h2>
                <Button variant="ghost" size="sm">View all</Button>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {studentProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group cursor-pointer rounded-xl border border-border/60 p-4 transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    <div
                      className="mb-3 h-16 w-full rounded-lg"
                      style={{ background: project.cover }}
                    />
                    <h3 className="font-medium text-sm transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
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
                ))}
              </div>
            </Card>

            {/* Activity feed */}
            <Card className="p-6">
              <h2 className="font-display text-lg font-semibold">Recent Activity</h2>
              <div className="mt-4 space-y-1">
                {student.activity.map((act, i) => {
                  const Icon = activityIcons[act.type] || Sparkles;
                  return (
                    <div key={i} className="flex gap-3 rounded-lg p-2 transition-colors hover:bg-muted/50">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">{act.text}</p>
                        <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {act.time}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Achievements */}
            <Card className="p-6">
              <h2 className="font-display text-lg font-semibold">Achievements</h2>
              <div className="mt-4 space-y-3">
                {student.achievements.map((ach, i) => {
                  const Icon = achievementIcons[ach.icon] || Trophy;
                  return (
                    <div key={i} className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold leading-tight">{ach.title}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{ach.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Interests */}
            <Card className="p-6">
              <h2 className="font-display text-lg font-semibold">Interests</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {student.interests.map((interest) => (
                  <Badge key={interest} variant="secondary" className="font-normal">
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Location */}
            <Card className="p-6">
              <h2 className="font-display text-lg font-semibold">Location</h2>
              <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                {student.location}
              </div>
              <Separator className="my-4" />
              <h3 className="text-sm font-semibold">Availability</h3>
              <div className="mt-2 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="text-sm text-muted-foreground">Open to collaborations</span>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
