import { FaRegEnvelope, FaLocationDot } from "react-icons/fa6";
import { toast } from "sonner";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { profile } from "@/data/profile";

export default function IntroductionSection() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full max-w-5xl">
      <div className="md:w-1/3 shrink-0">
        <ProfileCard />
      </div>
      <div className="md:w-2/3">
        <Biography />
      </div>
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="flex flex-col items-start gap-y-6 w-full p-6 bg-muted/30 rounded-lg border border-border/50 sticky top-24">
      <div className="flex flex-col gap-y-2">
        {profile.name && (
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            {profile.name}
          </h2>
        )}
        {profile.headline && (
          <p className="text-lg font-medium text-muted-foreground leading-snug">
            {profile.headline}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-y-3 w-full">
        {profile.location && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FaLocationDot className="w-4 h-4 text-primary/70" />
            <span>{profile.location}</span>
          </div>
        )}
        {profile.email && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-4 h-4 flex items-center justify-center text-primary/70">
              <FaRegEnvelope className="w-3.5 h-3.5" />
            </div>
            <EmailCopy email={profile.email} />
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-border/50 w-full">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Connect</p>
        <TooltipProvider delayDuration={100}>
          <div className="flex flex-wrap gap-3">
            {profile.links.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-md"
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <item.icon className="w-5 h-5" aria-label={item.name} />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="text-xs">
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              </a>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </div>
  );
}

function Biography() {
  return (
    <section className="flex flex-col gap-6">
      <div className="space-y-2 border-b border-border/40 pb-4">
        <h3 className="text-2xl font-semibold tracking-tight">About Me</h3>
      </div>

      {profile.biography ? (
        <div
          className="prose prose-zinc dark:prose-invert max-w-none text-base leading-relaxed text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: profile.biography }}
        />
      ) : (
        <p className="text-muted-foreground italic">No biography available.</p>
      )}
    </section>
  );
}

function EmailCopy({ email }: { email: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    toast("📋 Email Address Copied!", {
      // description: `${email} has been copied to your clipboard.`,
      action: {
        label: "📩 Send Email",
        onClick: () => {
          window.location.href = `mailto:${email}`;
        },
      },
    });
  };

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleCopy}
            className="text-foreground hover:text-primary hover:underline underline-offset-4 focus:outline-none transition-colors"
          >
            {email}
          </button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Click to copy</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
