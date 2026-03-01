import { motion } from "framer-motion";
import { type StudentData } from "@/lib/api";
import { Monitor, Clock, Users, Smile } from "lucide-react";

interface MetricCardsProps {
  student: StudentData;
}

const metrics = [
  {
    key: "lms" as const,
    label: "LMS Logins",
    icon: Monitor,
    format: (v: number) => v.toString(),
    sub: "Total sessions",
  },
  {
    key: "delay" as const,
    label: "Avg. Delay",
    icon: Clock,
    format: (v: number) => `${v} days`,
    sub: "Assignment submission",
  },
  {
    key: "attendance" as const,
    label: "Attendance",
    icon: Users,
    format: (v: number) => `${v}%`,
    sub: "Overall rate",
  },
  {
    key: "sentiment" as const,
    label: "Sentiment",
    icon: Smile,
    format: (v: number) => (v >= 0 ? `+${v.toFixed(1)}` : v.toFixed(1)),
    sub: "Engagement score",
  },
];

function getMetricColor(key: string, value: number): string {
  switch (key) {
    case "lms":
      return value >= 10 ? "text-success" : value >= 5 ? "text-warning" : "text-destructive";
    case "delay":
      return value <= 2 ? "text-success" : value <= 5 ? "text-warning" : "text-destructive";
    case "attendance":
      return value >= 80 ? "text-success" : value >= 60 ? "text-warning" : "text-destructive";
    case "sentiment":
      return value >= 0.3 ? "text-success" : value >= 0 ? "text-warning" : "text-destructive";
    default:
      return "text-foreground";
  }
}

const MetricCards = ({ student }: MetricCardsProps) => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {metrics.map((m, i) => {
        const value = student[m.key];
        const Icon = m.icon;
        return (
          <motion.div
            key={m.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="group rounded-xl border border-border bg-card p-4 sm:p-5 transition-all hover:shadow-lg hover:border-primary/30"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-4 w-4 text-primary" />
              </div>
            </div>
            <p className={`text-2xl font-bold font-mono ${getMetricColor(m.key, value)}`}>
              {m.format(value)}
            </p>
            <p className="mt-0.5 text-xs font-medium text-foreground">{m.label}</p>
            <p className="text-[10px] text-muted-foreground">{m.sub}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default MetricCards;
