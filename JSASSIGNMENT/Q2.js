let name = "Mayank";
let age = 22;
let isStudent = true;
let skills = ["Java", "JavaScript"];
let user = { city: "Jhansi" };
let data = null;
let result;

console.table([
    { Label: "Name", Value: name, Type: typeof name },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Skills", Value: skills.join(", "), Type: Array.isArray(skills) ? "array" : typeof skills },
    { Label: "User", Value: JSON.stringify(user), Type: typeof user },
    { Label: "Data", Value: String(data), Type: data === null ? "null" : typeof data },
    { Label: "Result", Value: String(result), Type: typeof result }
]);
