document.addEventListener('DOMContentLoaded', function() {
  const charityList = document.getElementById('charityList');
  const errorMessage = document.getElementById('errorMessage');

  fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('http://feeds.bbci.co.uk/news/world/rss.xml'))
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    })
    .then(data => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(data.contents, "application/xml");
      const items = xml.querySelectorAll('item');

      charityList.innerHTML = ''; // Clear "Loading..."

      let charityCount = 0;

      items.forEach((item) => {
        const title = item.querySelector('title').textContent;
        const link = item.querySelector('link').textContent;
        const description = item.querySelector('description') ? item.querySelector('description').textContent : '';

        const lowerText = (title + " " + description).toLowerCase();

        // Only show if related to charity topics
        if (lowerText.includes('charity') || lowerText.includes('donation') || lowerText.includes('nonprofit')) {
          const li = document.createElement('li');
          li.innerHTML = `<a href="${link}" target="_blank">${title}</a>`;
          charityList.appendChild(li);
          charityCount++;
        }
      });

      if (charityCount === 0) {
        charityList.innerHTML = '<li>No charity-related news found right now. Check back later!</li>';
      }
    })
    .catch(error => {
      console.error('Fetch error:', error);
      charityList.style.display = 'none';
      errorMessage.style.display = 'block';
    });
});
