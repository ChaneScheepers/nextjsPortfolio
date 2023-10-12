//Import the Link API to support client-side navigation
import Link from "next/link";
import Layout from "../components/MyLayout";

/*
Projects - this page needs to contain your best work. You will want to
show off diversity as much as possible here. You should have at least
one project deployed to Heroku which you should be able to link to
here (your previous Capstone Project). It may be a good idea to add
some of your work to Github and link to those repositories from here.
*/

export default () => (
  <Layout>
    <div>
      <hr></hr>
      <h2>Projects</h2>

      <div>
        <div className="containerProj">
          <div className="Proj">
            <Link href="https://github.com/ChaneScheepers/My-first-ever-website/tree/main/Task%206">
              My first website (Using JS, HTML and CSS)
            </Link>
          </div>
          <div className="Proj">
            <Link href="https://github.com/ChaneScheepers/ToDoApp/tree/main">
              ToDo App (Using express, JWT and React)
            </Link>

          </div>
          <div className="Proj">
            <Link href="https://github.com/ChaneScheepers/AppleAPI">
              ItunesAPI Search Website
            </Link>

          </div>
          <div className="Proj">
            <Link href="https://github.com/ChaneScheepers/NextJS-Portfolio">
              My Profile (Using Next.js) TBC
            </Link>

          </div>

          {/* <h6>My first ever website (Using JS, HTML and CSS)</h6>
          <h6>ToDo App (Using express, JWT and React)</h6>
          <h6>ItunesAPI Search Website</h6>
          <h6>My Profile (Using Next.js)</h6> */}
        </div>
      </div>

      <style jsx>
        {`
          .containerProj {
            display: flex;
            padding: 10px;
          }
          .Proj {
            color: white;
            border: 1.5px solid rgb(255, 175, 163);
            background-color: rgb(255, 175, 163);
            border-radius: 10px;
            margin: 15px;
            padding: 25px;
            width: 25%;
            height: 500px;
            text-align: center;
            display: grid;
          }

          .Proj:hover {
            background-color: rgb(255, 160, 150);
            color: black;
          }
          img {
            width: 90%;
          }
          h2 {
            color: pink;
            background-color: #fde5ec;
            padding: 10px;
            border-radius: 10px;
            text-align: center;
          }
        `}
      </style>
    </div>
  </Layout>
);
