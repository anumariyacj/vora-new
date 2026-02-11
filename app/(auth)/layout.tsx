import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
      <div className="hidden flex-col justify-between bg-[#18181b] p-12 text-white md:flex">
        <h1 className="text-xl font-bold italic tracking-tighter uppercase">
          Vora
        </h1>

        <div className="space-y-6">
          <p className="block text-xs uppercase tracking-[0.4em] text-[#71717a]">
            The Manifesto
          </p>
          <p className="text-4xl font-normal leading-tight lg:text-5xl">
            Elegance <br />
            In Every <br />
            Thread.
          </p>
        </div>

        <div className="space-y-4">
          <p className="max-w-md text-lg font-light leading-relaxed text-[#a1a1aa]">
            Vora isn&apos;t just a label; it’s a commitment to the essential. We
            strip away the noise to reveal the soul of the garment. Every stitch
            is a choice, every fabric is a narrative.
          </p>
          <p className="text-sm italic text-[#71717a]">© 2026 Vora</p>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center bg-white p-8 dark:bg-zinc-950">
        <div className="absolute top-8 flex w-full justify-center md:hidden">
          <h1 className="text-2xl font-bold italic tracking-tighter">VORA</h1>
        </div>

        <div className="w-full max-w-sm">{children}</div>
      </div>
    </div>
  );
}
