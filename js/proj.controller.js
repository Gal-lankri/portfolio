'use strict'
console.log('Starting up')

$(document).ready(initPage)

function initPage() {
  renderProjs()
}

function renderProjs() {
  var projs = getProjects()
  var strHtml = ''
  projs.map((proj) => {
    strHtml += `<div id="${proj.id}" class="col-lg-3 col-md-6 col-sm-6 portfolio-item">
        <a  class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
        <div class="portfolio-hover">
        <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
        </div>
        </div>
        <img class="img-fluid" src="img/${proj.id}.png" alt="">
        </a>
        <div class="portfolio-caption">
        <h4>${proj.name}</h4>
        <p class="text-muted">${proj.labels.join(', ')}</p>
        </div>
        </div> `
  })
  $('.portfolio-grid').html(strHtml)
  $('.portfolio-item').click(onOpenModal)
}

function onOpenModal() {
  const proj = getProjectById(this.id)
  console.log(proj)
  $('.modal-body h2').text(proj.id)
  $('.item-intro').text(proj.title)
  $('.date').text('Date: ' + getYearAndMonth(proj.publishedAt))
  $('.img-fluid p').text(proj.desc)
  $('.d-block').attr('src', 'img/' + proj.id + '.png')
  $('.proj-link').attr('href', proj.url)
}
