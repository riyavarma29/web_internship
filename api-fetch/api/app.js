let dataContainer=document.querySelector(".data-container");
let Btn=document.querySelector(".btn");

function fetchData(){
    dataContainer.innerHTML="Loading ..."
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
        if(!response.ok) throw new Error("Network response was not ok");
            return response.json()
    })
    .then(users=>{
        dataContainer.innerHTML='';
        users.forEach((user)=>{
            let card=document.createElement("div");
            card.className='card-items';
            card.innerHTML=`
            <h3>Name: ${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Address: ${user.address.street},${user.address.city}</p>  `
            dataContainer.appendChild(card)
        })
    })
    .catch(error=>{
       dataContainer.innerHTML= `<p id='error'>Error: ${error.message}</p>`;
    })
}

Btn.addEventListener("click",()=>{
    fetchData()
});