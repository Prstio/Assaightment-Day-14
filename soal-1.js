// Fungsi getFullName
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
// Contoh penggunaan
var person1 = { firstName: "Prase", lastName: "Tio" };
console.log(getFullName(person1)); // Output: John Doe
