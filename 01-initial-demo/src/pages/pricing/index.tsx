import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";

export default function pricingPage() {
  return (
    <MainLayout>
      <h1>Pricing page</h1>
      <h1>
        Ir a <Link href="/"> Home </Link>
      </h1>
      <p>
        Get started by editing&nbsp;
        <code className="code">src/pages/pricing/index.jsx</code>
      </p>
    </MainLayout>
  );
}
