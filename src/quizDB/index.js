const { v4: uuidv4 } = require('uuid');
const questionsDB = [
  {
    question:
      "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
    answers: ["Richard Branson", "Alan Sugar", "Donald Trump", "Bill Gates"],
    correct: "Richard Branson",
    questionId: uuidv4()
  },
  {
    question:
      'Where is the train station "Llanfair­pwllgwyngyll­gogery­chwyrn­drobwll­llan­tysilio­gogo­goch"?',
    answers: ["Wales", "Moldova", "Czech Republic", "Denmark"],
    correct: "Wales",
    questionId: uuidv4()
  },
  {
    question:
      "Which company did Valve cooperate with in the creation of the Vive?",
    answers: ["HTC", "Oculus", "Google", "Razer"],
    correct: "HTC",
    questionId: uuidv4()
  },
  {
    question: "What's the name of Batman's  parents?",
    answers: [
      "Thomas & Martha",
      "Joey & Jackie",
      "Jason & Sarah",
      "Todd & Mira"
    ],
    correct: "Thomas & Martha",
    questionId: uuidv4()
  },
  {
    question: "What is the most common surname Wales?",
    answers: ["Jones", "Williams", "Davies", "Evans"],
    correct: "Jones",
    questionId: uuidv4()
  },
  {
    question:
      "What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?",
    answers: [
      "Demolition",
      "The Dream Team",
      "The Bushwhackers",
      "The British Bulldogs"
    ],
    correct: "Demolition",
    questionId: uuidv4()
  },
  {
    question:
      'What name represents the letter "M" in the NATO phonetic alphabet?',
    answers: ["Mike", "Matthew", "Mark", "Max"],
    correct: "Mike",
    questionId: uuidv4()
  },
  {
    question: "What is the first book of the Old Testament?",
    answers: ["Genesis", "Exodus", "Leviticus", "Numbers"],
    correct: "Genesis",
    questionId: uuidv4()
  },
  {
    question:
      "In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?",
    answers: ["Key", "Sword", "Pen", "Cellphone"],
    correct: "Key",
    questionId: uuidv4()
  },
  {
    question:
      "Which best selling toy of 1983 caused hysteria, resulting in riots breaking out in stores?",
    answers: [
      "Cabbage Patch Kids",
      "Transformers",
      "Care Bears",
      "Rubik’s Cube"
    ],
    correct: "Cabbage Patch Kids",
    questionId: uuidv4()
  },
  {
    question: "What does a funambulist walk on?",
    answers: ["A Tight Rope", "Broken Glass", "Balls", "The Moon"],
    correct: "A Tight Rope",
    questionId: uuidv4()
  },
  {
    question: "In past times, what would a gentleman keep in his fob pocket?",
    answers: ["Watch", "Money", "Keys", "Notebook"],
    correct: "Watch",
    questionId: uuidv4()
  },
  {
    question: "Area 51 is located in which US state?",
    answers: ["Nevada", "Arizona", "New Mexico", "Utah"],
    correct: "Nevada",
    questionId: uuidv4()
  },
  {
    question: "How would one say goodbye in Spanish?",
    answers: ["Adiós", " Hola", "Au Revoir", "Salir"],
    correct: "Adiós",
    questionId: uuidv4()
  },
  {
    question: "What is the largest organ of the human body?",
    answers: ["Skin", "Heart", "large Intestine", "Liver"],
    correct: "Skin",
    questionId: uuidv4()
  },
  {
    question: "Which sign of the zodiac is represented by the Crab?",
    answers: ["Cancer", "Libra", "Virgo", "Sagittarius"],
    correct: "Cancer",
    questionId: uuidv4()
  },
  {
    question: "On a dartboard, what number is directly opposite No. 1?",
    answers: ["19", "20", "12", "15"],
    correct: "19",
    questionId: uuidv4()
  },
  {
    question:
      "What does the 'S' stand for in the abbreviation SIM, as in SIM card? ",
    answers: ["Subscriber", "Single", "Secure", "Solid"],
    correct: "Subscriber",
    questionId: uuidv4()
  },
  {
    question:
      "What word represents the letter 'T' in the NATO phonetic alphabet?",
    answers: ["Tango", "Target", "Taxi", "Turkey"],
    correct: "Tango",
    questionId: uuidv4()
  },
  {
    question: "Which American president appears on a one dollar bill?",
    answers: [
      "George Washington",
      "Thomas Jefferson",
      "Abraham Lincoln",
      "Benjamin Franklin"
    ],
    correct: "George Washington",
    questionId: uuidv4()
  },
  {
    question: 'What is "dabbing"?',
    answers: ["A dance", "A medical procedure", "A sport", "A language"],
    correct: "A dance",
    questionId: uuidv4()
  },
  {
    question: "What is the name of the Jewish New Year?",
    answers: ["Rosh Hashanah", "Elul", "New Year", "Succoss"],
    correct: "Rosh Hashanah",
    questionId: uuidv4()
  },
  {
    question: "Which one of the following rhythm games was made by Harmonix?",
    answers: [
      "Rock Band",
      "Meat Beat Mania",
      "Guitar Hero Live",
      "Dance Dance Revolution"
    ],
    correct: "Rock Band",
    questionId: uuidv4()
  },
  {
    question:
      "What type of animal was Harambe, who was shot after a child fell into it's enclosure at the Cincinnati Zoo?",
    answers: ["Gorilla", "Tiger", "Panda", "Crocodile"],
    correct: "Gorilla",
    questionId: uuidv4()
  },
  {
    question: "Red Vines is a brand of what type of candy?",
    answers: ["Licorice", "Lollipop", "Chocolate", "Bubblegum"],
    correct: "Licorice",
    questionId: uuidv4()
  },
  {
    question: "What is the nickname of the US state of California?",
    answers: ["Golden State", "Sunshine State", "Bay State", "Treasure State"],
    correct: "Golden State",
    questionId: uuidv4()
  },
  {
    question: "What is on display in the Madame Tussaud's museum in London?",
    answers: [
      "Wax sculptures",
      "Designer clothing",
      "Unreleased film reels",
      "Vintage cars"
    ],
    correct: "Wax sculptures",
    questionId: uuidv4()
  },
  {
    question:
      "What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?",
    answers: ["Spruce Goose", "Noah's Ark", "Fat Man", "Trojan Horse"],
    correct: "Spruce Goose",
    questionId: uuidv4()
  },
  {
    question: "Which of these colours is NOT featured in the logo for Google?",
    answers: ["Pink", "Yellow", "Blue", "Green"],
    correct: "Pink",
    questionId: uuidv4()
  },
  {
    question: 'What is the French word for "hat"?',
    answers: ["Chapeau", "Bonnet", " Écharpe", " Casque"],
    correct: "Chapeau",
    questionId: uuidv4()
  },
  {
    question: "Five dollars is worth how many nickles?",
    answers: ["100", "50", "25", "69"],
    correct: "100",
    questionId: uuidv4()
  },
  {
    question: "Who is depicted on the US hundred dollar bill?",
    answers: [
      "Benjamin Franklin",
      "George Washington",
      "Abraham Lincoln",
      "Thomas Jefferson"
    ],
    correct: "Benjamin Franklin",
    questionId: uuidv4()
  },
  {
    question: "What do the letters in the GMT time zone stand for?",
    answers: [
      "Greenwich Mean Time",
      "Global Meridian Time",
      "General Median Time",
      "Glasgow Man Time"
    ],
    correct: "Greenwich Mean Time",
    questionId: uuidv4()
  },
  {
    question: "Which one of these is not a typical European sword design?",
    answers: ["Scimitar", "Falchion", "Ulfberht", "Flamberge"],
    correct: "Scimitar",
    questionId: uuidv4()
  },
  {
    question:
      'According to Sherlock Holmes, "If you eliminate the impossible, whatever remains, however improbable, must be the..."',
    answers: ["Truth", "Answer", "Cause", "Source"],
    correct: "Truth",
    questionId: uuidv4()
  },
  {
    question: "What is the name of Poland in Polish?",
    answers: ["Polska", "Pupcia", "Polszka", "Póland"],
    correct: "Polska",
    questionId: uuidv4()
  },
  {
    question: "The New York Times slogan is, “All the News That’s Fit to…”",
    answers: ["Print", "Digest", "Look", "Read"],
    correct: "Print",
    questionId: uuidv4()
  },
  {
    question: "What do the letters of the fast food chain KFC stand for?",
    answers: [
      "Kentucky Fried Chicken",
      "Kentucky Fresh Cheese",
      "Kibbled Freaky Cow",
      "Kiwi Food Cut"
    ],
    correct: "Kentucky Fried Chicken",
    questionId: uuidv4()
  },
  {
    question: "Which restaurant's mascot is a clown?",
    answers: ["McDonald's", "Whataburger", "Burger King", "Sonic"],
    correct: "McDonald's",
    questionId: uuidv4()
  },
  {
    question: 'What color is the "Ex" in FedEx Ground?',
    answers: ["Green", "Red", "Light Blue", "Orange"],
    correct: "Green",
    questionId: uuidv4()
  },
  {
    question: "How tall is the Burj Khalifa?",
    answers: ["2,722 ft", "2,717 ft", "2,546 ft", "3,024 ft"],
    correct: "2,722 ft",
    questionId: uuidv4()
  },
  {
    question:
      "Which of the following card games revolves around numbers and basic math?",
    answers: ["Uno", "Go Fish", "Twister", "Munchkin"],
    correct: "Uno",
    questionId: uuidv4()
  },
  {
    question:
      "What machine element is located in the center of fidget spinners?",
    answers: ["Bearings", "Axles", "Gears", "Belts"],
    correct: "Bearings",
    questionId: uuidv4()
  },
  {
    question: "Which sign of the zodiac comes between Virgo and Scorpio?",
    answers: ["Libra", "Gemini", "Taurus", "Capricorn"],
    correct: "Libra",
    questionId: uuidv4()
  },
  {
    question: "Which of the following presidents is not on Mount Rushmore?",
    answers: [
      "John F. Kennedy",
      "Theodore Roosevelt",
      "Abraham Lincoln",
      "Thomas Jefferson"
    ],
    correct: "John F. Kennedy",
    questionId: uuidv4()
  },
  {
    question: "What is Tasmania?",
    answers: [
      "An Australian State",
      "A flavor of Ben and Jerry's ice-cream",
      "A Psychological Disorder",
      "The Name of a Warner Brothers Cartoon Character"
    ],
    correct: "An Australian State",
    questionId: uuidv4()
  },
  {
    question: "What company developed the vocaloid Hatsune Miku?",
    answers: ["Crypton Future Media", "Sega", "Sony", "Yamaha Corporation"],
    correct: "Crypton Future Media",
    questionId: uuidv4()
  },
  {
    question:
      "Which country, not including Japan, has the most people of japanese decent?",
    answers: ["Brazil", "China", "South Korea", "United States of America"],
    correct: "Brazil",
    questionId: uuidv4()
  },
  {
    question: "Which candy is NOT made by Mars?",
    answers: ["Almond Joy", "M&M's", "Twix", "Snickers"],
    correct: "Almond Joy",
    questionId: uuidv4()
  },
  {
    question: "In which fast food chain can you order a Jamocha Shake?",
    answers: ["Arby's", "McDonald's", "Burger King", "Wendy's"],
    correct: "Arby's",
    questionId: uuidv4()
  }
];

export default (n = 5) =>
  Promise.resolve(questionsDB.sort(() => 0.5 - Math.random()).slice(0, n));
