import { Router } from 'express';
import { creatProduct, get, list, remove, update, search, productCate } from '../controllers/product';
import { checkAuth, isAuth, requireSingin, isAdmin } from '../middleware/checkAuth';

const router = Router();

router.get('/products', list);
router.get('/products/:id', get);
router.post('/products', creatProduct);
router.delete('/products/:id', remove);
router.put('/products/:id', update);
router.get("/products/ct=:cate", productCate);

export default router;
