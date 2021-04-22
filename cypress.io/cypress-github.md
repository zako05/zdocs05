# Cypress tests run in GitHub Actions (CI pipeline)

## GitHub Actions

Automate, customize, and execute your software development workflows right in your repository with GitHub Actions. You can discover, create, and share actions to perform any job you'd like, including CI/CD, and combine actions in a completely customized workflow.

link: https://docs.github.com/en/actions

### cypress.io/github-action

GitHub Action for running Cypress end-to-end tests. Includes NPM installation, custom caching and lots of configuration options. See [examples](https://github.com/cypress-io/github-action#examples)

link: https://github.com/cypress-io/github-action

## Record test results on Cypress Dashboard

link: https://github.com/cypress-io/github-action#record-test-results-on-cypress-dashboard

```yaml
name: Cypress tests
on: [push]
jobs:
  cypress-run:
    name: Cypress run
    runs-on: ubuntu-16.04
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Cypress run
        uses: cypress-io/github-action@v2
        with:
          record: true
        env:
          # pass the Dashboard record key as an environment variable
          CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}
          # pass GitHub token to allow accurately detecting a build vs a re-run build
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
