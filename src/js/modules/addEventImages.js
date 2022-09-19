export function addEventImages(arr) {
    console.log(document.body.offsetWidth);
    console.log(arr);
    // const test = images.find((item) => item.url.includes("RETINA_PORTRAIT_3_2"));
    if (document.body.offsetWidth <= 480) {
        console.log("mob");
    }

    if (document.body.offsetWidth >= 768 && document.body.offsetWidth < 1200) {
        console.log("tab");
    }

    if (document.body.offsetWidth >= 1200) {
        console.log("desc");
    }
}