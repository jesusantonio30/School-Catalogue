
# School Management System

## Overview

This project implements a simple **School Management System** in JavaScript using **classes** and **inheritance**. It provides functionality to create schools, manage student enrollment, assign substitute teachers, and handle specialized school types like **Primary School** and **High School**.

## Features

-   **Encapsulation**: Uses private properties to ensure data integrity.
    
-   **Inheritance**: Extends the base `School` class for specialized school types.
    
-   **Validation**: Ensures only valid data is accepted for properties.
    
-   **Static Methods**: Includes a utility to randomly select substitute teachers.
    

## Classes

### `School`

This is the base class representing a general school.

#### Properties:

-   `name` (string): Name of the school.
    
-   `level` (string): Type of school (`primary`, `middle`, or `high`).
    
-   `numberOfStudents` (number): Total students enrolled.
    

#### Methods:

-   `quickFacts()`: Returns a string summarizing the school details.
    
-   `static pickSubstituteTeacher(substituteTeachers)`: Randomly selects a substitute teacher from a provided array.
    

### `PrimarySchool` (Extends `School`)

Represents a primary school with an additional **pickup policy**.

#### Properties:

-   `pickupPolicy` (string): Specifies how students should be picked up.
    

### `HighSchool` (Extends `School`)

Represents a high school with additional **sports teams**.

#### Properties:

-   `sportsTeams` (array of strings): Lists available sports teams.
    

## Example Usage

```
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
console.log(alSmith.sportsTeams);
```

## Technologies Used

-   **JavaScript (ES6+)**: Core programming language used.
    
-   **Node.js**: Runtime environment for executing JavaScript code.
    
-   **Git**: Version control for tracking changes.
