{
    const containerDiv:HTMLElement|null = document.getElementById("People");
    console.log(containerDiv)

    interface Person {
    name: string;
    dateOfBirth: string;
    children: number;
    country: string;
    knowsProgramming: boolean;
  }
  
  const people: Person[] = [
    {
      name: "Ingar Luciani",
      dateOfBirth: "12/15/1989",
      children: 1,
      country: "Indonesia",
      knowsProgramming: false
    },
    {
      name: "Paco Stucksbury",
      dateOfBirth: "1/10/1992",
      children: 2,
      country: "China",
      knowsProgramming: true
    },
    {
      name: "Andreas MacGorman",
      dateOfBirth: "9/3/1971",
      children: 3,
      country: "China",
      knowsProgramming: true
    },
    {
      name: "Marrilee Seebert",
      dateOfBirth: "2/13/1991",
      children: 3,
      country: "China",
      knowsProgramming: false
    },
    {
      name: "Dmitri Rennix",
      dateOfBirth: "3/11/1973",
      children: 3,
      country: "China",
      knowsProgramming: false
    }
  ];

if(containerDiv){
    containerDiv.innerHTML = "<h1>" + people[1].children +"</h1>" 
}
  
  console.log(people);
}
// Is the first person older than the last person?
if(people[0].dateOfBirth<people[3].dateOfBirth){
    console.log("the first person is older than fourth person")
}
// Does the 2nd person have the same amount of kids as the 3rd?
if(people[1].children==people[2].children){
    console.log("the 2nd person have same amount of children as 3rd person")
}
// Create a statement that checks if the 1st person and the 4th person in the array both know how to program. If yes, output “Yay!”, if not output “LMGTFY”.
if(people[0].knowsProgramming&&people[3].knowsProgramming){
    console.log("Yay!")
}
else{
    console.log("LMGTFY")
}
// Create a statement that checks the 2nd person in the array for their nationality. If the person’s country is Iceland, output “Hæ”, if he/she is from Spain output “Hola”, if he/she is from Korea output “여보세요”). If the country is none of the above, output “Hello”. Tip: a switch statement might be a good fit for this task.

// Check the nationality of the 2nd person and output greeting based on their country
const secondPersonCountry = people[1].country;

switch (secondPersonCountry) {
  case "Iceland":
    console.log("Hæ");
    break;
  case "Spain":
    console.log("Hola");
    break;
  case "Korea":
    console.log("여보세요");
    break;
  default:
    console.log("Hello");
}
// Use a ternary operator to check if the 2nd person's name is longer than 5 characters
const secondPersonNameLength = people[1].name.length;
const message = secondPersonNameLength > 5 
  ? "The 2nd person's name is longer than 5 characters." 
  : "The 2nd person's name is 5 characters or shorter.";

console.log(message);