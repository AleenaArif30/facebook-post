

document.getElementById("facebook").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting traditionally

    // Get values from the form
   
   
    
    var text = document.getElementById("area").value 
   var loc =  document.getElementById("loc").innerHTML = "malir 24° 54′ 10.3860” N and 67° 11′ 51.2808” E."

    

    // Check if the fields are empty
    if ( text === "") {
        // Show SweetAlert if the fields are empty
        Swal.fire({
            icon: 'warning',
            title: 'Your post is empty',
            text: 'Please fill out both the title and content fields before posting.',
        });

       
    } else {
       
       
        document.getElementById("titletext").innerHTML = text;
        document.getElementById("dir").innerHTML = loc

        // Show the hidden card
        document.getElementById("card").style.display = 'block';

        // Hide the form (optional based on your requirement)
        document.getElementById("com").style.display = 'none';

        // Clear the form inputs
        document.getElementById("facebook").reset();

        // Re-enable the post button after successful submission
        // document.getElementById("post").disabled = false;
    }
});

function like(){
    var like = document.getElementById("like")
    like.style.backgroundColor = "black"

    console.log(like)
}

function comments(){
    var comments = document.getElementById("comments")
    document.getElementById("tx").style.display = 'block'
    document.getElementById("ok").style.display = 'block'

    console.log(comments)
}

function done(){
    var tx =   document.getElementById("tx")
    
     document.getElementById("tx").style.display = 'none'
    document.getElementById("ok").style.display = 'none'
}