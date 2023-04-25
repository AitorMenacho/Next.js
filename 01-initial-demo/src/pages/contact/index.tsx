import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";

export default function contactPage() {
  return (
    <>
      <MainLayout>
        <h1>Contact page</h1>
        <h1>
          {/* Ir a <a href="/about">About</a> */}
          Ir a <Link href="/"> Home </Link>
        </h1>
        <p>
          Get started by editing&nbsp;
          <code className="code">src/pages/contact.jsx</code>
        </p>
      </MainLayout>
    </>
  );
}
