const express = require('express');
const app = express();
const PORT = 5007;
const routes = require('./routes')
const nav = require('./nav.json')

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(routes)

app.use(function (req, res, next) {
    res.status(404).render('404', { nav });
});
app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`));

