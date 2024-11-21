function addPostsToDom(posts) {
  const postsContainer = document.getElementById("postsContainer");
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("card");
    postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
          <button onclick="toggleComments(${post.id}, this)">Show Comments</button>
          <div id="comments-${post.id}" class="comments"></div>
        `;
    postsContainer.appendChild(postElement);
  });
}

export function fetchGet() {
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((response) => response.json())
    .then((posts) => {
      addPostsToDom(posts);
    })
    .catch((error) => console.error("Error loading posts:", error));
}

function fetchComments(postId) {
  fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=2`
  )
    .then((response) => response.json())
    .then((comments) => {
      const commentsContainer = document.getElementById(`comments-${postId}`);
      commentsContainer.innerHTML = "";
      comments.forEach((comment) => {
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");
        commentElement.innerHTML = `
              <p><b>${comment.name}</b> (${comment.email})</p>
              <p>${comment.body}</p>
            `;
        commentsContainer.appendChild(commentElement);
      });
    })
    .catch((error) => console.error("Error loading comments:", error));
}

function toggleComments(postId, button) {
  const commentsSection = document.getElementById(`comments-${postId}`);

  if (button.textContent === "Show Comments") {
    fetchComments(postId);
    commentsSection.style.display = "block";
    button.textContent = "Hide Comments";
  } else {
    commentsSection.style.display = "none";
    button.textContent = "Show Comments";
  }
}
window.toggleComments = toggleComments;

export function closePopup() {
  popupOverlay.style.display = "none";
  postForm.reset();
}

export async function fetchPost(postForm) {
  const formData = new FormData(postForm);
  const postData = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Post created:", result);
      alert("Post created successfully!");
      addPostsToDom([result]);
      closePopup();
    } else {
      throw new Error("Failed to create post");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to create post. Please try again.");
  }
}
