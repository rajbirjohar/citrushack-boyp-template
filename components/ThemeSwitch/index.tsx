import { useTheme } from "next-themes";

export default function ThemeSwitch(): JSX.Element {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        if (theme === "dark") {
          setTheme("light");
        } else {
          setTheme("dark");
        }
      }}
    >
      {theme === "dark" ? "Dark" : "Light"}
    </button>
  );
}
