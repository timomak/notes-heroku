const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = mongoose.model('Comment', {
  title: String,
  content: String,
  createdAt     :  { type: Date },
  updatedAt     :  { type: Date },
  reviewId: { type: Schema.Types.ObjectId, ref: 'Review' }
});

Comment.schema.pre('save', (next) => {
  // SET createdAt AND updatedAt
  const now = new Date()
  this.updatedAt = now
  if (!this.createdAt) {
    this.createdAt = now
  }
  next()
})


module.exports = Comment
