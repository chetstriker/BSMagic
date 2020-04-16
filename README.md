
<h1 align="center">
  <br>
  <a href="https://github.com/chetstriker/BSMagic"><img src="https://raw.githubusercontent.com/chetstriker/BSMagic/master/img/BSMagicLogo.png" alt="BSMagic" width="800"></a>
</h1>

<h4 align="center">A pure JavaScript library to convert BootStrap tabs to a step by step wizard or alter look and animations with one line of code</h4>

<p align="center">
  <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=T9WVEG49JGE98&source=url">
    <img src="https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&amp;style=flat">
  </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#codepen-examples">Codepen Examples</a> •
  <a href="#license">License</a>
</p>

![screenshot](https://raw.githubusercontent.com/chetstriker/BSMagic/master/img/Demo2.gif)

![screenshot](https://raw.githubusercontent.com/chetstriker/BSMagic/master/img/Demo1.gif)

## Key Features

* Pure JavaScript
* Change the Look and functionality of BootStrap tabs with one line of code

## How To Use

After adding the JS and CSS files, just add a BSMagic command somewhere in your JavaScript section that points to the id of the tab(s) you want to alter. You can alter the looks by changing parameters

```bash
<script>
	BSMagic({"id":  "myTab"});
</script>
```




## Download

just add these two lines to your website!
```bash
/****  Here is the vanilla JavaScript  ****/
<script src="https://cdn.jsdelivr.net/gh/chetstriker/BSMagic/release/BSMagic-min.js"></script>

/****  Here is the CSS Style sheet  ****/
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/chetstriker/BSMagic/release/BSMagic-min.css">
```

## Codepen Examples

[Demo 1](https://codepen.io/chetstriker/details/rNOejNz)
</br>
[Demo 2](https://codepen.io/chetstriker/pen/zYvqNdj)

## BSMagic Parameters

// The id name of the tab you want to alter and is the only required field
**id** (**Required**) </br>

// If you want navigation buttons added</br>
**addButtons** = true; `//Default is true`

// The shape of the current nav tab ("square", "oval", "circle")</br>
**navShape** = "square"; `//Default is "square"`

// The background color of the current nav tab ("blue", "white", "clear")</br>
**navBackground** = "blue";`//Default is "blue"`

// The font color of the current nav tab ("blue", "white")</br>
**navFontColor** = "white"; `//Default is "white"`

// If you want to add underline border to current nav tab (true, false)</br>
**navUnderline** = false; `//Default is false`

// If you want to add a shadow to the current nav tab (true, false)</br>
**navShadow** = false; `//Default is false`

// What text you want on the "next tab" button, if addButtons is enabled</br>
**nextText** = "NEXT"; `//Default is "NEXT"`

// What text you want on the "previous tab" button, if addButtons is enabled</br>
**prevText** = "PREVIOUS"; `//Default is "PREVIOUS"`

// Adjust offset amount of pixels you want to move from the top position of the current nav tab</br>
**navOffsetX** = 0; `//Default is 0`

// Adjust offset amount of pixels you want to move from the left position of the current nav tab</br>
**navOffsetY** = 0; `//Default is 0`

// If isWizard is enabled, the tabs will disappear as with the bottom bottons and leave two small button in the center on both sides to move through steps, like a step-by-step wizard</br>
**isWizard** = false; `//Default is false`

// If you would like to use your own CSS name to draw the current nab tab</br>
**customNavTabs** = "BSNavTab"; `//Default is BSNavTab`

// Adjust the pixels from left position of the text inside the current nav tab as opposed to the location of the current nav tab itself.</br>
**navTabTextOffetX** = 0; `//Default is 0`

// Adjust the pixels from top position of the text inside the current nav tab as opposed to the location of the current nav tab itself.</br>
**navTabTextOffetY** = 0; `//Default is 0`

## License

MIT

---

> [Jason Stover](http://www.southernvermontsoftware.com) &nbsp;&middot;&nbsp;


