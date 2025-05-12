//tabs code 
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");
tabButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    tabContents[index].classList.add("active");
  });
});


//validation Form functions

 //function Check if the Name  (only alphabetic characters , not empty)
function validateName(name) {
    const nameReg = /^[A-Za-z\s]+$/; 
    if (name === "") return false; 
    return nameReg.test(name); 
  }
  

  // function Check if the  Email  (valid email address)
  function validateEmail(email) {
    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailReg.test(email);
  }
  
  // function Check if the Phone  (at least 10 digits, numbers only)
  function validatePhone(phone) {
    const phoneReg = /^[0-9]{10,}$/;
    return phoneReg.test(phone);
  }

 //function Check if the  gender  selected
 function validateGender(gender) {
    return gender!==""; 
  }

  //function Check if the  address  not empty
  function validateAddress(address) {
    return address!== "";
  }
  
   // Definition of a class and an array for storing user data 
   class User {
    constructor(name,email,phonenum,gender,address) {
      this.name = name;
      this.email = email;
      this.phonenum = phonenum;
      this.gender = gender;
      this.address = address;
      this.imageUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6c757d&color=fff&rounded=true&size=60`;
      
    }
  }
  let userList = [];


//validation Form and add user  function
function addUser(event){
    event.preventDefault();
    let flag = true;    //flag var 
    //Store user input from the form
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phonenum = document.getElementById("phonenum").value.trim();    
    const gender = document.getElementById("gender").value.trim();
    const address = document.getElementById("address").value.trim();
    //alert variables
    const nameAlert = document.getElementById("nameAlert");
    const emailAlert = document.getElementById("emailAlert");
    const phonenumAlert = document.getElementById("phonenumAlert");
    const genderAlert = document.getElementById("genderAlert");
    const addressAlert = document.getElementById("addressAlert");

        // Validate the inputs
       
        
        if (!validateName(name)) {
          nameAlert.textContent = "Name must be non-empty and contain only alphabetic characters.";
          nameAlert.classList.remove("d-none");
          flag = false;
          }else{
            nameAlert.classList.add("d-none");
          }

        if (!validateEmail(email)) {
          emailAlert.textContent = "Email must be a valid email address.";
          emailAlert.classList.remove("d-none");
          flag = false;
        }else{
          emailAlert.classList.add("d-none");
        }

        if (!validatePhone(phonenum)) {
          phonenumAlert.textContent = "Phone Number must be at least 10  numbers.";
          phonenumAlert.classList.remove("d-none");
          flag = false;
        }else{
          phonenumAlert.classList.add("d-none");
        }
      
        if (!validateGender(gender)) {
          genderAlert.textContent = "Gender must be selected. ";
          genderAlert.classList.remove("d-none");
          flag = false;
        }else{
          genderAlert.classList.add("d-none");
        }
      
        if (!validateAddress(address)) {
          addressAlert.textContent = "Address must not be empty. ";
          addressAlert.classList.remove("d-none");
          flag = false;
        }else{
          addressAlert.classList.add("d-none");
        }
        

        
        // Store data if all inputs are correct
        if (flag) {
          // Store data 
          const user = new User(name, email, phonenum, gender, address);
          userList.push(user);
        // Show success message    
        document.getElementById('successMessage').classList.remove('d-none');
        setTimeout(() => {
          document.getElementById('successMessage').classList.add('d-none');
        }, 5000);
          // Reset the form
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phonenum").value = "";
          document.getElementById("gender").value = "";
          document.getElementById("address").value = "";

          console.log (viewUser(userList));

          console.log (generateUserCards(userList));

          }

}





// function view user in table
function viewUser(userList) {
  const table = document.getElementById("table").getElementsByTagName("tbody")[0];
  table.innerHTML = ""; 

  userList.forEach((user) => {
    const row = document.createElement("tr");

    const nameTd = document.createElement("td");
    const img = document.createElement("img");
    img.src = user.imageUrl;
    img.alt = user.name;
    img.className = "avatar-img me-2 rounded-circle"; 
    const nameSpan = document.createElement("span");
    nameSpan.textContent = user.name;
    nameSpan.style.verticalAlign = "middle";
    nameTd.appendChild(img);
    nameTd.appendChild(nameSpan);

    const emailTd = document.createElement("td");
    emailTd.textContent = user.email;

    const phonenumTd = document.createElement("td");
    phonenumTd.textContent = user.phonenum;

    const genderTd = document.createElement("td");
    genderTd.textContent = user.gender;

    const addressTd = document.createElement("td");
    addressTd.textContent = user.address;

    row.appendChild(nameTd);
    row.appendChild(emailTd);
    row.appendChild(phonenumTd);
    row.appendChild(genderTd);
    row.appendChild(addressTd);

    table.appendChild(row);
  });
}



// function view user in card
function generateUserCards(userList) {
  const container = document.querySelector(".card-container");
  container.innerHTML = ""; 

  userList.forEach((user) => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-3";  
    col.innerHTML = `
      <div class="card" style="border-radius: 15px; height: 380px;"> 
        <div class="card-body text-center">
          <div class="mt-2 mb-2">
            <img src="${user.imageUrl}" alt="Avatar"
              class="rounded-circle img-fluid" style="width: 100px;" />
          </div>
          <h4 class="mb-1 fw-bold">${user.name}</h4>
          <p class="text-muted mb-1">${user.gender}</p>
          <ul class="list-unstyled text-start fs-5 mb-2" style="max-height: 150px; overflow: hidden;"> 
            <li class="email"><strong>Email:</strong> ${user.email}</li>
            <li><strong>Phone:</strong> ${user.phonenum}</li>
            <li><strong>Address:</strong> ${user.address}</li>
          </ul>
          <div class="d-flex justify-content-center gap-1 mb-1">
            <button type="button" class="btn btn-sm text-muted btn-floating">
              <i class="fab fa-facebook-f fa-lg"></i>
            </button>
            <button type="button" class="btn btn-sm text-muted btn-floating">
              <i class="fab fa-twitter fa-lg"></i>
            </button>
            <button type="button" class="btn btn-sm text-muted btn-floating">
              <i class="fab fa-linkedin-in fa-lg"></i>
            </button>
          </div>
          <button type="button" class="btn btn-custom">
            Contact
          </button>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}




//toggle button

function toggleView(button) {
  const table = document.getElementById('tableView');
  const cards = document.getElementById('cardView');

  table.classList.toggle('d-none');
  cards.classList.toggle('d-none');
  
  if (table.classList.contains('d-none')) {
    button.textContent = "View as Table";
  } else {
    button.textContent = "View as Cards";
  }
}



  








    

  
