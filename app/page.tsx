import Link from 'next/link';
import {
  Rocket,
  Users,
  FolderGit2,
  Trophy,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Check,
  Star,
  Zap,
  Globe,
} from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const features = [
  {
    icon: Users,
    title: 'Smart Networking',
    description:
      'Connect with peers across 500+ campuses. AI suggests collaborators who match your skills, interests, and goals.',
    gradient: 'from-teal-500/20 to-cyan-500/10',
    iconBg: 'bg-teal-500/10 text-teal-600',
  },
  {
    icon: FolderGit2,
    title: 'Project Showcase',
    description:
      'Build your portfolio in real time. Track collaborators, tech stack, and progress. Get upvotes and feedback from the community.',
    gradient: 'from-sky-500/20 to-blue-500/10',
    iconBg: 'bg-sky-500/10 text-sky-600',
  },
  {
    icon: Trophy,
    title: 'Hackathons & Events',
    description:
      'Discover and register for hackathons worldwide. Find teammates, form teams, and compete — all from one dashboard.',
    gradient: 'from-amber-500/20 to-orange-500/10',
    iconBg: 'bg-amber-500/10 text-amber-600',
  },
  {
    icon: GraduationCap,
    title: 'Mentorship',
    description:
      'Learn from engineers at Google, Vercel, and AWS. Book 1:1 sessions, get code reviews, and accelerate your career.',
    gradient: 'from-rose-500/20 to-pink-500/10',
    iconBg: 'bg-rose-500/10 text-rose-600',
  },
  {
    icon: Sparkles,
    title: 'AI Recommendations',
    description:
      'Our matching engine analyzes your skills, projects, and activity to surface projects, mentors, and events tailored to you.',
    gradient: 'from-violet-500/20 to-purple-500/10',
    iconBg: 'bg-violet-500/10 text-violet-600',
  },
  {
    icon: Globe,
    title: 'Global Community',
    description:
      'Join a thriving ecosystem of 100,000+ students from top universities. Share knowledge, find opportunities, and grow together.',
    gradient: 'from-emerald-500/20 to-green-500/10',
    iconBg: 'bg-emerald-500/10 text-emerald-600',
  },
];

const stats = [
  { value: '100K+', label: 'Active Students' },
  { value: '500+', label: 'Campuses' },
  { value: '12K+', label: 'Projects Shipped' },
  { value: '850+', label: 'Expert Mentors' },
];

const testimonials = [
  {
    name: 'Aarav Mehta',
    role: 'CS, IIT Bombay',
    avatar: 'https://i.pravatar.cc/150?img=12',
    text: 'NOXUS connected me with two collaborators for my AI project. We shipped in 3 weeks and won our first hackathon.',
  },
  {
    name: 'Sara Chen',
    role: 'HCI, Stanford',
    avatar: 'https://i.pravatar.cc/150?img=45',
    text: 'The mentorship sessions were a game-changer. My mentor reviewed my portfolio and I landed a Google internship.',
  },
  {
    name: 'Daniel Okafor',
    role: 'EE, MIT',
    avatar: 'https://i.pravatar.cc/150?img=33',
    text: 'Found my drone project co-founders through the discovery feed. The AI match feature is scarily good.',
  },
];

const signupPerks = [
  'Free for students — forever',
  'AI-powered project & mentor matching',
  'Access to 850+ industry mentors',
  'Hackathon registration & team building',
  'Portfolio hosting with custom subdomain',
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora" />
        <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary animate-fade-in">
              <Sparkles className="h-3.5 w-3.5" />
              Now matching students across 500+ campuses
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl animate-fade-in">
              Your campus ecosystem,
              <br />
              <span className="bg-gradient-to-r from-primary via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                unified.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-balance animate-fade-in">
              NOXUS is where students network, build projects, join hackathons,
              find mentors, and get AI-matched opportunities — all in one
              place. Stop juggling five platforms. Start launching.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-in">
              <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-primary/25" asChild>
                <Link href="/#signup">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <Link href="/discover">
                  Explore the Feed
                </Link>
              </Button>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              No credit card required · Free for verified students
            </p>
          </div>

          {/* Floating preview cards */}
          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: Users, label: 'New Connection', detail: 'Aarav · IIT Bombay', color: 'text-teal-600 bg-teal-500/10' },
                { icon: Trophy, label: 'Hackathon Match', detail: 'HackTheNorth 2026', color: 'text-amber-600 bg-amber-500/10' },
                { icon: Sparkles, label: 'AI Suggests', detail: '3 projects for you', color: 'text-violet-600 bg-violet-500/10' },
              ].map((card, i) => (
                <Card
                  key={card.label}
                  className="flex items-center gap-3 p-4 shadow-lg animate-float"
                  style={{ animationDelay: `${i * 1.5}s` }}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${card.color}`}>
                    <card.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{card.label}</p>
                    <p className="text-xs text-muted-foreground">{card.detail}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-bold text-primary sm:text-4xl">
                  {stat.value}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Zap className="mr-1.5 h-3 w-3 text-primary" />
              Everything you need
            </Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              One platform. Every tool a student builder needs.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-balance">
              From your first project to your first job offer — NOXUS grows with
              you through every stage of your student journey.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className={`group relative overflow-hidden p-6 transition-all hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 bg-gradient-to-br ${feature.gradient}`}
              >
                <div className="relative">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.iconBg} transition-transform group-hover:scale-110`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border/60 bg-muted/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Loved by student builders
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join 100,000+ students who are building, competing, and growing on NOXUS.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="p-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={t.avatar} alt={t.name} />
                    <AvatarFallback>{t.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sign-up CTA */}
      <section id="signup" className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-aurora" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden border-primary/20 bg-card/80 backdrop-blur-md">
            <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                  <Rocket className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-balance">
                  Ready to launch your student journey?
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Join NOXUS today. It's free for verified students — no credit
                  card, no catch. Just you, your projects, and a community that
                  has your back.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" className="shadow-xl shadow-primary/25" asChild>
                    <Link href="/dashboard">
                      Create Free Account
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/discover">
                      Browse First
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                {signupPerks.map((perk) => (
                  <div key={perk} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-foreground">{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
