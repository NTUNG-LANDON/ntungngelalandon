import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <p>404</p>
      <h1>Page not found.</h1>
      <p>Explore the research profile, publications, experience, and contact details on the main website.</p>
      <Link href="/">Go to Ntung Ngela Landon’s website</Link>
    </main>
  );
}
