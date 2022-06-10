async function getData(element) {
    return await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + element)
        .then(res => res.json()).then(data => data)
}

async function term() {
    var term = document.querySelector("#termvalue")
    var termdata = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?q=" + term.value)
        .then(res => res.json()).then(data => data)
    console.log(termdata)
    var section = document.createElement("section")
    var ul = document.createElement("ul")
    for (let i = 0; i < 20; i++) {
        // termdata.objectIDs.forEach(async function(element) {
        element = termdata.objectIDs[i]
        var li = document.createElement("li")
        li.classList.add("card")
        data2 = await getData(element)
        console.log(data2)
        var img = document.createElement("img")
        var p = document.createElement("p")
        img.src = data2.primaryImageSmall
        p.innerHTML = data2.title + "<br>" + " Department:" + data2.department
        li.appendChild(img)
        li.appendChild(p)
        ul.appendChild(li)
    }
    // });
    var terms = document.querySelector("#terms")
    if (terms.innerHTML == "") {
        terms.appendChild(ul)

    } else {
        terms.replaceChildren(ul)
    }
    // console.log(terms.innerHTML)
}

async function title() {
    var term = document.querySelector("#titlevalue")
    var termdata = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?q=" + term.value + "title=true")
        .then(res => res.json()).then(data => data)
    console.log(termdata)
    var ul = document.createElement("ul")
    for (let i = 0; i < 20; i++) {
        // termdata.objectIDs.forEach(async function(element) {
        element = termdata.objectIDs[i]
        var li = document.createElement("li")
        li.classList.add("card")
        data2 = await getData(element)
        console.log(data2)
        var img = document.createElement("img")
        var p = document.createElement("p")
        img.src = data2.primaryImageSmall
        p.innerHTML = data2.title + "<br>" + " Department:" + data2.department
        li.appendChild(img)
        li.appendChild(p)
        ul.appendChild(li)
    }
    // });
    var titles = document.querySelector("#titles")
    if (titles.innerHTML == "") {
        titles.appendChild(ul)

    } else {
        titles.replaceChildren(ul)
    }
}

// getData()

document.querySelector("#submitTerm")
    .addEventListener("click", term)

document.querySelector("#submitTitle")
    .addEventListener("click", title)