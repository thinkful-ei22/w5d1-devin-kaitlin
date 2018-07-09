'use strict';

// 1. Find all notes

db.notes;
// db.notes.find();

// 2. Make results pretty
// db.notes.find().pretty();

// 3. Find results with only title & content
// db.notes.find({}, {title: 1, content: 1}).pretty();

// 4. Display fields, title, and content, but exclude id
// db.notes.find({}, {_id: 0, title: 1, content: 1}).pretty();

// 5. Display only title, sort by id in DESC
// db.notes.find({}, {title: 1}).sort({_id: -1}).pretty();

// 6. Write a MongoDB query to display all the documents from the collection notes which contain the title '5 life lessons learned from cats'.
// db.notes.find({title: {$regex: /5 life lessons learned from cats/}}).pretty();

// 7. Write a MongoDB query to display the first 5 documents from the collection notes.
// db.notes.find().sort({_id: 1}).limit(5);

// 8. Write a MongoDB query to display the next 5 documents from the collection notes after skipping the first 5.
// db.notes.find().sort({_id: 1}).skip(5).limit(5);

// 9. Write a MongoDB query to display the total number of documents in the collection notes.
// db.notes.find().count();

// 10. Write a MongoDB query to display the documents from the collection notes which have an _id that is greater than "000000000000000000000007".
// db.notes.find({_id: {$gt: '000000000000000000000007'}});

// 11. Write a MongoDB query to display the documents from the collection notes which have an _id which is greater than or equal to "000000000000000000000009" but less than or equal to "000000000000000000000017".
// db.notes.find({_id: {$gt: '000000000000000000000009', $lt: '000000000000000000000017'}});

// 12. Write a MongoDB query to display the documents from the collection notes which have an _id which is less than or equal to "000000000000000000000007".
// db.notes.find({_id: {$lte: '000000000000000000000007'}});

// 13. Write a MongoDB query to display only one document from the collection notes.
// db.notes.findOne();

// 14. Write a MongoDB query to display only the title of one document from the collection notes (_id can be included).
// db.notes.findOne({}, {title: 1});

// 15. Write a MongoDB query to display only the title of one document from the collection notes (_id excluded).
// db.notes.findOne({}, {_id: 0, title: 1});