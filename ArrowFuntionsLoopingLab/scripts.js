// Sample data (array of objects)
const people = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 30},
    {name: 'Mike', age: 23},
    {name: 'Emily', age: 27},
    {name: 'Alex', age: 35},
]

// console.log(people)

// Function to generate the list items dynamically
const generateList = (data) => {
    const list =document.getElementById('list');
    data.forEach(person => {
        const listItem = document.createElement('li');
        listItem.textContent = `${person.name}: ${person.age} years old.`
        list.appendChild(listItem);
    })
}

generateList(people);
