import { motion } from "framer-motion";
import { type StudentData } from "@/lib/api";
import { LogOut, Sun, Moon } from "lucide-react";
import MetricCards from "./dashboard/MetricCards";
import RiskAnalytics from "./dashboard/RiskAnalytics";
import BehaviorChart from "./dashboard/BehaviorChart";
import InterventionPanel from "./dashboard/InterventionPanel";

interface DashboardProps {
  student: StudentData;
  onLogout: () => void;
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

const Dashboard = ({ student, onLogout, theme, onToggleTheme }: DashboardProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
              <span className="text-sm font-bold text-primary-foreground">OX</span>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-foreground leading-tight">
                Welcome back, {student.name.split(" ")[0]}
              </h2>
              <p className="text-xs text-muted-foreground">
                @{student.username} · Behavioural Dashboard
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <MetricCards student={student} />
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <RiskAnalytics student={student} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <BehaviorChart student={student} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <InterventionPanel student={student} />
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
