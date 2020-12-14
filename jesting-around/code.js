class Code{
    add(a, b){
        return a + b
    }

    calculateHyp(a, b){
        return Math.sqrt(a*a + b*b)
    }

    removeBugs(code) {
        return code.filter(c => c != "BUG")
    }

    clearLowPriority(tasks){
        return tasks.filter(t => t.priority === "HIGH")
    }
    
}

class PictureManager {
    constructor() {
        this.pictureURLs = []
    }

    addPicture(picURL) {
        this.pictureURLs.push(picURL)
    }

    removePicture(picURL) {
        this.pictureURLs.splice(this.pictureURLs.indexOf(picURL), 1)
    }
}

class ArrayManipulator {
    manipulate(arr1, arr2) {
        if(arr1.length !== arr2.length){
            return { error: "Array lengths don't match" }
        }
        let obj = {}
        for (let i in arr1) {
            obj[arr1[i]] = arr2[i]
        }
        return obj
    }
}

class Exercises{
    //should return true if n is even, false otherwise
    isEven(n) {
        return n % 2 == 0 ? true : false
    }
    
}

module.exports = {Code, PictureManager, ArrayManipulator, Exercises}



