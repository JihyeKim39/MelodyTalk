let likes = 0;
let isLiked = false;



function postComment() {
    const commentInput = document.getElementById("comment-input");
    const commentsList = document.getElementById("comments-list");

    if (commentInput.value.trim() !== "") {
        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.textContent = commentInput.value;
        commentsList.appendChild(newComment);
        commentInput.value = ""; // Clear the input after posting
    } else {
        alert("Please enter a comment.");
    }
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("add");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  console.log("click modal");
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}