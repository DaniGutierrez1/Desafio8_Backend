import { Router } from "express";
import { ProductsController } from "../controllers/products.controller.js";
import { ProductsMongo } from "../dao/managers/mongo/productsMongo.js";
import { checkRole, checkUserAuthenticated } from "../middlewares/auth.js";

///export const productsDao=new ProductsMongo()

const validateFields = (req,res,next)=>{
    const productInfo = req.body
    if(!productInfo.title ||  !productInfo.code || !productInfo.price || !productInfo.stock || !productInfo.category){
        return res.json({status:"error",message:"campos incompletos"})
     }else{
        next();
     };

}


const router = Router();

router.get("/",ProductsController.getProducts);


router.get("/:pid",ProductsController.getProduct);


router.post("/",checkUserAuthenticated,checkRole(["admin"]),validateFields,ProductsController.createProduct);

router.put("/:pid",checkUserAuthenticated,checkRole(["admin"]),validateFields,ProductsController.updateProduct)

router.delete("/:pid",checkUserAuthenticated,checkRole(["admin"]),ProductsController.deleteProduct);


export { router as productsRouter} 