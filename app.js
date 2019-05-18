const data = [
  {
    name: "John Doe",
    age: 32,
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Boston',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: "Ana Jennings",
    age: 25,
    gender: 'Female',
    lookingfor: 'Male',
    location: 'Austin',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: "Ian Glenn",
    age: 45,
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Orleans',
    image: 'https://randomuser.me/api/portraits/men/86.jpg'
  }
];
const profiles = profileIterator(data);

//call first profile
nextProfile();
//Next Button event
document.getElementById('next').addEventListener('click', nextProfile);

//next profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;
  if(currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>`; 
    document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}">`;
  }
  //reload the page
  else {
    window.location.reload();
  }
  
}
//profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < profiles.length ? 
      {value: profiles[nextIndex++], done: false}
      :{done: true}
    }
  };

}