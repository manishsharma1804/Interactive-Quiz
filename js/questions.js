const questions = [
    {
        question: "",
        hint: "It's the standard language for creating web pages.",
        imgSrc: "images/1.png",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ]
    },
    {
        question: "What does CSS stand for?",
        hint: "It's used for styling web pages.",
        answer: "Cascading Style Sheets",
        options: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style Sheets",
            "Colorful Style Sheets"
        ]
    },
    {
        question: "What is the capital of France?",
        hint: "It's known as the 'City of Love'.",
        answer: "Paris",
        options: [
            "Rome",
            "Berlin",
            "Paris",
            "London"
        ]
    },
    {
        question: "What is the powerhouse of the cell?",
        hint: "It generates energy for the cell.",
        answer: "Mitochondria",
        options: [
            "Nucleus",
            "Mitochondria",
            "Endoplasmic Reticulum",
            "Golgi Apparatus"
        ]
    },
    {
        question: "What does the 'HTTP' stand for in a website address?",
        hint: "It's a protocol used for transmitting hypermedia documents.",
        answer: "Hyper Text Transfer Protocol",
        options: [
            "Hyper Text Transfer Protocol",
            "Hyper Text Transmission Protocol",
            "Hyper Text Transfer Process",
            "Hyper Tool Transfer Protocol"
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        hint: "It's the fourth planet from the Sun.",
        answer: "Mars",
        options: [
            "Earth",
            "Mars",
            "Jupiter",
            "Saturn"
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        hint: "The author is Harper Lee.",
        answer: "Harper Lee",
        options: [
            "Mark Twain",
            "Harper Lee",
            "Ernest Hemingway",
            "F. Scott Fitzgerald"
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        hint: "It's a marine animal.",
        answer: "Blue Whale",
        options: [
            "Elephant",
            "Blue Whale",
            "Giraffe",
            "Great White Shark"
        ]
    },
    {
        question: "What is the capital of Japan?",
        hint: "It's a city famous for its modern architecture and cherry blossoms.",
        answer: "Tokyo",
        options: [
            "Beijing",
            "Seoul",
            "Tokyo",
            "Bangkok"
        ]
    },
    {
        question: "What does the 'CPU' stand for in computing?",
        hint: "It's the brain of the computer.",
        answer: "Central Processing Unit",
        options: [
            "Central Processing Unit",
            "Central Performance Unit",
            "Central Process Utility",
            "Central Performance Utility"
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        hint: "The artist is Italian and also known for his notebooks.",
        answer: "Leonardo da Vinci",
        options: [
            "Vincent van Gogh",
            "Leonardo da Vinci",
            "Pablo Picasso",
            "Michelangelo"
        ]
    },
    {
        question: "What is the boiling point of water?",
        hint: "It's 100 degrees Celsius.",
        answer: "100°C",
        options: [
            "90°C",
            "100°C",
            "110°C",
            "120°C"
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        hint: "It's essential for respiration.",
        answer: "Oxygen",
        options: [
            "Osmium",
            "Oxygen",
            "Oganesson",
            "Oxalate"
        ]
    },
    {
        question: "Who developed the theory of relativity?",
        hint: "His last name is synonymous with 'genius'.",
        answer: "Albert Einstein",
        options: [
            "Isaac Newton",
            "Albert Einstein",
            "Niels Bohr",
            "Galileo Galilei"
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        hint: "It's necessary for photosynthesis.",
        answer: "Carbon Dioxide",
        options: [
            "Oxygen",
            "Nitrogen",
            "Carbon Dioxide",
            "Helium"
        ]
    },
    {
        question: "What is the smallest unit of life?",
        hint: "All living organisms are made of them.",
        answer: "Cell",
        options: [
            "Atom",
            "Molecule",
            "Cell",
            "Tissue"
        ]
    },
    {
        question: "What is the chemical formula for water?",
        hint: "It consists of two hydrogen atoms and one oxygen atom.",
        answer: "H2O",
        options: [
            "CO2",
            "H2O",
            "O2",
            "H2"
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        hint: "It's commonly used in jewelry.",
        answer: "Diamond",
        options: [
            "Gold",
            "Diamond",
            "Iron",
            "Platinum"
        ]
    },
    {
        question: "Who was the first President of the United States?",
        hint: "He's also featured on the one-dollar bill.",
        answer: "George Washington",
        options: [
            "Thomas Jefferson",
            "Abraham Lincoln",
            "George Washington",
            "John Adams"
        ]
    },
    {
        question: "What is the main ingredient in traditional Japanese miso soup?",
        hint: "It's a fermented soybean paste.",
        answer: "Miso",
        options: [
            "Soy Sauce",
            "Miso",
            "Tofu",
            "Seaweed"
        ]
    },
    {
        question: "Which organ is responsible for pumping blood throughout the body?",
        hint: "It's a vital organ located in the chest.",
        answer: "Heart",
        options: [
            "Lungs",
            "Liver",
            "Heart",
            "Kidney"
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        hint: "He's often regarded as the greatest playwright in the English language.",
        answer: "William Shakespeare",
        options: [
            "William Wordsworth",
            "William Shakespeare",
            "Christopher Marlowe",
            "Jane Austen"
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        hint: "It's known for its Great Red Spot.",
        answer: "Jupiter",
        options: [
            "Earth",
            "Mars",
            "Jupiter",
            "Saturn"
        ]
    },
    {
        question: "What does DNA stand for?",
        hint: "It's the molecule that carries genetic information.",
        answer: "Deoxyribonucleic Acid",
        options: [
            "Deoxyribonucleic Acid",
            "Deoxyribose Nucleic Acid",
            "Dioxinucleic Acid",
            "Deoxynucleic Acid"
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        hint: "It's derived from its Latin name 'Aurum'.",
        answer: "Au",
        options: [
            "Go",
            "Gd",
            "Ag",
            "Au"
        ]
    },
    {
        question: "Find out which of the figures (1), (2), (3) and (4) can be formed from the pieces given in figure (X).",
        imgSrc: "images/2.png",
        answer: "1",
        options: [
            "1",
            "2",
            "3",
            "4"
        ]
    },
    {
        question: "Find out which of the figures (1), (2), (3) and (4) can be formed from the pieces given in figure (X).",
        imgSrc: "images/3.png",
        answer: "3",
        options: [
            "1",
            "2",
            "3",
            "4"
        ]
    },
    {
        question: "Who is He?",
        imgSrc: "images/4.jpeg",
        answer: "Shree Narendra Modi",
        options: [
            "Shree Narendra Modi",
            "Rahul Gandhi",
            "Amit Shah",
            "None"
        ]
    },
    {
        question: "Capital Of Jharkhand",
        imgSrc: "images/4.jpeg",
        answer: "Ranchi",
        options: [
            "Ranchi",
            "Jamshedpur",
            "Giridih",
            "Hazaribagh"
        ]
    },
    {
        question: "Who is the Prime Minister of India?",
        imgSrc: "images/4.jpeg",
        answer: "Shree Narendra Modi",
        options: [
            "Shree Narendra Modi",
            "Rahul Gandhi",
            "Amit Shah",
            "Pranit Pathak"
        ]
    }
];

module.exports = questions;
