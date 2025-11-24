exports.getSignIn = (req, res, next) => {
    res.render('cadastro/signin',{
        path: '/signin'
    });
}