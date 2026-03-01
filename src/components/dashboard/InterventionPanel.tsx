import { type StudentData } from "@/lib/api";
import { Info, AlertTriangle, ShieldCheck } from "lucide-react";

interface InterventionPanelProps {
  student: StudentData;
}

const InterventionPanel = ({ student }: InterventionPanelProps) => {
  const isHigh = student.risk_level === "High";
  const isLow = student.risk_level === "Low";

  const Icon = isHigh ? AlertTriangle : isLow ? ShieldCheck : Info;

  const bgClass = isHigh
    ? "bg-destructive/5 border-destructive/20"
    : isLow
    ? "bg-success/5 border-success/20"
    : "bg-warning/5 border-warning/20";

  const iconClass = isHigh
    ? "text-destructive"
    : isLow
    ? "text-success"
    : "text-warning";

  return (
    <div className={`rounded-xl border p-5 sm:p-6 ${bgClass}`}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5">
          <Icon className={`h-5 w-5 ${iconClass}`} />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">
            Intervention Recommendation
          </h3>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
            {student.intervention}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
              isHigh ? "bg-destructive/10 text-destructive" : isLow ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
            }`}>
              {student.risk_level} Priority
            </span>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              Score: {student.risk_score}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterventionPanel;
