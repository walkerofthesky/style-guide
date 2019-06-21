# Accordion Animation

## Relevant CSS

```css
/* On the section you want to hide and expand (e.g. .accordion__fold) */
.accordion__fold {
  /* Other rules */
  max-height: 0;
  overflow: hidden;
  transition: max-height 300ms cubic-bezier(0.42, 0, 0.034, 1.1);
}
.accordion__fold--expanded {
  max-height: 500px; /* More or less depending on your needs */
}
```
