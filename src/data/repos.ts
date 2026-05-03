import reposImport from "@/data/generated/repos.json";
import { manualRepos } from "@/data/manual/repos.manual";
import type { RepoProps } from "@/types/repo";

type RepoMap = Record<string, RepoProps>;

export const repos: RepoMap = {
  ...(reposImport as unknown as RepoMap),
  ...manualRepos,
};

export const featuredRepos: RepoMap = Object.fromEntries(
  Object.entries(repos).filter(([, repo]) => repo.featured === true),
);

function sortKeyUpdated(repo: RepoProps) {
  return new Date(repo.pushed_at ?? repo.created_at ?? 0).getTime();
}

export const featuredReposArray: RepoProps[] = Object.values(featuredRepos).sort(
  (a, b) => {
    const oa = a.portfolioOrder ?? 10_000;
    const ob = b.portfolioOrder ?? 10_000;
    if (oa !== ob) return oa - ob;
    return sortKeyUpdated(b) - sortKeyUpdated(a);
  },
);
