// Create Data
const data = [
   {
      name: "John Smith",
      age: 32,
      gender: 'male',
      lookingfor: "female",
      location: "Boston MA",
      image: 'https://randomuser.me/api/portraits/men/82.jpg'
   },
   {
      name: "Jen Andrews",
      age: 26,
      gender: 'female',
      lookingfor: "male",
      location: "Miami FL",
      image: 'https://randomuser.me/api/portraits/women/82.jpg'
   },
   {
      name: "Ryan Johnson",
      age: 38,
      gender: 'male',
      lookingfor: "female",
      location: "St. Paul MN",
      image: 'https://randomuser.me/api/portraits/men/83.jpg'
   },
];

const profiles = profileIterator(data);

// Call first profile - loads the DOM automatically with the first profile
nextProfile();

// click event for the Next button
// when "Next" is clicked, we want to iterate through the profiles
// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
   const currentProfile = profiles.next().value;

   if(currentProfile !== undefined) {
      document.getElementById('profileDisplay').innerHTML = `
         <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
         </ul>
   `;

   document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
   } else {
      // No more profiles
      window.location.reload();
   }
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
