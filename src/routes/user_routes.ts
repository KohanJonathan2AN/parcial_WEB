import express from 'express';
import { 
    createUser, 
    getAllUsers,
    // getAllUsersActivate,
    // getAllUsersDesactivate, 
    getUserById, 
    updateUser, 
    activateUser,
    desactivateUser 
} from '../controllers/user_controllers';

const router = express.Router();

router.post('/', createUser);
router.get('/', getAllUsers);
// router.get('/Activate', getAllUsersActivate);
// router.get('/Desactivate', getAllUsersDesactivate);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.patch('/:id/activate', activateUser);
router.patch('/:id/desactivate', desactivateUser);

export default router;