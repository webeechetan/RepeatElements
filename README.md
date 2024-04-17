
# RepeatElements.js

RepeatElements.js is a lightweight JavaScript library that enables the cloning of HTML elements a specified number of times using a `data-repeat` attribute.

## Features

- Easy to use: Just add a `data-repeat` attribute to your HTML elements.
- ID Management: Cloned elements with IDs get a unique suffix to maintain valid HTML.
- Recursive cloning: Nested elements with `data-repeat` are also cloned appropriately.

## Installation

Include RepeatElements.js in your project by adding the following script tag to your HTML:

```html
<script src="https://cdn.jsdelivr.net/gh/webeechetan/RepeatElements@1.0.0/RepeatElements.js"></script>
```

You can also download and host the JavaScript file yourself or use a CDN link if available.

## Usage

To use RepeatElements.js, add the `data-repeat` attribute to any HTML element that you want to clone. Set its value to the number of times you want the element to be repeated.

```html
<div id="uniqueElement" data-repeat="3">
    <p>Hello, world!</p>
</div>
```

After the page loads, RepeatElements.js will automatically clone the `div` element 2 more times, resulting in a total of 3 identical `div` elements.

## Example

Here's a complete example of how to use RepeatElements.js in your webpage:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Repeat Elements Example</title>
    <script src="path_to_your_js_folder/RepeatElements.js"></script>
</head>
<body>
    <div data-repeat="3">
        <p>Hello, world!</p>
    </div>
</body>
</html>
```

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## Licensing

The code in this project is licensed under MIT license. See the [LICENSE](LICENSE.md) file for more details.
