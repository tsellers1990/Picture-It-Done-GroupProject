const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

// const config = require('../config');

aws.config.update({
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY
})

console.log(process.env.REACT_APP_AWS_ACCESS_KEY)

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