export interface RepoProps {
  source?: "github" | "manual";

  displayName?: string;
  description?: string;
  topics?: string[];
  language?: string | null;
  previewImage?: string;
  homepage?: string;
  featured?: boolean;
  /** Lower numbers sort first (home + projects grid). Omitted = last among featured. */
  portfolioOrder?: number;

  // badge
  category?: "research" | "coursework" | "systems" | "product" | "work";

  // GitHub (optional on manual repos for sorting)
  name?: string;
  html_url?: string;
  stargazers_count?: number | null;
  created_at?: string;
  pushed_at?: string;
}
