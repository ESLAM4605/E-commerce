import { Router } from "express";

import productsRouter from "../modules/product/routers/product.routes.js";
import couponsRouter from "../modules/coupon/routers/coupon.routes.js";
import cartsRouter from "../modules/cart/routers/cart.routes.js";
import brandsRouter from "../modules/product/routers/brand.routes.js";
import usersRouter from "../modules/user/routers/user.routes.js";
import authRouter from "../modules/auth/auth.routes.js";
import categoriesRouter from "../modules/product/routers/category.routes.js";

const router = Router();

router.use("/products", productsRouter);
router.use("/coupons", couponsRouter);
router.use("/cart", cartsRouter);
router.use("/brands", brandsRouter);
router.use("/users", usersRouter);
router.use("/auth", authRouter);
router.use("/categories", categoriesRouter);

export default router;
