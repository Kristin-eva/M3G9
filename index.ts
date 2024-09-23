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

  