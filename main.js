let user = {
    name: "KittyCat",
    age: 21,
    location: "Laplandiya",
    displayInfo: function() {
        console.log(`name - ${this.name} / age - ${this.age} / location - ${this.location}`);
    }
};

user.displayInfo();
