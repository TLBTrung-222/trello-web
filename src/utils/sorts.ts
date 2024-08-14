// Use for sorting columns base on columnOrderIds and cards base on cardOrderIds

export const mapOrder = <T extends object, K extends keyof T>(array: T[], orderArray: T[K][], key: K): T[] => {
    if (!array || !orderArray || !key) return array

    const orderMapping: { [key: string]: number } = {}
    orderArray.forEach((value, index) => {
        orderMapping[String(value)] = index
    })

    return array.sort((a, b) => {
        const indexA = orderMapping[String(a[key])] ?? Infinity
        const indexB = orderMapping[String(b[key])] ?? Infinity
        return indexA - indexB
    })
}

// Example
// const originalItems = [
//     { id: 'id-1', name: 'One' },
//     { id: 'id-2', name: 'Two' },
//     { id: 'id-3', name: 'Three' },
//     { id: 'id-4', name: 'Four' },
//     { id: 'id-5', name: 'Five' }
// ]
// const itemOrderIds = ['id-5', 'id-4', 'id-2', 'id-3', 'id-1']
// const key = 'id'
// const sortedArray = mapOrder(originalItems, itemOrderIds, key)

// Result
// [{
//     "id": "id-5",
//     "name": "Five"
//   }, {
//     "id": "id-4",
//     "name": "Four"
//   }, {
//     "id": "id-2",
//     "name": "Two"
//   }, {
//     "id": "id-3",
//     "name": "Three"
//   }, {
//     "id": "id-1",
//     "name": "One"
//   }]
