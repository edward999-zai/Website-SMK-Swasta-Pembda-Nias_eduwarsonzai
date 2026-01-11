const tabs = document.querySelectorAll('.tab-link');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', function(e){
    e.preventDefault();

    tabs.forEach(t => t.classList.remove('active'));
    this.classList.add('active');

    contents.forEach(c => c.classList.remove('active'));
    const activeContent = document.getElementById(this.dataset.tab);
    activeContent.classList.add('active');
  });
});

// Default tab
tabs[0].click();
