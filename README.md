# Résumé 

### About
It is my simple resume made with HTML, CSS, JS using JSON data.   

HTML is used for making the initial block structure of the page with some simple data, CSS is used for giving some style to the page, and JS is used to create small UI components dynamically and fill the data into the page. All the data about details related to the user is stored as a JSON object in a JS file.

View it in action https://psyunix.com

### Getting Started

#### Using GitHub Pages
_( Make sure you have a GitHub account )_
1. Fork this repo by clicking the **Fork** button on the top-right corner.
2. Go to the forked repo on your profile (It opens by default).    
3. Edit the `data/profile.js` file using GitHub online editor and fill in your data.
4. Save above by doing `commit changes`.
5. Open the settings of repo and enable [github pages](https://pages.github.com/) choosing a source to `master` branch.  
6. Visit `https://<your GitHub username>.github.io/resume` in your browser.  
7. Additionally you can print/save the page as a PDF.  

#### Using local development
If you are a web developer like me and want to run this on your local system then follow the instructions mentioned below.  
The project needs to be hosted using any Web-Server like `apache`, `tomcat`, `http-server` or `SimpleHTTPServer` etc. I use `http-server` as it is very simple to use. Install `http-server` from [here](https://www.npmjs.com/package/http-server) (NodeJS and npm need to installed first to run it).

Additionally, if you are using [VSCode](https://code.visualstudio.com/download), the same can be done with [Live Server extention](https://www.freecodecamp.org/news/vscode-live-server-auto-refresh-browser/).

1. Clone the repo using git or download the zip of the project on your local system.
To clone
```bash
$ git clone https://github.com/imvpn22/resume.git
```

2. Go into the `resume` directory and run
```bash
$ http-server
```
which will show something like

```bash
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.1.21:8080
Hit CTRL-C to stop the server
```

3. Visit `http://localhost:8080` in the browser.   

4. Make changes in the `data/profile.js` file, and refresh the page in the browser. Additionally, you can make changes in the architecture and design of the page as well.

5. Save/Print the PDF page. Your Resume is ready.


### Support
If you like the project idea, make sure to give it a star. 
If you want to contribute, just give me a PR.



