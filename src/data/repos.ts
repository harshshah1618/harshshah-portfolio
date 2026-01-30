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

export const featuredReposArray: RepoProps[] = Object.values(featuredRepos);
