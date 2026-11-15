
import Link from "next/link";
import {
  ArrowLeft,
  LayoutDashboard,
  PawPrint,
} from "lucide-react";

type DashboardPlaceholderProps = {
  title: string;
  description: string;
};

export default function DashboardPlaceholder({
  title,
  description,
}: DashboardPlaceholderProps) {
  return (
    <main className="min-h-[70vh] px-5 py-16">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#245c46]"
        >
          <ArrowLeft size={17} /> Voltar ao início
        </Link>

        <div className="mt-10 rounded-3xl border border-[#e7eae3] bg-white p-8 md:p-12">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e9f1e8] text-[#245c46]">
            <LayoutDashboard size={26} />
          </div>

          <h1 className="mt-7 text-3xl font-bold text-[#293b2f]">
            {title}
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[#778078]">
            {description}
          </p>

          <div className="mt-9 rounded-2xl border border-dashed border-[#d9e1d7] bg-[#fbfcfa] p-7">
            <PawPrint size={26} className="text-[#668b6f]" />
            <p className="mt-4 font-semibold text-[#293b2f]">
              Esta área está em desenvolvimento.
            </p>
            <p className="mt-2 text-sm leading-6 text-[#778078]">
              As funcionalidades serão implementadas e conectadas ao backend
              nas próximas etapas do MVP.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
