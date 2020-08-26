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
    },
    {
        question: "Which one of these was not a beach landing site in the Invasion of Normandy?",
        answers: [
            "Silver",
            "Gold",
            "Juno",
            "Sword"
        ],
        correct: "Silver",
        questionId: uuidv4()
    },
    {
        question: "When did the French Revolution begin?",
        answers: [
            "1789",
            "1823",
            "1756",
            "1799"
        ],
        correct: "1789",
        questionId: uuidv4()
    },
    {
        question: "Which naval battle was considered the turning point of the Pacific Ocean Theater during World War 2?",
        answers: [
            "Battle of Midway",
            "Attack on Truk Island",
            "Attack on Pearl Harbor",
            "Battle of the Coral Sea"
        ],
        correct: "Battle of Midway",
        questionId: uuidv4()
    },
    {
        question: "In the year 1900, what were the most popular first names given to boy and girl babies born in the United States?",
        answers: [
            "John and Mary",
            "Joseph and Catherine",
            "William and Elizabeth",
            "George and Anne"
        ],
        correct: "John and Mary",
        questionId: uuidv4()
    },
    {
        question: "Who discovered Penicillin?",
        answers: [
            "Alexander Flemming",
            "Marie Curie",
            "Alfred Nobel",
            "Louis Pasteur"
        ],
        correct: "Alexander Flemming",
        questionId: uuidv4()
    },
    {
        question: "The Tsar Bomba, the most powerful nuclear bomb ever tested, had a yield of 50 megatons but theoretically had a maximum yield of how much?",
        answers: [
            "100 Megatons",
            "200 Megatons",
            "75 Megatons",
            "150 Megatons"
        ],
        correct: "100 Megatons",
        questionId: uuidv4()
    },
    {
        question: "Which one of these tanks was designed and operated by the United Kingdom?",
        answers: [
            "Tog II",
            "M4 Sherman",
            "Tiger H1",
            "T-34"
        ],
        correct: "Tog II",
        questionId: uuidv4()
    },
    {
        question: "Who was the first explorer to sail to North America?",
        answers: [
            "Leif Erikson",
            "Christopher Columbus",
            "Amerigo Vespucci",
            "Ferdinand Magellan"
        ],
        correct: "Leif Erikson",
        questionId: uuidv4()
    },
    {
        question: "Who was the Prime Minister of the United Kingdom for most of World War II?",
        answers: [
            "Winston Churchill",
            "Neville Chamberlain",
            "Harold Macmillan",
            "Edward Heath"
        ],
        correct: "Winston Churchill",
        questionId: uuidv4()
    },
    {
        question: "Which country had an 'Orange Revolution' between 2004 and 2005?",
        answers: [
            "Ukraine",
            "Belarus",
            "Latvia",
            "Lithuania"
        ],
        correct: "Ukraine",
        questionId: uuidv4()
    },
    {
        question: "The Battle of the Somme in World War I took place in which country?",
        answers: [
            "France",
            "Germany",
            "Italy",
            "Austria"
        ],
        correct: "France",
        questionId: uuidv4()
    },
    {
        question: "One of the deadliest pandemics, the 'Spanish Flu', killed off what percentage of the human world population at the time?",
        answers: [
            "3 to 6 percent",
            "6 to 10 percent",
            "1 to 3 percent",
            "less than 1 percent"
        ],
        correct: "3 to 6 percent",
        questionId: uuidv4()
    },
    {
        question: "Which of the following ancient peoples was NOT classified as Hellenic (Greek)?",
        answers: [
            "Illyrians",
            "Dorians",
            "Achaeans",
            "Ionians"
        ],
        correct: "Illyrians",
        questionId: uuidv4()
    },
    {
        question: "The creator of the Enigma Cypher and Machine was of what nationality?",
        answers: [
            "German",
            "American",
            "British",
            "Polish"
        ],
        correct: "German",
        questionId: uuidv4()
    },
    {
        question: "What was Manfred von Richthofen nickname?",
        answers: [
            "The Red Baron",
            "The High Flying Ace",
            "The Blue Serpent ",
            "The Germany Gunner"
        ],
        correct: "The Red Baron",
        questionId: uuidv4()
    },
    {
        question: "On which day did ARPANET suffer a 4 hour long network crash?",
        answers: [
            "October 27, 1980",
            "November 21, 1969",
            "October 29, 1969",
            "December 9, 1991"
        ],
        correct: "October 27, 1980",
        questionId: uuidv4()
    },
    {
        question: "On which day did the attempted coup d'etat of 1991 in the Soviet Union begin?",
        answers: [
            "August 19",
            "August 21",
            "December 26",
            "December 24"
        ],
        correct: "August 19",
        questionId: uuidv4()
    },
    {
        question: "How old was Lyndon B. Johnson when he assumed the role of President of the United States?",
        answers: [
            "55",
            "50",
            "60",
            "54"
        ],
        correct: "55",
        questionId: uuidv4()
    },
    {
        question: "Which Apollo mission was the last one in NASA Apollo program?",
        answers: [
            "Apollo 17",
            "Apollo 13",
            "Apollo 11",
            "Apollo 15"
        ],
        correct: "Apollo 17",
        questionId: uuidv4()
    },
    {
        question: "What year did the Battle of Agincourt take place?",
        answers: [
            "1415",
            "1463",
            "1401",
            "1422"
        ],
        correct: "1415",
        questionId: uuidv4()
    },
    {
        question: "In which year did the First World War begin?",
        answers: [
            "1914",
            "1930",
            "1917",
            "1939"
        ],
        correct: "1914",
        questionId: uuidv4()
    },
    {
        question: "When did Canada leave the confederation to become their own nation?",
        answers: [
            "July 1st, 1867",
            "July 1st, 1763",
            "July 1st, 1832",
            "July 1st, 1902"
        ],
        correct: "July 1st, 1867",
        questionId: uuidv4()
    },
    {
        question: "In what year was the video game company Electronic Arts founded?",
        answers: [
            "1982",
            "1999",
            "1981",
            "2005"
        ],
        correct: "1982",
        questionId: uuidv4()
    },
    {
        question: "Who tutored Alexander the Great?",
        answers: [
            "Aristotle",
            "Socrates",
            "Plato",
            "King Philip"
        ],
        correct: "Aristotle",
        questionId: uuidv4()
    },
    {
        question: "Joseph Stalin had a criminal past doing what?",
        answers: [
            "Robbing Trains",
            "Murder for Hire",
            "Tax Evasion",
            "Identity Fraud"
        ],
        correct: "Robbing Trains",
        questionId: uuidv4()
    },
    {
        question: "What year did the Boxing Day earthquake and tsunami occur in the Indian Ocean?",
        answers: [
            "2004",
            "2006",
            "2008",
            "2002"
        ],
        correct: "2004",
        questionId: uuidv4()
    },
    {
        question: "Which WWII tank ace is credited with having destroyed the most tanks?",
        answers: [
            "Kurt Knispel",
            "Michael Wittmann",
            "Walter Kniep",
            "Otto Carius"
        ],
        correct: "Kurt Knispel",
        questionId: uuidv4()
    },
    {
        question: "What were the first states to break away from Yugoslavia?",
        answers: [
            "Slovenia, Croatia",
            "Macedonia, Montenegro",
            "Slovenia, Macedonia",
            "Montenegro, Slovenia"
        ],
        correct: "Slovenia, Croatia",
        questionId: uuidv4()
    },
    {
        question: "What year was the United States Declaration of Independence signed?",
        answers: [
            "1776",
            "1775",
            "1774",
            "1777"
        ],
        correct: "1776",
        questionId: uuidv4()
    },
    {
        question: "Which Nation DID NOT have a Colony in Modern-day America?",
        answers: [
            "Portugal",
            "Spain",
            "Sweden",
            "Netherlands"
        ],
        correct: "Portugal",
        questionId: uuidv4()
    },
    {
        question: "Which American civilization is the source of the belief that the world would end or drastically change on December 21st, 2012?",
        answers: [
            "The Mayans",
            "The Incas",
            "The Aztecs",
            "The Navajos"
        ],
        correct: "The Mayans",
        questionId: uuidv4()
    },
    {
        question: "Who was the President of the United States during the signing of the Gadsden Purchase?",
        answers: [
            "Franklin Pierce",
            "Andrew Johnson",
            "Abraham Lincoln",
            "James Polk"
        ],
        correct: "Franklin Pierce",
        questionId: uuidv4()
    },
    {
        question: "Who was the first president born in the independent United States?",
        answers: [
            "Martin Van Buren",
            "John Adams",
            "George Washington",
            "James Monroe "
        ],
        correct: "Martin Van Buren",
        questionId: uuidv4()
    },
    {
        question: "How long did World War II last?",
        answers: [
            "6 years",
            "4 years",
            "5 years",
            "7 years"
        ],
        correct: "6 years",
        questionId: uuidv4()
    },
    {
        question: "Which Las Vegas casino was originally constructed and operated by mobster Bugsy Siegel?",
        answers: [
            "The Flamingo",
            "The MGM Grand",
            "The Sands",
            "The Sahara"
        ],
        correct: "The Flamingo",
        questionId: uuidv4()
    },
    {
        question: "The 'Trail of Tears' was a result of which United States President Indian Removal Policy?",
        answers: [
            "Andrew Jackson",
            "Harry S. Truman",
            "Martin Van Buren",
            "John Quincy Adams"
        ],
        correct: "Andrew Jackson",
        questionId: uuidv4()
    },
    {
        question: "In which year was Constantinople conquered by the Turks?",
        answers: [
            "1453",
            "1435",
            "1454",
            "1440"
        ],
        correct: "1453",
        questionId: uuidv4()
    },
    {
        question: "The United States Army Air Corps became the United States Air Force on what date?",
        answers: [
            "September 18, 1947",
            "December 14, 1946",
            "October 27, 1945",
            "November 08, 1944"
        ],
        correct: "September 18, 1947",
        questionId: uuidv4()
    },
    {
        question: "When did the British hand-over sovereignty of Hong Kong back to China?",
        answers: [
            "1997",
            "1999",
            "1841",
            "1900"
        ],
        correct: "1997",
        questionId: uuidv4()
    },
    {
        question: "What was the name of the German offensive operation in October 1941 to take Moscow before winter?",
        answers: [
            "Operation Typhoon",
            "Operation Sunflower",
            "Operation Barbarossa",
            "Case Blue"
        ],
        correct: "Operation Typhoon",
        questionId: uuidv4()
    },
    {
        question: "The main objective of the German operation 'Case Blue' during World War II was originally to capture what?",
        answers: [
            "Caucasus",
            "Stalingrad",
            "Crimea",
            "Voronezh"
        ],
        correct: "Caucasus",
        questionId: uuidv4()
    },
    {
        question: "Which day did World War I begin?",
        answers: [
            "July 28",
            "January 28",
            "June 28",
            "April 28"
        ],
        correct: "July 28",
        questionId: uuidv4()
    },
    {
        question: "What year did Skoal, a smokeless Tobacco company, release their first line of Pouches, known as 'Skoal Bandits'?",
        answers: [
            "1983",
            "1934",
            "1984",
            "1822"
        ],
        correct: "1983",
        questionId: uuidv4()
    },
    {
        question: "Which modern country is known as 'The Graveyard of Empires'?",
        answers: [
            "Afghanistan",
            "China",
            "Iraq",
            "Russia"
        ],
        correct: "Afghanistan",
        questionId: uuidv4()
    },
    {
        question: "Which country was Josef Stalin born in?",
        answers: [
            "Georgia",
            "Russia",
            "Germany",
            "Poland"
        ],
        correct: "Georgia",
        questionId: uuidv4()
    },
    {
        question: "When did construction of the Suez Canal finish?",
        answers: [
            "1869",
            "1859",
            "1860",
            "1850"
        ],
        correct: "1869",
        questionId: uuidv4()
    },
    {
        question: "From 1940 to 1942, what was the capital-in-exile of Free France ?",
        answers: [
            "Brazzaville",
            "Algiers",
            "Paris",
            "Tunis"
        ],
        correct: "Brazzaville",
        questionId: uuidv4()
    },
    {
        question: "The ancient city of Chichen-Itza; was built by which civilization?",
        answers: [
            "Mayans",
            "Aztecs",
            "Incas",
            "Toltecs"
        ],
        correct: "Mayans",
        questionId: uuidv4()
    },
    {
        question: "Which of these 1900s tanks were designed and built BEFORE the others?",
        answers: [
            "Renault FT",
            "M4 Sherman",
            " Panzer IV",
            "Cromwell "
        ],
        correct: "Renault FT",
        questionId: uuidv4()
    },
    {
        question: "What was the name of the planned invasion of Japan towards the end of World War II?",
        answers: [
            "Operation Downfall",
            "Operation Boarding Party",
            "Operation Ironclad",
            "Operation Aflame"
        ],
        correct: "Operation Downfall",
        questionId: uuidv4()
    }
];

export default (n = 5) =>
    Promise.resolve(questionsDB.sort(() => 0.5 - Math.random()).slice(0, n));
