export const imgSrcDisplay =(imgsrc: string) => {
    if (imgsrc.startsWith('http')) {
        return imgsrc
    } else {
        return `/images/properties/${imgsrc}`
    }
}