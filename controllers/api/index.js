// require routers
const router = require('express').Router();
const userRoutes = require('./user');
const homeRoutes = require('./homepage');
const loginRoutes = require('./login');
const signupRoutes = require('./signup');
const logoutRoutes = require('./logout');
const makePost = require('./createPost');
const upvotes = require('./upvotes');
// router for all api links
router.use('/user', userRoutes);
router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);
router.use('/signup', signupRoutes);
router.use('/createPost', makePost)
router.use('/upvotes', upvotes)
router.use('/', homeRoutes);

module.exports = router;