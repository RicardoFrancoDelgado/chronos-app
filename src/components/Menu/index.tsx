import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    ev.preventDefault();

    setTheme((currTheme) => {
      const nextTheme = currTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={`${styles.cyan} ${styles.menu}`}>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Ir para a home"
        title="Home"
      >
        <HouseIcon />
      </a>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Ver histórico"
        title="History"
      >
        <HistoryIcon />
      </a>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Configurações"
        title="Configuration"
      >
        <SettingsIcon />
      </a>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Mudar tema"
        title="Theme"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
