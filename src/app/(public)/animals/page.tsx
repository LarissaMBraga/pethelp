
import type { Metadata } from "next";
import { Suspense } from "react";
import AnimalCard from "@/components/animals/AnimalCard";
import { animals } from "@/data/animals";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Encontrar animais",
};

async function AnimalsContent() {
  const searchParams = await Promise.resolve(
    (await import("next/navigation")).connection()
  );

  const { q = "" } = await (async () => {
    const { searchParams } = await import("next/navigation");
    return searchParams;
  })();

  const search = q.toLocaleLowerCase("pt-BR");

  const filteredAnimals = animals.filter((animal) => {
    return [
      animal.name,
      animal.species,
      animal.breed,
      animal.location,
    ].some((value) => value.toLocaleLowerCase("pt-BR").includes(search));
  });

  return (
    <>
      <form
        action="/animals"
        method="get"
        className="mt-9 flex max-w-xl items-center gap-3 rounded-2xl border border-[#e7e9e2] bg-white p-3"
      >
        <Search size={20} className="ml-2 text-[#78917b]" />
        <input
          type="search"
          name="q"
          defaultValue={q}
          placeholder="Buscar por nome, espécie ou cidade..."
          className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-[#a1a79f]"
        />
        <button
          type="submit"
          className="rounded-xl bg-[#245c46] px-5 py-3 text-sm font-semibold text-white"
        >
          Buscar
        </button>
      </form>

      <div className="mt-12 flex items-center justify-between">
        <h2 className="text-lg font-bold text-[#293b2f]">
          {q ? "Resultados da busca" : "Animais disponíveis"}
        </h2>
        <span className="text-sm text-[#858d85]">
          {filteredAnimals.length} resultado(s)
        </span>
      </div>

      {filteredAnimals.length > 0 ? (
        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredAnimals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-[#d9e1d7] bg-white p-12 text-center">
          <p className="font-semibold text-[#293b2f]">
            Nenhum animal encontrado.
          </p>
          <p className="mt-2 text-sm text-[#858d85]">
            Tente pesquisar por outro nome, espécie ou localização.
          </p>
        </div>
      )}
    </>
  );
}

function AnimalsFallback() {
  return (
    <div
      className="mt-9 max-w-xl animate-pulse rounded-2xl border border-[#e7e9e2] bg-white p-6"
      aria-label="Carregando animais"
    >
      <div className="h-4 w-2/3 rounded bg-[#e7e9e2]" />
    </div>
  );
}

export default function AnimalsPage() {
  return (
    <section className="min-h-screen py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#668b6f]">
            Encontre seu companheiro
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#293b2f] md:text-5xl">
            Animais esperando por um lar.
          </h1>
          <p className="mt-5 text-sm leading-7 text-[#778078]">
            Conheça os animais, suas histórias e os responsáveis que estão
            procurando uma família para eles.
          </p>
        </div>

        <Suspense fallback={<AnimalsFallback />}>
          <AnimalsContent />
        </Suspense>
      </div>
    </section>
  );
}
