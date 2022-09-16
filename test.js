const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi'];

function sortStudentsByGroups(arr) {
    let sortStudents = arr.sort();
    const result = [];
    for (let i = 0; i < 4; i++) {
        if (i === 3 && sortStudents.length !== 0) {
            result.push(`Оставшиеся студенты: ${sortStudents.join(', ')}`);
            break;
        } if (i === 3 && sortStudents.length === 0) {
            result.push(`Оставшиеся студенты: -}`);
            break;
        } 
        let group = [];
        for (let j = 0; j < 3; j++) {
            group.push(sortStudents[j]);
        }
        result.push(group);
        sortStudents = sortStudents.slice(3);
    }
    return result;
}

console.log(sortStudentsByGroups(students));