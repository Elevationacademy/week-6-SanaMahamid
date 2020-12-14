const C = require('./code')
const Code = C.Code
const PM = C.PictureManager
const AM = C.ArrayManipulator
const Exercises = C.Exercises
const code = new Code()

test("add should return sum of a + b", () => {
    let sum = code.add(1, 2)
    expect(sum).toBe(3)
})

test("calculateHyp should return the square root of the sum of the a,b squares", () => {
    let hyp = code.calculateHyp(3, 4)
    expect(hyp).toBe(5)
})

test("should remove all BUGs from list of code", () => {
    let c = ["great code", "good code", "BUG", "async await awesome code", "BUG", "BUG", "general code"]
    let bugFreeCode = code.removeBugs(c)
    expect(bugFreeCode).not.toContain("BUG")
    expect(bugFreeCode).toContain("good code") 
})

test("should keep only HIGH priority tasks", () => {
    let tasks = [{ text: "dummy", priority: "HIGH" }, { text: "dummy", priority: "LOW" }]
    let filteredTasks = code.clearLowPriority(tasks)

    filteredTasks.forEach(t => {
        expect(t.priority).toBe("HIGH")
    })
})

test("addPicture should add a picture URL to the pictureURLs array", function () {
    ﻿  //sanity 
      ﻿const picManager = new PM()
      expect(picManager.pictureURLs.length).toBe(0)
      
      picManager.addPicture("some_url")
      expect(picManager.pictureURLs.length).toBe(1)           //test
      expect(picManager.pictureURLs).toContain("some_url")    //double check 
    })

    test("removePicture should receive a picture URL and remove it from the pictureURLs array", function () {
        //sanity
        const picManager = new PM()
        expect(picManager.pictureURLs.length).toBe(0)
    
        picManager.addPicture("some_url")
        picManager.addPicture("some_url2")
        picManager.addPicture("some_url3")
    
        picManager.removePicture("some_url2")
        expect(picManager.pictureURLs.length).toBe(2)
        expect(picManager.pictureURLs.length).not.toContain("some_url2") //here this isn't double checking, this is necessary
    })

    
test("should convert two arrays of equal length to a single object with key-values from the arrays", () => {
    let arrayManipulator = new AM()
    let x = ["food", "item", "location"]
    let y = ["cherry", "lightbulb", "Tazmania"]

    let result = arrayManipulator.manipulate(x, y)

    expect(result).toEqual({
        food: "cherry",
        item: "lightbulb",
        location: "Tazmania"
    })
})

test("should return a message when array lengths don't match", () => {
    let arrayManipulator = new AM()
    let x = ["food", "item", "location"]
    let y = ["cherry", "lightbulb"]

    let result = arrayManipulator.manipulate(x, y)

    expect(result).toEqual({ error: "Array lengths don't match" })
})

test("should return true if n is even, false otherwise", () => {
    let ex = new Exercises()
    let n1 = 10
    let n2 = 9
    let res = [ex.isEven(n1), ex.isEven(n2)]
    expect(res).toEqual([true,false])
})

