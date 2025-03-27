// Sample database (Replace this with actual backend API calls)
const allVideos = [
    { id: 1, title: "Learn JavaScript", category: "Programming", tags: ["coding", "js"], views: 1000, engagementScore: 90, uploadTime: Date.now() - 10000 },
    { id: 2, title: "React Tutorial", category: "Programming", tags: ["react", "frontend"], views: 5000, engagementScore: 95, uploadTime: Date.now() - 50000 },
    { id: 3, title: "Music Hits 2024", category: "Music", tags: ["music", "pop"], views: 15000, engagementScore: 85, uploadTime: Date.now() - 30000 }
];

// Fetch user watch history (Simulated)
const userHistory = ["Programming", "js"];

// 1️⃣ Recommendation Algorithm
function recommendVideos(userHistory, allVideos) {
    return allVideos
        .filter(video => userHistory.includes(video.category) || video.tags.some(tag => userHistory.includes(tag)))
        .sort((a, b) => b.views - a.views); // Sort by popularity
}

// 2️⃣ Watch Time Tracking
function trackWatchTime(videoId, durationWatched, totalDuration) {
    let watchPercentage = (durationWatched / totalDuration) * 100;
    return watchPercentage > 50 ? "High Engagement" : "Low Engagement";
}

// 3️⃣ Search Algorithm
function searchVideos(query, allVideos) {
    return allVideos
        .filter(video => video.title.toLowerCase().includes(query.toLowerCase()) || video.description?.toLowerCase().includes(query.toLowerCase()))
        .sort((a, b) => b.engagementScore - a.engagementScore);
}

// 4️⃣ Trending Algorithm
function isTrending(video) {
    let velocity = video.views / (Date.now() - video.uploadTime);
    return velocity > 1000 && video.engagementScore > 0.05; // Adjust thresholds as needed
}

// ✅ Example Usage
console.log("Recommended Videos:", recommendVideos(userHistory, allVideos));
console.log("Search Results:", searchVideos("React", allVideos));
console.log("Trending Videos:", allVideos.filter(isTrending));


function advancedRecommend(userHistory, allVideos, userWatchData) {
    return allVideos
        .map(video => {
            let score = 0;

            // Match category or tags
            if (userHistory.includes(video.category) || video.tags.some(tag => userHistory.includes(tag))) {
                score += 5; // Base points for relevance
            }

            // Check if user watched similar videos for a long time
            let watchTime = userWatchData[video.id] || 0;
            if (watchTime > 5 * 60) score += 10; // More points for long watch time

            // High engagement videos get bonus points
            score += video.engagementScore / 10; 

            return { ...video, score };
        })
        .sort((a, b) => b.score - a.score); // Sort by recommendation score
}

// Example watch data (videoId → seconds watched)
const userWatchData = { 1: 600, 2: 120, 3: 1800 };
console.log("Personalized Recommendations:", advancedRecommend(userHistory, allVideos, userWatchData));



function youtubeSearch(query, allVideos) {
    return allVideos
        .map(video => {
            let score = 0;

            // Check if query matches title or description
            if (video.title.toLowerCase().includes(query.toLowerCase())) score += 10;
            if (video.description?.toLowerCase().includes(query.toLowerCase())) score += 5;

            // Engagement matters
            score += video.engagementScore;

            // Prioritize recent trending videos
            let ageFactor = Math.max(1, (Date.now() - video.uploadTime) / (1000 * 60 * 60 * 24)); // Age in days
            score += (video.views / ageFactor) * 0.01; 

            return { ...video, score };
        })
        .sort((a, b) => b.score - a.score); // Sort by relevance score
}

console.log("YouTube Search Results:", youtubeSearch("React", allVideos));


function sessionBasedRecommendations(recentlyWatched, allVideos) {
    return allVideos
        .filter(video => recentlyWatched.some(v => v.category === video.category || v.tags.some(tag => video.tags.includes(tag))))
        .sort((a, b) => b.engagementScore - a.engagementScore); // Prioritize high engagement
}

// Simulating a recent session
const recentlyWatched = [
    { id: 2, title: "React Tutorial", category: "Programming", tags: ["react", "frontend"], views: 5000, engagementScore: 95 }
];

console.log("Session-Based Recommendations:", sessionBasedRecommendations(recentlyWatched, allVideos));


function detectViralVideos(allVideos) {
    return allVideos.filter(video => {
        let timeSinceUpload = (Date.now() - video.uploadTime) / (1000 * 60); // Minutes since upload
        let growthRate = video.views / timeSinceUpload; // Views per minute

        return growthRate > 50 && video.engagementScore > 80; // High threshold for virality
    });
}

console.log("🔥 Viral Videos:", detectViralVideos(allVideos));


function autoplayNextVideo(lastWatched, allVideos) {
    return allVideos
        .filter(video => video.category === lastWatched.category || video.tags.some(tag => lastWatched.tags.includes(tag)))
        .sort((a, b) => (b.engagementScore + b.views) - (a.engagementScore + a.views))[0]; // Pick most engaging
}

// Example: Last watched video
const lastWatched = { id: 1, title: "Learn JavaScript", category: "Programming", tags: ["coding", "js"], views: 1000, engagementScore: 90 };

console.log("Next Autoplay Video:", autoplayNextVideo(lastWatched, allVideos));
