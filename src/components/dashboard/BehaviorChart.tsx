import { type StudentData } from "@/lib/api";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface BehaviorChartProps {
  student: StudentData;
}

const BehaviorChart = ({ student }: BehaviorChartProps) => {
  const radarData = [
    { metric: "LMS", value: Math.min(student.lms * 5, 100), fullMark: 100 },
    { metric: "Punctuality", value: Math.max(100 - student.delay * 10, 0), fullMark: 100 },
    { metric: "Attendance", value: student.attendance, fullMark: 100 },
    { metric: "Sentiment", value: ((student.sentiment + 1) / 2) * 100, fullMark: 100 },
    { metric: "Engagement", value: Math.min(student.lms * 4 + student.attendance * 0.3, 100), fullMark: 100 },
  ];

  const barData = [
    { name: "LMS", value: student.lms, fill: "hsl(var(--primary))" },
    { name: "Delay", value: student.delay, fill: "hsl(var(--warning))" },
    { name: "Attend.", value: student.attendance, fill: "hsl(var(--success))" },
  ];

  return (
    <div className="rounded-xl border border-border bg-card p-5 sm:p-6 flex flex-col">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        Behaviour Breakdown
      </h3>

      <div className="flex-1 min-h-0">
        <div className="h-52">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData} outerRadius="70%">
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis
                dataKey="metric"
                tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
              />
              <Radar
                dataKey="value"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.2}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-2 h-36">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} barSize={28}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Bar dataKey="value" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BehaviorChart;
