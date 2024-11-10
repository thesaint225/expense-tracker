// animateStats.ts
interface AnimationConfig {
  target: number;
  current: number;
  element: HTMLElement;
}

function animateValue(config: AnimationConfig): void {
  const step = config.target / 100;

  if (config.current < config.target) {
    config.current += step;
    config.element.textContent = config.element.textContent?.includes("$")
      ? `$${Math.floor(config.current)}M+`
      : config.element.textContent?.includes("/")
      ? `${config.current.toFixed(1)}/5`
      : `${Math.floor(config.current)}K+`;

    requestAnimationFrame(() => animateValue(config));
  }
}

export function animateStatsOnScroll(stats: NodeListOf<HTMLElement>) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        const text = element.textContent || "";
        let target = parseFloat(text.replace(/[^0-9.]/g, ""));

        animateValue({
          target,
          current: 0,
          element,
        });
      }
    });
  });

  stats.forEach((stat) => observer.observe(stat));
}
