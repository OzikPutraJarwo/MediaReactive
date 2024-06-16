# MediaReactive.js
MediaReactive is a JavaScript library that allows you to run functions or display/hide HTML elements based on specific media conditions. Create responsive and adaptive JavaScript code that adjusts to various devices and screen sizes.

## Key Features:

- **Media Detection**: MediaReactive can detect the user's media type (mobile, tablet, desktop, etc.) and adapt the JavaScript behavior accordingly.
- **HTML Element Control**: You can use custom attributes on HTML elements or call JavaScript functions to show or hide elements based on the media.
- **Custom Media Definitions**: In addition to the built-in media types like mobile, tablet, and desktop, you can also define your own custom media conditions through JavaScript.
- **Function Flexibility**: MediaReactive allows you to execute specific JavaScript functions only on the media you specify.
- **Easy Integration**: This library is designed to be easily integrated into your web projects, whether using script tags or module systems.

### Media

- phone    :   max-width: 639px
- tablet   :   min-width: 640px and max-width: 1023px
- desktop  :   min-width: 1024px

## Examples

### HTML

You can use `data-media` attribute in HTML, for example:

```HTML
<div>This thing show in phone <span data-media="phone">✅</span></div>

<div>This thing show in tablet <span data-media="tablet">✅</span></div>

<div>This thing show in desktop <span data-media="desktop">✅</span></div>

<div>This thing show in phone and desktop <span data-media="phone desktop">✅</span></div>
```

### Javascript

```JS
MediaReactive.addResizeCallback(() => {
  if (MediaReactive.isMedia('phone')) {
    console.log('This runs on phone');
  }
  if (MediaReactive.isMedia('tablet')) {
    console.log('This runs on tablet');
  }
  if (MediaReactive.isMedia('desktop')) {
    console.log('This runs on desktop');
  }
  if (MediaReactive.isMedia('tablet desktop')) {
    console.log('This runs on tablet and desktop');
  }
});
```

## Installation

Install using CDN (Githack):

```HTML
<script src="https://raw.githack.com/OzikPutraJarwo/MediaReactive.js/main/mediareactive.js"></script>
```

Or the minified version:

```HTML
<script src="https://raw.githack.com/OzikPutraJarwo/MediaReactive.js/main/mediareactive.min.js"></script>
```

## Upcoming

- Custom media, both for HTML and JS
- More fixed media

## License

[MIT](http://www.opensource.org/licenses/mit-license.php)
