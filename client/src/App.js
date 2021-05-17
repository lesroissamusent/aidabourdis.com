import './styles/App.scss'

function App() {

  return (
    <>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="#name">
            <img src="" alt="navbar-logo" width="112" height="28" />
          </a>
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
      <div className="container">

        <div className="aida" id="#aida">
          <p className="name">AIDA BOURDIS</p>
          <p className="name subtitle">JUNIOR SOFTWARE DEVELOPER</p>
        </div>

      <div className="tile is-parent intro">
        <div className="tile intro">
          <p>ABOUT</p>
          <p>While working as a stage manager in the theatre industry, I realised that I had to consider more possibilities for my future and made it my mission to explore new horizons. I knew that I needed to work in a field that walked the line between creative and technical while also doing work that I loved and felt passionate about. This is why when I found programming I wasted no time in enrolling in a software engineering bootcamp. My natural inclination towards problem solving and collaboration was what propelled my previous career and has helped me tremendously in my training. I’m looking forward to finding a full-stack position where I can continue to learn and grow in a team. I value working relationships built on friendship and mutual respect and hope to foster this wherever I go.</p>
        </div>
        <div className="tile intro">
          <p>GENERAL ASSEMBLY SOFTWARE ENGINEERING IMMERSIVE</p>
          <p>GA’s 12-week bootcamp teaches coding through an immersive program of daily stand-ups, lessons, labs and homework, and is supported by 4 projects where we learn to work in groups and on our own. The virtual classroom is created through the use of Zoom and Slack, which provides solid communication skills and prepares the students for remote working.</p>
        </div>
      </div>

        <div className="tile is-ancestor">
          <div className="tile is-parent projects">
            <div className="title">
              <p>The Potions Cupboard</p>
            </div>
            <div className="subtitle">
              <p>For my final project I chose to work on my own in order to consolidate my learning from the past 10 weeks and decided on a Harry Potter potions themed app. This project required a full-stack application with a Python Django back-end and a React front-end, multiple relationships and CRUD functionality. As my first experience of working solo with both a back-end and a front-end, this project taught me to work through errors without having the benefit of a second pair of eyes and become more self-reliant while problem solving.</p>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="title">
              <p>Doodler</p>
            </div>
            <div className="subtitle">
              <p>My group wanted to make an app with both creative and social aspects so we decided on a doodling website. This required a full-stack application with both internal and external APIs. My focus was on backend at the start and then CSS nearer the end, although we all worked on every aspect of the project. This project was also instrumental for learning Git and GitHub at a more complex level.</p>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="title">
              <p>Quizavision</p>
            </div>
            <div className="subtitle">
              <p>This project moved us from vanilla JavaScript to React and required the use of an external API. My teammate and I decided to create a tv and film quiz app, and learned the value of pair programming, especially when working on such a tight schedule.</p>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="title">
              <p>Frogger 2020</p>
            </div>
            <div className="subtitle">
              <p>This project required us to build a grid-based JavaScript game, and bring it to life with CSS. I chose Frogger because I thought it would be interesting to challenge myself with the different types of obstacles needed for this game. As the first of our four projects, Frogger was instrumental in teaching me how to follow through a project from wireframe to deployment.</p>
            </div>
          </div>
        </div>  

        <div className="tile is-parent">
          <p>Interests</p>
          <p>THEATRE</p>
          <p>One of the reasons I decided to become a stage manager was because I love the magic of theatre.</p>
          <p>DANCE</p>
          <p>I spent a year learning tango and hope to continue that journey when I can</p>
          <p>SCULPTING</p>
          <p>I love taking a bit of modelling clay and seeing what shapes appear on a lazy Sunday.</p>
        </div>

        <div className="tile is-parent">
          <p>Technologies</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

      </div>
    </>
  )
}

export default App;



{/* <div>
  <div className="title">
  </div>
  <div className="subtitle">
  </div>
</div> */}