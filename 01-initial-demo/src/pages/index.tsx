import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1>Home page</h1>
      <h1>
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/about"> About </Link>
      </h1>
      <p>
        Get started by editing&nbsp;
        <code className="code">src/pages/index.jsx</code>
      </p>
    </MainLayout>
  );
}
