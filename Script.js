// Toggle the sidebar open/close
function toggleMenu() {
  const sidebar = document.querySelector('.nav-links');
  const content = document.querySelector('.content');
  
  // Toggle the 'active' class for the sidebar
  sidebar.classList.toggle('active');
  
  // Toggle the 'shifted' class for the content
  content.classList.toggle('shifted');
}

