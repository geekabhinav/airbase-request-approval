export const pluralize = (singular, plural, count) => {
    if (count === null || isNaN(count))
        return singular

    return count === 1 ? singular : plural
}

export const groupBy = (array, groupingKey) => {
    let groupedData = {}

    if(!array)
        return groupedData

    array.forEach((object) => {
        let keyName = object[groupingKey]
        if (!groupedData.hasOwnProperty(keyName))
            groupedData[keyName] = []

        groupedData[keyName].push(object)
    })
    return groupedData
}

export const titleCase = (str) => {
    return str.toLowerCase().split(' ').map((word) => {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}