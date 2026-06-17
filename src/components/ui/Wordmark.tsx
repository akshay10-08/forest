import { RESORT_FACTS } from "@/lib/constants";
import clsx from "clsx";

interface WordmarkProps {
  className?: string;
  isScrolled?: boolean;
}

export function Wordmark({ className, isScrolled = false }: WordmarkProps) {
  return (
    <div className={clsx("flex flex-col", className)}>
      {/* TODO: replace --font-wordmark with exact brand typeface from logo */}
      <span
        className={clsx(
          "font-serif text-xl md:text-2xl font-medium tracking-wide transition-colors duration-300",
          isScrolled ? "text-[var(--color-forest)]" : "text-[var(--color-ivory)]"
        )}
      >
        {RESORT_FACTS.name}
      </span>
    </div>
  );
}
