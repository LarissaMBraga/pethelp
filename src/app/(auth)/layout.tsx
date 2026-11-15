
import Link from "next/link";
import { Heart } from "lucide-react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="flex h-[76px] items-center border-b border-[#e9ebe5] px-5 lg:px-8">
        <Link href="/" className="mx-auto flex w-full max-w-7xl items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#245c46] text-white">
            <Heart size={21} fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#245c46]">
            PetHelp<span className="text-[#e9a66a]">.</span>
          </span>
        </Link>
      </header>
      {children}
    </>
  );
}
