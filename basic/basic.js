// Like jQuery, but GPL fun time :D

// Function chaining
// Complete control over what functions are available

var $ = function(selector)
{
    this.elements = document.querySelectorAll(selector);
    return this;
}

$.prototype.addClass = function(class)
{

}

$.prototype.removeClass = function(class)
{

}

$.prototype.size = function()
{

}
