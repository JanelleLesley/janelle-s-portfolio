const nav = document.querySelector('#navBar');
let topOfNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);

let previousRandomNumber1;
let previousRandomNumber2;
let previousRandomNumber3;
let previousRandomNumber4;
let previousRandomNumber5;

function displayImages() {

    let homeImagesArray = [
        'home-images/pic1.jpg',
        'home-images/pic2.jpg',
        'home-images/pic3.jpg',
        'home-images/pic4.jpg',
        'home-images/pic5.jpg',
        'home-images/pic6.jpg',
        'home-images/pic7.jpg',
        'home-images/pic8.jpg',
        'home-images/pic9.jpg',
        'home-images/pic10.jpg',
        'home-images/pic11.jpg',
        'home-images/pic12.jpg',
        'home-images/pic13.jpg',
        'home-images/pic14.jpg',
        'home-images/pic15.jpg',
        'home-images/pic16.jpg',
        'home-images/pic17.jpg',
        'home-images/pic18.jpg',
        'home-images/pic19.jpg',
        'home-images/pic20.jpg',
        'home-images/pic21.jpg',
        'home-images/pic22.jpg',
        'home-images/pic23.jpg',
        'home-images/pic24.jpg',
        'home-images/pic25.jpg',
        'home-images/pic26.jpg',
        'home-images/pic27.jpg',
        'home-images/pic28.jpg',
        'home-images/pic29.jpg',
        'home-images/pic30.jpg',
        'home-images/pic31.jpg',
        'home-images/pic32.jpg',
        'home-images/pic33.jpg',
        'home-images/pic34.jpg'
    ];

    let aboutImagesArray = [
        "about-images/pic1.jpg",
        "about-images/pic2.jpg",
        "about-images/pic3.jpg",
        "about-images/pic4.jpg",
        "about-images/pic5.jpg",
        "about-images/pic6.jpg",
        "about-images/pic7.jpg",
        "about-images/pic8.jpg",
        "about-images/pic9.jpg",
        "about-images/pic10.jpg",
        "about-images/pic11.jpg",
        "about-images/pic12.jpg",
        "about-images/pic13.jpg",
        "about-images/pic14.jpg",
        "about-images/pic15.jpg",
        "about-images/pic16.jpg",
        "about-images/pic17.jpg",
        "about-images/pic18.jpg",
        "about-images/pic19.jpg",
        "about-images/pic20.jpg",
        "about-images/pic21.jpg",
        "about-images/pic22.jpg",
        "about-images/pic23.jpg",
        "about-images/pic24.jpg",
        "about-images/pic25.jpg",
        "about-images/pic26.jpg",
        "about-images/pic27.jpg",
        "about-images/pic28.jpg",
        "about-images/pic29.jpg",
        "about-images/pic30.jpg"
    ];

    let projectsImagesArray = [
        "projects-images/pic1.jpg",
        "projects-images/pic2.jpg",
        "projects-images/pic3.jpg",
        "projects-images/pic4.jpg",
        "projects-images/pic5.jpg",
        "projects-images/pic6.jpg",
        "projects-images/pic7.jpg",
        "projects-images/pic8.jpg",
        "projects-images/pic9.jpg",
        "projects-images/pic10.jpg",
        "projects-images/pic11.jpg",
        "projects-images/pic12.jpg",
        "projects-images/pic13.jpg",
        "projects-images/pic14.jpg",
        "projects-images/pic15.jpg",
        "projects-images/pic16.jpg",
        "projects-images/pic17.jpg",
        "projects-images/pic18.jpg",
        "projects-images/pic19.jpg",
        "projects-images/pic20.jpg",
        "projects-images/pic21.jpg",
        "projects-images/pic22.jpg",
        "projects-images/pic23.jpg",
        "projects-images/pic24.jpg",
        "projects-images/pic25.jpg",
        "projects-images/pic26.jpg",
        "projects-images/pic27.jpg",
        "projects-images/pic28.jpg",
        "projects-images/pic29.jpg",
        "projects-images/pic30.jpg",
        "projects-images/pic31.jpg",
        "projects-images/pic32.jpg",
        "projects-images/pic33.jpg",
        "projects-images/pic34.jpg",
        "projects-images/pic35.jpg"
    ];

    let contactImagesArray = [
        "contact-images/pic1.jpg",
        "contact-images/pic2.jpg",
        "contact-images/pic3.jpg",
        "contact-images/pic4.jpg",
        "contact-images/pic5.jpg",
        "contact-images/pic6.jpg",
        "contact-images/pic7.jpg",
        "contact-images/pic8.jpg",
        "contact-images/pic9.jpg",
        "contact-images/pic10.jpg",
        "contact-images/pic11.jpg",
        "contact-images/pic12.jpg",
        "contact-images/pic13.jpg",
        "contact-images/pic14.jpg",
        "contact-images/pic15.jpg",
        "contact-images/pic16.jpg",
        "contact-images/pic17.jpg",
        "contact-images/pic18.jpg",
        "contact-images/pic19.jpg",
        "contact-images/pic20.jpg",
        "contact-images/pic21.jpg"
    ];

    let certsImagesArray = [
        "certs-images/pic1.jpg",
        "certs-images/pic2.jpg",
        "certs-images/pic3.jpg",
        "certs-images/pic4.jpg",
        "certs-images/pic5.jpg",
        "certs-images/pic6.jpg",
        "certs-images/pic7.jpg",
        "certs-images/pic8.jpg",
        "certs-images/pic9.jpg",
        "certs-images/pic10.jpg"
    ];

    let randomNumber;

    if (isHomePageClicked === true) {
        randomNumber = Math.floor(Math.random() * homeImagesArray.length);

    } while (randomNumber === previousRandomNumber1 || randomNumber === previousRandomNumber2 || randomNumber === previousRandomNumber3 ||
        randomNumber === previousRandomNumber4 || randomNumber === previousRandomNumber5) {
        randomNumber = Math.floor(Math.random() * homeImagesArray.length);
    }

    if (isHomePageClicked === true) {
        document.getElementById("images").style.backgroundImage = 'url(' + homeImagesArray[randomNumber] + ')';
    }


    if (isAboutPageClicked === true) {
        randomNumber = Math.floor(Math.random() * aboutImagesArray.length);

    } while (randomNumber === previousRandomNumber1 || randomNumber === previousRandomNumber2 || randomNumber === previousRandomNumber3 ||
        randomNumber === previousRandomNumber4 || randomNumber === previousRandomNumber5) {
        randomNumber = Math.floor(Math.random() * aboutImagesArray.length);
    }

    if (isAboutPageClicked === true) {
        document.getElementById("images").style.backgroundImage = 'url(' + aboutImagesArray[randomNumber] + ')';
    }

    if (isProjectsPageClicked === true) {
        randomNumber = Math.floor(Math.random() * projectsImagesArray.length);

    } while (randomNumber === previousRandomNumber1 || randomNumber === previousRandomNumber2 || randomNumber === previousRandomNumber3 ||
        randomNumber === previousRandomNumber4 || randomNumber === previousRandomNumber5) {
        randomNumber = Math.floor(Math.random() * projectsImagesArray.length);
    }

    if (isProjectsPageClicked === true) {
        document.getElementById("images").style.backgroundImage = 'url(' + projectsImagesArray[randomNumber] + ')';
    }

    if (isContactPageClicked === true) {
        randomNumber = Math.floor(Math.random() * contactImagesArray.length);

    } while (randomNumber === previousRandomNumber1 || randomNumber === previousRandomNumber2 || randomNumber === previousRandomNumber3 ||
        randomNumber === previousRandomNumber4 || randomNumber === previousRandomNumber5) {
        randomNumber = Math.floor(Math.random() * contactImagesArray.length);
    }

    if (isContactPageClicked === true) {
        document.getElementById("images").style.backgroundImage = 'url(' + contactImagesArray[randomNumber] + ')';
    }

    if (isCertsPageClicked === true) {
        randomNumber = Math.floor(Math.random() * certsImagesArray.length);

    } while (randomNumber === previousRandomNumber1 || randomNumber === previousRandomNumber2 || randomNumber === previousRandomNumber3 ||
        randomNumber === previousRandomNumber4 || randomNumber === previousRandomNumber5) {
        randomNumber = Math.floor(Math.random() * certsImagesArray.length);
    }

    if (isCertsPageClicked === true) {
        document.getElementById("images").style.backgroundImage = 'url(' + certsImagesArray[randomNumber] + ')';
    }

    previousRandomNumber5 = previousRandomNumber4;
    previousRandomNumber4 = previousRandomNumber3;
    previousRandomNumber3 = previousRandomNumber2;
    previousRandomNumber2 = previousRandomNumber1;
    previousRandomNumber1 = randomNumber;

}

setInterval(displayImages, 2000);

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

window.onload = function () {
    window.scrollTo(0, 0);
    homePageClicked();
    displayImages();
};

let isHomePageClicked = false;
let isAboutPageClicked = false;
let isProjectsPageClicked = false;
let isContactPageClicked = false;
let isCertsPageClicked = false;

function homePageClicked() {
    window.scrollTo(0, 0);
    document.getElementById("home").style.color = "white";
    document.getElementById("about").style.color = "black";
    document.getElementById("projects").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("certs").style.color = "black";
    document.getElementById('homePage').style.display = "block";
    document.getElementById("wrapper").style.background = "tan";
    document.getElementById("navBar").style.background = "tan";
    document.getElementById('aboutPage').style.display = "none";
    document.getElementById('projectsPage').style.display = "none";
    document.getElementById('contactPage').style.display = "none";
    document.getElementById('certsPage').style.display = "none";
    isHomePageClicked = true;
    isAboutPageClicked = false;
    isProjectsPageClicked = false;
    isContactPageClicked = false;
    isCertsPageClicked = false;
};

function aboutPageClicked() {
    window.scrollTo(0, 0);
    document.getElementById("about").style.color = "white";
    document.getElementById("home").style.color = "black";
    document.getElementById("projects").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("certs").style.color = "black";
    document.getElementById('aboutPage').style.display = "block";
    document.getElementById("wrapper").style.background = "#f88787";
    document.getElementById("navBar").style.background = "#f88787";
    document.getElementById('homePage').style.display = "none";
    document.getElementById('projectsPage').style.display = "none";
    document.getElementById('contactPage').style.display = "none";
    document.getElementById('certsPage').style.display = "none";
    isAboutPageClicked = true;
    isHomePageClicked = false;
    isProjectsPageClicked = false;
    isContactPageClicked = false;
    isCertsPageClicked = false;
};

function projectsPageClicked() {
    window.scrollTo(0, 0);
    document.getElementById("projects").style.color = "white";
    document.getElementById("home").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("certs").style.color = "black";
    document.getElementById('projectsPage').style.display = "block";
    document.getElementById("wrapper").style.background = "grey";
    document.getElementById("navBar").style.background = "grey";
    document.getElementById('homePage').style.display = "none";
    document.getElementById('aboutPage').style.display = "none";
    document.getElementById('contactPage').style.display = "none";
    document.getElementById('certsPage').style.display = "none";
    isProjectsPageClicked = true;
    isHomePageClicked = false;
    isAboutPageClicked = false;
    isContactPageClicked = false;
    isCertsPageClicked = false;
};

function contactPageClicked() {
    window.scrollTo(0, 0);
    document.getElementById("contact").style.color = "#993333";
    document.getElementById("home").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("projects").style.color = "black";
    // document.getElementById("certs").style.color = "black";
    document.getElementById('contactPage').style.display = "block";
    document.getElementById("navBar").style.background = "#009973";
    document.getElementById("wrapper").style.background = "#009973";
    document.getElementById('homePage').style.display = "none";
    document.getElementById('aboutPage').style.display = "none";
    document.getElementById('projectsPage').style.display = "none";
    document.getElementById('certsPage').style.display = "none";
    isContactPageClicked = true;
    isHomePageClicked = false;
    isAboutPageClicked = false;
    isProjectsPageClicked = false;
    isCertsPageClicked = false;
};

function certsPageClicked() {
    window.scrollTo(0, 0);
    document.getElementById("certs").style.color = "white";
    document.getElementById("home").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("projects").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById('certsPage').style.display = "block";
    document.getElementById("navBar").style.background = "#0a7ec2";
    document.getElementById("wrapper").style.background = "#0a7ec2";
    document.getElementById('homePage').style.display = "none";
    document.getElementById('aboutPage').style.display = "none";
    document.getElementById('projectsPage').style.display = "none";
    document.getElementById('contactPage').style.display = "none";
    isCertsPageClicked = true;
    isHomePageClicked = false;
    isAboutPageClicked = false;
    isProjectsPageClicked = false;
    isContactPageClicked = false;
};