// Create Data
const data = [
   {
      name: "John Smith",
      age: 32,
      lookingfor: "female",
      location: "BOston MA",
      image: 'https://randomuser.me.api/portraits/men/82.jpeg'
   },
   {
      name: "Jen Andrews",
      age: 26,
      lookingfor: "male",
      location: "Miami FL",
      image: 'https://randomuser.me.api/portraits/women/82.jpeg'
   },
   {
      name: "Ryan Johnson",
      age: 38,
      lookingfor: "female",
      location: "St. Paul MN",
      image: 'https://randomuser.me.api/portraits/men/83.jpeg'
   },
];

const profiles = profileIterator(data);

// click event for the Next button
// when "Next" is clicked, we want to iterate through the profiles
// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
   
}

// Profile Iterator
function  profileIterator(profiles) {
   // this like a counter in a for loop
   let nextIndex = 0;
   
   // returns an object with a next function that contains a ternary operator
   return {
      next: function() {
         return nextIndex < profiles.length ? 
         { value: profiles[nextIndex++], done: false} :
         { done: true }
      } 
   }
}
