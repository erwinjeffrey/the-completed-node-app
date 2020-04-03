const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    savedNotes(notes);
    console.log(chalk.green.inverse('New note added'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(
      chalk.green.inverse(`note with title ${title} has been removed`)
    );
    savedNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse(`No note with title ${title} found`));
  }
};

const listNote = () => {
  console.log(chalk.inverse('Your Notes'));
  const notes = loadNotes();
  notes.forEach(note => {
    console.log(`title: ${note.title}, body: ${note.body}`);
  });
};

const readNote = title => {
  const notes = loadNotes();
  NoteFound = notes.find(note => note.title === title);
  if (NoteFound) {
    console.log('Title: ', chalk.green.inverse(NoteFound.title));
    console.log('Body: ', NoteFound.body);
  } else {
    console.log(chalk.red.inverse('Note not found'));
  }
};

const savedNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote
};
