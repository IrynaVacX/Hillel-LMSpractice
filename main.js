"use  strict";
function Student(name, surname, birthYear, grades = []) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = new Array(25).fill(null);
    this.currentIndex = 0;

    this.getAge = function() {
        return new Date().getFullYear() - this.birthYear;
    };
    this.getAverageGrade = function() {
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return this.grades.length > 0 ? sum / this.grades.length : 0;
    };
    this.getAverageAttendance = function() {
        const attended = this.attendance.filter(status => status === true).length;
        const total = this.attendance.filter(status => status !== null).length;
        return total > 0 ? (attended / total).toFixed(2) : 0;
    };

    this.present = function() {
        if (this.currentIndex < 25) {
            this.attendance[this.currentIndex] = true;
            this.currentIndex++;
        }
        else {
            console.log("Усі заняття вже відмічені");
        }
    };
    this.absent = function() {
        if (this.currentIndex < 25) {
            this.attendance[this.currentIndex] = false;
            this.currentIndex++;
        }
        else {
            console.log("Усі заняття вже відмічені");
        }
    };

    this.summary = function() {
        const averageGrade = this.getAverageGrade();
        const averageAttendance = this.getAverageAttendance();

        if (averageGrade > 90 && averageAttendance > 0.9) {
            return "Молодець!";
        }
        else if (averageGrade > 90 || averageAttendance > 0.9) {
            return "Добре, але можна краще";
        }
        else {
            return "Редиска!";
        }
    };

}

const student1 = new Student("Мія", "Горячева", 2000, [90, 80, 95, 100, 90]);
const student2 = new Student("Вадим", "Гармаш", 1998, [78, 84, 73, 95, 70]);

student1.present();
student1.present();
student1.absent();

student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.absent();
student2.present();
student2.present();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.present();
student2.present();

console.log(`${student1.name} ${student1.surname}\nВік: ${student1.getAge()}\nСередній бал: ${student1.getAverageGrade()}\nВідвідуваність: ${student1.getAverageAttendance()}\nПідсумок: ${student1.summary()}`);
console.log(`${student2.name} ${student2.surname}\nВік: ${student2.getAge()}\nСередній бал: ${student2.getAverageGrade()}\nВідвідуваність: ${student2.getAverageAttendance()}\nПідсумок: ${student2.summary()}`);
