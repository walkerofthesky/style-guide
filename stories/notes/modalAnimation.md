# Modal Animation

Toggle the modal's open state in the Knobs panel.

## Relevant CSS

```css
.modal__overlay {
  /* ...Other rules */
  opacity: 0;
  transition: opacity 366ms cubic-bezier(0.42, 0, 0.175, 1);
}
.modal--open .modal__overlay {
  opacity: 1
}

.modal__container {
  /* ...Other rules */
  transform: scale(0);
  transition: transform 366ms cubic-bezier(0.42, 0, 0.175, 1);
}
.modal--open .modal__container {
  transform: scale(1);
}
```
