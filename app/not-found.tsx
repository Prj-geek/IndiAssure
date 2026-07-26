import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream px-4">
      <p className="font-display text-7xl text-ink/15">404</p>
      <h1 className="mt-4 font-display text-2xl text-ink">Page not found</h1>
      <p className="mt-2 text-sm text-ink/60">
        The page you&rsquo;re looking for doesn&rsquo;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 btn-pill bg-ink text-cream hover:bg-ink-soft"
      >
        ← Go home
      </Link>
    </div>
  );
}
