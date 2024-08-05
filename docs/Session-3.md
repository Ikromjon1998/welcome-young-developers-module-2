# 🌟 Session 3: Clickable Image Gallery! 🖼️

Welcome back, young coders! Today, we’re going to create a super cool clickable image gallery. Imagine having a gallery on your website where clicking on a thumbnail changes the main image. Let’s make this magic happen using some awesome online images!

## 🎯 **Learning Goals for Today**

By the end of this session, you will:
1. **Create a clickable image gallery** that changes the main image when a thumbnail is clicked.
2. **Learn how to use JavaScript to interact with HTML elements** and update the content dynamically.
3. **Add a fun and interactive feature** to your website that you can share with friends and family.

## 📖 **Introduction to Clickable Image Galleries**

### **What is a Clickable Image Gallery?**

A clickable image gallery is a part of a webpage where you can see a large main image and a set of smaller images called thumbnails. Clicking on a thumbnail will change the large image to show the one you clicked. This feature is great for showcasing multiple images in a clean and interactive way.

### **Key Concepts of Image Galleries**

- **Thumbnails**: Small images that you click on.
- **Main Image**: The large image that changes when you click on a thumbnail.
- **JavaScript Events**: Actions like clicks that trigger changes on your webpage.

## 🔍 **Exploring Clickable Image Galleries**

### **1. HTML Structure**

- **Explanation**: To set up your image gallery, you need HTML to define the main image and thumbnails. This HTML will include an `<img>` tag for the main image and several smaller `<img>` tags for the thumbnails.
- **Example**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Gallery</title>
    <style>
        /* Basic styling for the gallery */
        #main-image {
            width: 600px;
            height: 400px;
            border: 2px solid #ddd;
        }
        .thumbnail {
            width: 100px;
            height: 75px;
            margin: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Clickable Image Gallery</h1>
    <div>
        <img id="main-image" src="https://via.placeholder.com/600x400?text=Main+Image" alt="Main Image">
    </div>
    <div>
        <img class="thumbnail" src="https://via.placeholder.com/100x75?text=Thumb+1" alt="Thumbnail 1">
        <img class="thumbnail" src="https://via.placeholder.com/100x75?text=Thumb+2" alt="Thumbnail 2">
        <img class="thumbnail" src="https://via.placeholder.com/100x75?text=Thumb+3" alt="Thumbnail 3">
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### **2. JavaScript to Change Images**

- **Explanation**: JavaScript will allow us to change the main image when a thumbnail is clicked. We’ll use event listeners to detect clicks and update the `src` attribute of the main image accordingly.
- **Example**:

```javascript
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;
        });
    });
});
```

## 💻 **Interactive Coding Activity: Create Your Own Clickable Gallery**

### **1. Set Up Your Coding Environment**

1. **Create a New Folder**: Name it `image-gallery-project`.
2. **Inside the Folder, Create Two Files**: `index.html` and `script.js`.
3. **Prepare Your Images**: You can use the following online image links for your thumbnails and main image.

### **2. Write Your HTML and JavaScript Code**

Follow these steps to build your clickable image gallery:

1. **Step 1**: Add the HTML code for the gallery to `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Gallery</title>
    <style>
        /* Basic styling for the gallery */
        #main-image {
            width: 600px;
            height: 400px;
            border: 2px solid #ddd;
        }
        .thumbnail {
            width: 100px;
            height: 75px;
            margin: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Clickable Image Gallery</h1>
    <div>
        <img id="main-image" src="https://via.placeholder.com/600x400?text=Main+Image" alt="Main Image">
    </div>
    <div>
        <img class="thumbnail" src="https://via.placeholder.com/100x75?text=Thumb+1" alt="Thumbnail 1">
        <img class="thumbnail" src="https://via.placeholder.com/100x75?text=Thumb+2" alt="Thumbnail 2">
        <img class="thumbnail" src="https://via.placeholder.com/100x75?text=Thumb+3" alt="Thumbnail 3">
    </div>
    <script src="script.js"></script>
</body>
</html>
```

2. **Step 2**: Add the JavaScript code to `script.js`:

```javascript
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;
        });
    });
});
```

3. **Save and Open Your File**:

    - Save your changes.
    - Open `index.html` in your web browser to see your clickable image gallery in action!

### **3. Experiment with Your Own Content**

- **Challenge**: Try adding more thumbnails and images to your gallery. Can you add new styles or effects when you click on the thumbnails? Perhaps change the size of the images or add a border effect?

## 📚 **Interactive Quiz**

Let’s test your knowledge with a fun quiz! Answer the following questions to see how much you’ve learned.

1. **What HTML tag is used to display the main image in the gallery?**
    - a) `<img>`
    - b) `<div>`
    - c) `<span>`

2. **What JavaScript method do we use to listen for a click event?**
    - a) `addEventListener()`
    - b) `removeEventListener()`
    - c) `createEvent()`

3. **In JavaScript, how do we change the source of an image?**
    - a) `mainImage.src = newSource;`
    - b) `mainImage.alt = newSource;`
    - c) `mainImage.style = newSource;`

### **Quiz Answers:**

1. **a) `<img>`** - The `<img>` tag is used to display images.
2. **a) `addEventListener()`** - This method is used to listen for events like clicks.
3. **a) `mainImage.src = newSource;`** - Changing the `src` attribute updates the displayed image.

## 🛠️ **Hands-On Project: Build Your Own Clickable Gallery**

In this project, you’ll create a clickable image gallery similar to what we’ve learned today.

### **Project Steps:**

1. **Create a NEW HTML File:** Name it `gallery.html`.
2. **Add Your Basic HTML Structure:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Gallery</title>
    <style>
        #main-image {
            width: 600px;
            height: 400px;
            border: 2px solid #ddd;
        }
        .thumbnail {
            width: 100px;
            height: 75px;
            margin: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>My Cool Gallery</h1>
    <div>
        <img id="main-image" src="https://via.placeholder.com/600x400?text=Main+Image" alt="Main Image">
    </div>
    <div>
        <img class="thumbnail" src="https://via.placeholder.com/100x75?text=Thumb+1" alt="Thumbnail 1">
        <img class="thumbnail" src="https://via.placeholder.com/100x75?text=Thumb+2" alt="Thumbnail 2">
        <img class="thumbnail" src="https://via.placeholder.com/100x75?text=Thumb+3" alt="Thumbnail 3">
    </div>


    <script src="gallery.js"></script>
</body>
</html>
```

3. **Create a NEW JavaScript File:** Name it `gallery.js`.
4. **Add Your JavaScript Code:**

```javascript
// gallery.js
document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;
        });
    });
});
```

5. **Save and Preview:** Open `gallery.html` in your browser to see your gallery!

6. **Optional Enhancement**: Try experimenting with CSS animations or transitions to make the image changes more visually appealing.

## ✨ **Wrap-Up and Homework**

You did an amazing job today! To reinforce what you've learned:

- **Homework:** Create your own clickable image gallery with at least five thumbnails. Try using different images and styles to make it unique.
- **Additional Practice:** Experiment with CSS styles and JavaScript effects to add more interactivity to your gallery.

## 🚀 **Fun Fact!**

Did you know that interactive galleries are used in online shopping sites to help users view different products? Now, you're part of the exciting world of web development!

Happy Coding! 💻
