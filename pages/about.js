import Layout from "../components/MyLayout";

/*
About - this page will serve as an introduction to you as a developer –
your educational history, your work history, who you are and what
you’re passionate about.
*/

export default () => (
  <Layout>
    <div>
      <h1>...About me...</h1>

      <h2>Career history</h2>
      <hr></hr>
      <div className="job">
        HR Consultant
        <ul>
          <li>Jan 2017 - Oct 2019</li>
          <li>LabourNet</li>
        </ul>
        <p>
          I assisted companies with all aspects of Employment Equity and skills
          development compliance. This includes chairing meetings, drafting &
          implementing plans providing trainging and submitting reports. In my
          last year I started assisting with BEE compliance.{" "}
        </p>
      </div>
      <hr />
      <div className="job">
        HR Officer
        <ul>
          <li>Nov 2019 - March 2023</li>
          <li>Stone Three</li>
        </ul>
        <p>
          I assised the company with it's payroll and recruitment function. The
          role also included assisting the HR manager with any HR administartion
          or queries.
        </p>
      </div>

      <h2>Educational background</h2>
      <hr></hr>
      <div className="education">
        BCom Human Resources
        <ul>
          <li>The university of Potchefsroom (NWU - Pukke)</li>
          <li>Jan 2013 - Dec 2015</li>
        </ul>
      </div>
      <hr />
      <div className="education">
        BCom-Honnors Human Resources
        <ul>
          <li>The university of Potchefsroom (NWU - Pukke)</li>
          <li>Jan 2016 - Dec 2016</li>
        </ul>
      </div>
      <hr />
      <div className="education">
        Full-Stack Webdevelopment bootcamp
        <ul>
          <li>Stellenbosh University partnering with HyperionDev</li>
          <li>April 2023 - Sep 2023 (Currently still in progress)</li>
        </ul>
      </div>

      <h2>Hobbies</h2>
      <hr></hr>
      <ul>
        <li>Gaming</li>
        <li>Cooking</li>
        <li>Trying - gardening</li>
      </ul>

      <style jsx>
        {`
          h1 {
            text-align: center;
            padding: 50px;
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
