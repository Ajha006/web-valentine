// // Store Valentine Week Dates
// const days = [
//     { name: "Rose Day", date: "2025-02-07", image: "images/rose.png" },
//     { name: "Propose Day", date: "2025-02-08", image: "images/propose.png.png", question: true },
//     { name: "Chocolate Day", date: "2025-02-09", image: "images/chocolate.png.png" },
//     { name: "Teddy Day", date: "2025-02-10", image: "images/teddy.png" },
//     { name: "Promise Day", date: "2025-02-11", image: "images/promise.png" },
//     { name: "Hug Day", date: "2025-02-12", image: "images/hug.png" },
//     { name: "Kiss Day", date: "2025-02-13", image: "images/kiss.png" },
//     { name: "Valentine’s Day", date: "2025-02-14", image: "images/valentine.png" }
// ];

// // Get Elements
// const dayMessage = document.getElementById("day-message");
// const dayImage = document.getElementById("day-image");
// const questionSection = document.getElementById("question-section");
// const timerDisplay = document.getElementById("timer");

// // Get Current Date
// const today = new Date().toISOString().split("T")[0];

// // Find the Current Day
// let currentDay = days.find(day => day.date === today);

// // if (currentDay) {
// //     dayMessage.innerText = `Happy ${currentDay.name}!`;
// //     dayImage.src = currentDay.image;

// //     // Show question for Propose Day
// //     if (currentDay.question) {
// //         questionSection.style.display = "block";
// //     }
// // } else {
// //     dayMessage.innerText = "Come back on the right day to continue!";
// //     dayImage.src = "images/Valentine.png";
// // }

//  const startDate = "2025-02-07"; // Start of Valentine's week

// // if (today < startDate) {
// //     // If the current date is before Valentine's week
// //     dayMessage.innerText = "Get ready for Valentine’s Week!";
// //     dayImage.src = "images/before-week.webp"; // Show the 'before week' image
// // } else if (currentDay) {
// //     dayMessage.innerText = `Happy ${currentDay.name}!`;
// //     dayImage.src = currentDay.image;

// //     // Show question for Propose Day
// //     if (currentDay.question) {
// //         questionSection.style.display = "block";
// //     }
// // } else {
// //     dayMessage.innerText = "Come back on the right day to continue!";
// //     dayImage.src = "images/Valentine.png";
// // }

// // Get promise box element
// const promiseBox = document.getElementById("promise");

// if (today < startDate) {
//     // Before Valentine's Week
//     dayMessage.innerText = "Get ready for Valentine’s Week!";
//     dayImage.src = "images/before-week.webp";
// } else if (currentDay) {
//     dayMessage.innerText = `Happy ${currentDay.name}!`;
//     dayImage.src = currentDay.image;

//     // Show question for Propose Day
//     if (currentDay.name === "Propose Day") {
//         questionSection.style.display = "block";
//     }

//     // Show promise box only on Promise Day
//     if (currentDay.name === "Promise Day") {
//         promiseBox.style.display = "block";
//     }
// } else {
//     // Default message for non-event days
//     dayMessage.innerText = "Come back on the right day to continue!";
//     dayImage.src = "images/Valentine.png";
// }




// // "Yes" or "No" Interaction on Propose Day
// function proceed(isYes) {
//     if (isYes) {
//         alert("Yay! Let's continue the journey of love!");
//         window.location.reload();
//     } else {
//         window.location.href = "gameover.html";
//     }
// }

// // Countdown Timer
// // function countdown() {
// //     const nextDay = new Date();
// //     nextDay.setDate(nextDay.getDate() + 1);
// //     nextDay.setHours(0, 0, 0, 0);

// //     let interval = setInterval(() => {
// //         let now = new Date().getTime();
// //         let distance = nextDay - now;

// //         if (distance < 0) {
// //             clearInterval(interval);
// //             window.location.reload();
// //         } else {
// //             let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// //             let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// //             let seconds = Math.floor((distance % (1000 * 60)) / 1000);
// //             timerDisplay.innerText = `Come back in: ${hours}h ${minutes}m ${seconds}s`;
// //         }
// //     }, 1000);
// // }

// // countdown();

// function countdown() {
//     const startDate = new Date("2025-02-07T00:00:00"); // Valentine's Week start date
//     const now = new Date();

//     // If today is before the start of Valentine's Week, show countdown
//     if (now < startDate) {
//         let interval = setInterval(() => {
//             let currentTime = new Date().getTime();
//             let timeLeft = startDate - currentTime;

//             if (timeLeft <= 0) {
//                 clearInterval(interval);
//                 window.location.reload(); // Reload when countdown finishes
//             } else {
//                 let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//                 let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//                 let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//                 let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//                 timerDisplay.innerText = `Valentine’s Week starts in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
//             }
//         }, 1000);
//     } else {
//         timerDisplay.innerText = ""; // Hide countdown if the week has started
//     }
// }

// countdown();




// Store Valentine Week Dates
const days = [
    { name: "Rose Day", date: "2025-02-07", image: "images/rose.png" },
    { name: "Propose Day", date: "2025-02-08", image: "images/propose.png.png", question: true },
    { name: "Chocolate Day", date: "2025-02-09", image: "images/chocolate.png.png" },
    { name: "Teddy Day", date: "2025-02-10", image: "images/teddy.png" },
    { name: "Promise Day", date: "2025-02-11", image: "images/promise.png" },
    { name: "Hug Day", date: "2025-02-12", image: "images/Hug.png" },
    { name: "Kiss Day", date: "2025-02-13", image: "images/kiss.png" },
    { name: "Valentine’s Day", date: "2025-02-14", image: "images/valentine.png" }
];

// Get Elements
const dayMessage = document.getElementById("day-message");
const dayImage = document.getElementById("day-image");
const questionSection = document.getElementById("question-section");
const timerDisplay = document.getElementById("timer");
const promiseBox = document.getElementById("promise"); // Get promise box element

const promiseContainer = document.getElementById("promise-container");
const notification = document.getElementById("notification");

// Handle Enter key press in promise box
promiseBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && !event.shiftKey) { // Prevents a new line on Enter
        event.preventDefault(); // Stop default Enter behavior

        let userPromise = promiseBox.value.trim();
        if (userPromise) {
            // Store the promise in localStorage
            let promises = JSON.parse(localStorage.getItem("promises")) || [];
            promises.push(userPromise);
            localStorage.setItem("promises", JSON.stringify(promises));

            // Show notification
            notification.style.display = "block";
            notification.innerText = "Promise saved!";

            // Hide the promise box after 2 seconds
            setTimeout(() => {
                promiseContainer.style.display = "none";
                notification.style.display = "none";
                promiseBox.value = ""; // Clear the textarea
            }, 2000);
        }
    }
});


// Get Current Date
const today = new Date().toISOString().split("T")[0];

// Start Date of Valentine's Week
const startDate = "2025-02-07";

// Find the Current Day
let currentDay = days.find(day => day.date === today);

// if (today < startDate) {
//     // Before Valentine's Week
//     dayMessage.innerText = "Get ready for Valentine’s Week!";
//     dayImage.src = "images/before-week.webp";

//     // Show countdown to Valentine's Week start
//     countdownToValentinesWeek();
// } 
// 

if (new Date(today) < new Date(startDate)) { // Convert both to Date objects
    dayMessage.innerText = "Get ready for Valentine’s Week!";
    dayImage.src = "images/before-week.webp";

    // Show countdown to Valentine's Week start
    countdownToValentinesWeek();
} else if (currentDay) {
    // If today matches a Valentine event, show the correct content
    
    dayMessage.innerText = `Happy ${currentDay.name}!`;
    dayImage.src = currentDay.image;

    // Show question for Propose Day only
    if (currentDay.name === "Propose Day") {
        questionSection.style.display = "block";
    }

    // Show the promise box only on Promise Day
    if (currentDay.name === "Promise Day") {
        promiseContainer.style.display = "block";
    } else {
        promiseContainer.style.display = "none";
    }
} else {
    // Default message for non-event days
    dayMessage.innerText = "Come back on the right day to continue!";
    dayImage.src = "images/Valentine.png";
}

// "Yes" or "No" Interaction on Propose Day
function proceed(isYes) {
    if (isYes) {
        alert("Yay! Let's continue the journey of love!");
        window.location.reload();
    } else {
        window.location.href = "gameover.html";
    }
}

// Countdown Timer to Valentine's Week Start
function countdownToValentinesWeek() {
    const startDateTime = new Date("2025-02-07T00:00:00").getTime();
    let interval = setInterval(() => {
        let now = new Date().getTime();
        let timeLeft = startDateTime - now;

        if (timeLeft <= 0) {
            clearInterval(interval);
            window.location.reload(); // Reload when countdown finishes
        } else {
            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            timerDisplay.innerText = `Valentine’s Week starts in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
}
