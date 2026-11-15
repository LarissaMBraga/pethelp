
import Image from "next/image";
import Link from "next/link";
import { MapPin, Heart } from "lucide-react";
import type { Animal } from "@/types/animal";

export default function AnimalCard({ animal }: { animal: Animal }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#e9ebe5] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#245c46]/10">
      <Link
        href={`/animals/${animal.id}`}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <Image
          src={animal.image}
          alt={`Foto de ${animal.name}`}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#245c46]">
          {animal.species}
        </span>
      </Link>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-[#292f2b]">
              {animal.name}
            </h3>
            <p className="mt-1 text-sm text-[#858d85]">{animal.breed}</p>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f0f5ee] text-[#245c46]">
            <Heart size={17} />
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#69736a]">
          <span>{animal.age}</span>
          <span>{animal.size}</span>
          <span>{animal.gender}</span>
        </div>

        <div className="mt-4 flex items-center gap-1.5 text-xs text-[#858d85]">
          <MapPin size={14} />
          {animal.location}
        </div>

        <Link
          href={`/animals/${animal.id}`}
          className="mt-5 flex w-full items-center justify-center rounded-full border border-[#245c46]/20 py-3 text-sm font-semibold text-[#245c46] transition hover:bg-[#245c46] hover:text-white"
        >
          Conhecer {animal.name}
        </Link>
      </div>
    </article>
  );
}
