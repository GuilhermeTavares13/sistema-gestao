exports.getLogin = (req, res, next) => {
        res.render('auth/login', {
        path: '/login'
    });
};

exports.postLogin = (req, res, next) => {
    res.setHeader('Set-Cookie', 'loggedIn=true');
    res.redirect('/');
};

exports.getSignUp = (req, res, next) => {
        res.render('auth/signup', {
        path: '/signup'
    });
};