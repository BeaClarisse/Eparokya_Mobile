const express = require('express');
const router = express.Router();
const announcementController = require('../../controllers/AnnouncementController');
// const upload = require('../utils/multer');  
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { isAuthenticated, isAuthorized } = require('../../middlewares/Auth');

// router.post('/create', upload.single('media'), announcementController.createAnnouncement);
router.post('/create', upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'video', maxCount: 1 }
]), announcementController.createAnnouncement);

router.get('/', announcementController.getAllAnnouncements);

router.get('/:announcementId', announcementController.getAnnouncementById );

router.get('/comments/:announcementId', announcementController.getCommentsByAnnouncementId);

router.put('/update/:id', announcementController.updateAnnouncement );
router.delete('/delete/:id', announcementController.deleteAnnouncement);

router.put('/like/:announcementId', isAuthenticated, announcementController.likeAnnouncement);
router.post('/unlike/announcementId', announcementController.unlikeAnnouncement);

module.exports = router;
