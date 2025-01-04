const loadingSpinner = `
<div class="d-flex justify-content-center align-items-center bg-light" style="
    height: 100vh;
    width: 100vw;
    position: absolute;
    display: block;
" id="Lpdp">
  <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
`;

$("body").append(loadingSpinner);
$(document).ready(function () {   
    console.log("selesai");
    setTimeout(() => {
        $("#Lpdp").remove() 
    }, 500);
});

if (!sessionStorage.getItem("onshot")) {
    console.log("onshot ga ada");
    const compe = [$("head").html(), $("nav").html(), $("footer").html()];
    sessionStorage.setItem("onshot", JSON.stringify(compe));
} else {
    console.log("onshot ada");
    const storedContent = JSON.parse(sessionStorage.getItem("onshot"));
    $("head").html(storedContent[0]);
    $("nav").html(storedContent[1]);
    $("footer").html(storedContent[2]);
}

console.log(sessionStorage.getItem("onshot"));





