import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-20 md:py-28 border-t border-border">
      <div className="container-prose">
        <div className="reveal mb-10 md:mb-14">
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
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
