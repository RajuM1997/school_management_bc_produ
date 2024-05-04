const BookList = require("../models/BookList.js");

const createBookList = async (req, res, next) => {
  const newBookList = new BookList(req.body);
  try {
    const savedBookList = await newBookList.save();
    res.status(201).json(savedBookList);
  } catch (err) {
    next(err);
  }
};

const updateBookList = async (req, res, next) => {
  try {
    const updatedBookList = await BookList.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedBookList);
  } catch (err) {
    next(err);
  }
};

const deleteBookList = async (req, res, next) => {
  try {
    await BookList.findByIdAndDelete(req.params.id);
    res.status(200).json("Book list has been deleted");
  } catch (err) {
    next(err);
  }
};

const getSingleBookList = async (req, res, next) => {
  try {
    const bookList = await BookList.findById(req.params.id);
    res.status(200).json(bookList);
  } catch (err) {
    next(err);
  }
};

const getAllBookList = async (req, res, next) => {
  try {
    const bookList = await BookList.find();
    res.status(200).json(bookList);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createBookList,
  updateBookList,
  deleteBookList,
  getSingleBookList,
  getAllBookList,
};
