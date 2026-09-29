import { education } from "@/data/education";
import { Verify } from "./Verify";

/** Compact education list shown in the hero, below the introduction. */
export function EducationBrief() {
  return (
    <div className="mt-9 border-t border-rule pt-5">
      <h2 className="eyebrow">Education</h2>
      <ul className="mt-3 space-y-3">
        {education.map((ed) => (
          <li key={ed.institution}>
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4">
              <p className="text-[15px] text-ink">
                <span className="font-medium">{ed.degree}</span>
                <span className="text-ink-2">, {ed.institution}</span>
              </p>
              <span className="text-[13px] whitespace-nowrap text-muted tabular-nums">
                {ed.start} – {ed.end}
              </span>
            </div>
            {ed.details && <p className="mt-0.5 text-[13.5px] text-muted">{ed.details.join(" · ")}</p>}
            <Verify items={ed.verify} />
          </li>
        ))}
      </ul>
    </div>
  );
}
