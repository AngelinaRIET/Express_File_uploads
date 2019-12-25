const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'tmp/', limits: { fileSize: 3145728 }});
const { showHomepage } = require('../controllers/pages-controller');
const fs = require('fs');





/* GET home page. */
router.get('/', showHomepage);

router.post('/myupload', upload.array('myfile'), (req, res) => {
    req.files.forEach(file => {
        fs.rename(
            file.path,
            'public/images/' + file.originalname,
            (err) => {
                if (err) {
                    res.send('problem during travel');
                } else {
                    res.send('file uploaded successfuly')
                }
            })
    })
});


module.exports = router;