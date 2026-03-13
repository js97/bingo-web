const questions = [
    "First Blood vor 1:30",
    "Enemy Double Kill vor 5:00",
    "Enemy Killing Spree vor 10:00",
    "Enemy Legendary vor 15:00",
    "2 Meme-Champions werden gepickt",
    "4:1 Surrender Vote",
    "'useless' falsch geschrieben",
    "Spieler stirbt gegen Minions (executed)",
    "Recall wird durch Minions unterbrochen",
    "Double Ace",
    "Ace vor 20:00",
    "Dritter Baron getötet",
    "Zweiter Elder getötet",
    "3 gefundene Matches hintereinander abgelehnt",
    "Champ Select wurde verlassen",
    "1 Nexus stirbt, während irgendwo anders gekämpft wird",
    "Yasuo/Warwick geht 0/5",
    "Spieler geht 0/10",
    "Team verliert Baron Buff ohne zu pushen",
    "Gegner hat 20 Kills",
    "Ally hat 15 Tode",
    "3 Allies haben 10 Tode",
    "50 Minuten geknackt",
    "4:3 Drakes getötet",
    "3 Fail Smites in 1 Game",
    "Baron/Drake ohne Smite gestohlen",
    "30 Sekunden lange Chase",
    "Opfer Flash",
]

const questionDicts = [
    {
        question: "First Blood vor 1:30",
        explanation: "Irgendein Champion bekommt vor 1:30 einen Champion-Kill.",
    },
    {
        question: "Enemy Double Kill vor 5:00",
        explanation: "Das Announcement 'Enemy Double Kill!' ist vor 5:00 zu hören.",
    },
    {
        question: "Enemy Killing Spree vor 10:00",
        explanation: "",
    },
    {
        question: "Enemy Legendary vor 15:00",
        explanation: "",
    },
    {
        question: "2 Meme-Champions werden gepickt",
        explanation: "Meme-Champions: Warwick, Yasuo, Caitlyn, Mel, Heimerdinger, Ivern",
    },
    {
        question: "4:1 Surrender Vote",
        explanation: "Du stimmst selber gegen den Surrender, aber wirst von deinen 4 Teammates ueberstimmt.",
    },
    {
        question: "'useless' falsch geschrieben",
        explanation: "Bspw. 'usless', 'useles', 'ussless' etc.",
    },
    {
        question: "Spieler stirbt gegen Minions (executed)",
        explanation: "Das Minion-Symbol muss sichtbar sein. Monster zählen auch. Tower & epische Monster zählen nicht.",
    },
    {
        question: "Recall wird durch Minions unterbrochen",
        explanation: "",
    },
    {
        question: "Double Ace",
        explanation: "",
    },
    {
        question: "Ace vor 20:00",
        explanation: "",
    },
    {
        question: "Dritter Baron getötet",
        explanation: "",
    },
    {
        question: "Zweiter Elder getötet",
        explanation: "",
    },
    {
        question: "3 gefundene Matches hintereinander abgelehnt",
        explanation: "",
    },
    {
        question: "Champ Select wurde verlassen",
        explanation: "",
    },
    {
        question: "1 Nexus stirbt, während irgendwo anders gekämpft wird",
        explanation: "",
    },
    {
        question: "Yasuo/Warwick geht 0/5",
        explanation: "",
    },
    {
        question: "Spieler geht 0/10",
        explanation: "",
    },
    {
        question: "Team verliert Baron Buff ohne zu pushen",
        explanation: "",
    },
    {
        question: "Gegner hat 20 Kills",
        explanation: "",
    },
    {
        question: "Ally hat 15 Tode",
        explanation: "",
    },
    {
        question: "3 Allies haben 10 Tode",
        explanation: "",
    },
    {
        question: "50 Minuten geknackt",
        explanation: "",
    },
    {
        question: "4:3 Drakes getötet",
        explanation: "",
    },
    {
        question: "3 Fail Smites in 1 Game",
        explanation: "",
    },
    {
        question: "Baron/Drake ohne Smite gestohlen",
        explanation: "",
    },
    {
        question: "30 Sekunden lange Chase",
        explanation: "",
    },
    {
        question: "Opfer Flash",
        explanation: "",
    },
]

module.exports = { questions, questionDicts };