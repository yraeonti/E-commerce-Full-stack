
const data = require('../data')

const getProducts = (req, res) => {
    res.send(data)
}

const getSingleProduct = (req, res) => {
    const singleprod = data.find((prod) => prod.id === Number(req.params.id))
    // console.log(req.params.id)
    if (singleprod) {
       res.send(singleprod)
    }
    else {
        res.status(401).send("product not found")
    }
}

module.exports = {getProducts, getSingleProduct}