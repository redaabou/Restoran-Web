const { v4: uuidv4 } = require('uuid');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,'public/img');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = `repas-${uuidv4()}-${Date.now()}.jpeg`;
      req.body.url_image = `http://localhost:3000/img/${uniqueSuffix}`;
      cb(null, uniqueSuffix);
    }
  });
    
    const upload = multer({ storage: storage })
    exports.uploadImage = upload.single('url_image')