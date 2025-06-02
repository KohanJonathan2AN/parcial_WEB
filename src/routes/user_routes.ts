import express from 'express';
import { 
    createUser, 
    getAllUsersActivate,
    getAllUsersDesactivate, 
    getUserById, 
    updateUser, 
    activateUser,
    desactivateUser 
} from '../controllers/user_controllers';

const router = express.Router();

router.post('/', createUser);
router.get('/Activate', getAllUsersActivate);
router.get('/Desactivate', getAllUsersDesactivate);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.patch('/:id/activate', activateUser);
router.patch('/:id/desactivate', desactivateUser);

export default router;