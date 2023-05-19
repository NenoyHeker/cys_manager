'use strin'

const article = require('../models/article');
var Article = require('../models/article');

//Objeto para disponer de los metodos de ruta a definir

var controller = {

    //Guardar articulo

    save: (req,res)=>{
        var params = req.body;

        var article = new Article();

        //Asignar valores

        article.title = params.title;
        article.content = params.content;
        article.author = params.author;

        //Guardar articulo

        article.save((err, articleStored) => {
            if(err || !articleStored){
                return res.status(404).send({
                    status:'error',
                    message: 'El articulo no se guardo'
                })
            }

            return res.status(200).send({
                status:'success',
                articleStored
            });
        });

    },
    //Metodo listar articulos

    getArticles:(req, res)=>{
        var query = Article.find({});

        query.sort('-date').exec((err, articles)=>{
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al extraer datos'
                });
            }
            if(!articles){
                return res.status(404).send({
                    status: 'error',
                    message: 'Articulos no existentes para mostrar'
                });
            }
            return res.status(200).send({
                status: 'success',
                articles
            });
        });
    },
    //Eliminar articulos\

    delete: (req, res) =>{
        //Pedir ide a travez de la url
        var articleId = req.params.id;

        Article.findOneAndDelete({_id: articleId}, (err, articleRemoved)=>{

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar articulo'
                })
            }
            if(!articleRemoved){
                return res.status(400).send({
                    status: 'No se ha encontrado el articulo'
                });

            }
            return res.status(200).send({
                status: 'success',
                article: articleRemoved
            });
        });
    }
}

module.exports =  controller;