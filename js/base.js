$(window).scroll(function () {
    $(".back-fade").css("opacity", 1 - $(window).scrollTop() / 250);
});


(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#js-grid-masonry-projects').cubeportfolio({
        filters: '#js-filters-masonry-projects',
        loadMore: '#js-loadMore-masonry-projects',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 35,
        gapVertical: 25,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 5,
        }, {
            width: 1100,
            cols: 4,
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2,
            options: {
                caption: '',
                gapHorizontal: 25,
                gapVertical: 10,
            }
        }],
        caption: 'zoom',
        displayType: 'fadeIn',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function(url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 30000
                })
                .done(function(result) {
                    t.updateSinglePage(result);
                })
                .fail(function() {
                    t.updateSinglePage('AJAX Error! Please refresh the page!');
                });
        },
    });
})(jQuery, window, document);


$('.enter_link').click(function () {
    $(this).parent('#splashscreen').slideUp(500);
});

if (!sessionStorage.isVisited) {
    sessionStorage.isVisited = 'true'
    $(this).parent('#splashscreen').slideUp(500);
  }

$(document).ready(function(){
    
    var getMax = function(){
        return $(document).height() - $(window).height();
    }
    
    var getValue = function(){
        return $(window).scrollTop();
    }
    
    if('max' in document.createElement('progress')){
        // Browser supports progress element
        var progressBar = $('progress');
        
        // Set the Max attr for the first time
        progressBar.attr({ max: getMax() });

        $(document).on('scroll', function(){
            // On scroll only Value attr needs to be calculated
            progressBar.attr({ value: getValue() });
        });
      
        $(window).resize(function(){
            // On resize, both Max/Value attr needs to be calculated
            progressBar.attr({ max: getMax(), value: getValue() });
        });   
    }
    else {
        var progressBar = $('.progress-bar'), 
            max = getMax(), 
            value, width;
        
        var getWidth = function(){
            // Calculate width in percentage
            value = getValue();            
            width = (value/max) * 100;
            width = width + '%';
            return width;
        }
        
        var setWidth = function(){
            progressBar.css({ width: getWidth() });
        }
        
        $(document).on('scroll', setWidth);
        $(window).on('resize', function(){
            // Need to reset the Max attr
            max = getMax();
            setWidth();
        });
    }
});















$(document).ready(function(){
  
  $('#flat').addClass("active");
  $('#progressBar').addClass('semantic');
    
  $('#flat').on('click', function(){
    $('#progressBar').removeClass().addClass('flat');
    $('a').removeClass();
    $(this).addClass('active');
    $(this).preventDefault();
  });

  $('#single').on('click', function(){
    $('#progressBar').removeClass().addClass('single');
    $('a').removeClass();    
    $(this).addClass('active');
    $(this).preventDefault();    
  });

  $('#multiple').on('click', function(){
    $('#progressBar').removeClass().addClass('multiple');
    $('a').removeClass();    
    $(this).addClass('active');
    $(this).preventDefault();    
  });

  $('#semantic').on('click', function(){
    $('#progressBar').removeClass().addClass('semantic');
    $('a').removeClass();    
    $(this).addClass('active');
    $(this).preventDefault();
    alert('hello');
  });

  $(document).on('scroll', function(){

      maxAttr = $('#progressBar').attr('max');
      valueAttr = $('#progressBar').attr('value');
      percentage = (valueAttr/maxAttr) * 100;
      
      if(percentage<49){
        document.styleSheets[0].addRule('.semantic', 'color: #fedd13');
        document.styleSheets[0].addRule('.semantic::-webkit-progress-value', 'background-color: #fedd13');
        document.styleSheets[0].addRule('.semantic::-moz-progress-bar', 'background-color: #fedd13');
      }
      else if(percentage<98){
        document.styleSheets[0].addRule('.semantic', 'color: #f08e1c');
        document.styleSheets[0].addRule('.semantic::-webkit-progress-value', 'background-color: #f08e1c');
        document.styleSheets[0].addRule('.semantic::-moz-progress-bar', 'background-color: #f08e1c');
      }
      else {
        document.styleSheets[0].addRule('.semantic', 'color: #4a575f');
        document.styleSheets[0].addRule('.semantic::-webkit-progress-value', 'background-color: #4a575f');
        document.styleSheets[0].addRule('.semantic::-moz-progress-bar', 'background-color: #4a575f');
      }      
  });
  
});