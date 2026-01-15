// Handle visitor comments
const commentForm = document.getElementById('commentForm');
const commentList = document.getElementById('commentList');

commentForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if(name && email && message){
    // Create comment item
    const div = document.createElement('div');
    div.classList.add('comment-item');
    div.innerHTML = `
      <strong>${name}</strong> <br>
      <em>${email}</em> <br>
      <p>${message}</p>
    `;

    // Append comment
    commentList.prepend(div);

    // Animate with GSAP
    gsap.from(div, {opacity:0, y:30, duration:0.8, ease:"power3.out"});

    // Reset form
    commentForm.reset();
  }
});
