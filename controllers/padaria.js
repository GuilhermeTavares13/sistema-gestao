exports.getIndex = (req, res, next) => {
    res.render('padaria/index',{
        path: '/'
    });
}

exports.getSignIn = (req, res, next) => {
    res.render('padaria/signin',{
        path: '/signin'
    });
}

exports.getSignUp = (req, res, next) => {
    res.render('padaria/signup',{
        path: '/signup'
    });
}

