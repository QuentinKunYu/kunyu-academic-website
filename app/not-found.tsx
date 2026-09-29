import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[680px] px-5 py-28 sm:px-8">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-serif text-[34px] font-medium">Page not found</h1>
      <p className="mt-4 text-ink-2">
        The page you are looking for does not exist.{" "}
        <Link href="/" className="link">
          Return to the homepage
        </Link>
        .
      </p>
    </div>
  );
}
