
// Add interactivity here (e.g., video upload, dynamic video loading, etc.)
// Example: Fetch videos from an API and dynamically populate the video grid

// Placeholder for dynamic video loading
const videoGrid = document.querySelector('.video-grid');

// Example: Fetch videos from a backend API
async function fetchVideos() {
  try {
    const response = await fetch('/api/videos'); // Replace with your API endpoint
    const videos = await response.json();
    displayVideos(videos);
  } catch (error) {
    console.error('Error fetching videos:', error);
  }
}

function displayVideos(videos) {
  videoGrid.innerHTML = ''; // Clear existing videos
  videos.forEach(video => {
    const videoCard = document.createElement('div');
    videoCard.classList.add('video-card');
    videoCard.innerHTML = `
      <video controls>
        <source src="${video.url}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <h3>${video.title}</h3>
      <p>Uploaded by ${video.uploader}</p>
    `;
    videoGrid.appendChild(videoCard);
  });
}

// Call fetchVideos on page load
fetchVideos();
 
     // Variables to track scroll position
     let lastScrollTop = 0;
     const navbar = document.getElementById("navbar");
 
     window.addEventListener("scroll", function() {
       let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
 
       if (currentScroll > lastScrollTop) {
         // Scrolling Down
         navbar.style.top = "-70px"; // Hide the navbar (adjust this value as needed)
       } else {
         // Scrolling Up
         navbar.style.top = "0"; // Show the navbar
       }
 
       lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
     });
 // Get the search icon and search bar elements
const searchIcon = document.getElementById('searchIcon');
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');

// Toggle search bar visibility on icon click
searchIcon.addEventListener('click', () => {
  searchBar.classList.toggle('active');
  searchInput.focus();
});

// Close the search bar when clicking outside of it
document.addEventListener('click', (event) => {
  if (!searchBar.contains(event.target) && event.target !== searchIcon) {
    searchBar.classList.remove('active');
  }
});

// Close the search bar when pressing Escape
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    searchBar.classList.remove('active');
  }
});

// Perform search or submit action when Enter is pressed
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const query = searchInput.value.trim();
    if (query) {
      // Example: Perform a search or submit the query
      console.log('Searching for:', query);  // You can replace this with an actual search action

      // Optionally close the search bar after submitting
      searchBar.classList.remove('active');
    } else {
      alert('Please enter a search term.');
    }
  }
});
document.getElementById('searchIcon').addEventListener('click', function () {
  const searchInput = document.getElementById('searchInput').value;
  if (searchInput) {
    fetch(`/search?q=${searchInput}`)
      .then(response => response.json())
      .then(data => {
        // Clear the current video grid
        const videoGrid = document.querySelector('.video-grid');
        videoGrid.innerHTML = '';
        
        // Add search results to video grid
        data.forEach(video => {
          const videoCard = document.createElement('div');
          videoCard.classList.add('video-card');
          videoCard.innerHTML = `
            <video controls>
              <source src="${video.videoUrl}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <h3>${video.title}</h3>
            <p>Uploaded by ${video.uploader}</p>
            <p>${video.description}</p>
          `;
          videoGrid.appendChild(videoCard);
        });
      })
      .catch(err => console.error('Error searching for videos:', err));
  }
});
 





 