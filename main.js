let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}],
    }
}

function TotalSalary(obj) {
    let sum = 0;
    if(Array.isArray(obj)) {
        obj.forEach(element => {
            sum += element.salary;
        });
    }
    else if(typeof obj === 'object') {
        for(let department in obj) {
            sum += TotalSalary(obj[department]);
        }
    }
    return sum;
}

console.log(TotalSalary(company));
