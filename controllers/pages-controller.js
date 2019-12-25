const showHomepage = (req, res, next) => {
    res.render('index');
}

module.exports = { showHomepage };