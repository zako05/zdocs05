# Method 'DELETE'

Examples:

```javascript
cy.request({
  method: "DELETE",
  url: `/api/client/v0/users/${userId}/pin`,
  headers: {
    Authorization: `Bearer ${oAuthToken}`,
    AdminAuthorization: `Bearer ${adminBearer}`
  }
}).then(response => {
  expect(response.status).to.eq(200);
});
```

```javascript
cy.request({
  method: "DELETE",
  url: `/api/client/v0/users/${userId}`,
  headers: {
    Authorization: `Bearer ${oAuthToken}`,
    AdminAuthorization: `Bearer ${adminBearer}`
  }
}).then(response => {
  expect(response.status).to.eq(200);
  return response.messages;
});
```         
