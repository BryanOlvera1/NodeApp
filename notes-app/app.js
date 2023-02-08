const chalk      = require('chalk') // Import the chalk module
const yargs = require('yargs') // Import the yargs module
const notes = require('./notes.js') // Import the notes module

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add', // The name of the command
    describe: 'Add a new note', // A description of the command
    builder: {
        title: {
            describe: 'Note title', // A description of the title argument
            demandOption: true, // The title argument is required
            type: 'string' // The type of the title argument is string
        },
        body: {
            describe: 'Note body', // A description of the body argument
            demandOption: true, // The body argument is required
            type: 'string' // The type of the body argument is string
        }
    },
    handler(argv) { // The function to run when the command is executed
        notes.addNote(argv.title, argv.body) // Call the addNote function from the notes module
    }
})

// Create remove command
yargs.command({
    command: 'remove', // The name of the command
    describe: 'Remove a note', // A description of the command
    builder: {
        title: {
            describe: 'Note title', // A description of the title argument
            demandOption: true, // The title argument is required
            type: 'string' // The type of the title argument is string
        }
    },
    handler(argv) { // The function to run when the command is executed
        notes.removeNote(argv.title) // Call the removeNote function from the notes module
    }
})

// Create list command
yargs.command({
    command: 'list', 
    describe: 'List your notes', // A description of the command
    handler() { // The function to run when the command is executed
        notes.listNotes() // Call the listNotes function from the notes module
    }
})

// Create read command
yargs.command({
    command: 'read', 
    describe: 'Read a note', // A description of the command
    builder: {
        title: {
            describe: 'Note title', // A description of the title argument
            demandOption: true, 
            type: 'string' // The type of the title argument is string
        }
    },
    handler(argv) { // The function to run when the command is executed
        notes.readNote(argv.title) // Call the readNote function from the notes module
    }
})

yargs.parse() 
