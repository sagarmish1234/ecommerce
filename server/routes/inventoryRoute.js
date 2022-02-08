const express = require('express')
const router = express.Router()
const Book = require('../models/book') // Import User Model Schema

router.post('/book/add', async (req, res) => {
  const book = Book.findOne({ title: req.body.title, author: req.body.author })
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    price: req.body.price,
    stock: req.body.stock,
    image: req.body.image,
    description: req.body.description,
  })
  try {
    const savedBook = await newBook.save()
    res.json(savedBook).status(200)
  } catch (err) {
    res.json({ message: err }).status(500)
  }
})

router.get('/book/:id', async (req, res) => {
  const book = await Book.findById(req.params.id)
  res.json(book)
})

router.put('/book/:id', async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.json(book)
})

router.get('/books/all/get', async (req, res) => {
  try {
    const books = await Book.find({})
    res.json(books)
  } catch (err) {
    res.json({ message: err })
  }
})

router.get('/book/:title/search', async (req, res) => {
  const book = await Book.find({
    title: { $regex: req.params.title, $options: 'i' },
  })
  res.json(book)
})

router.delete('/book/:id', async (req, res) => {
  await Book.findByIdAndRemove(req.params.id)
  res.json({ message: 'Book deleted' })
})

module.exports = router
