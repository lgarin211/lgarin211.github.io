async function getGitHubProfile(req) {
    try {
        const response = await fetch(`${req}`);
        if (!response.ok) {
            throw new Error("An error occurred while fetching data");
        }
        return await response.json();
    } catch (error) {
        console.error("An error occurred:", error.message);
        return null;
    }
}

function removeUnderscoreAndDash(str) {
    return str.replace(/[_-]/g, " ");
}

function formatLastActive(timestamp) {
    var date = new Date(timestamp);
    var day = date.getDate();
    var month = date.toLocaleString("default", {
        month: "long"
    });
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var formattedDate = day + " " + month + " " + year;
    return "since: " + formattedDate;
}

// Fungsi baru untuk menyortir berdasarkan jumlah bintang
function sortingByStars(repos) {
    return repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
}

async function initproject() {
    console.log("initproject");
   
    let projectlist = [];
    let currentIndex = 0;

    // Function to display projects
    function displayProjects() {
        let listmet = "";
        const maxIndex = Math.min(currentIndex + 10, projectlist.length);
        for (let i = currentIndex; i < maxIndex; i++) {
            const isopat = projectlist[i];
            if (isopat.description == null) {
                isopat.description = "No description";
            } else {
                let wav = `
                    <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
                        <div class="card-body p-0">
                            <div class="d-flex align-items-center row">
                                <div class="p-5 col-md-9">
                                    <h2 class="fw-bolder">Project ${removeUnderscoreAndDash(isopat.name)}</h2>
                                    <p>${isopat.description} this project is powered by
                                        <span class="fw-bold">${isopat.language}</span>
                                    </p>
                                    <small class="text-body-secondary">${formatLastActive(isopat.created_at)}</small>
                                    <br>
                                    <a href="${isopat.html_url}" targer="_blank" class="col-md-3 btn btn-primary show-detail">Show Detail</a>
                                </div>
                                <img class="img-fluid" src="https://source.unsplash.com/random/300x300?${isopat.language + "&" + isopat.id}" alt="${isopat.language + "&" + "By Agustinus Pardamean Lumban Tobing"}" style="max-height: 30dvh;object-fit: cover;display:none;" />
                            </div>
                        </div>
                    </div>
                `;
                listmet += wav;
            }
        }
        document.getElementById("listpoinofproject").innerHTML += listmet;
        currentIndex += 10;

        if (currentIndex < projectlist.length) {
            document.getElementById("showMoreBtn").style.display = 'block';
        } else {
            document.getElementById("showMoreBtn").style.display = 'none';
        }

        document.getElementById("totalprojectdetect1").innerHTML = "("+projectlist.length+")";
        document.getElementById("totalprojectdetect2").innerHTML = "("+projectlist.length+")";
    }

    async function loadreq(rep) {
        if (sessionStorage.getItem("profile")) {
            projectlist = JSON.parse(sessionStorage.getItem("profile"));
            projectlist = sortingByStars(projectlist); // Sort by stars
            displayProjects();
        } else {
            getGitHubProfile(rep)
                .then((profile) => {
                    projectlist = profile;
                    projectlist = sortingByStars(projectlist); // Sort by stars
                    sessionStorage.setItem("profile", JSON.stringify(projectlist));
                    displayProjects();
                })
                .catch((err) => console.error("Terjadi kesalahan:", err));
        }
    }

    loadreq("https://api.github.com/users/lgarin211/repos?page=1&per_page=100");

    document.getElementById("showMoreBtn").addEventListener("click", displayProjects);
}
