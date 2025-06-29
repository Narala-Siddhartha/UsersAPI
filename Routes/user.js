const express = require('express');
const {
    handleGetAllUsers,
    handleCreateNewUser,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
} = require('../Controllers/user');

const router = express.Router();

router.route('/')
.post(handleCreateNewUser)
.get(handleGetAllUsers);

router.route('/:id')
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById);

module.exports = router;