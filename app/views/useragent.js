module.exports = ({ ip, os, browser }) => {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>UserAgent</title>
        <style>
          .wrapper {
            background-color: #282c34;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
            margin: 0;
            padding: 0;
          }
          
          .text {
            color: #61dafb;
            font-size: 45px;
            text-align: center;
          }
        </style>
      </head>
      <body class="wrapper">
        <p class="text">Your IP: ${ip}</p>
        <p class="text">Your OS: ${os}</p>
        <p class="text">Your Browser: ${browser}</p>
      </body>
    </html>
  `;
};
