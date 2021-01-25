
const items = require('./ClotheSwipe-ASOS-DATA.json')

const type = []
for (let i of items) {
    const index = i.desc.indexOf('by')
    const word = i.desc.slice(0, index - 1)
    const bool = type.includes(word)
    !bool && type.push(word)
}

const colors = []
for (let i of items) {
    const bool = colors.includes(i.color)
    if (!bool)
        colors.push(i.color)
}

const brands = []
for (let i of items) {
    const bool = brands.includes(i.brand)
    if (!bool)
        brands.push(i.brand)
}
function getType(i) {
    const index = i.desc.indexOf('by')
    const word = i.desc.slice(0, index - 1)
    return word
}
function mapItems () {
    const mapedItems = items.map(i => ({
        title: i.title,
        description: i.desc,
        color: i.color,
        type: getType(i),
        brand: i.brand,
        gender: i.gender,
        price: i.retailPrice,
        image: i.images[0].src,
        url: i.url
    }))
    return mapedItems;
}
// console.log(brands);
// console.log(JSON.stringify(type));
// console.log(colors);
// console.log(mapItems())
module.exports = mapItems