// Definisi tipe alias Person
type Person = {
    firstName: string;
    lastName: string;
};

// Fungsi getFullName
function getFullName(person: Person): string {
    return `${person.firstName} ${person.lastName}`;
}

// Contoh penggunaan
const person1: Person = { firstName: "Prase", lastName: "Tio" };
console.log(getFullName(person1)); // Output: John Doe
