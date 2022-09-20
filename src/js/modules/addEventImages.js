export function addEventImages(arr) {

    if (document.body.offsetWidth <= 480) {
        return arr.find((item) => item.url.includes("ARTIST_PAGE_3_2"))
    }

    if (document.body.offsetWidth > 480 && document.body.offsetWidth < 1200) {
        return arr.find(item => item.url.includes("RETINA_PORTRAIT_3_2"))
    }

    if (document.body.offsetWidth >= 1200) {
        return arr.find(item => item.url.includes("TABLET_LANDSCAPE_16_9"))
    }
}