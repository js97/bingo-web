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
        explanation: "Das Announcement 'Enemy Killing Spree!' ist vor 10:00 zu hören.",
    },
    {
        question: "Enemy Legendary vor 15:00",
        explanation: "Das Announcement 'An enemy is legendary' ist vor 15:00 zu hören.",
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
        explanation: "Zählt erst ab 4 Sekunden Channel-Zeit.",
    },
    {
        question: "Double Ace",
        explanation: "Alle 10 Champions sind gleichzeitig tot.",
    },
    {
        question: "Ace vor 20:00",
        explanation: "Alle 5 Champions eines Teams sind gleichzeitig tot (vor 20:00).",
    },
    {
        question: "Dritter Baron getötet",
        explanation: "Auch 2:1 Barons zählt.",
    },
    {
        question: "Zweiter Elder getötet",
        explanation: "Auch 1:1 Elder zählt.",
    },
    {
        question: "3 gefundene Matches hintereinander abgelehnt",
        explanation: "3 Mal 'Accept' hat nicht gereicht. Auch ein verlassener Champ Select zählt als 1.",
    },
    {
        question: "Champ Select wurde verlassen",
        explanation: "Selbsterklärend",
    },
    {
        question: "System Notification erscheint",
        explanation: "Im Champ-Select erscheint die System Notification, dass das Spiel gleich losgehen wird."
    },
    {
        question: "1 Nexus stirbt, während irgendwo anders gekämpft wird",
        explanation: "Es verteidigt keiner den Nexus, aber es wird irgendwo gekämpft, und der Nexus fällt.",
    },
    {
        question: "Ein Meme-Champion geht 0/5",
        explanation: "Meme-Champions: Warwick, Yasuo, Caitlyn, Mel, Heimerdinger, Ivern",
    },
    {
        question: "Spieler geht 0/10",
        explanation: "Irgendjemand schafft 0/10 K/D (beliebige Assists).",
    },
    {
        question: "Team verliert Baron Buff ohne zu pushen",
        explanation: "Sobald Minions empowered wurden und damit Schaden an Minions/Towern gemacht wurden, 'wurde gepusht'.",
    },
    {
        question: "Gegner hat 20 Kills",
        explanation: "Mindestens 20",
    },
    {
        question: "Ally hat 15 Tode",
        explanation: "Mindestens 15",
    },
    {
        question: "3 Allies haben 10 Tode",
        explanation: "Mindestens 3 Allies, die mindestens 10 Tode haben",
    },
    {
        question: "50 Minuten geknackt",
        explanation: "1 Spiel ueberschreitet 50:00 Spielzeit",
    },
    {
        question: "4:3 Drakes getötet",
        explanation: "Nachdem beide Teams 3 Drakes haben, wird der siebte Drake (Soul) getötet.",
    },
    {
        question: "3 Fail Smites in 1 Game",
        explanation: "Fail Smite = Jungler smitet, bevor der Threshold erreicht wurde. Nicht zu smiten (weil zu spät) ist kein Fail Smite.",
    },
    {
        question: "Baron/Drake ohne Smite gestohlen",
        explanation: "Gestohlen = die Systemnachricht im Chat sagt das so.",
    },
    {
        question: "30 Sekunden lange Chase",
        explanation: "Irgendjemand läuft länger als 30s seinem Gegner hinterher. Hinterherlaufen = in Sichtweite sein und in die gleiche Richtung laufen.",
    },
    {
        question: "Opfer Flash",
        explanation: "Jemand benutzt den Flash und stirbt dann ausschliesslich an Schaden, der bereits vor dem Flash auf dem Weg zu ihm war.",
    },
]

module.exports = { questions, questionDicts };