/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    let reversedImage = []
    for (let i = 0; i < image.length; i++) {
        reversedImage[i] = image[i].reverse()
    }

    for (let i = 0; i < reversedImage.length; i++) {
        for (let pixle = 0; pixle < reversedImage[0].length; pixle++) {
            reversedImage[i][pixle] = reversedImage[i][pixle] === 1 ? 0 : 1
        }
    }
    
    return reversedImage
};