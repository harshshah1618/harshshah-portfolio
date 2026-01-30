export interface RepoProps {
  source?: "github" | "manual";

  displayName?: string;
  description?: string;
  topics?: string[];
  language?: string | null;
  previewImage?: string;
  homepage?: string;
  featured?: boolean;

  // badge
  category?: "research" | "coursework" | "systems" | "product" | "work";

  // GitHub
  name?: string;
  html_url?: string;
  stargazers_count?: number;
  created_at?: string;
  pushed_at?: string;
}
