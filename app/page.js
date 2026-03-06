
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Link href="/ecommerce" className="p-6 bg-white shadow rounded-xl">Ecommerce SaaS UI</Link>
      <Link href="/dashboard" className="p-6 bg-white shadow rounded-xl">Admin Analytics Dashboard</Link>
      <Link href="/pos" className="p-6 bg-white shadow rounded-xl">Cloud Kitchen POS</Link>
      <Link href="/chatbot" className="p-6 bg-white shadow rounded-xl">AI Chatbot Dashboard</Link>
    </div>
  );
}
