var users = [];

function addUser(user) {
  if (user == null) {
    throw new Error('user is required');
  }
  users.push(user);
  $.publish('addUserSuccess', user.id);
  return user.id;
}
