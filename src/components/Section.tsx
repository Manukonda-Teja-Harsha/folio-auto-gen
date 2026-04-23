import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  children,
  tone = "default",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  tone?: "default" | "invert";
}) {
  const isInvert = tone === "invert";
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28 border-t border-border",
        isInvert
          ? "bg-foreground text-background [--border:oklch(1_0_0_/_15%)] [--muted-foreground:oklch(0.7_0_0)] [--card:oklch(0.18_0_0)] [--card-foreground:oklch(0.97_0_0)] [--secondary:oklch(0.22_0_0)] [--secondary-foreground:oklch(0.97_0_0)] [--accent:oklch(0.24_0_0)]"
          : "bg-background text-foreground",
      )}
    >
      <div className="container-prose">
        <div className="reveal mb-10 md:mb-14">
          {eyebrow && (
            <p
              className={cn(
                "text-xs uppercase tracking-[0.2em] mb-3",
                isInvert ? "text-background/60" : "text-muted-foreground",
              )}
            >
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl md:text-5xl font-semibold">{title}</h2>
        </div>
        <div className="reveal">{children}</div>
      </div>
    </section>
  );
}
