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


class PrimarySchool extends School {
    // Private property for pickup policy
    #pickupPolicy;
    
    // Constructor to initialize primary school properties
    constructor(name, numberOfStudents, pickupPolicy){
        // Call the parent class constructor with 'primary' as the school level
        super(name, 'primary', numberOfStudents);
        this.pickupPolicy = pickupPolicy;
    }

    // Getter for pickup policy
    get pickupPolicy() {
        return this.#pickupPolicy;
    }

    // Setter for pickup policy with validation
    set pickupPolicy(pickupPolicy) {
        if (typeof pickupPolicy === 'string' && pickupPolicy.length > 0) {
            this.#pickupPolicy = pickupPolicy;
        } else {
            throw new Error('Invalid: Must be a string');
        }
    }
}

class HighSchool extends School {
    // Private property for sports teams
    #sportsTeams;
    
    // Constructor to initialize high school properties
    constructor(name, numberOfStudents, sportsTeams) {
        // Call the parent class constructor with 'high' as the school level
        super(name, 'high', numberOfStudents);
        this.sportsTeams = sportsTeams;
    }

    // Getter for sports teams
    get sportsTeams() {
        return this.#sportsTeams;
    }

    // Setter for sports teams with validation
    set sportsTeams(sportsTeams) {
        // Validate that input is a non-empty array of strings
        if (!Array.isArray(sportsTeams)) {
            throw new Error('Invalid: Must be an array of strings');
        }
        if (sportsTeams.length === 0){
            throw new Error('Invalid: Array cannot be empty');
        }
        if (!sportsTeams.every( (team) => typeof team === 'string' )) {
            throw new Error('Invalid: All elements must be strings');
        }

        // Assign the validated sports teams array
        this.#sportsTeams = sportsTeams;
    }
}