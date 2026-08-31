import { Star, Users, Calendar, MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import type { Mentor } from '@/lib/data';

const availabilityConfig: Record<Mentor['availability'], { label: string; className: string }> = {
  Available: { label: 'Available', className: 'bg-emerald-500/15 text-emerald-600 border-emerald-500/30' },
  Limited: { label: 'Limited', className: 'bg-amber-500/15 text-amber-600 border-amber-500/30' },
  Booked: { label: 'Booked', className: 'bg-red-500/15 text-red-600 border-red-500/30' },
};

export function MentorCard({ mentor }: { mentor: Mentor }) {
  const avail = availabilityConfig[mentor.availability];

  return (
    <Card className="group flex flex-col p-5 transition-all hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
      <div className="flex items-start gap-4">
        <Avatar className="h-14 w-14 ring-2 ring-border ring-offset-2 ring-offset-background transition-all group-hover:ring-primary/40">
          <AvatarImage src={mentor.avatar} alt={mentor.name} />
          <AvatarFallback>{mentor.name[0]}</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-base font-semibold leading-tight transition-colors group-hover:text-primary">
            {mentor.name}
          </h3>
          <p className="mt-0.5 text-sm text-muted-foreground">{mentor.title}</p>
          <p className="text-sm font-medium text-primary">{mentor.company}</p>
        </div>
        <Badge variant="outline" className={`font-normal ${avail.className}`}>
          {avail.label}
        </Badge>
      </div>

      <p className="mt-4 line-clamp-2 text-sm text-muted-foreground">{mentor.bio}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {mentor.expertise.map((exp) => (
          <Badge key={exp} variant="secondary" className="font-normal">
            {exp}
          </Badge>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border/60 pt-4 text-center">
        <div>
          <div className="flex items-center justify-center gap-1 text-sm font-semibold text-foreground">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            {mentor.rating}
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground">{mentor.reviews} reviews</p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-1 text-sm font-semibold text-foreground">
            <Users className="h-3.5 w-3.5" />
            {mentor.mentees}
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground">mentees</p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-1 text-sm font-semibold text-foreground">
            <Calendar className="h-3.5 w-3.5" />
            {mentor.experience}
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground">experience</p>
        </div>
      </div>

      <Button size="sm" className="mt-4 w-full" disabled={mentor.availability === 'Booked'}>
        <MessageSquare className="mr-2 h-3.5 w-3.5" />
        {mentor.availability === 'Booked' ? 'Fully Booked' : 'Book a Session'}
      </Button>
    </Card>
  );
}
