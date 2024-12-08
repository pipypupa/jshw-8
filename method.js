// 1. For loop
const friends = ['Jack', 'Peter', 'Matthew', 'John'];
let string = '';
for (let i = 0; i < friends.length; i++) {
    string += friends[i];
    if (i < friends.length - 1) {
        string += ', ';
    }
}
console.log(string);

// Join
string = friends.join(', ');
console.log(string);

// 2. Масив карток
const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5'
];

// 3. Видалення елемента
const cardToRemove = 'Карточка-3';
if (cards.includes(cardToRemove)) {
    console.log(cards.splice(cards.indexOf(cardToRemove), 1));
} else {
    console.log(`Елемент "${cardToRemove}" не знайдено.`);
}
console.log(cards);

// 4. Додавання елемента
const cardInsert = 'Карточка-6';
if (cards.length >= 4) {
    cards.splice(4, 0, cardInsert);
} else {
    cards.push(cardInsert);
}
console.log(cards);

// 5. Оновлення елемента
const cardToUpdate = 'Карточка-4';
if (cards.length > 2) {
    cards.splice(2, 1, cardToUpdate);
} else {
    console.log(`Недостатньо елементів для оновлення.`);
}
console.log(cards);
