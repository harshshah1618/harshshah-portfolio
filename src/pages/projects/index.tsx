import { useSearchParams, useNavigate } from "react-router";
import { useState } from "react";
import { FaWrench, FaGithub, FaGlobe, FaRegStar, FaChevronDown, FaChevronUp } from "react-icons/fa6";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { usePageTitle } from "@/hooks/use-pagetitle";
import { repos } from "@/data/repos";

const validSorts = ["stars", "updated", "created"] as const;
type SortByType = (typeof validSorts)[number];

const allTopics = Array.from(
  new Set(Object.values(repos).flatMap((repo) => repo.topics ?? [])),
).sort();

export default function ProjectsPage() {
  usePageTitle("Projects");

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const topic = searchParams.get("topic");
  const sort = searchParams.get("sort");

  const topicFilter: string =
    topic && allTopics.includes(topic) ? topic : "all";
  const sortBy: SortByType = validSorts.find((s) => s === sort) ?? "updated";

  const updateTopicFilter = (newTopic: string) => {
    const params = new URLSearchParams(searchParams);
    if (newTopic === "all") params.delete("topic");
    else params.set("topic", newTopic);
    navigate({ search: params.toString() }, { replace: true });
  };

  const updateSortBy = (newSortBy: SortByType) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", newSortBy);
    navigate({ search: params.toString() }, { replace: true });
  };

  const filteredProjects = (Object.keys(repos) as (keyof typeof repos)[])
    .filter((project_name) => {
      const project = repos[project_name];
      const topics = (project.topics ?? []) as string[];
      const matchesTopic =
        topicFilter === "all" || topics.includes(topicFilter);
      return matchesTopic;
    })
    .sort((a, b) => {
      const aData = repos[a];
      const bData = repos[b];

      const oa = aData.portfolioOrder ?? 10_000;
      const ob = bData.portfolioOrder ?? 10_000;
      if (oa !== ob) return oa - ob;

      if (sortBy === "stars") {
        return (bData.stargazers_count ?? 0) - (aData.stargazers_count ?? 0);
      }

      if (sortBy === "created") {
        return (
          new Date(bData.created_at ?? 0).getTime() -
          new Date(aData.created_at ?? 0).getTime()
        );
      }

      return (
        new Date(bData.pushed_at ?? bData.created_at ?? 0).getTime() -
        new Date(aData.pushed_at ?? aData.created_at ?? 0).getTime()
      );
    });

  return (
    <div className="flex flex-1 flex-col items-center gap-10">
      <div className="w-full max-w-6xl space-y-10">
        <div className="flex flex-row justify-center items-center gap-4 text-4xl font-semibold">
          <FaWrench />
          Projects
        </div>

        <div className="flex justify-between flex-wrap gap-2 items-center mx-2 sm:mx-6 my-1 relative -top-2">
          <TopicFilter
            topicFilter={topicFilter}
            setTopicFilter={updateTopicFilter}
          />
          <SortSelector sortBy={sortBy} setSortBy={updateSortBy} />
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 px-2 sm:px-6">
          {filteredProjects.map((projectName) => (
            <ProjectCard
              key={projectName}
              project_name={projectName}
              setTopicFilter={updateTopicFilter}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TopicFilter({
  topicFilter,
  setTopicFilter,
}: {
  topicFilter: string;
  setTopicFilter: (val: string) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <label>Filter by topic:</label>
      <Select value={topicFilter} onValueChange={setTopicFilter}>
        <SelectTrigger className="w-[180px] cursor-pointer">
          <SelectValue placeholder="Topic" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">📂 All Topics</SelectItem>
          {allTopics.map((topic) => (
            <SelectItem key={topic} value={topic}>
              {topic}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {topicFilter !== "all" && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTopicFilter("all")}
          className="px-2 text-sm cursor-pointer text-muted-foreground"
        >
          Clear filter ✕
        </Button>
      )}
    </div>
  );
}

function SortSelector({
  sortBy,
  setSortBy,
}: {
  sortBy: SortByType;
  setSortBy: (val: SortByType) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <label>Sort by:</label>
      <Select value={sortBy} onValueChange={setSortBy}>
        <SelectTrigger className="w-[160px] cursor-pointer">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="updated">🕒 Last Updated</SelectItem>
          <SelectItem value="created">📅 Created Time</SelectItem>
          <SelectItem value="stars">⭐ Star Count</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

function ProjectCard({
  project_name,
  setTopicFilter,
}: {
  project_name: keyof typeof repos;
  setTopicFilter: (val: string) => void;
}) {
  const repo = repos[project_name];
  const {
    html_url,
    previewImage,
    displayName,
    name,
    description,
    topics = [],
    language,
    stargazers_count,
    homepage,
  } = repo;

  const [isExpanded, setIsExpanded] = useState(false);

  const previewHref =
    html_url ||
    (homepage && homepage !== "#" ? homepage : undefined);

  const previewImageBlock = (
    <div className="aspect-video w-full overflow-hidden border-b">
      {previewImage ? (
        <img
          src={previewImage}
          alt={name || "Project image"}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="flex flex-col items-center justify-center p-4 w-full h-full bg-muted">
          <span className="text-lg font-semibold opacity-80 text-center">
            {name || "Unnamed Project"}
          </span>
          <span className="text-sm text-muted-foreground text-center">
            Image not available
          </span>
        </div>
      )}
    </div>
  );

  return (
    <Card className="rounded-md overflow-hidden gap-0 py-0 w-full h-full hover:shadow-md transition-shadow">
      <div className="flex flex-col h-full">
        {previewHref ? (
          <a
            href={previewHref}
            target="_blank"
            rel="noopener noreferrer"
            className="block shrink-0"
          >
            {previewImageBlock}
          </a>
        ) : (
          <div className="block shrink-0">{previewImageBlock}</div>
        )}

        <div className="flex flex-col p-4 flex-1">
          <div className="flex-1 min-h-0">
            <div className="flex flex-col gap-y-2 mb-4">
              <div className="text-base font-semibold line-clamp-1" title={displayName || name}>
                {html_url ? (
                  <a
                    href={html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository"
                    className="hover:underline underline-offset-4"
                  >
                    {displayName || name}
                  </a>
                ) : (
                  displayName || name
                )}
              </div>

              <div className="relative">
                <p
                  className={`text-sm text-muted-foreground ${!isExpanded ? "line-clamp-3" : ""}`}
                >
                  {description || "Details unavailable"}
                </p>
                {description && description.length > 150 && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsExpanded(!isExpanded);
                    }}
                    className="text-xs text-primary mt-1 flex items-center gap-1 hover:underline focus:outline-none"
                  >
                    {isExpanded ? (
                      <>Show less <FaChevronUp className="w-3 h-3" /></>
                    ) : (
                      <>Read more <FaChevronDown className="w-3 h-3" /></>
                    )}
                  </button>
                )}
              </div>

              {topics?.length ? (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {topics.slice(0, 5).map((topic: string) => (
                    <Button
                      key={topic}
                      variant="secondary"
                      size="sm"
                      onClick={() => setTopicFilter(topic)}
                      className="rounded-sm cursor-pointer font-normal px-2 h-6 text-xs"
                    >
                      {topic}
                    </Button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex flex-row items-center justify-between text-muted-foreground pt-4 mt-auto border-t">
            <div className="flex items-center gap-2 text-sm">
              <p className="truncate max-w-[100px]" title={language ?? undefined}>{language || "Unknown"}</p>
              {html_url && stargazers_count != null && (
                <a
                  href={`${html_url}/stargazers`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Stargazers"
                  className="flex items-center gap-1 text-yellow-600 hover:text-yellow-500"
                >
                  <FaRegStar className="w-3.5 h-3.5" />
                  <span>{stargazers_count}</span>
                </a>
              )}
            </div>

            <div className="flex items-center gap-2">
              {homepage && (
                <a
                  href={homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Project homepage"
                  className="hover:text-foreground"
                >
                  <FaGlobe className="w-5 h-5" />
                </a>
              )}
              {html_url && (
                <a
                  href={html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub repository"
                  className="hover:text-foreground"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
