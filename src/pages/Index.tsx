import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loginStudent, type StudentData } from "@/lib/api";
import LoginPage from "@/components/LoginPage";
import Dashboard from "@/components/Dashboard";
import { applyTheme, getInitialTheme } from "@/lib/theme";

const Index = () => {
  const [student, setStudent] = useState<StudentData | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const t = getInitialTheme();
    applyTheme(t);
    return t;
  });

  const handleLogin = useCallback(async (username: string, password: string) => {
    const data = await loginStudent(username, password);
    setStudent(data);
  }, []);

  const handleLogout = useCallback(() => {
    setStudent(null);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      applyTheme(next);
      return next;
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!student ? (
        <motion.div
          key="login"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
        >
          <LoginPage onLogin={handleLogin} />
        </motion.div>
      ) : (
        <motion.div
          key="dashboard"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Dashboard
            student={student}
            onLogout={handleLogout}
            theme={theme}
            onToggleTheme={toggleTheme}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Index;
