const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

// const config = require('../config');

aws.config.update({
    secretAccessKey: "P8LPn1K6c7+nnPMvWwOnIcdR2d92WW4DKT0CsF7C",
    accessKeyId: "AKIAS5OCRH6NNF3MJZXG"
})

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'picture-it-done-1',
        // acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, {fieldName: 'TESTING_META_DATA!'});
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        }
    })
})

module.exports = upload;