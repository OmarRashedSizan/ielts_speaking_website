export default function Loading() {
  return (
    <div className="shell py-16">
      <div className="animate-pulse-soft h-4 w-32 rounded bg-canvas-deep" />
      <div className="animate-pulse-soft mt-6 h-10 w-2/3 rounded bg-canvas-deep" />
      <div className="animate-pulse-soft mt-4 h-4 w-1/2 rounded bg-canvas-deep" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="animate-pulse-soft h-32 rounded-lg border border-line bg-paper" />
        ))}
      </div>
      <p className="sr-only" role="status">
        Loading content…
      </p>
    </div>
  );
}
