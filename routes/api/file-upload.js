const express = require ('express');
const router = express.Router();

const upload = require("../../services/file-upload")

const singleUpload = upload.single('image');


router.post('/image-upload', function(req, res) {
    console.log("/image-upload hit")
    singleUpload(req, res, function(err) {
        return res.json({'imageUrl': req.file.location});
    });
});

module.exports = router;