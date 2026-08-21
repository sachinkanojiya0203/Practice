const express = require('express')
const { HandleAllusers,Handle_CreateNewUser, HandlegetuserById, Handle_updateUserById, Handle_deleteuserById } = require('../controllers/user')
const router = express.Router();


// ROUTES

router.get('/', HandleAllusers);

// Rest api


//URL using id


router.route('/').get(HandleAllusers).post(Handle_CreateNewUser)

router.route('/:id').get(HandlegetuserById)
    .patch(Handle_updateUserById).delete(Handle_deleteuserById)


module.exports = router; 