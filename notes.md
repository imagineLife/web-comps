# Custom Elements
## Defining a new element
```
class Titled-Paragraph extends HTMLElement {...}
window.customElements.define('app-drawer', Titled-Paragraph);

// Or use an anonymous class if you don't want a named constructor in current scope.
window.customElements.define('app-drawer', class extends HTMLElement {...});
```

## Rules on Custom-Element Creation
1. Name must be ```string-string```
  - ... so the html-parser can **distinguish** custom elements from regular elements
2. One tag can not be re-registered
  - ... no kidding, maybe?!
3. Can not be self closing ```<new-element />```
- ...html only allows a few elements to be self-closing


## LifeCycle Hooks, _(custom element reactions)_
- constructor
  - init state, setup event listeners, **create shadow-dom**
  - more [Specs](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance)
-