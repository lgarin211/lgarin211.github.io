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
    
async function initproject() {
    console.log("initproject");
   
    let projectlist = [];
    let currentIndex = 0; // Save the current index for gradual display

    // Function to display projects
    function displayProjects() {
        let listmet = "";
        const maxIndex = Math.min(currentIndex + 10, projectlist.length); // Pastikan tidak melebihi jumlah proyek
        for (let i = currentIndex; i < maxIndex; i++) {
            const isopat = projectlist[i];
            if (isopat.description == null) {
                isopat.description = "No description";
            }else{
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
                                <img class="img-fluid" src="https://source.unsplash.com/random/300x300?${isopat.language + "&" + isopat.id}" alt="${isopat.language + "&" + "By Agustinus Pardamean Lumban Tobing"}" style="max-height: 30dvh;object-fit: cover;" />
                            </div>
                        </div>
                    </div>
                `;
                listmet += wav;
            }
        }
        document.getElementById("listpoinofproject").innerHTML += listmet; // Gunakan += untuk menambahkan ke konten yang sudah ada
        currentIndex += 10; // Perbarui indeks saat ini

        // Tampilkan atau sembunyikan tombol "show more"
        if (currentIndex < projectlist.length) {
            document.getElementById("showMoreBtn").style.display = 'block';
        } else {
            document.getElementById("showMoreBtn").style.display = 'none';
        }
        // Setelah proyek dimuat, atur jumlah total proyek
        document.getElementById("totalprojectdetect1").innerHTML = "("+projectlist.length+")";
        document.getElementById("totalprojectdetect2").innerHTML = "("+projectlist.length+")";
    }

    // Fungsi untuk memuat dan menampilkan proyek
    async function loadreq(rep) {
        if (sessionStorage.getItem("profile")) {
            projectlist = JSON.parse(sessionStorage.getItem("profile"));
            projectlist.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            displayProjects();
        } else {
            getGitHubProfile(rep)
                .then((profile) => {
                    projectlist = profile;
                    projectlist.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                    sessionStorage.setItem("profile", JSON.stringify(projectlist));
                    displayProjects();
                })
                .catch((err) => console.error("Terjadi kesalahan:", err));
        }
    }

    loadreq("https://api.github.com/users/lgarin211/repos?page=1&per_page=5000");

    // Inisialisasi tombol "show more"
    document.getElementById("showMoreBtn").addEventListener("click", displayProjects);
}

async function initprofile(params) {
    
    let datapoin = {
        twiter: "https://twitter.com/garinpoin",
        linkend: "https://www.linkedin.com/in/garinpoin/",
        github: "https://github.com/garinpoin",
        intagram: "https://www.instagram.com/garinpoin/",
        google: "https://www.google.com/",
        domain: "garinpoin.com",
        tahun: new Date().getFullYear(),
        profilename: "Agustinus Pardamean Lumban Tobing",
        subnile:
          "I am a technology expert focusing on development and growth in the digital world.",
        subnile2:
          "With experience in programming and expertise in various programming languages, I have helped various brands and businesses enhance their online presence. Through innovative approaches and measurable solutions, I aim to bring positive change in the digital world. Please follow my social media accounts for the latest updates and industry insights.",
        profilepict: "https://lgarin211.github.io/assets/img/profile-img.jpg",
        joblist: `Design &middot; Development &middot; Marketing`,
    };

    req = "https://api.github.com/users/lgarin211";

    if (sessionStorage.getItem("lgarin")) {
        console.log("sessiondata");
        const lgarin = JSON.parse(sessionStorage.getItem("lgarin"));
        datapoin = lgarin;
        console.log(datapoin);
        loadview();
    } else {
        getGitHubProfile(req).then((profile) => {
        console.log("basedata");
        console.log(profile.avatar_url);
        if (profile) {
            datapoin.profilepict = profile.avatar_url;
            datapoin.reqgithub = profile;
            sessionStorage.setItem("lgarin", JSON.stringify(datapoin));
            loadview();
        } else {
            console.log("User profile not found.");
        }
            }).catch((err) => console.error("An error occurred:", err));
    }

    function loadview() {
     console.log("loadview");
      document.getElementById("twiterpoin").href = datapoin.twiter;
      document.getElementById("linkendpoin").href = datapoin.linkend;
      document.getElementById("githubpoin").href = datapoin.github;
      document.getElementById("intagrampoin").href = datapoin.intagram;
      document.getElementById("googlepoin").href = datapoin.google;
      document.getElementById("poindomain").innerHTML = datapoin.domain;
      document.getElementById("pointahun").innerHTML = datapoin.tahun;
      document.getElementById("profilename").innerHTML = datapoin.profilename;
      document.getElementById("subnile").innerHTML = datapoin.subnile;
      document.getElementById("subnile2").innerHTML = datapoin.subnile2;
      document.getElementById("profilepict").src = datapoin.profilepict;
      document.getElementById("joblist").innerHTML = datapoin.joblist;
    }
}


async function iniresm() {

}


// 


