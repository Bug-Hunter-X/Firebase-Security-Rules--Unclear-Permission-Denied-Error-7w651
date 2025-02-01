The following code snippet demonstrates an uncommon Firebase error related to security rules.  The error arises when trying to access data with insufficient permissions, but the error message itself is misleading, making it difficult to diagnose.

```javascript
firebase.database().ref('/users/' + userId).once('value', function(snapshot) {
  const userData = snapshot.val();
  // ... process userData ...
}).catch(error => {
  console.error('Error fetching user data:', error);
});
```

The error message might simply say 'Permission denied', which is unspecific.  The actual issue might be a missing rule for reading data under the `/users` path.