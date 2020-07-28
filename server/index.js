const express = require("express");
const mc = require("./controller/messages_controllers");
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'))

const messagesBaseUr1 = "/api/messages";
app.post(messagesBaseUr1, mc.create);
app.get(messagesBaseUr1, mc.read);
app.put(`${messagesBaseUr1}/:id`, mc.update);
app.delete(`${messagesBaseUr1}/:id`, mc.delete);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
