// Q1
console.log('\n Q1: \n');

function getScoresArray() {
    const students = [
        { name: 'Alice', score: 85 },
        { name: 'Bob', score: 92 },
        { name: 'Charlie', score: 88 },
        { name: 'David', score: 95 }
    ];

    return students.map(
        student => student.name + ' has scored ' + student.score
    );
}
console.log(getScoresArray());



// Q2
console.log('\n Q2: \n');

function getBooksArray() {
    const books = [
        { title: 'Book C', author: 'Author 3', rating: 4.8 },
        { title: 'Book A', author: 'Author 1', rating: 4.5 },
        { title: 'Book B', author: 'Author 2', rating: 3.7 },
        { title: 'Book D', author: 'Author 4', rating: 2.9 }
    ];

    return mappedBooks = books.filter(
        book => !(book.rating < 4)
    ).map(
        book => book.title
    ).sort();
}
console.log(getBooksArray());



// Q3
console.log('\n Q3: \n');

function getFilteredNums() {
    const numbers = [12, 54, 67, 32, 50, 73, 21, 44, 100];

    return numbers.filter(
        number => !(number < 50)
    )
}
console.log(getFilteredNums());



// Q4
console.log('\n Q4: \n');

function getCommonElements() {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [4, 5, 6, 7, 8];

    return array1.filter(
        element => array2.includes(element)
    );
}
console.log(getCommonElements());



// Q5
console.log('\n Q5: \n');

function getTotalCost() {
    const cart = [
        { price: 10, quantity: 2 },
        { price: 5, quantity: 5 },
        { price: 8, quantity: 3 },
        { price: 15, quantity: 1 }
    ];

    return cart.reduce(
        (collector, currentVal) => collector + (currentVal.price * currentVal.quantity), 0
    );
}
console.log(getTotalCost());



// Q6
console.log('\n Q6: \n');

function getAverage() {
    const numbers = [10, 20, 30, 40, 50];

    return numbers.reduce(
        (coll, curr, i, arr) => coll + (curr / arr.length), 0
    );
}
console.log(getAverage());



// Q7 - TO DO (Use find or findIndex inside reduce)!
console.log('\n Q7: \n');

function getSummarisedData() {
    const transactions = [
        { date: '2024-06-01', product: 'Widget', amount: 10 },
        { date: '2024-06-01', product: 'Gadget', amount: 20 },
        { date: '2024-06-02', product: 'Widget', amount: 15 },
        { date: '2024-06-02', product: 'Gadget', amount: 25 },
        { date: '2024-06-03', product: 'Widget', amount: 5 }
    ];

    return transactions.reduce(
        (collector, current) => {
            const {product, amount} = current;

            const collectorItem = collector.find(
                item => item.product === product
            );

            if(collectorItem) {
                collectorItem.totalAmount += amount;
            }
            else {
                const newItem = {product, totalAmount: amount};
                collector.push(newItem);
            }
            
            return collector;
        }, []
    )
}
console.log(getSummarisedData());



// Q8
console.log('\n Q8: \n');

function getTotalHours() {
    const employees = [
        { name: 'John', hoursWorked: 9 },
        { name: 'Jane', hoursWorked: 8 },
        { name: 'Jim', hoursWorked: 10 },
        { name: 'Jill', hoursWorked: 5 },
        { name: 'Jack', hoursWorked: 12 }
    ];

    return employees.filter(
        employee => employee.hoursWorked > 8
    ).reduce(
        (coll, curr) => coll + curr.hoursWorked, 0
    )
}
console.log((getTotalHours()));

// Q9
console.log('\n Q9: \n');

function sortEmployees(order = 'ascending') {
    const employees = [
        { name: 'Alice', salary: 50000 },
        { name: 'Bob', salary: 60000 },
        { name: 'Charlie', salary: 45000 },
        { name: 'David', salary: 70000 }
    ];
    if (order === 'ascending')
        return employees.sort((a, b) => a.salary - b.salary);
    else if (order === 'descending')
        return employees.sort((a, b) => b.salary - a.salary);
}
console.log(sortEmployees('ascending'));



// Q10
console.log('\n Q10: \n');

console.log(sortEmployees('descending'));



// Q11
console.log('\n Q11: \n');

function sortStudents() {
    const students = [
        { name: 'Alice', grade: 90, age: 20 },
        { name: 'Bob', grade: 85, age: 21 },
        { name: 'Charlie', grade: 85, age: 19 },
        { name: 'David', grade: 92, age: 22 }
    ];

    return students.sort(
        (a, b) => b.grade - a.grade
    ).sort(
        (a, b) => a.grade === b.grade && a.age - b.age
    );
}
console.log(sortStudents());