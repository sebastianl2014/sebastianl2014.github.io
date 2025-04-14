$(window).on("load", function() {
    $(".loader").delay(1000).fadeOut("slow");
});

$(document).ready(function() {
    $("#currentYear").text((new Date()).getFullYear());
    attachTopScroller(".scrollUp");

    // Initialize the carousel
    $('#myCarousel').carousel({
        interval: 2000 // Adjust the interval time in milliseconds as you need
    });
});

function attachTopScroller (elementId){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(elementId).fadeIn();
        } else {
            $(elementId).fadeOut();
        }
    });

    // Scroll To Top Animation
    $(elementId).click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
};

const url = 'img/CV_Draft4_2024_Colour-33.pdf';

// Load the PDF
pdfjsLib.getDocument(url).promise.then(function (pdfDoc_) {
    pdfDoc = pdfDoc_;
    renderPage(pageNum);
});

let pageNum = 1;
let pdfDoc = null;

function renderPage(num) {
    pdfDoc.getPage(num).then(function (page) {
        const canvas = document.getElementById('pdfCanvas');
        const ctx = canvas.getContext('2d');
        const viewport = page.getViewport({ scale: 1.5 }); // Adjust scale for zoom
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        page.render({
            canvasContext: ctx,
            viewport: viewport
        });
    });
}
