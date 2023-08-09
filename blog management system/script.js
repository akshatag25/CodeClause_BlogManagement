document.addEventListener("DOMContentLoaded", function () {
    const postForm = document.getElementById("post-form");
    const postsList = document.getElementById("posts-list");

    postForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const title = document.getElementById("post-title").value;
        const content = document.getElementById("post-content").value;

        createPost(title, content);
        postForm.reset();
    });

    function createPost(title, content) {
        const postDiv = document.createElement("div");
        postDiv.className = "post";
        postDiv.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
        `;
        postsList.prepend(postDiv);
    }
});
