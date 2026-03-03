# Vue Reactivity Project Feedback
**Student:** Jean V

This is a dumpling filling selector — the component structure and `v-for` usage show good thinking, but the core functionality is broken because `cartAdd` and `buy` functions are never defined and `fillings` is not reactive.

## Vite CLI – Approaching
`package.json` includes `vite` but the `vue` version is set to `"beta"` which is not a valid version string. Change it to a specific version like `"^3.4.0"`:

```json
"dependencies": {
  "vue": "^3.4.0"
}
```

Also run `npm install` after changing this to update your `node_modules`.

## Iteration in Vue – Mastery
`v-for` is used with a `:key` bound to a unique value on the correct element. Good structure here.

## Data Binding – Not Yet
The `fillings` array is declared as a plain `const`, not wrapped in `ref()`. Vue cannot track changes to it reactively:

```js
// Current (not reactive):
const fillings = [{ name: 'Pork', price: 2.5 }, ...]

// Fix:
import { ref } from 'vue'
const fillings = ref([{ name: 'Pork', price: 2.5 }, ...])
```

## Click Methods – Not Yet
Two click handlers reference functions that are never defined:

```html
<button @click="cartAdd(filling)">Add</button>
<button @click="buy()">Buy</button>
```

Neither `cartAdd` nor `buy` exist in the script. You need to define them:

```js
const cart = ref([])
function cartAdd(filling) {
  cart.value.push(filling)
}
function buy() {
  alert(`Order placed! Total: $${cart.value.reduce((sum, f) => sum + f.price, 0)}`)
  cart.value = []
}
```

## Reactive UI – Not Yet
Because `fillings` isn't reactive and the click functions don't exist, nothing updates when the user interacts with the page.

## Semantic HTML – Approaching
The filling list uses a reasonable structure. However, there is a CSS class name with a dot included in the `class` attribute — the dot belongs in the CSS file, not the HTML:

```html
<!-- Broken: -->
<div class=".container">

<!-- Fix: -->
<div class="container">
```

## BEM CSS – Not Yet
Class names are generic (`container`, `card`, `button`). Apply BEM naming:
- `dumpling-card` (block)
- `dumpling-card__name` (element)
- `dumpling-card__button--add` (modifier)

## Bonus – Aesthetics – Approaching
The layout is clean. Adding a color scheme, hover effects, and a visible cart summary would make this feel more complete.

## Summary of Critical Fixes
1. **Wrap `fillings` in `ref()`** so Vue can track it.
2. **Define `cartAdd` and `buy` functions** in `<script setup>` — right now clicking the buttons does nothing.
3. **Remove the dot from `class=".container"`** — it should be `class="container"`.
4. **Fix the Vue version** in `package.json` from `"beta"` to `"^3.4.0"`.
