import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  function handleThemeChange(
    ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    ev.preventDefault();
    console.log("Clicado", Date.now());

    setTheme((currTheme) => {
      const nextTheme = currTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });

    document.documentElement.setAttribute("data-theme", theme);
  }

  return (
    <nav className={`${styles.cyan} ${styles.menu}`}>
      <h1>{theme}</h1>
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
        <SunIcon />
      </a>
    </nav>
  );
}
