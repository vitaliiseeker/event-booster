export function addEventImages(arr) {
    const minSize = 480;
    const maxSize = 1280;

    if (document.body.offsetWidth <= minSize) {
        return arr.find(item => item.url.includes("ARTIST_PAGE_3_2"))
    }

    if (document.body.offsetWidth > minSize && document.body.offsetWidth < maxSize) {
        return arr.find(item => item.url.includes("RETINA_PORTRAIT_3_2"))
    }

    if (document.body.offsetWidth >= maxSize) {
        return arr.find(item => item.url.includes("TABLET_LANDSCAPE_16_9"))
    }
}