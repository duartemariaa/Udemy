import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    const randomAdj = adj[Math.floor(Math.random() * adj.length)];
    const randomNoun = noun[Math.floor(Math.random() * noun.length)];
    res.render("index.ejs", {adjective: randomAdj, noun: randomNoun});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const adj = [
    "abandoned",
    "able",
    "absolute",
    "adorable",
    "adventurous",
    "academic",
    "acceptable",
    "acclaimed",
    "accomplished",
    "accurate",
    "aching",
    "acidic",
    "acrobatic",
    "active",
    "actual",
    "adept",
    "admirable",
    "admired",
    "adolescent",
    "adorable",
    "adored",
    "advanced",
    "afraid",
    "affectionate",
    "aged",
    "aggravating",
    "aggressive",
    "agile",
    "agitated",
    "agonizing",
    "agreeable",
    "ajar",
    "alarmed",
    "alarming",
    "alert",
    "alienated",
    "alive",
    "all",
    "altruistic",
    "amazing",
    "ambitious",
    "ample",
    "amused",
    "amusing",
    "anchored",
    "ancient",
    "angelic",
    "angry",
    "anguished",
    "animated",
    "annual",
    "another",
    "antique",
    "anxious",
    "any",
    "apprehensive",
    "appropriate",
    "apt",
    "arctic",
    "arid",
    "aromatic",
    "artistic",
    "ashamed",
    "assured",
    "astonishing",
    "athletic",
    "attached",
    "attentive",
    "attractive",
    "austere",
    "authentic",
    "authorized",
    "automatic",
    "avaricious",
    "average",
    "aware",
    "awesome",
    "awful",
    "awkward",
    "babyish",
    "bad",
    "back",
    "baggy",
    "bare",
    "barren",
    "basic",
    "beautiful",
    "belated",
    "beloved",
    "beneficial",
    "better",
    "best",
    "bewitched",
    "big",
    "big-hearted",
    "biodegradable",
    "bite-sized",
    "bitter",
    "black",
    "black-and-white",
    "bland",
    "blank",
    "blaring",
    "bleak",
    "blind",
    "blissful",
    "blond",
    "blue",
    "blushing",
    "bogus",
    "boiling",
    "bold",
    "bony",
    "boring",
    "bossy",
    "both",
    "bouncy",
    "bountiful",
    "bowed",
    "brave",
    "breakable",
    "brief",
    "bright",
    "brilliant",
    "brisk",
    "broken",
    "bronze",
    "brown",
    "bruised",
    "bubbly",
    "bulky",
    "bumpy",
    "buoyant",
    "burdensome",
    "burly",
    "bustling",
    "busy",
    "buttery",
    "buzzing",
    "calculating",
    "calm",
    "candid",
    "canine",
    "capital",
    "carefree",
    "careful",
    "careless",
    "caring",
    "cautious",
    "cavernous",
    "celebrated",
    "charming",
    "cheap",
    "cheerful",
    "cheery",
    "chief",
    "chilly",
    "chubby",
    "circular",
    "classic",
    "clean",
    "clear",
    "clear-cut",
    "clever",
    "close",
    "closed",
    "cloudy",
    "clueless",
    "clumsy",
    "cluttered",
    "coarse",
    "cold",
    "colorful",
    "colorless",
    "colossal",
    "comfortable",
    "common",
    "compassionate",
    "competent",
    "complete",
    "complex",
    "complicated",
    "composed",
    "concerned",
    "concrete",
    "confused",
    "conscious",
    "considerate",
    "constant",
    "content",
    "conventional",
    "cooked",
    "cool",
    "cooperative",
    "coordinated",
    "corny",
    "corrupt",
    "costly",
    "courageous",
    "courteous",
    "crafty",
    "crazy",
    "creamy",
    "creative",
    "creepy",
    "criminal",
    "crisp",
    "critical",
    "crooked",
    "crowded",
    "cruel",
    "crushing",
    "cuddly",
    "cultivated",
    "cultured",
    "cumbersome",
    "curly",
    "curvy",
    "cute",
    "cylindrical",
    "damaged",
    "damp",
    "dangerous",
    "dapper",
    "daring",
    "darling",
    "dark",
    "dazzling",
    "dead",
    "deadly",
    "deafening",
    "dear",
    "dearest",
    "decent",
    "decimal",
    "decisive",
    "deep",
    "defenseless",
    "defensive",
    "defiant",
    "deficient",
    "definite",
    "definitive",
    "delayed",
    "delectable",
    "delicious",
    "delightful",
    "delirious",
    "demanding",
    "dense",
    "dental",
    "dependable",
    "dependent",
    "descriptive",
    "deserted",
    "detailed",
    "determined",
    "devoted",
    "different",
    "difficult",
    "digital",
    "diligent",
    "dim",
    "dimpled",
    "dimwitted",
    "direct",
    "disastrous",
    "discrete",
    "disfigured",
    "disgusting",
    "disloyal",
    "dismal",
    "distant",
    "downright",
    "dreary",
    "dirty",
    "disguised",
    "dishonest",
    "dismal",
    "distant",
    "distinct",
    "distorted",
    "dizzy",
    "dopey",
    "doting",
    "double",
    "downright",
    "drab",
    "drafty",
    "dramatic",
    "dreary",
    "droopy",
    "dry",
    "dual",
    "dull",
    "dutiful",
    "each",
    "eager",
    "earnest",
    "early",
    "easy",
    "easy-going",
    "ecstatic",
    "edible",
    "educated",
    "elaborate",
    "elastic",
    "elated",
    "elderly",
    "electric",
    "elegant",
    "elementary",
    "elliptical"
];

const noun = [
    "aardvark",
    "abacus",
    "abbey",
    "abdomen",
    "abolishment",
    "abroad",
    "abyssinian",
    "accelerant",
    "accelerator",
    "accompanist",
    "accordion",
    "account",
    "accountant",
    "achieve",
    "achiever",
    "acid",
    "acknowledgment",
    "acoustic",
    "acoustics",
    "acrylic",
    "act",
    "action",
    "active",
    "activity",
    "actor",
    "actress",
    "acupuncture",
    "adapter",
    "addiction",
    "addition",
    "address",
    "adjustment",
    "administration",
    "adrenalin",
    "adult",
    "advancement",
    "advantage",
    "advertisement",
    "advertising",
    "advice",
    "affair",
    "affect",
    "afghanistan",
    "africa",
    "aftermath",
    "afternoon",
    "aftershave",
    "aftershock",
    "afterthought",
    "age",
    "agency",
    "agenda",
    "agent",
    "aglet",
    "agreement",
    "air",
    "airbag",
    "airbus",
    "airfare",
    "airforce",
    "airline",
    "airmail",
    "airplane",
    "airport",
    "airship",
    "alarm",
    "alb",
    "albatross",
    "alcohol",
    "alcove",
    "alder",
    "algebra",
    "algeria",
    "alibi",
    "allergist",
    "alley",
    "alligator",
    "alloy",
    "almanac",
    "almond",
    "alpaca",
    "alpenglow",
    "alpenhorn",
    "alpha",
    "alphabet",
    "alternative",
    "altitude",
    "alto",
    "aluminium",
    "aluminum",
    "ambassador",
    "ambulance",
    "amendment",
    "america",
    "amount",
    "amusement",
    "anagram",
    "analgesia",
    "analog",
    "analysis",
    "analyst",
    "anatomy",
    "anesthesiology",
    "anethesiologist",
    "anger",
    "angiosperm",
    "angle",
    "angora",
    "angstrom",
    "anguish",
    "animal",
    "anime",
    "ankle",
    "anklet",
    "annual",
    "anorak",
    "answer",
    "ant",
    "antarctica",
    "anteater",
    "antechamber",
    "antelope",
    "anthony",
    "anthropology",
    "antler",
    "anybody",
    "anything",
    "anywhere",
    "apartment",
    "ape",
    "aperitif",
    "apology",
    "apparatus",
    "apparel",
    "appeal",
    "appendix",
    "apple",
    "applewood",
    "appliance",
    "approval",
    "april",
    "apron",
    "apse",
    "aquarius",
    "aquifer",
    "arch",
    "archaeology",
    "archeology",
    "archer",
    "architect",
    "architecture",
    "arch-rival",
    "area",
    "argentina",
    "argument",
    "aries",
    "arithmetic",
    "arm",
    "armadillo",
    "armament",
    "armchair",
    "armenian",
    "armoire",
    "armor",
    "arm-rest",
    "army",
    "arrival",
    "arrow",
    "art",
    "artichoke",
    "artificer",
    "ascot",
    "ash",
    "ashram",
    "ashtray",
    "asia",
    "asparagus",
    "asphalt",
    "assignment",
    "assistance",
    "associate",
    "association",
    "asterisk",
    "astrakhan",
    "astrolabe",
    "astrologer",
    "astrology",
    "astronomy",
    "atelier",
    "athelete",
    "athlete",
    "atm",
    "atmosphere",
    "atom",
    "atrium",
    "attachment",
    "attack",
    "attempt",
    "attendant",
    "attention",
    "attenuation",
    "attic",
    "attitude",
    "attorney",
    "attraction",
    "audience",
    "auditorium",
    "august",
    "aunt",
    "australia",
    "australian",
    "author",
    "authorisation",
    "authority",
    "authorization",
    "automaton",
    "avalanche",
    "avenue",
    "average",
    "azimuth",
    "babe",
    "babies",
    "baboon",
    "babushka",
    "baby",
    "back",
    "backbone",
    "backdrop",
    "backpack",
    "bacon",
    "bad",
    "badge",
    "badger",
    "bafflement",
    "bag",
    "bagel",
    "bagpipe",
    "bagpipes",
    "bail",
    "bait",
    "bake",
    "baker",
    "bakery",
    "bakeware",
    "balaclava",
    "balalaika",
    "balance",
    "balcony",
    "balinese",
    "ball",
    "balloon",
    "ballpark",
    "bamboo",
    "banana",
    "band",
    "bandana",
    "bandanna",
    "bandolier",
    "bangladesh",
    "bangle",
    "banjo",
    "bank",
    "bankbook",
    "banker",
    "banquette",
    "baobab",
    "bar",
    "barbara",
    "barbeque",
    "barber",
    "barbiturate",
    "barge",
    "baritone",
    "barium",
    "barn",
    "barometer",
    "barracks",
    "barstool",
    "base",
    "baseball",
    "basement",
    "basin",
    "basis",
    "basket",
    "basketball",
    "bass",
    "bassinet",
    "bassoon",
    "bat",
    "bath",
    "bather",
    "bathhouse",
    "bathrobe",
    "bathroom",
    "bathtub",
    "batter",
    "battery",
    "batting",
    "battle",
    "battleship",
    "bay",
    "bayou",
    "beach",
    "bead",
    "beak",
    "beam",
    "bean",
    "beanie",
    "beanstalk",
    "bear",
    "beard",
    "beast",
    "beat",
    "beautician",
    "beauty",
    "beaver",
    "bed",
    "bedroom",
    "bee",
    "beech",
    "beef",
    "beer",
    "beet",
    "beetle",
    "beggar",
    "beginner",
    "begonia",
    "behavior",
    "beheading",
    "behest",
    "belfry",
    "belgian",
    "belief",
    "believe",
    "bell",
    "belligerency",
    "bellows",
    "belly",
    "belt",
    "bench",
    "bend",
    "beneficiary",
    "benefit",
    "bengal",
    "beret",
    "berry",
    "bestseller",
    "best-seller",
    "betty",
    "beverage",
    "beyond",
    "bibliography",
    "bicycle",
    "bid",
    "bidet",
    "bifocals",
    "big",
    "big-rig",
    "bijou",
    "bike",
    "bikini",
    "bill",
    "billboard",
    "bin",
    "biology",
    "biplane",
    "birch",
    "bird",
    "birdbath",
    "birdcage",
    "birdhouse",
    "bird-watcher",
    "birth",
    "birthday",
    "bit",
    "bite",
    "black",
    "blackberry",
    "blackboard",
    "blackfish",
    "bladder",
    "blade",
    "blame",
    "blank",
    "blanket",
    "blazer",
    "blight",
    "blinker",
    "blister",
    "blizzard",
    "block",
    "blocker",
    "blood",
    "bloodflow",
    "bloom",
    "bloomers",
    "blossom",
    "blouse",
    "blow",
    "blowgun",
    "blowhole",
    "blue",
    "blueberry",
    "boar",
    "board",
    "boat",
    "boat-building",
    "boatload",
    "boatyard",
    "bobcat",
    "body",
    "bog",
    "bolero",
    "bolt",
    "bomb",
    "bomber",
    "bondsman",
    "bone",
    "bongo",
    "bonnet",
    "bonsai",
    "bonus",
    "boogeyman",
    "book",
    "bookcase",
    "bookend",
    "booklet",
    "booster",
    "boot",
    "bootee",
    "bootie",
    "boots",
    "booty",
    "border",
    "bore",
    "bosom",
    "botany",
    "bottle",
    "bottling",
    "bottom",
    "bottom-line",
    "boudoir",
    "bough",
    "boundary",
    "bow",
    "bower",
    "bowl",
    "bowler",
    "bowling",
    "bowtie",
    "box",
    "boxer",
    "boxspring",
    "boy",
    "bra",
    "brace",
    "bracelet",
    "bracket",
    "brain",
    "brake",
    "branch",
    "brand",
    "brandy",
    "brass",
    "brassiere",
    "bratwurst",
    "brazil",
    "bread",
    "breadcrumb",
    "break",
    "breakfast",
    "breakpoint",
    "breast",
    "breastplate",
    "breath",
    "breeze",
    "brian",
    "bribery",
    "brick",
    "bricklaying",
    "bridge",
    "brief",
    "briefs",
    "brilliant",
    "british",
    "broccoli",
    "brochure",
    "broiler",
    "broker",
    "brome",
    "bronchitis",
    "bronco",
    "bronze",
    "brooch",
    "brood",
    "brook",
    "broom",
    "brother",
    "brother-in-law",
    "brow",
    "brown",
    "brush",
    "brushfire",
    "brushing",
    "bubble",
    "bucket",
    "buckle",
    "bud",
    "budget",
    "buffer",
    "buffet",
    "bug",
    "buggy",
    "bugle",
    "building",
    "bulb",
    "bull",
    "bulldozer",
    "bullet",
    "bull-fighter",
    "bumper",
    "bun",
    "bunch",
    "bungalow",
    "bunghole",
    "bunkhouse",
    "burglar",
    "burlesque",
    "burma",
    "burn",
    "burn-out",
    "burst",
    "bus",
    "bush",
    "business",
    "bust",
    "bustle",
    "butane",
    "butcher",
    "butter",
    "button",
    "buy",
    "buyer",
    "buzzard",
    "cabana",
    "cabbage",
    "cabin",
    "cabinet",
    "cable",
    "caboose",
    "cacao",
    "cactus",
    "caddy",
    "cadet",
    "cafe",
    "caftan",
    "cake",
    "calcification",
    "calculation",
    "calculator",
    "calculus",
    "calendar",
    "calf",
    "calico",
    "call",
    "calm",
    "camel",
    "cameo",
    "camera",
    "camp",
    "campaign",
    "campanile",
    "can",
    "canada",
    "canadian",
    "canal",
    "cancel",
    "cancer",
    "candelabra",
    "candidate",
    "candle",
    "candy",
    "cane",
    "cannon",
    "canoe",
    "canon",
    "canopy",
    "canteen",
    "canvas",
    "cap",
    "cape",
    "capital"
];