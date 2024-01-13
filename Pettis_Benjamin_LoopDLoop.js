/*
//LEARNING OBJECTIVE:
    Solve a given problem using javascript loop
    Describe the purpose of loop components using comments  

// How do we know we need a loop here?
    We need a loop in this senario because we are starting a process and stopping 
    at a certain point. Telling the Treadmill to deploy candy at each increment. 

// Whats the starting point of the loop?
    Creating a variable with the value of 2 to represent the candy being deployed every two miles

// When should the loop stop?
    After mile 6 has been reached

// How will the loop know when to stop?
    When the index is less than or equal to 6

// What's incrementing each iteration of the loop?
    using i++ to add a value till the let varible is reached

// What variables do we need?
    A let, var, or const to define the index of numbers needed in the code
*/

for (let i = 1; i <= 6; i++) {
    if(i % 2 == 0)
        
    console.log('Candy Reward Successful, Keep Going!', i);
}


/*
- Just because I wanted to see about decrementing instead of incrementing ;)
for (let i = 6; i >= 1; i--) {
    if(i % 2 == 0)
    console.log('Candy Reward Successful, Keep Going!', i);
}
*/
/*
SOURCES OUTSIDE OF CODING DOJO:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
https://www.youtube.com/watch?v=s9wW2PpJsmQ

