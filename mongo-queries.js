'use strict';

// 1. Find all notes

// db.notes.find();

// 2. Make results pretty
// db.notes.find().pretty();

// 3. Find results with only title & content
// db.notes.find({}, {title: 1, content: 1}).pretty();

// 4. Display fields, title, and content, but exclude id
// db.notes.find({}, {_id: 0, title: 1, content: 1}).pretty();

// 5. Display only title, sort by id in DESC
// db.notes.find({}, {title: 1}).sort({_id: -1}).pretty();
