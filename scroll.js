function TopScroll(element) {
    var scrollBar   = document.createElement('div');
    var box         = document.createElement('div');
    var txtNode     = document.createTextNode('\xA0');

    scrollBar.appendChild(box);
    box.appendChild(txtNode);

    scrollBar.style.overflow                = 'auto';
    scrollBar.style.overflowY               = 'hidden';
    scrollBar.firstChild.style.width        = element.scrollWidth + 'px';
    scrollBar.firstChild.style.paddingTop   = '1px';

    scrollBar.onscroll = function() {
        element.scrollLeft = scrollBar.scrollLeft;
    };
    element.onscroll = function() {
        scrollBar.scrollLeft = element.scrollLeft;
    };

    element.parentNode.insertBefore(scrollBar, element);
}

$(document).ready(function() {
    TopScroll(document.getElementById('scrollTop'));
});
