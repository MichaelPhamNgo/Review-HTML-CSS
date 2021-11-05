# Review-CSS

### CSS Syntax
```css
selector {
    property : value,
    property : value
}
```


### CSS Selectors

| Selector          |   Example                 |  Description                                          |
|-------------------|---------------------------|-------------------------------------------------------|
| #id               |   #theId                  | Selects the element with id = "theId"                 |
| .class            |   .theClasses             | Selects all elements with class = "theClasses"        |
| element.classes   |   p.theClasses            | Selects only p tags with class = "theClasses"         |
| *                 |   *                       | Selects all elements                                  |
| element           |   p                       | Selects all p tags                                    |
| element,element,..|   div,p                   | Selects all div tags and all p tags                   |  


### CSS Declaration and Priority
There are three ways of inserting a style sheet:
1. External CSS
```html
<!DOCTYPE html>
<html>
    <head>
        <!-- External CSS -->
        <link rel="stylesheet" href="style.css"/>
    </head>
    <body>        
    </body>
</html>
```
2. Internal CSS
```html
<!DOCTYPE html>
<html>
    <head>
        <!-- Internal CSS -->
        <style>

        </style>
    </head>
    <body>
    </body>
</html>
```
3. Inline CSS
```html
<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <!-- Inline CSS -->
        <p style="color:red">This is an inline CSS</p>
    </body>
</html>
```

The priority level of selectors

| Order |   CSS Selectors           |
|-------|---------------------------|
| 1     |   !important              |
| 2     |   Inside style attribute  |
| 3     |   Combined selectors      |
| 4     |   ID                      |
| 5     |   class                   |
| 6     |   attribute               |
| 7     |   element                 |
| 8     |   *                       |

- \* vs element
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            * {
                color : red
            }

            p {
                color : red
            }
        </style>
    </head>
    <body>
        <p>Examples for priority level of selectors</p>
    </body>
</html>
```
<style>
    * {
        color : red
    }

    p {
        color : red
    }
</style>
<p>Examples for priority level of selectors</p>



### BEM

### CSS functions

### CSS font and text

### CSS padding, margin, and border

### CSS Shadow

### CSS Pseudo Classes

### CSS Pseudo Element

### CSS list and table

### CSS Background

### CSS overflow and float

### CSS position and display

### CSS Animation

### CSS Flexbox

### CSS Grid

### Components in Website
#### Header

#### Footer

#### Navigation

#### Left



