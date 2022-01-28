const { response } = require('express')
const express = require('express')
const router = express.Router()
const tokenAuth = require('../../Middlewares/TokenAuthorize')
const Book = require('../../Models/book')
//CRUD routes

//create an item entry
router.post('/newBook', async (req, res) => {
  try {
    const book = await Book.findOne({
      title: req.body.title,
      author: req.body.author,
    })
    if (book) {
      return res
        .status(403)
        .json({ success: false, message: 'Item already exits' })
    }
    const newBook = new Book({
      title: req.body.title,
      author: req.body.author,
      price: req.body.price,
      reorderThreshold: req.body.reorderThreshold,
      stopOrder: req.body.stopOrder,
      stock: req.body.stock,
    })
    await newBook.save()
    const response = await Book.find({})
    return res.status(200).json({ success: true, message: response })
  } catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
})

//update an item entry
router.put('/:id/bookUpdate', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id)
    if (!book) {
      return res.status(404).json({ success: false, message: 'Item not found' })
    }
    await book.updateOne($set, req.body)
    return res
      .status(200)
      .json({ success: true, message: 'Item updated successfully' })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})
//get all books
router.get('/bookGetAll', async (req, res) => {
  try {
    const books = await Book.find({})
    return res.status(200).json({ success: true, message: books })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

//get books for search title
router.get('/:title/search', async (req, res) => {
  try {
    var searchTitle = req.params.title.split('%');
    console.log(req.params.title)
    const books = await Book.find({title:{'$regex': req.params.title,$options:'i'}})
    return res.status(200).json({ success: true, message: books })
  } catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
})

//get an item entry
router.get('/:id/bookGet', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id)
    if (!book) {
      return res.status(404).json({ success: false, message: 'Item not found' })
    }
    return res.status(200).json({ success: true, message: book })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})
//delete an item entry
router.delete('/:id/bookDelete', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id)
    if (!book) {
      return res.status(404).json({ success: false, message: 'Item not found' })
    }
    await book.deleteOne()
    return res
      .status(200)
      .json({ success: true, message: 'Item deleted successfully' })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

module.exports = router
