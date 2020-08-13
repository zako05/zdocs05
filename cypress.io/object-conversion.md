# Encode image to base64

```javascript
cy.fixture("fingerprint_45_LEFT_RING.jpg").as("fingerprint");
```

# Encode JSON to base64

This does not work, cypress does not convert *.json into base64. We have to
convert it into string first then to base64.

```javascript
cy.fixture("users_filter.json", "base64").as("filter");
```

```javascript
cy.fixture("users_filter.json").then(filter => {
const filterToString = JSON.stringify(filter);
const filterToBase64 = btoa(filterToString);
```

## Encode JSON into base64 to execute system convertor

`base64` is command line tool that encode object into base64.

```javascript
cy.exec("base64 cypress/fixtures/users_filter.json")
  .its("stdout")
  .then(filter => {
    cy.get("@filter").then(filter => {
  });
});
```

## stringify()
## btoa
