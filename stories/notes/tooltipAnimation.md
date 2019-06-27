# Tooltip

It has the active state set by default for demonstration purposes, so that the tooltip is active when it loads. You can remove the active state by clicking on it. The tooltip appears on hover or click (so it works on mobile devices by tapping on it).

You can change the position of the tooltip in the Knobs panel.

## Relevant CSS

```css
  .icon.active + .tooltip,
  .icon:hover + .tooltip {
    opacity: 1;
    transform: scale(1);
  }

  .tooltip {
    opacity: 0;
    transition: all 250ms cubic-bezier(0.42, 0, 0.175, 1);
    transform: scale(0);
  }
```
