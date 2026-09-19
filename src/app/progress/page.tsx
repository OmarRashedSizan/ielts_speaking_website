import type { Metadata } from "next";
import Breadcrumbs from "@/components/shell/Breadcrumbs";
import ProgressDashboard from "@/components/progress/ProgressDashboard";
import { lessonMeta } from "@/content";

export const metadata: Metadata = {
  title: "My progress — speaking dashboard",
  description:
    "Your IELTS Speaking progress: part-by-part completion, skill scores, weak areas, practice streak and the next recommended lesson.",
};

export default function ProgressPage() {
  return (
    <div className="shell py-10 lg:py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "My progress" }]} />
      <div className="mb-8 max-w-2xl">
        <h1>Your speaking journey</h1>
        <p className="mt-4 leading-relaxed text-ink-soft">
          Everything here is calculated from what you have actually done: lessons marked complete,
          practice answers recorded, and how you rated yourself. Be honest in the self-evaluation —
          it is the only way the dashboard can point you at the right next step.
        </p>
      </div>
      <ProgressDashboard lessonMeta={lessonMeta} />
    </div>
  );
}
