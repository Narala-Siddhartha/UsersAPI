const User = require("../Models/user");

async function handleGetAllUsers(request,response)
{
    var data = await User.find({})
    .select('first_name last_name email job_title gender')
    .lean();  // Converts Mongoose document to plain JSON
    return response.status(200).json(data);
}

async function handleCreateNewUser(request,response) {
    const body = request.body;
        const data = await User.create({
            first_name:body.first_name,
            last_name:body.last_name,
            email:body.email,
            job_title:body.job_title,
            gender:body.gender
        });
        return response.status(201).json({status:"Success"});
}

async function handleGetUserById(request,response)
{
    var data = await User.findById(request.params.id)
    .select('first_name last_name email job_title gender')
    .lean();  // Converts Mongoose document to plain JSON
    return response.status(200).json(data);
}

async function handleUpdateUserById(request,response)
{
    await User.findByIdAndUpdate(
        request.params.id,
        {$set:request.body},
    )
    .select('first_name last_name email job_title gender')
    .lean();  // Converts Mongoose document to plain JSON

    return response.status(200).json({"Status":"Updated"});
}

async function handleDeleteUserById(request,response)
{
    await User.findByIdAndDelete(request.params.id);
    return response.status(200).json({"Status":"Deleted"});
}

module.exports = {
    handleGetAllUsers,
    handleCreateNewUser,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
}