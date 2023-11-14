# React + Vite
___
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  

# Discription 
___
 ___"LearnLingo"___ is an application of a company that provides online language learning services. The main purpose of the application is to help users find and choose a suitable teacher for their educational needs. The layout is responsive, covering the range from 320px to 1440px, that is, the pages automatically adapt to different device screen sizes.
  
![LOGO](src/assets/images/bgrPicture-orange.png)

**The structure of the application consists of three pages:**

- ___Home page:___  On this page, users can familiarize themselves with the benefits of the company and go to the main page of the application.

- ___"Teachers" page:___ On this page, users will be able to view the list of teachers available for training. Users can filter teachers by the language of instruction, the level of knowledge of students, and the price per lesson hour. By default, only 4 cards with teachers are displayed on the page, but users can load more cards by clicking on the "Load more" button. Users can also add teachers to their "favorites" by clicking on the button with the "heart" icon. If the user is not authorized, they will be shown a warning that this feature is only available to authorized users.

___Private page "Favorites":___ This page is only available to authorized users. On it, they can view all the teachers they have added to their "favorites". The page is styled similarly to the "Teachers" page.

[Link to Figma mockup](https://www.figma.com/file/dewf5jVviSTuWMMyU3d8Mc/%D0%9F%D0%B5%D1%82-%D0%BF%D1%80%D0%BE%D1%94%D0%BA%D1%82-%D0%B4%D0%BB%D1%8F-%D0%9A%D0%A6?type=design&node-id=0-1&mode=design&t=jCmjSs9PeOjObYSc-0)

[Link to TT](https://docs.google.com/document/d/1ZB_MFgnnJj7t7OXtv5hESSwY6xRgVoACZKzgZczWc3Y/edit)


# Technical performance
___

 + ## Authorization: 
    The app will use Firebase for registration, login, current user data, and logout.

 + ## Forms: 
    Forms for registration/authorization and validation of their fields are implemented using formik & yup libraries.

 + ## Database:
    Firebase Realtime Database is used to store information about teachers. Information about instructors includes their first name, last name, languages, skill levels, rating, reviews, hourly price, number of classes, avatar URL, class information, terms and experience.  

 + ## Modal windows:
    Windows for registration, login, reservation and warning about unauthorized access are implemented as modal windows. They will close when you click on the "cross", on a darkened background or when you press the Esc key. 

 + ## Functionality of selected:
    Authorized users will be able to add and remove teachers to/from their "favorites". The heart-button will change color when a teacher is added or removed. Information about the selected teacher will remain even if the user refreshes the page.  

 + ## Functionality "Read more":
    Users will be able to reveal additional information about the teacher and view feedback from his students using the "Read more" button.  

 + ## Routing:
    The React Router library will be used to navigate between pages.   

 + ## Filtration:
    The ability to filter teachers by teaching language, level of knowledge and price per hour will be added. 