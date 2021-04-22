# Cypress reset aliases between each test runs

Don't add alias into **before()** hook because the alias will be reset in each test run

links:

* https://github.com/cypress-io/cypress/issues/582
* [aliases are reset between test runs](https://github.com/cypress-io/cypress/issues/582#issuecomment-327548759)
* [Enable Lifecycle Events to be customizable](https://github.com/cypress-io/cypress/issues/686)


## Current behavior:
If I set an alias in before hook, it will be accessible only for first test in the current context.

## Desired behavior:
Alias which is set in before hook should be accessible for all tests in the current context.

## Test code:
This code produces error: cy.get() could not find a registered alias for: '@gaStub'. for the second test.

```javascript
describe('Google Analytics', () => {
  before(() => {
    cy.visit('http://localhost:8080', {
      onBeforeLoad: (contentWindow) => {
        Object.defineProperties(contentWindow, { 'ga': {
            value: cy.stub().as('gaStub'),
            writable: false
          }
        })
      }
    })
  })

  it('should perform logging on first page load', () => {
    cy.get('@gaStub').should('have.been.called')
  })

  it('should report pageview', () => {
    cy.get('@gaStub').should('have.been.called.with', 'send', 'pageview')
  })
})
```

## Isn't a bug, it's desired behavior
The aliases are reset since Cypress clears state in between test runs
**Maintaining state in between tests is an anti-pattern and can lead to unexpected results, as the state can be modified between each test.**
**Turn off reseting aliases `clearAliases: false`**

## Put your test in separate context

link: https://github.com/cypress-io/cypress/issues/582#issuecomment-437346705

```javascript
describe('Describe', function () { 
  before(function () {
    addDbElementAndReturnItsKey().then(elementKey => {
      cy.wrap(elementKey).as('elementKey')
    })
  })
  context('Context1', function () {
    it('Test1Context1', function () {
      // You have access to elementKey by this.elementKey
    })
  })
  context('Context2', function () {
    it('Test1Context2', function () {
      // You have access to elementKey by this.elementKey
    })
  })
})
```
