'use strict'
const gFirstProjects = [
  {
    id: 'touch-the-nums',
    name: 'touch-the-nums',
    title: 'You need to touch the nums fast as you can',
    url: 'https://gal-lankri.github.io/touch-the-nums/',
    labels: ['Table', ' CSS'],
  },
  {
    id: 'the-dice-game',
    name: 'the-dice-game',
    title: 'Roll the dice',
    url: 'https://gal-lankri.github.io/The-Dice-Game/',
    labels: ['Random nums', 'CSS'],
  },
  {
    id: 'book-shop',
    name: 'book-shop',
    title: 'Shop for books',
    url: 'https://gal-lankri.github.io/book-shop/',
    labels: ['Table', 'Jquery'],
  },
  {
    id: 'ball-bord',
    name: 'ball-bord',
    title: 'Be aware to the mines',
    url: 'https://gal-lankri.github.io/ball-bord/',
    labels: ['Table', 'CSS', 'JS'],
  },
]
var gProjects

_creatProjects()
function _creatProject(id, name, title, url, labels) {
  return {
    id,
    name,
    title,
    desc: makeLorem(30),
    url,
    publishedAt: Date.now(),
    labels,
  }
}

function _creatProjects() {
  var projects = []
  gFirstProjects.map((proj) => {
    projects.push(_creatProject(proj.id, proj.name, proj.title, proj.url, proj.labels))
  })
  gProjects = projects
}

function getProjects() {
  return gProjects
}

function getProjectById(projId) {
  return gProjects.find((proj) => projId === proj.id)
}

function getYearAndMonth(date) {
  var newTime = new Date(date).toString().split(' ')
  return newTime[1] + ' ' + newTime[3]
}

console.log(gProjects)
