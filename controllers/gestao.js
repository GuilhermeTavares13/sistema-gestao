exports.getIndex = (req, res, next) => {
    res.render('gestao/index',{
        path: '/'
    });
}

exports.getSignIn = (req, res, next) => {
    res.render('gestao/signin',{
        path: '/signin'
    });
}

exports.getSignUp = (req, res, next) => {
    res.render('gestao/signup',{
        path: '/signup'
    });
}

exports.getCliente = (req, res, next) => {
    res.render('gestao/cliente',{
        path: '/cliente'
    });
}

exports.getProduto = (req, res, next) => {
    res.render('gestao/produto',{
        path: '/produto'
    });
}

