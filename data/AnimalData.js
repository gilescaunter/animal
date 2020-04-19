const AnimalData = {
    root: {
        parent: 'root',
        question: 'Is it an animal',
        yes: 'cat',
        no: 'computer',
        answer: 'root'
    },
    cat: {
        parent: 'root',
        question: 'does it go meeeooo',
        yes: 'cat',
        no: 'dog',
        answer: 'cat'
    },
    computer: {
        parent: 'root',
        question: 'can you type on it',
        yes: 'computer',
        no: 'add',
        answer: 'computer'
    },
    duster: {
        parent: 'computer',
        question: 'can you dust with it',
        yes: 'duster',
        no: 'add',
        answer: 'duster'
    },
    dog: {
        parent:'cat',
        question: 'does it go woof',
        yes:'dog',
        no: 'add',
        answer:'dog'
    }
};

export default AnimalData;