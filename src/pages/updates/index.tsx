import { FaBullhorn } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { usePageTitle } from "@/hooks/use-pagetitle";
import { updates } from "@/data/updates";

export default function UpdatesPage() {
    usePageTitle("Updates");

    return (
        <div className="flex flex-1 flex-col items-center gap-10">
            <div className="w-full max-w-4xl space-y-10">
                <div className="flex flex-row justify-center items-center gap-4 text-4xl font-semibold">
                    <FaBullhorn />
                    Updates
                </div>

                <div className="relative border-l border-border/50 ml-4 md:ml-8 space-y-12">
                    {updates.map((update, index) => (
                        <div key={index} className="relative pl-8 md:pl-12">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />

                            <div className="flex flex-col gap-2">
                                <span className="text-sm font-mono text-muted-foreground">
                                    {update.date}
                                </span>

                                <Card className="hover:shadow-md transition-shadow">
                                    <CardHeader className="pb-2">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                            <CardTitle className="text-xl">
                                                {update.title}
                                            </CardTitle>
                                            <Badge variant="secondary" className="w-fit">
                                                {update.type}
                                            </Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-base text-muted-foreground leading-relaxed">
                                            {update.description}
                                        </p>
                                        {update.tags && (
                                            <div className="flex flex-wrap gap-2">
                                                {update.tags.map((tag) => (
                                                    <Badge key={tag} variant="outline" className="text-xs font-normal">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>

                {updates.length === 0 && (
                    <div className="text-center text-muted-foreground italic">
                        No updates available yet.
                    </div>
                )}
            </div>
        </div>
    );
}
