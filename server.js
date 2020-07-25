const express = require('express');
const app = express();

app.use(express.static("htdocs"));
app.use(function (req, res, next) {
    res.set('Cache-Control', 'no-cache');
    next()
})

app.listen(process.env.PORT, function () {
    console.log('App started on port ' + process.env.PORT);
});
