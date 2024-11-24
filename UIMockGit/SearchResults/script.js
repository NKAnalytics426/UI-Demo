document.addEventListener("DOMContentLoaded", () => {
    const reportElement = document.getElementById("ai-report");
    const askButton = document.getElementById("ask-button");
    const questionInput = document.getElementById("coach-question");
    const responseDiv = document.getElementById("qa-response");
    const reportContainer = document.querySelector(".report");

    const initialReportText = "This is a generative AI report analyzing the opposing team's tendencies based on prior games. Key observations include a high reliance on passing plays in third and long scenarios and frequent use of play-action on first downs.";
    const qaResponses = {
        "What is the tendency on first down?": "The tendency on first down is 60% pass, 30% run, and 10% play action.",
        "What defensive formation is most effective?": "Zone defense has been most effective, limiting gains to 3 yards per play on average.",
        // Add more preloaded Q&A pairs
    };

    // Typing effect
    function typeText(element, text, callback) {
        let index = 0;
        const interval = setInterval(() => {
            element.textContent += text[index];
            index++;
            if (index === text.length) {
                clearInterval(interval);
                if (callback) callback();
            }
        }, 20);
    }

    // Initialize report with typing effect
    function loadReport() {
        reportElement.textContent = ""; // Clear initial content
        typeText(reportElement, initialReportText);
    }

    // Append new text with typing effect
    function appendResponse(response) {
        const newParagraph = document.createElement("p");
        reportContainer.appendChild(newParagraph);
        typeText(newParagraph, response, () => {
            // Scroll to the bottom after typing
            reportContainer.scrollTop = reportContainer.scrollHeight;
        });
    }

    // Event listener for the Ask button
    askButton.addEventListener("click", () => {
        const question = questionInput.value.trim();
        if (question) {
            const response = qaResponses[question] || "I don't have an answer to that question.";
            appendResponse(response); // Append the response
            questionInput.value = ""; // Clear input
        }
    });

    // Load the initial report on page load
    loadReport();
});


document.addEventListener("DOMContentLoaded", () => {
    // Typing effect for the AI report
    const reportElement = document.getElementById("ai-report");
    const askButton = document.getElementById("ask-button");
    const questionInput = document.getElementById("coach-question");
    const responseDiv = document.getElementById("qa-response");
    const reportContainer = document.querySelector(".report");

    const initialReportText = "This is a generative AI report analyzing the opposing team's tendencies based on prior games. Key observations include a high reliance on passing plays in third and long scenarios and frequent use of play-action on first downs.";
    const qaResponses = {
        "What is the tendency on first down?": "The tendency on first down is 60% pass, 30% run, and 10% play action.",
        "What defensive formation is most effective?": "Zone defense has been most effective, limiting gains to 3 yards per play on average.",
        // Add more preloaded Q&A pairs here
    };

    function typeText(element, text, callback) {
        let index = 0;
        const interval = setInterval(() => {
            element.textContent += text[index];
            index++;
            if (index === text.length) {
                clearInterval(interval);
                if (callback) callback();
            }
        }, 20);
    }

    function loadReport() {
        reportElement.textContent = ""; // Clear initial content
        typeText(reportElement, initialReportText);
    }

    function appendResponse(response) {
        const newParagraph = document.createElement("p");
        reportContainer.appendChild(newParagraph);
        typeText(newParagraph, response, () => {
            reportContainer.scrollTop = reportContainer.scrollHeight; // Scroll to the bottom
        });
    }

    askButton.addEventListener("click", () => {
        const question = questionInput.value.trim();
        if (question) {
            const response = qaResponses[question] || "I don't have an answer to that question.";
            appendResponse(response); // Append the response
            questionInput.value = ""; // Clear input
        }
    });

    loadReport(); // Initialize the report on page load

    // Table and Video Initialization
    const video = document.getElementById("videoPlayer"); // Match ID with HTML
    const videoSources = ["commanders_play_1.mov", "boxesNoLabels.mov", "Corner_Zoomed.mp4", "lineman_without_lines.mov"];
    let currentVideoIndex = 0;

    const tableBody = document.querySelector("#play-table tbody");

    // Random data generator arrays
    const opponents = ["Patriots", "Cowboys", "Eagles", "Chiefs", "Packers", "49ers", "Bears"];
    const oFormations = ["Shotgun", "I-Form", "Singleback", "Pistol", "Jumbo"];
    const dFormations = ["3-4", "4-3", "Nickel", "Dime", "Quarter"];
    const stunts = ["None", "Twist", "Loop", "Crash"];
    const blitzes = ["None", "Safety", "Corner", "Linebacker"];
    const coverages = ["Man", "Zone", "Tampa 2", "Cover 3", "Cover 1"];
    const routeConcepts = ["Slant", "Cross", "Vertical", "Out", "Screen"];
    const blockingSchemes = ["Zone", "Gap", "Power", "Counter"];
    const protectionSchemes = ["Slide", "Man", "Half Slide", "Full Slide"];
    const tempos = ["Huddle", "No Huddle", "Fast", "Normal"];
    const splits = ["Wide", "Narrow", "Stack", "Bunch"];
    const endAligns = ["Inside", "Outside", "Wide"];
    const motions = ["Jet", "Orbit", "None", "Shift"];

    function generateRandomRow(playNumber) {
        return `
            <tr>
                <td>${playNumber}</td>
                <td>${opponents[Math.floor(Math.random() * opponents.length)]}</td>
                <td>${Math.floor(Math.random() * 81) - 40}</td>
                <td>${Math.floor(Math.random() * 10) + 1}</td>
                <td>${oFormations[Math.floor(Math.random() * oFormations.length)]}</td>
                <td>${dFormations[Math.floor(Math.random() * dFormations.length)]}</td>
                <td>${stunts[Math.floor(Math.random() * stunts.length)]}</td>
                <td>${blitzes[Math.floor(Math.random() * blitzes.length)]}</td>
                <td>${coverages[Math.floor(Math.random() * coverages.length)]}</td>
                <td>${routeConcepts[Math.floor(Math.random() * routeConcepts.length)]}</td>
                <td>${blockingSchemes[Math.floor(Math.random() * blockingSchemes.length)]}</td>
                <td>${protectionSchemes[Math.floor(Math.random() * protectionSchemes.length)]}</td>
                <td>${tempos[Math.floor(Math.random() * tempos.length)]}</td>
                <td>${splits[Math.floor(Math.random() * splits.length)]}</td>
                <td>${splits[Math.floor(Math.random() * splits.length)]}</td>
                <td>${splits[Math.floor(Math.random() * splits.length)]}</td>
                <td>${splits[Math.floor(Math.random() * splits.length)]}</td>
                <td>${splits[Math.floor(Math.random() * splits.length)]}</td>
                <td>${endAligns[Math.floor(Math.random() * endAligns.length)]}</td>
                <td>${motions[Math.floor(Math.random() * motions.length)]}</td>
            </tr>
        `;
    }

    function populateTable() {
        let rows = "";
        for (let i = 1; i <= 50; i++) {
            rows += generateRandomRow(i);
        }
        tableBody.innerHTML = rows;
    }

    populateTable(); // Populate table on page load
});
