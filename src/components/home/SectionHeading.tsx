
export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#668b6f]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#292f2b] md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-[#778078] md:text-base">
        {description}
      </p>
    </div>
  );
}
