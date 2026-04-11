$(function() {
  document.title = 'Documentation Jeedom'
  $('.sidenav').sidenav()
  setTimeout(function() {
    if ($('#slide-out').length > 0 && window.matchMedia("only screen and (max-width: 760px)").matches) {
      $('.sidenav').sidenav()
    }
  }, 100)
  setTimeout(function() {
    if ($('#slide-out').length > 0 && window.matchMedia("only screen and (max-width: 760px)").matches) {
      $('.sidenav').sidenav()
    }
  }, 250)
  setTimeout(function() {
    if ($('#slide-out').length > 0 && window.matchMedia("only screen and (max-width: 760px)").matches) {
      $('.sidenav').sidenav()
    }
  }, 500)
  $('.parallax').parallax()
  $('.collapsible').collapsible()

  $('#div_summary').empty().append('<ul></ul>')
  $('#div_content h1,h2,h3').each(function() {
    var id = encodeURIComponent($(this).text())
    $(this).attr('id', id)
    if ($(this).is('h1')) {
      $('#div_summary ul').append('<li><a href="#' + id + '" class="tocAnchor">' + $(this).text() + '</a></li>')
    }
    if ($(this).is('h2')) {
      $('#div_summary ul').append('<li><a href="#' + id + '" class="tocAnchor" style="margin-left:10px;">' + $(this).text() + '</a></li>')
    }
    if ($(this).is('h3')) {
      $('#div_summary ul').append('<li><a href="#' + id + '" class="tocAnchor" style="margin-left:20px;">' + $(this).text() + '</a></li>')
    }
    $(this).addClass('scrollspy')
  })
  $('.scrollspy').scrollSpy()

  $('.tocAnchor').off('click').on('click', function() {
    window.location.hash = $(this).attr('href')
  })

  setTimeout(function() {
    $('#div_summary').pushpin({ top: $('nav').height(), offset: $('nav').height() + 10 })
  }, 100)

  $('#div_content :not(td)>img').addClass('responsive-img')

  if (window.location.hash) {
    document.getElementById(window.location.hash.replace('#', '')).scrollIntoView()
    window.scrollBy(0, -200)
  }
})