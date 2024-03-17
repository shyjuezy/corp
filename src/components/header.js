import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full absolute z-10 text-white">
      <nav className="flex flex-row items-center justify-between p-8">
        <Link href="/" className="font-bold text-3xl">
          Home
        </Link>
        <div className="flex flex-row gap-x-4 text-xl">
          <Link href="/performance">Performance</Link>
          <Link href="/reliability">Reliability</Link>
          <Link href="/scale">Scale</Link>
        </div>
      </nav>
    </header>
  );
}
