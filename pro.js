document.querySelectorAll('.open-modal').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const modal = document.getElementById('modal');
      const iframe = document.getElementById('modal-frame');
      iframe.src = this.href;
      modal.style.display = 'block';
    });
  });
  
  document.querySelector('.close').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    const iframe = document.getElementById('modal-frame');
    iframe.src = ''; // Clear iframe for cleanup
    modal.style.display = 'none';
  });
  