

// document.getElementById("facebook").addEventListener("submit", function (e) {
//     e.preventDefault(); // Prevent form from submitting traditionally

//     // Get values from the form



//     var text = document.getElementById("area").value 
//    var loc =  document.getElementById("loc").innerHTML = "malir 24° 54′ 10.3860” N and 67° 11′ 51.2808” E."



//     // Check if the fields are empty
//     if ( text === "") {
//         // Show SweetAlert if the fields are empty
//         Swal.fire({
//             icon: 'warning',
//             title: 'Your post is empty',
//             text: 'Please fill out both the title and content fields before posting.',
//         });


//     } else {


//         document.getElementById("titletext").innerHTML = text;
//         document.getElementById("dir").innerHTML = loc

//         // Show the hidden card
//         document.getElementById("card").style.display = 'block';

//         // Hide the form (optional based on your requirement)
//         document.getElementById("com").style.display = 'none';

//         // Clear the form inputs
//         document.getElementById("facebook").reset();

//         // Re-enable the post button after successful submission
//         // document.getElementById("post").disabled = false;
//     }
// });

// function like(){
//     var like = document.getElementById("like")
//     like.style.backgroundColor = "black"

//     console.log(like)
// }

// function comments(){
//     var comments = document.getElementById("comments")
//     document.getElementById("tx").style.display = 'block'
//     document.getElementById("ok").style.display = 'block'

//     console.log(comments)
// }

// function done(){
//     var tx =   document.getElementById("tx")

//      document.getElementById("tx").style.display = 'none'
//     document.getElementById("ok").style.display = 'none'
// }
var signUpForm = document.getElementById("SignUpForm");
var postForm = document.getElementById("PostForm");
var profilePhotoImg = document.getElementById("profilePhotoImg");
var profilePhotoInput = document.getElementById("profilePhotoInput");

signUpForm.addEventListener('submit', function (e) {
    e.preventDefault();
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Account created successfully!",
        showConfirmButton: false,
        timer: 2000,
    });
    postForm.classList.remove("hidden");
    signUpForm.classList.add("hidden");
    profilePhotoImg.classList.remove("hidden");
});

profilePhotoImg.addEventListener("click", function () {
    profilePhotoInput.click();
});

profilePhotoInput.addEventListener("change", function (e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function () {
        profilePhotoImg.src = reader.result;
    };
    reader.readAsDataURL(file);
});

var backgroundImg;
function selectImg(imageSrc) {
    backgroundImg = imageSrc;
    var images = document.querySelectorAll(".bg-img");
    images.forEach(img => img.classList.remove("selectedImg"));
    event.target.classList.add("selectedImg");
}

function post() {
    var firstName = document.getElementById("FirstName").value;
    var lastName = document.getElementById("LastName").value;
    var postTitle = document.getElementById("postTitle").value;
    var postDescription = document.getElementById("postDescription").value;
    var currentTime = new Date().toLocaleTimeString();
    var profilePhotoSrc = profilePhotoImg.src; // Get the profile photo URL

    if (postTitle.trim() === "" || postDescription.trim() === "") {
        Swal.fire({
            title: "Error!",
            text: "Post title and description cannot be empty!",
            icon: "error",
            confirmButtonText: "OK"
        });
        return;
    }

    var post = document.getElementById("post");
    post.innerHTML = `
        <div class="postcard">
            <div class="card-header d-flex align-items-center">
                <img src="${profilePhotoSrc}" alt="Profile Photo" class="profile-photo-small" />
                <div class="ms-2">
                    <strong>${firstName} ${lastName}</strong>
                    <br />
                    <small>${currentTime}</small>
                </div>
            </div>
            <div class="card-body">
                <h5>${postTitle}</h5>
                <p>${postDescription}</p>
                <img src="${backgroundImg}" alt="Post Image" class="img-fluid">
            </div>
        </div>
    `;
    post.classList.remove("hidden");

    // Hide the post form and reset fields
    document.getElementById("PostForm").classList.add("hidden");
    document.getElementById("postTitle").value = "";
    document.getElementById("postDescription").value = "";

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Post created successfully!",
        showConfirmButton: false,
        timer: 2000,
    });
}