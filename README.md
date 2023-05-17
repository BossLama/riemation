# Riemation
Riemation is a simple libary for webanimation written in javascript and css

## How to implement
Step 1 - Include logic-script in your html-file:
``` html
<script src="./PATH_TO_FILE/riemation_logic.js"></script>
```

Step 2 - Include stylesheet in your html-file:
``` html
<link rel="stylesheet" href="./PATH_TO_FILE/riemation_style.css">
```

Important: **Please replace "PATH_TO_FILE" with the path to the file**


## How to use
For onScroll-animations the element needs the class "animateable". After you have 
to add a data-attribute "animation-name". 

Optinal you can set: 
- "animation-duration"    -     DEFAULT:  1s 
- "animation-offset"      -     DEFAULT:  0s 

Example code:
```html
<div class="box animateable" data-animation-name="popup" data-animation-duration="2" data-animation-offset="0">
  Some text
</div>
```

## Default included animations
These following animations are included by default:
- fadeIn
- popup
- slideUp
- slideLeft
- slideRight

## Create own animations
For this you need to create a new .css file. After you have included this file import following
code in this file:
```css
.animateable.myAnimation{
    opacity: 0;
    animation-name: name_for_animation;
    animation-fill-mode: forwards;
}
```
("myAnimation" would be the name for the data-animation-name attribute)
Now insert following css code and adjust the values (Make sure the name
for the animation matches to .myAnimation animation-name attribute:
```css
@keyframes name_for_animation {
    0%{
        opacity: 0;
        scale: 0;
    }

    50%{
        opacity: 1;
        scale: 1.1;
    }

    100%{
        opacity: 1;
        scale: 1;
    }
}
```


