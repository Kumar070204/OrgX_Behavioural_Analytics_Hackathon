import { type StudentData } from "@/lib/api";
import { AlertTriangle, ShieldCheck, ShieldAlert } from "lucide-react";

interface RiskAnalyticsProps {
  student: StudentData;
}

function RiskGauge({ score }: { score: number }) {
  const angle = (score / 100) * 180 - 90; // -90 to 90 degrees
  const color =
    score < 40
      ? "hsl(var(--risk-low))"
      : score < 70
      ? "hsl(var(--risk-medium))"
      : "hsl(var(--risk-high))";

  return (
    <div className="relative mx-auto h-28 w-56 overflow-hidden">
      <svg viewBox="0 0 200 110" className="h-full w-full">
        {/* Background arc */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="12"
          strokeLinecap="round"
        />
        {/* Colored arc */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke={color}
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={`${(score / 100) * 251.2} 251.2`}
          className="transition-all duration-1000"
        />
        {/* Needle */}
        <line
          x1="100"
          y1="100"
          x2={100 + 60 * Math.cos((angle * Math.PI) / 180)}
          y2={100 + 60 * Math.sin((angle * Math.PI) / 180)}
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          className="transition-all duration-1000"
        />
        <circle cx="100" cy="100" r="5" fill={color} className="transition-all duration-1000" />
      </svg>
    </div>
  );
}

function DropoutCircle({ probability }: { probability: number }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (probability / 100) * circumference;
  const color =
    probability < 40
      ? "hsl(var(--risk-low))"
      : probability < 70
      ? "hsl(var(--risk-medium))"
      : "hsl(var(--risk-high))";

  return (
    <div className="relative flex items-center justify-center">
      <svg width="110" height="110" className="-rotate-90">
        <circle
          cx="55"
          cy="55"
          r={radius}
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="8"
        />
        <circle
          cx="55"
          cy="55"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000"
        />
      </svg>
      <div className="absolute text-center">
        <span className="text-xl font-bold font-mono text-foreground">{probability}%</span>
      </div>
    </div>
  );
}

const RiskAnalytics = ({ student }: RiskAnalyticsProps) => {
  const riskColor =
    student.risk_level === "Low"
      ? "text-success"
      : student.risk_level === "Medium"
      ? "text-warning"
      : "text-destructive";

  const riskGlow =
    student.risk_level === "Low"
      ? "risk-glow-low"
      : student.risk_level === "Medium"
      ? "risk-glow-medium"
      : "risk-glow-high";

  const RiskIcon =
    student.risk_level === "Low"
      ? ShieldCheck
      : student.risk_level === "Medium"
      ? AlertTriangle
      : ShieldAlert;

  return (
    <div className={`rounded-xl border border-border bg-card p-5 sm:p-6 ${riskGlow}`}>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        Risk Analytics
      </h3>

      <div className="mb-4">
        <RiskGauge score={student.risk_score} />
      </div>

      <div className="mb-5 text-center">
        <p className={`text-4xl font-bold font-mono ${riskColor}`}>{student.risk_score}</p>
        <div className="mt-1 flex items-center justify-center gap-1.5">
          <RiskIcon className={`h-4 w-4 ${riskColor}`} />
          <span className={`text-sm font-semibold ${riskColor}`}>
            {student.risk_level} Risk
          </span>
        </div>
      </div>

      <div className="border-t border-border pt-4">
        <p className="mb-2 text-xs font-medium text-muted-foreground text-center">
          Dropout Probability
        </p>
        <div className="flex justify-center">
          <DropoutCircle probability={student.dropout_probability} />
        </div>
      </div>
    </div>
  );
};

export default RiskAnalytics;
