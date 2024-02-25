import path from 'path';
import express from 'express';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({ //defines where to store our uploads
  destination(req, file, cb) { //cb is callback 
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(
      null, //if any error else null
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    ); //filename format
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
 // check to only upload desired file types
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb({ message: 'Images only!' });
  }
}

const upload = multer({
  storage,
});
// to do actual upload of images
router.post('/', upload.single('image'), (req, res) => { 
  res.send({
    message: 'Image uploaded successfully',
    image: `/${req.file.path}`,
  });
});
 // upload.single -> upload single image by multer middleware
export default router;