
const About = () => {
  

  return(

    <div>
      <h2>About</h2>
      <p className='aboutText'>This app was inspired by many years of bartending weddings. 
        Having guests come from all over the country with thier own recipes from back home, there is no one catch all book.  Tired of making sticky notes or adding to a rolodex that just gets wet, I wanted it to go mobile.  This also allows bartenders working other weddings or events to help add to the list of current drinks.</p>
      <br/>
      <h4>Special Thanks to:</h4>
        <ul className='aboutList'>
          <li><a href='https://stackoverflow.com/questions/58068866/how-to-align-bullet-points-in-an-unordered-list-in-the-center-using-inline-css/'>Align unordered list</a></li>
          <li><a href='https://stackoverflow.com/questions/63926848/react-show-message-if-no-image-in-api-using-ternary-operator-getting-parsing-e'>Do not show extra blank ingredients</a></li>
          <li><a href='https://newbedev.com/react-router-external-link'>Extrnal link in new page</a></li>
          <li><a href='https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/'>Keeping Footer in place</a></li>
          <li><a href='https://stackoverflow.com/questions/41080481/in-reactjs-how-to-invoke-link-click-via-button-press'>Use a Link as a Button</a></li>
          <li><a href='https://commons.wikimedia.org/wiki/Main_Page'>Drink Photos</a></li>
          <li><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort'>Sorting Array of Objects</a></li>
        </ul>
    </div>
  )
}

export default About;

