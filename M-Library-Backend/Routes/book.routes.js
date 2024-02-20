const express = require('express');
const {createbook,seebook,idgetbook,updatebook,deletebook,byisbn} = require('../Controller/bookController');
const {auth} = require('../middleware/auth.middleware');

const bookRouter= express.Router();
//restricted
bookRouter.post('/addbook',auth, createbook);
bookRouter.get('/',seebook);
bookRouter.get(`/:bookIsbn`,auth,byisbn);//get by ISBN
bookRouter.get('/:bookID',auth,idgetbook);//get by ID
bookRouter.patch('/update/:bookID',auth,updatebook);
bookRouter.delete('/delete/:bookID',auth,deletebook);
/////////////////////////GB////////////////////////////

module.exports = {bookRouter};