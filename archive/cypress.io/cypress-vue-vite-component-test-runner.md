# Cypress Component Test Runner

Links:

[Component testing](https://docs.cypress.io/guides/component-testing/introduction#What-is-Component-Testing)

[Component test runner](https://cypress.io/blog/2021/04/06/introducing-the-cypress-component-test-runner) 

[todo]

## React

[Component testing with React](https://www.cypress.io/blog/2021/04/06/cypress-component-testing-react/)

[todo]

## Vue 2/3 (Component testing with Cypress, Vue & Vite)

You need Cypress > 7.x and @cypress/vue >= 3

Links:

[Component testing with Vue 2/3](https://www.cypress.io/blog/2021/04/06/getting-start-with-cypress-component-testing-vue-2-3/) 

[Jessica Sachs GitHub Repo Cypress with Vite](https://github.com/JessicaSachs/cypress-loves-vite) 

[todo]

## Notes that need to be included in the article


Added directly in spec:

```javascript
import { mount  } from @cypress/vue
import PerksModal from ./PerksModal.vue
```

`import PerksModal from ./PerksModal.vue`: part of the url path 'localhost:3000/_/#/tests/component/components/PerksModal.vue'

playground with BaseButton.vue

* to quickly explore examples of components

```javascript
import ExampleBaseButton from ./ExampleBaseButton.vue
import BaseButton from ./BaseButton.vue
```

where is Vite?

`@cypress/vite-dev-server`
