const students = [
  { id: 21, name: "Rashik" },
  { id: 31, name: "Injamul" },
  { id: 41, name: "Haque" },
  { id: 71, name: "Md" }
];

const names = students.map(s => s.name);
const id = students.filter(s => s.id > 40);
const ids = students.find(s => s.id > 40);
console.log(id);
