import { useState, useMemo } from "react";
import { FaScrewdriverWrench } from "react-icons/fa6";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { skills } from "@/data/skills";
import { usePageTitle } from "@/hooks/use-pagetitle";

const TITLE = "Skills";
const CATEGORIES = ["All", ...Object.keys(skills)];

export default function SkillsPage() {
    usePageTitle(TITLE);

    const [active, setActive] = useState("All");
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});

    const toggleExpand = (key: string) => {
        setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const allSkills = useMemo(() => {
        return Object.entries(skills).flatMap(([category, items]) =>
            items.map((item) => ({
                ...item,
                category,
            })),
        );
    }, []);

    const filtered =
        active === "All"
            ? allSkills
            : allSkills.filter((s) => s.category === active);

    return (
        <div className="flex flex-1 flex-col items-center gap-10">
            <div className="w-full max-w-6xl space-y-10">
                <div className="flex flex-row justify-center items-center gap-4 text-4xl font-semibold">
                    <FaScrewdriverWrench />
                    {TITLE}
                </div>

                <div className="flex flex-col md:flex-row gap-6 px-2 md:px-8">
                    <div className="w-full md:w-52 flex flex-col gap-1 shrink-0">
                        <span className="text-sm font-medium text-muted-foreground mb-2">
                            Categories
                        </span>

                        <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-2 md:gap-0 pb-2 md:pb-0">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActive(cat)}
                                    className={cn(
                                        "px-3 py-2 rounded-sm text-left cursor-pointer whitespace-nowrap",
                                        active === cat
                                            ? "bg-primary text-primary-foreground"
                                            : "hover:bg-muted",
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <Separator className="my-4 hidden md:block" />

                        <p className="text-sm leading-relaxed text-muted-foreground hidden md:block">
                            Filter skills by category to explore my technical and research
                            background.
                        </p>
                    </div>

                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filtered.map((skill) => {
                                const key = `${skill.category}-${skill.name}`;
                                const isExpanded = expanded[key];

                                return (
                                    <Card
                                        key={key}
                                        className="py-4 rounded-md gap-2 h-full flex flex-col justify-between hover:shadow-md transition-shadow"
                                    >
                                        <CardHeader>
                                            <CardTitle className="flex flex-row items-center gap-2">
                                                {skill.logo && (
                                                    <img
                                                        src={skill.logo}
                                                        alt={`${skill.name} logo`}
                                                        className="w-6 h-6 object-contain rounded"
                                                        loading="lazy"
                                                    />
                                                )}
                                                {skill.name}
                                            </CardTitle>

                                            {skill.proficiency && (
                                                <p className="text-xs text-muted-foreground mt-1">
                                                    {skill.proficiency}
                                                </p>
                                            )}
                                        </CardHeader>

                                        <CardContent className="pt-1 flex flex-col gap-3 flex-1">
                                            {isExpanded && skill.description && (
                                                <p className="text-sm text-muted-foreground leading-relaxed animate-in fade-in duration-300">
                                                    {skill.description}
                                                </p>
                                            )}

                                            <div className="flex flex-row items-center justify-between mt-auto pt-2">
                                                <Badge variant="secondary" className="text-xs w-fit">
                                                    {skill.category}
                                                </Badge>

                                                {skill.description && (
                                                    <div className="flex items-center">
                                                        <button
                                                            onClick={() => toggleExpand(key)}
                                                            className="text-xs leading-none underline underline-offset-2 text-muted-foreground hover:text-foreground cursor-pointer"
                                                        >
                                                            {isExpanded ? "Less" : "More"}
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
