import { usePageTitle } from "@/hooks/use-pagetitle";

export default function ArticlesPage() {
  usePageTitle("Articles");

  return (
    <div className="flex flex-1 flex-col items-center justify-center min-h-[50vh]">
      <h2 className="text-2xl font-semibold opacity-50">Coming Soon...</h2>
    </div>
  );
}
