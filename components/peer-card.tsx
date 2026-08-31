import Link from 'next/link';
import { MapPin, Users, UserPlus, Check } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import type { Peer } from '@/lib/data';

const statusConfig: Record<Peer['status'], { label: string; className: string }> = {
  available: { label: 'Available', className: 'bg-emerald-500/15 text-emerald-600 border-emerald-500/30' },
  building: { label: 'Building', className: 'bg-amber-500/15 text-amber-600 border-amber-500/30' },
  'open-to-collab': { label: 'Open to Collab', className: 'bg-sky-500/15 text-sky-600 border-sky-500/30' },
};

export function PeerCard({ peer }: { peer: Peer }) {
  const status = statusConfig[peer.status];

  return (
    <Card className="group relative overflow-hidden p-5 transition-all hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
      <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />

      <div className="flex items-start gap-4">
        <Link href="/profile" className="relative">
          <Avatar className="h-14 w-14 ring-2 ring-border ring-offset-2 ring-offset-background transition-all group-hover:ring-primary/40">
            <AvatarImage src={peer.avatar} alt={peer.name} />
            <AvatarFallback>{peer.name[0]}</AvatarFallback>
          </Avatar>
          {peer.status === 'available' && (
            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-background bg-emerald-500" />
          )}
        </Link>
        <div className="min-w-0 flex-1">
          <Link href="/profile">
            <h3 className="font-display text-base font-semibold leading-tight transition-colors group-hover:text-primary">
              {peer.name}
            </h3>
          </Link>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {peer.major} · {peer.year}
          </p>
          <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {peer.college}
          </p>
        </div>
      </div>

      <p className="mt-4 line-clamp-2 text-sm text-muted-foreground">{peer.bio}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {peer.skills.slice(0, 4).map((skill) => (
          <Badge key={skill} variant="secondary" className="font-normal">
            {skill}
          </Badge>
        ))}
        {peer.skills.length > 4 && (
          <span className="text-xs text-muted-foreground">+{peer.skills.length - 4}</span>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-4">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {peer.connections}
          </span>
          <span>{peer.mutualConnections} mutual</span>
        </div>
        <Badge variant="outline" className={`font-normal ${status.className}`}>
          {status.label}
        </Badge>
      </div>

      <Button size="sm" variant="outline" className="mt-4 w-full">
        <UserPlus className="mr-2 h-3.5 w-3.5" />
        Connect
      </Button>
    </Card>
  );
}
