import { Calendar, MapPin, Trophy, Users, Clock, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Hackathon } from '@/lib/data';

const modeConfig: Record<Hackathon['mode'], string> = {
  'In-Person': 'bg-emerald-500/15 text-emerald-600 border-emerald-500/30',
  Hybrid: 'bg-sky-500/15 text-sky-600 border-sky-500/30',
  Online: 'bg-violet-500/15 text-violet-600 border-violet-500/30',
};

export function HackathonCard({ hackathon }: { hackathon: Hackathon }) {
  return (
    <Card className="group flex flex-col overflow-hidden p-0 transition-all hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
      <div
        className="relative h-32 w-full"
        style={{ background: hackathon.banner }}
      >
        <div className="absolute inset-0 bg-dots opacity-20" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <Badge variant="outline" className={`border-0 bg-background/80 backdrop-blur-sm font-normal ${modeConfig[hackathon.mode]}`}>
            {hackathon.mode}
          </Badge>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display text-lg font-bold leading-tight text-white drop-shadow-md">
            {hackathon.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm text-muted-foreground">{hackathon.organizer}</p>

        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{hackathon.date}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="truncate">{hackathon.location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Trophy className="h-4 w-4 text-primary" />
            <span>{hackathon.prize}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4 text-primary" />
            <span>{hackathon.teamSize}</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {hackathon.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-auto pt-4">
          <div className="mb-3 flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Users className="h-3.5 w-3.5" />
              {hackathon.registrations.toLocaleString()} registered
            </span>
            <span className="flex items-center gap-1.5 font-medium text-primary">
              <Clock className="h-3.5 w-3.5" />
              {hackathon.daysLeft} days left
            </span>
          </div>
          <Button size="sm" className="w-full">
            Register Now
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
