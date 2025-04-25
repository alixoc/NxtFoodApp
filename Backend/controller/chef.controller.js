import Chef from "../model/chef.model.js";


export const getChef=async(req,res)=>{


try {
    const chef= await Chef.find()
    res.status(200).json(chef) //200 is success code when comm with db
} catch (error) {
    console.log("ERROR",error)
    res.status(500).json(error) 
}

}

