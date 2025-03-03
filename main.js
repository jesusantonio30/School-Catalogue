class School {
    // Private properties
    #name;
    #level;
    #numberOfStudents;
    
    // Constructor to initialize school properties
    constructor(name, level, numberOfStudents){
        this.name = name;
        this.level = level;
        this.numberOfStudents = numberOfStudents;
    }

    // Getter for school name
    get name() {
        return this.#name;
    }

    // Getter for school level
    get level() {
        return this.#level;
    }

    // Getter for number of students
    get numberOfStudents() {
        return this.#numberOfStudents;
    }

    // Setter for school name with validation
    set name(name) {
        if (typeof name === 'string' && name.length > 0){
            this.#name = name;
        } else {
            throw new Error('Invalid: Must include string value');
        }
    }

    // Setter for school level with validation
    set level(level) {
        if (typeof level === 'string' && (level === 'primary' || level === 'middle' || level === 'high')) {
            this.#level = level;
        } else {
            throw new Error("Invalid: Must be 'primary', 'middle', or 'high'");
        }
    }

    // Setter for number of students with validation
    set numberOfStudents(numberOfStudents) {
        if (typeof numberOfStudents === 'number' && numberOfStudents > 0){
            this.#numberOfStudents = numberOfStudents;
        } else {
            throw new Error('Invalid: Must be a positive number');
        }
    }

    // Method to return a quick summary of the school
    quickFacts() {
        return `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`;
    }

    // Static method to randomly pick a substitute teacher from an array
    static pickSubstituteTeacher(substituteTeachers) {
        
        // Validate that input is a non-empty array of strings
        if (!Array.isArray(substituteTeachers)){
            throw new Error('Invalid: Must be an array of strings');
        }
        if (substituteTeachers.length === 0){
            throw new Error('Invalid: Array cannot be empty');
        }
        if (!substituteTeachers.every(teacher => typeof teacher === 'string')){
            throw new Error('Invalid: All elements must be strings');
        }

        // Generate a random index and return a random substitute teacher
        let randNum = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randNum];
    }
}

// Create an instance of the School class
const school = new School('HMA', 'high', 900);

// Array of substitute teachers
const subs = ['Ms. Smith', 'Mr. Jones', 'Mrs. Davis'];

// Output school details and a randomly selected substitute teacher
console.log(school.name); // Logs the name of the school
console.log(school.level); // Logs the level of the school
console.log(school.numberOfStudents); // Logs the number of students
console.log(school.quickFacts()); // Logs a quick summary of the school
console.log(School.pickSubstituteTeacher(subs)); // Logs a randomly selected substitute teacher
