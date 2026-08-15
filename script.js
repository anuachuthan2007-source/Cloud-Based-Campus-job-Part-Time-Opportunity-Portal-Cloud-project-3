import {
    auth,
    db,
    signInWithEmailAndPassword,
    signOut,
    collection,
    addDoc,
    getDocs,
    serverTimestamp
} from "./firebase.js";


window.login = async function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        await signInWithEmailAndPassword(auth, email, password);

        alert("Login successful!");
        window.location.href = "dashboard.html";

    } catch (error) {
        alert("Login failed: " + error.message);
    }
};


window.logout = async function() {
    try {
        await signOut(auth);

        alert("Logged out successfully!");
        window.location.href = "index.html";

    } catch (error) {
        alert("Logout failed: " + error.message);
    }
};


window.applyJob = async function(jobName) {

    try {

        const user = auth.currentUser;

        if (!user) {
            alert("Please login first.");
            window.location.href = "index.html";
            return;
        }

        await addDoc(collection(db, "applications"), {
            jobName: jobName,
            email: user.email,
            status: "Under Review",
            appliedAt: serverTimestamp()
        });

        alert("Application submitted successfully for " + jobName + "!");

        window.location.href = "applications.html";

    } catch (error) {

        alert("Application failed: " + error.message);

    }
};


window.searchJobs = function() {

    const search = document
        .getElementById("searchJob")
        .value
        .toLowerCase();

    const jobs = document.querySelectorAll(".job-card");

    jobs.forEach(function(job) {

        const text = job.innerText.toLowerCase();

        if (text.includes(search)) {
            job.style.display = "flex";
        } else {
            job.style.display = "none";
        }

    });
};