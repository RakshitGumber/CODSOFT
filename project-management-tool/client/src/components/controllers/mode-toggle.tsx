import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { Icon } from "@iconify/react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-8 h-8"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      <div className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
        <Icon icon="line-md:sunny-outline-twotone-loop" />
      </div>
      <div className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
        <Icon icon="line-md:moon-twotone-alt-loop" />
      </div>
    </Button>
  );
}
