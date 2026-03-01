export function getInitialTheme(): "dark" | "light" {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("orgx-theme");
  if (stored === "light" || stored === "dark") return stored;
  return "dark";
}

export function applyTheme(theme: "dark" | "light") {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  localStorage.setItem("orgx-theme", theme);
}
