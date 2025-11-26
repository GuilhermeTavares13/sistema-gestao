exports.getIndex = (req, res, next) => {
    console.log(req.get('Cookie'));
    res.render('index',{
        path: '/'
    });
}