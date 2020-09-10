const express = require('express');
const app = express();
const cardRoutes = require('./routes/cardRoutes');

mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) => app.listen('3000'))
	.catch((err) => console.log(err));

app.use(cardRoutes);
app.listen(3001);
