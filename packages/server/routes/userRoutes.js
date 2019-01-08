import express from 'express';

const router = express.Router();

// TODO: test this
router.get('/current', (req, res) => {
   res.send(req.user);
});

router.get('/logout', (req, res) => {
   req.logout();
});

export default router;
