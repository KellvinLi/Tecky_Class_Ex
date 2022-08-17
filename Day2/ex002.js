const cards = [
    ['Spade', 'A'],
    ['Diamond', 'J'],
    ['Club', '3'],
    ['Heart', '6'],
    ['Spade', 'K'],
    ['Club', '2'],
    ['Heart', 'Q'],
    ['Spade', '6'],
    ['Heart', 'J'],
    ['Spade', '10'],
    ['Club', '4'],
    ['Diamond', 'Q'],
    ['Diamond', '3'],
    ['Heart', '4'],
    ['Club', '7']
];

function compareCard(cardA, cardB) {
    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const suits = ["Diamond", "Club", "Heart", "Spade"];
    // const suitA = cardA[0]
    // const rankA = cardA[1]
    const [suitA, rankA] = cardA; // destrcut 緊一個array 
    const [suitB, rankB] = cardB;
    const ranksDiff = ranks.indexOf(rankA) - ranks.indexOf(rankB);  // 重要
    if (ranksDiff !== 0) {
        return ranksDiff;
    } else {
        return suits.indexOf(suitA) - suits.indexOf(suitB);
    }
}

const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

// Usage
compareCard(['Diamond', '3'], ['Spade', '5']); // -2
compareCard(['Diamond', '3'], ['Spade', '3']); // -3
compareCard(['Diamond', '3'], ['Spade', '2']); // 1
compareCard(['Diamond', '3'], ['Diamond', '3']); //0

let i = 0
cards.map(function (acc, item) {
    if (acc[0] == "Spade") {
        i += 1
    }
})
console.log(i)

let spadeCounter = cards.reduce(function (acc, card) {
    let suit = card[0]
    if (suit === 'Spade') {
        return acc + 1
    }
    return acc
}, 0)

console.log({ spadeCounter })

let q2Cards = []
for (let card of cards) {
    if (compareCard(card, ["Club", 3]) >= 0) {
        q2Cards.push(card)
    }
}

let newq2Cards = cards.filter(function (card) {
    if (compareCard(card, ["Club", "3"]) >= 0) {
        return true
    }
    return false
})

console.log({ newq2Cards })

let q3Counter = 0
for (let card of cards) {
    let suit = card[0]
    let rank = card[1]
    if (suit === "Diamond" || suit === "Heart") {
        if (ranks.indexOf(rank) >= ranks.indexOf('J'))
            q3Counter++;

    }
}
let newq3Counter = cards.reduce(function (acc, card) {
    let suit = card[0]
    let rank = card[1]
    if ((suit === 'Diamond' || suit === "Heart")) {
        if (ranks.indexOf(rank) >= ranks.indexOf('J')) {
            return acc + 1
        }
        return acc
    }
    return acc
}, 0)

console.log({ q3Counter });



let q4Cards = JSON.parse(JSON.stringify(cards))
for (let card of q4Cards) {
    if (card[0] === "club") {
        card[0] = "Diamond"
    }
}

// ["A","B","C"] => ["!A","!B","!C"] 
let newq4Cards = cards.map((card, index) => {
    if (card[0] === 'Club') {
        return ['Diamond', card[1]] // return 一個全新既array 比reduce
    }
    return card
})
console.log({ newq4Cards })


let q5Cards = JSON.parse(JSON.stringify(cards))
for (let card of q5Cards) {
    if (card[1] === "A") {
        card[1] = "2"
    }
}

let newq5Cards = cards.map((card, index) => {
    console.log(card)

    if (card[1] === 'A') {
        return [card[0], "2"]
    }
    return card
})
console.log({ newq5Cards })