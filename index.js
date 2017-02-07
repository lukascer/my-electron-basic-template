//electron basic template - main process
const {ipcMain, BrowserWindow} = require("electron");
let {app} = require("electron");


function createWindow() {
   
   //create app window 
   app = new BrowserWindow({width: 800,
    height: 600,
    transparent: false,
    frame: true});
   
   //load renderer
   app.loadURL('file://'+__dirname+'./app/index.html');
   
   //open devTools
   app.webContents.openDevTools();

//   app.on("closed", () => {
//      app.BrowserWindow = null;  
//   });   
}


//---------------------------------- edit ----------------------------------//

//create app
app.on("ready", createWindow);

//recieve synchronous message "exitApp" -> close app
ipcMain.on('exitApp', (event) => {
     app.close(); 
});




