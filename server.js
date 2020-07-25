const express = require('express');
const app = express();

app.use(express.static("htdocs"));
app.use(function (req, res, next) {
    res.set('Cache-Control', 'no-cache');
    next()
})

app.listen(process.env.PORT || 80, function () {
    console.log('App started!');
});
