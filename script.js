// Show and hide comments
function showComments(articleNumber) {

    let comments =
        document.getElementById("comments" + articleNumber);

    if (comments.style.display === "block") {

        comments.style.display = "none";

    } else {

        comments.style.display = "block";

    }
}


// Add a new comment
function addComment(articleNumber) {

    let input =
        document.getElementById("commentInput" + articleNumber);

    let commentText = input.value;

    // Check if the input is empty
    if (commentText === "") {

        alert("Please write a comment first.");

        return;
    }


    // Create a new paragraph
    let newComment =
        document.createElement("p");

    newComment.textContent =
        "You: " + commentText;


    // Add the comment to the page
    document
        .getElementById("newComments" + articleNumber)
        .appendChild(newComment);


    // Clear input
    input.value = "";
}


// Search articles
document
    .getElementById("searchInput")
    .addEventListener("keyup", function() {

        let searchText =
            this.value.toLowerCase();


        let articles =
            document.querySelectorAll(".blog-post");


        articles.forEach(function(article) {

            let articleText =
                article.textContent.toLowerCase();


            if (articleText.includes(searchText)) {

                article.style.display = "block";

            } else {

                article.style.display = "none";

            }

        });

    });