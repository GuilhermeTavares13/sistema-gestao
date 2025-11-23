exports.getIndex = (req, res, next) => {
    res.render('cadastro/index',{
        path: '/'
    });
}