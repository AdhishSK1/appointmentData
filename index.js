function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
    axios
      .post(
        "https://crudcrud.com/api/5519d12fca344fd6b10665aea264519d/appointmentData",
        userDetails
      )
      .then((response) => displayUserOnScreen(response.data))
      .catch((error) => console.log(error));
  window.addEventListener("DOMContentLoaded", () => {
    // Make a GET request to fetch all users when the page loads
    axios
      .get("https://crudcrud.com/api/5519d12fca344fd6b10665aea264519d/appointmentData")
      .then((response) => {
       for(var i=0;i<response.data.length;i++){
         displayUserOnScreen(response.data[i]);
       }
      })
      .catch((error) => console.log(error));
  });
    // Clearing the input fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  }
  
  function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");
    userItem.appendChild(
      document.createTextNode(
        `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
      )
    );
  
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);
  
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);
  
    const userList = document.querySelector("ul");
    userList.appendChild(userItem);
  
    deleteBtn.addEventListener("click", function (event) {
      userList.removeChild(event.target.parentElement);
     axios
      .delete(
        `https://crudcrud.com/api/5519d12fca344fd6b10665aea264519d/appointmentData/66c6f99a6b920b03e879fab0`
      )
      .then(() => console.log("User deleted"))
      .catch((error) => console.log(error));
    });
  
    editBtn.addEventListener("click", function (event) {
      userList.removeChild(event.target.parentElement);
      localStorage.removeItem(userDetails.email);
      document.getElementById("username").value = userDetails.username;
      document.getElementById("email").value = userDetails.email;
      document.getElementById("phone").value = userDetails.phone;
    });
  }
    
  
  
  // Do not touch the code below
  module.exports = handleFormSubmit;
  
