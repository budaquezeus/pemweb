function vote(professor) {
    document.getElementById('vote-result').innerText = `You voted for: ${professor}`;
  }



  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.querySelector('.toggle-btn');
  const links = sidebar.querySelectorAll('a');

  // Toggle sidebar open/close
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('closed');
  });

    // Highlight active link on click
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        links.forEach(l => l.classList.remove('active'));
        e.target.classList.add('active');
        // For mobile, close sidebar after clicking a link
        if (window.innerWidth <= 600) {
          sidebar.classList.add('closed');
        }
      });
    });

      // Initialize sidebar closed on small screens
  function handleResize() {
    if (window.innerWidth <= 600) {
      sidebar.classList.add('closed');
    } else {
      sidebar.classList.remove('closed');
    }
  }

  window.addEventListener('resize', handleResize);
  
  // Run on initial load
  handleResize();

  document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', () => {
        toggleBtn.classList.toggle('active');
        sidebar.classList.toggle('open');
      });
    } else {
      console.warn("Element with id 'menu-toggle' or 'sidebar' not found.");
    }
  });