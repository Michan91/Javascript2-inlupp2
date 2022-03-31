const { exists } = require('./productSchema');
const Product = require('./productSchema');

//Hämtar alla produkter
exports.getProducts = async (req, res) => {
    try {
        const data = await Product.find()
        res.status(200).json(data)
    } 
    catch (err) {
        res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Någonting gick fel under hämntning.',
            err
        })
    }
}

//Hämtar hem endast en produkt
exports.getProductById = (req, res) => {

    console.log(req.userData) //Visar vilken användare som gjör saker

    Product.exists({ _id: req.params.id }, (err, product) => {
        if (err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Gick inte att hitta angiven produkt.',   
            })
        }
        if(!product) {
            return res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'Denna produkt finns inte.',     
            })
        }

        Product.findById(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => {
            res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Server fel.',     
            })
        })
    })
}




//Lägger till produkter
exports.createProduct = (req, res) => {
    Product.exists({ name: req.body.name }, (err, result) => {

        if(err) {
            return res.status(500).json(err)
        }

        if(result) {
            return res.status(400).json({
            statusCode: 400,
            status: false,
            message: 'Produkten finns redan, uppdatera den befintliga.'
            })
        }
        
        Product.create({
            name:       req.body.name,
            short:      req.body.short,
            desc:       req.body.desc,
            price:      req.body.price,
            quantity:   req.body.quantity,
            image:      req.body.image
        })
        .then(data => {
            res.status(201).json({
            statusCode: 201,
            status: true,
            message: 'Produkt skapad.',
            data   
            })
        })
        .catch(err => {
            res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Misslyckades att skapa produkt.',
            err      
            })
        })
    })
}

//Uppdaterar en produkt 
exports.updateProduct = (req, res) => {
    Product.exists({ _id: req.params.id}, (err, result) => {
        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Gick inte att hitta angiven produkt.'    
            })
        }
        if(!result) {
            return res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'Denna produkt finns inte.', 
            })
        }
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(data => {
            res.status(200).json({
                statusCode: 200,
                status: true,
                message: 'Produkten är uppdaterad.',
                data
            })
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
    })
}



//Tar bort en produkt 
exports.deleteProduct = (req, res) => {
Product.exists({ _id: req.params.id }, (err, result) => {
    if(err) {
        return res.status(400).json({
            statusCode: 400,
            status: false,
            message: 'Gick inte att hitta angiven produkt.'
        })
      }
    if(!result) {
        return res.status(404).json({
            statusCode: 404,
            status: false,
            message: 'Denna produkt finns inte.',      
        })
    }

    Product.deleteOne({ _id: req.params.id })
    .then(() => {
        res.status(200).json({
            statusCode: 200,
            status: true,
            message: 'Produkt raderad.',    
        })
    })
    .catch(err => {
        res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Gick inte att redera produkten.',
        })
    })
})
}
