const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require ('../../controllers/user-controller')

// Set up GET all and ost at /api/users
router
 .route('/')
 .get(getAllUser)
 .post(createUser);

 // set up Get one, PUt, and Delete at /api/users/:id
 router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;