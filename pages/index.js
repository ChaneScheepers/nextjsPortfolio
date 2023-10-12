import Layout from "../components/MyLayout";

export default () => (
  <Layout>
    <hr></hr>
    <h1>Chane Scheepers</h1>

    <div className="imgdiv">
      <img src="/static/images/profile.jpg/" />
    </div>

    <p>
      HR practitioner moving over into the world of development. Born into a
      family of IT fans, I grew up playing compure and console games from a
      young age. I want to fineTune my skills so I can oneday start developing
      my own games.{" "}
    </p>
    <hr />

    <h2>My stack</h2>
    <div>
      <div className="containerStack">
        <h6>HTML</h6>
        <h6>JavaScript</h6>
        <h6>React</h6>
        <h6>Next.js</h6>
      </div>
      <div className="containerStack">
        <h6>MongoDB</h6>
        <h6>Mongoose</h6>
        <h6>Node.js</h6>
        <h6>Express</h6>
      </div>
    </div>
    <hr />
    <h2>Contact me or reach out?</h2>

    <div className="containerContact">
      <h6 className="contact">Cell: (+27) 061 420 2727</h6>
      <h6 className="contact">Email: chanescheep@mail.com</h6>
    </div>

    <style jsx>
      {`
        img {
			width: 25%;
			border-radius: 100%;
        }
        h1 {
         text-align: center;
        }
		.job{
			display: flex;
			align-items: center;

		}
		p{
			text-align: center;
			background-color:#fde5ec;
			border-radius: 10px;
		}
			h2 {
            color: pink;
            background-color: #fde5ec;
            padding: 10px;
            border-radius: 10px;
            text-align: center;
		}
		.imgdiv{
			text-align: center;
			padding-bottom: 50px;
		}
		h6 {
            color: white;
            border: 1.5px solid rgb(255, 175, 163);
            background-color: #FCBAAD;
            border-radius: 10px;
            margin: 15px;
            padding: 25px;
            width: 25%;
            text-align: center;
          }
          h6:hover {
            background-color: rgb(255, 160, 150);
            color: black;
          }
		  .containerStack{
			display: flex;
		  }
		  .containerContact{
			align-items: center;
			display: flex;
		  }

		  .contact{
			width: 80%;
            margin: 5px 5% ;
		  }

		}
      `}
    </style>
  </Layout>
);
