const Product = require('../../../model/product');

//To create the product
module.exports.create = function(req,res){
    if(req.body.name && req.body.quantity){
        Product.create({
            name: req.body.name,
            quantity: req.body.quantity
        },function(err, product){
            if (err) {
                return res.status(500).json({error:"internal server issue"});
            }else{
                return res.status(200).json({data:{
                    product:{
                        name: product.name,
                        quantity: product.quantity
                    }
                }});
            }
        });
    }else{
        return res.status(404).json({error:" field data is incorrect"});
    }
}

// To get the details of products
module.exports.view = function(req, res){
    console.log("enterd to view");
   Product.find({}, function(err, product){
       if(err){
        return res.status(500).json({error:"internal server issue"});
       }else{
           let requiredProductDetials = product.map(function(value){
            return {
                id: value.id,
                name: value.name,
                quantity: value.quantity
            }
           });
           return res.status(200).json({data: {products: requiredProductDetials}});
       }
   });
}

// To delete the the product with help id
module.exports.remove = function(req,res){
    Product.findByIdAndDelete(req.params.id,function(err){
        if(err){
            return res.status(500).json({error:"product id is not in the list"});
        }else{
            return res.status(200).json({data:{
                message: "product deleted"
            }})
        }
    })
}

// to update the product quantity 
module.exports.edit = function(req, res){
    Product.findByIdAndUpdate(req.params.id, {quantity: req.query.number}, {new: true}, function(err, product){
        if (err) {
            return res.status(500).json({error:"error in server"})
        }
        else{
            return res.status(200).json({data: {product: {
                id: product.id,
                name: product.name,
                quantity: product.quantity
            },
            message: "updated successfully"
        }});
        }
    })
}