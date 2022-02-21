module.exports =(app)=>{
    //atender a requisição /portifolio com o conteudo do portifolio.ejs
    app.get('/portifolio', (req,res)=>{
        res.render('portifolio.ejs')
    })
}