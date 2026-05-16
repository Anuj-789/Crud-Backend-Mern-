const teacher = require('../../model/teacherschema')

const addteacher = async(req,res)=>{

    try{
        const data = req.body;
        const newteacher = await teacher.create(data);

        res.status(201).json({
            message:"Teacher data added successfully"
        });


    }catch(error){
        res.status(500).json({
            message:"Error adding teacher",
            error:error.message
        })
    }
}

module.exports = addteacher;