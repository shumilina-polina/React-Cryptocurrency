export function changeCssRootVariables(theme: string) {
  localStorage.setItem("theme", theme);
  const root = document.querySelector(":root") as HTMLElement;

  const components = [
    "body-background",
    "input-color",
    "text-color",
  ];

  components.forEach((component) => {
    root.style.setProperty(
      `--${component}-default`,
      `var(--${component}-${theme})`
    );
  });
}
