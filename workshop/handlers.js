function home(req, res) {
  res.status(200).send(`<h1>Hello world</h1>`);
}

function newUser(req, res) {
  res.status(200).send(`
    <form action="create-user" method="POST">
      <label for="username">Username</label>
      <input id="username" name="username">
      <label for="age">Age</label>
      <input id="age" name="age" type="number">
      <label for="location">Location</label>
      <input id="location" name="location">
      <button type="submit">Create user</button>
    </form>
  `);
}

function createUser(req, res) {
  let data = req.body;
  console.log(data); // e.g. { username: "oli", ... }
  res.status(200).send(`<h1>Thanks for submitting</h1>`);
}

module.exports = { home, newUser, createUser };
