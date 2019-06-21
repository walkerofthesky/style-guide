# Sun Spinner

## Example Implementation

### HTML

```html
<div class='sun-loader sun-loader--open'>
  <div class='sun-loader__icon'>
    <div class='sun-loader__sun'>
      <div class='sun-loader__rays sun-loader__rays--0'></div>
      <div class='sun-loader__rays sun-loader__rays--1'></div>
      <div class='sun-loader__rays sun-loader__rays--2'></div>
      <div class='sun-loader__rays sun-loader__rays--3'></div>
      <div class='sun-loader__rays sun-loader__rays--4'></div>
      <div class='sun-loader__rays sun-loader__rays--5'></div>
      <div class='sun-loader__rays sun-loader__rays--6'></div>
      <div class='sun-loader__rays sun-loader__rays--7'></div>
    </div>
  </div>
  <div class='sun-loader__text'>
    <p>Exciting electrons...</p>
  </div>
</div>
```

### CSS

```css
@keyframes grow {
  50% {
    width: 40px;
  }
  100% {
    width: 30px;
  }
}
@keyframes grow-vertical {
  50% {
    height: 40px;
  }
  100% {
    height: 30px;
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.sun-loader {
  height: 100vh;
  width: 100vw;
  background-color: rgba(25, 25, 25, 0.25);;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  display: none;
}
.sun-loader--open {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.sun-loader__text {
  margin-top: 90px;
  color: #ff8200;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 24px;
}
.sun-loader__text p {
  font-size: inherit;
  margin: 0;
}
.sun-loader__sun {
  height: 60px;
  width: 60px;
  box-shadow: inset 0 0 0 4px #ff8200;
  border-radius: 50%;
  position: relative;
  animation: spin 13s linear infinite;
}
.sun-loader__rays {
  height: 30px;
  width: 30px;
  position: absolute;
  border-top: 4px solid #ff8200;
  transition: 2s;
  animation-fill-mode: 'both';
  animation: grow 1.3s 1s infinite ease-in-out;
}
.sun-loader__rays--5,
.sun-loader__rays--6,
.sun-loader__rays--7,
.sun-loader__rays--8 {
  border-top: none;
  border-bottom: 4px solid #ff8200;
}
.sun-loader__rays--1,
.sun-loader__rays--7 {
  margin-right: 4px;
}
.sun-loader__rays--3,
.sun-loader__rays--5 {
  margin-left: 4px;
}
.sun-loader__rays--0 {
  right: 70px;
  top: 30px;
}
.sun-loader__rays--1 {
  right: 65px;
  top: -5px;
  transform: rotate(45deg);
  transform-origin: right;
  animation-delay: 1.2s;
}
.sun-loader__rays--2 {
  border-top: none;
  border-left: 4px solid #ff8200;
  right: 0;
  bottom: 70px;
  animation-name: grow-vertical;
  animation-delay: 1.8s;
}
.sun-loader__rays--3 {
  left: 65px;
  top: -5px;
  transform: rotate(-45deg);
  transform-origin: left;
  animation-delay: 2.4s;
}
.sun-loader__rays--4 {
  top: 30px;
  left: 70px;
  animation-delay: 3s;
}
.sun-loader__rays--5 {
  top: 35px;
  left: 65px;
  transform: rotate(45deg);
  transform-origin: left;
  animation-delay: 3.6s;
}
.sun-loader__rays--6 {
  top: 70px;
  border-bottom: none;
  border-right: 4px solid #ff8200;
  animation-name: grow-vertical;
  animation-delay: 4.2s;
}
.sun-loader__rays--7 {
  bottom: -5px;
  right: 65px;
  transform: rotate(-45deg);
  transform-origin: right;
  animation-delay: 4.8s;
}

```

### SCSS

```css
$radius: 30px;
$buffer: 10px;
$ray-distance: $radius * 2 + $buffer;
$half-buffer: $buffer / 2;
$ray-distance-angle: $radius * 2 + $half-buffer;
$time-multiplier: 0.6s;
$color-gray--translucent: rgba(25, 25, 25, 0.25);
$color-brand: #ff8200;

@keyframes grow {
  50% {
    width: $radius + 10px;
  }
  100% {
    width: $radius;
  }
}

@keyframes grow-vertical {
  50% {
    height: $radius + 10px;
  }
  100% {
    height: $radius;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.sun-loader {
  height: 100vh;
  width: 100vw;
  background-color: $color-gray--translucent;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  display: none;

  &--open {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &__text {
    margin-top: $radius * 3;
    color: $color-brand;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 24px;

    p {
      font-size: inherit;
      margin: 0;
    }
  }

  &__sun {
    height: $radius * 2;
    width: $radius * 2;
    box-shadow: inset 0 0 0 4px $color-brand;
    border-radius: 50%;
    position: relative;
    animation: spin 13s linear infinite;
  }

  &__rays {
    height: $radius;
    width: $radius;
    position: absolute;
    border-top: 4px solid $color-brand;
    transition: 2s;
    animation-fill-mode: 'both';
    animation: grow 1.3s 1s infinite ease-in-out;

    &--5,
    &--6,
    &--7,
    &--8 {
      border-top: none;
      border-bottom: 4px solid $color-brand;
    }

    &--1,
    &--7 {
      margin-right: 4px;
    }

    &--3,
    &--5 {
      margin-left: 4px;
    }

    &--0 {
      right: $ray-distance;
      top: $radius;
    }

    &--1 {
      right: $ray-distance-angle;
      top: -$half-buffer;
      transform: rotate(45deg);
      transform-origin: right;
      animation-delay: $time-multiplier * 2;
    }

    &--2 {
      border-top: none;
      border-left: 4px solid $color-brand;
      right: 0;
      bottom: $ray-distance;
      animation-name: grow-vertical;
      animation-delay: $time-multiplier * 3;
    }

    &--3 {
      left: $ray-distance-angle;
      top: -$half-buffer;
      transform: rotate(-45deg);
      transform-origin: left;
      animation-delay: $time-multiplier * 4;
    }

    &--4 {
      top: $radius;
      left: $ray-distance;
      animation-delay: $time-multiplier * 5;
    }

    &--5 {
      top: $radius + $half-buffer;
      left: $ray-distance-angle;
      transform: rotate(45deg);
      transform-origin: left;
      animation-delay: $time-multiplier * 6;
    }

    &--6 {
      top: $ray-distance;
      border-bottom: none;
      border-right: 4px solid $color-brand;
      animation-name: grow-vertical;
      animation-delay: $time-multiplier * 7;
    }

    &--7 {
      bottom: -$half-buffer;
      right: $ray-distance-angle;
      transform: rotate(-45deg);
      transform-origin: right;
      animation-delay: $time-multiplier * 8;
    }
  }
}
```
