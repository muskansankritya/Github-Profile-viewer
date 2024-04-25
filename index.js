//https://api.github.com/users/usernamehere

const input = document.querySelector('#search');
const form = document.querySelector('#form');
const name = document.querySelector('#name');
const bio = document.querySelector('#bio');
const avatar = document.querySelector('.avatar');
const followers = document.querySelector('#Followers');
const following = document.querySelector('#Following');
 async function fetchGithubAPI(value){
      const response = await fetch(`https://api.github.com/users/${value}`)
      const data =  await response.json();
            // console.log(data);
            name.innerHTML = data.name;
            bio.innerHTML = data.bio?data.bio:'No Bio available';
            avatar.setAttribute("src",data.avatar_url);
            followers.innerHTML = ` followers ${data.followers}`;
            following.innerHTML= `following ${data.following}`;
}

form.addEventListener("submit",(event)=>{
    event.preventDefault();  //prevents the page from getting refreshed when we submit the form
   const value= input.value;
   console.log(value);
   
    fetchGithubAPI(value);
    console.log()
// console.log(input.value);


})