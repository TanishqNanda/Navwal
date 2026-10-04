type D = { className?: string };

export function DoodleArrowDown({ className }: D) {
  return (
    <svg viewBox="0 0 60 180" fill="none" className={className} aria-hidden="true">
      <path
        d="M30 6c-7 40 6 70 0 110"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M14 100c7 12 12 19 16 28 5-10 9-17 16-28"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PencilWeb({
  className,
  children,
  rotate = "-2deg",
}: D & { children: React.ReactNode; rotate?: string }) {
  return (
    <div
      className={`relative inline-block ${className ?? ""}`}
      style={{ transform: `rotate(${rotate})` }}
    >
      <svg viewBox="0 0 240 92" preserveAspectRatio="none"  fill="none" className="w-full" aria-hidden="true">
        <path
          d="M18 12c50-7 150-8 204 1 12 2 14 46 2 52-40 7-96 8-140 6-10 8-20 12-32 15 4-6 6-11 6-17-14-3-18-6-20-16-2-12-2-30 4-36"
          stroke="currentColor"
          strokeWidth="2.2"
          fill="var(--color-card)"
          strokeLinejoin="round"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center px-6 pb-4 text-center text-sm leading-tight sm:text-base">
        {children}
      </span>
    </div>
  );
}

export function CheckTick({ className }: D) {
  return (
    <svg viewBox="0 0 40 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 17c5 4 8 7 11 11C21 17 28 8 36 3"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}