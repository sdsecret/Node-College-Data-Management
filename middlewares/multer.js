const multer = require('multer');

var storage = multer.diskStorage({
    destination: function(req,file,cd){
        cd(null,'public/students');
    },
    filename: function(req,file,cd){
        var ext = file.originalname.substring(file.originalname.lastIndexOf('.'));
        cd(null, file.fieldname + '_' + Date.now() + ext);
    }
})

store = multer({storage:storage});

module.exports = store;