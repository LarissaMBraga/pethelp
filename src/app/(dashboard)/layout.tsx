
import Link from "next/link";
import { Heart } from "lucide-react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="border-b border-[#e9ebe5] bg-white">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#245c46] text-white">
              <Heart size={21} fill="currentColor" />
            </div>
            <span className="text-xl font-bold text-[#245c46]">
              PetHelp<span className="text-[#e9a66a]">.</span>
            </span>
          </Link>

          <Link
            href="/"
            className="text-sm font-semibold text-[#245c46] hover:underline"
          >
            Voltar ao site
          </Link>
        </div>
      </header>
      {children}
    </>
  );
}
