const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
  console.log(result);
});

Todo.findOneAndRemove({_id: '59a8239112b6a2da6e44e925'}).then((todo) => {

});

Todo.findByIdAndRemove('59a8239112b6a2da6e44e925').then((todo) => {
  console.log(todo);
});