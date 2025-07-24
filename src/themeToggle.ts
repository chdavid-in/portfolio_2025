// themeToggle.ts
export const toggleTheme = () => {
  const root = document.documentElement;
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "light") {
    root.classList.remove("light");
    localStorage.setItem("theme", "dark");
  } else {
    root.classList.add("light");
    localStorage.setItem("theme", "light");
  }
};
