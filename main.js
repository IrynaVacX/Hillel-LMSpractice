let contactsBook = {
    contactsList: [
        {name: "Name1", phone: "0672346712", email: "name111@gmail.com"},
        {name: "Name2", phone: "0683467234", email: "name222@gmail.com"},
        {name: "Name3", phone: "0967128093", email: "name333@gmail.com"},
    ],
    searchContact: function(name) {
        return this.contactsList.find(element => element.name.toLowerCase() === name.toLowerCase());
    },
    addContact: function(name, phone, email) {
        this.contactsList.push({name: name, phone: phone, email: email});
    },
}

console.log(contactsBook.searchContact("Name2"));
contactsBook.addContact("Name4", "0673451200", "name444@gmail.com");
console.log(contactsBook.searchContact("name4"));