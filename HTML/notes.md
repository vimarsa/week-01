# HTML & CSS

* Hypertext Markup Language
* HTML does not compile
* HTML is always the one people come back to. It is the language that other frameworks and libraries convert to
* e.g. React converts its code to a HTML file

* HTML is for content only; try not to write code in there
* CSS : Cascading style sheets (for styling)

* HTML is created using tags <html> </html> <body> </body> <h1> </h1> <img> ##only image has no closing tags

* HTML has a skeleton structure:
    * <head> </head> is where we store information we do not want the user to see
    * <body> </body> is where we put the content we want to show off to the user and the public
        * <footer> </footer> is where we put legal information, site maps and other info that we feel is necessary to have but not always needed to be on show all the time; policies (privacy policy, terms of use, ...) to download are normally at the bottom

- To add comments to HTML, ctrl + /

* META data : information sent to the server and we comply with their regulations (information about the website)
* SEO : Search Engine Automisation; if SEO is not full, then check if there is META data


```html
<!DOCTYPE html>
<!-- rendering a html document on the server -->
<html lang="en">
<!-- document will render the English language -->
<head>
    <meta charset="UTF-8">
    <!-- characters on the English keyboard -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Internet explorer is treated as Edge now; allows the developer what version of compatibility they want to use -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- simply, the device has a width, the website will try and conform to that width; intial scale is the scale of pixels -->
    <meta name="description" content="Deloitte Bootcamp website">
    <title>Deloitte Bootcamp</title>
    <!-- the tab title -->
</head>
<body>
    <h1>Deloitte Bootcamp</h1>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus cum quos quia praesentium, ullam assumenda nobis? Deleniti itaque quo suscipit recusandae maxime nobis odio. Voluptatum, exercitationem consequuntur. Voluptas, eum architecto.</p>

    <h2>Another heading but smaller.</h2>
    <h3>Another heading but smaller.</h3>
    <h4>Another heading but smaller.</h4>
    <h5>Another heading but smaller.</h5>
    <h6>Another heading but smaller.</h6>

    <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png" alt="Mini Sherlock Holmes">
</body>
</html>
```


## CSS
* The two default css file names are:
    * style.css
    * main.css

* CSS uses a key : value, property : value format
```css
body {
    font-size: 100px;
}
```

* CSS is rendered in a last-read display format.
* CSS also has a closest to the tag rendering policy.

## Inline CSS
* We try not to use this one. 

## Internal CSS
* internal CSS is created inside the head tag, in a style tag
*

## External CSS



