
//function for add product

import console, { log } from "node:console"

const addProduct = async (req, res) => {
    try {

        const { name, description, price, category, subCategory, sizes, bestseller } = req.body

        const image1 = req.files.image1[0]
        const image2 = req.files.image1[0]
        const image3 = req.files.image1[0]
        const image4 = req.files.image1[0]

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined)
         let imageUrl =  await Promise.all(
         iamges.map (async (item) => {

         })

         )

        console.log(name, description, price, category, subCategory, sizes, bestseller)
        console.log( images)
        res.json({message:"product add successfully"})

    } catch (error) {
 
        console.log(error);
        res.json({ success: false, message: error.message })
    }



}


//function for list product 

const listProduct = async (req, res) => {


}
//fucntion for removing product

const removeProduct = async (req, res) => {


}
//function for single product info


const singleProduct = async (req, res) => {


}

export { addProduct, listProduct, removeProduct, singleProduct };