"use client";

import { Home, ClipboardList, Utensils } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-black text-white flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-10">Kitchen POS</h1>

      <nav className="space-y-4">
        <Link href="/dashboard" className="flex gap-2 hover:text-orange-400">
          <Home size={20} /> Dashboard
        </Link>

        <Link href="/orders" className="flex gap-2 hover:text-orange-400">
          <ClipboardList size={20} /> Orders
        </Link>

        <Link href="/menu" className="flex gap-2 hover:text-orange-400">
          <Utensils size={20} /> Menu
        </Link>
      </nav>
    </div>
  );
}
