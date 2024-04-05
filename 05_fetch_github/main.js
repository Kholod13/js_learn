document.addEventListener("DOMContentLoaded", function() {
   const btn = document.querySelector('.btn');
   const form = document.querySelector('.form-control');
   const userIcon = document.querySelector('.userIcon');
   const name = document.querySelector('.name');
   const login = document.querySelector('.login');
   const urlGit = document.querySelector('.url');
   const blog = document.querySelector('.blog');
   const city = document.querySelector('.city');
   const email = document.querySelector('.email');
   const followers = document.querySelector('.followers');
   const following = document.querySelector('.following');
   
   let username = "";
   
   btn.addEventListener("click", async function(){
      username = form.value;
      const url = `https://api.github.com/users/${username}`;

      fetch(url)
      .then(response => {
         if (!response.ok) {
            throw new Error('Network response was not ok');
         }
         return response.json();
      })
      .then(data => {
         console.log(data);

         if(data.name){
            name.textContent = data.name;
         }
         else{
            name.textContent = data.login;
         }

         login.textContent = data.login;
         urlGit.textContent = data.html_url;

         if(data.blog === ""){
            blog.textContent = "None";
         }
         else{
            blog.textContent = data.blog;
         }

         if (data.location) {
            city.textContent = data.location;
         } else {
            city.textContent = "None";
         }

         if (data.email) {
            email.textContent = data.email;
         } else {
            email.textContent = "None";
         }

         followers.textContent = `: ${data.followers}`;
         following.textContent = `: ${data.following}`;

         userIcon.src = data.avatar_url;

      })
      .catch(error => {
         console.error('There was a problem with the fetch operation:', error);
      });
   });
});