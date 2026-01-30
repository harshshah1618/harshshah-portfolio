import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";
import { updates } from "@/data/updates";
import { Button } from "@/components/ui/button";

export default function UpdatesSection() {
    const latestUpdates = updates.slice(0, 6);

    if (latestUpdates.length === 0) return null;

    return (
        <div className="flex flex-col gap-4 w-full max-w-5xl">
            <div className="flex justify-between items-end border-b border-border/40 pb-2">
                <h3 className="text-2xl font-semibold tracking-tight">Latest Updates</h3>
                <Button variant="link" asChild className="p-0 h-auto text-muted-foreground hover:text-primary">
                    <Link to="/updates" className="flex items-center gap-1">
                        View All <FaArrowRight className="w-3 h-3" />
                    </Link>
                </Button>
            </div>

            <div className="flex flex-col">
                {latestUpdates.map((update, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-border/40 last:border-0 hover:bg-muted/30 px-2 rounded-sm transition-colors">
                        <div className="flex items-center gap-4 text-sm overflow-hidden flex-1">
                            <span className="font-mono text-muted-foreground text-xs bg-muted px-1.5 py-0.5 rounded w-fit shrink-0">
                                {update.date}
                            </span>
                            <div className="flex flex-col truncate">
                                <span className="font-medium text-foreground truncate">{update.title}</span>
                                <span className="text-xs text-muted-foreground truncate hidden sm:block">{update.description}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 pl-4">
                            <Badge variant="secondary" className="text-[10px] h-5 px-1.5 font-normal shrink-0">
                                {update.type}
                            </Badge>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
