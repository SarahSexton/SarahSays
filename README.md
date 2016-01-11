
# NodeMash Challenge
 Create a Node app from scratch, or clone an existing Node repo.

## Deploy a Node web app on Azure!

Did you know Node apps can be hosted on [Microsoft Azure](http://azure.microsoft.com)? Microsoft Azure is about much more than just Windows and .NET.

Microsoft Azure offers a wide array of creation, continuous deployment, and management capabilities through the [Azure Management Portal](http://manage.windowsazure.com), the cross-platform command-line interface, or the PowerShell cmdlets.

## The Challenge
* Create a Node app from scratch or clone an existing Node repo ( including this one! ) 
* Run the app locally to confirm it's working
* Modify with your own changes
* Deploy the Node app to Azure
* That's it! You've completed the challenge. Show your Node app to a Microsoft booth member and collect your prize! Limited availability.

## Prerequisites

*To complete this challenge, you'll need:* 
* [A Microsoft Azure account](http://azure.microsoft.com)
 * Sign up with an email that ends in Hotmail, Live, or Outlook for a free trial, or get a free $100 Azure pass from the Microsoft booth. That is $100 in free hosting!
* A code editor
 * We use [Visual Studio Code](https://code.visualstudio.com/): it's a free, cross-platform editor ideal for modern web development and great for Node debugging. You can also use Sublime Text, Vim, Notepad++ or any editor of choice.
* [Node.js](https://nodejs.org/en/) runtime and tools installed
* [GitHub.com](http://github.com) account created
* [Git](http://git-scm.com/) version control and tools (Git Bash) installed 
* Windows, Mac, or Linux OS

## Steps
These steps describe how to get started running Node on Azure web apps.

This is NodeMash, so we'll be using Node.js (of course!) with the Express web framework and Socket.io to send messages in a real-time chat room. You will create a web app from Azure, set up deployment via local Git or GitHub, then you will run the application locally, make changes, commit, and push them to Azure. We'll show how to do this from Windows, Mac, or Linux. 

### Step 1: Create a Web App in Azure

The first step in creating your app is to create a web app via the [Azure.com Portal](http://azure.microsoft.com). Azure Web Apps support Python, .NET, Java, PHP, and Node.js. 

1. Log into the Azure Portal using your Microsoft Account (this is anything that ends in Hotmail, Live, Outlook, or signs you in to Skype, Xbox LIVE, OneDrive, or Windows Phone) and click the NEW button in the bottom left corner. 
 * If you see the “No subscriptions found” page, you can either:
   - Sign up for a free trial using the Sign up for Windows Azure link
    - Go get a free $100 Azure pass from the Microsoft booth.

2. Click Web App > Custom Create. Configure the new Node app by creating a new App Service Plan, but no database is necessary. Your app name will be your sub-domain and will need to be unique. 

3. We recommend setting Region to Central US. Do not publish from source control just yet.

4. Click the Create checkmark to complete your app.

5. Once your Web App has finished loading, click its URL to show your website. (Alternatively, click its name > Dashboard > URL). Your web app has been successfully created! Sweet. Now that we have a site, let's put something in it.

### Step 2: Clone the NodeMashMS repo and run locally

Our goal here is to create a very simple website. You have a few options, but the simplest one is to simply fork the GitHub and clone locally:

1. Fork this repo: https://github.com/SarahSexton/NodeMash
2. Clone the forked repository locally (**'git clone https://github.com/'YOUR_USERNAME'/NodeMash.git'**) && cd into the directory
3. Install the dependancies (**npm install** )
4. Run the application locally (**node app.js**)
5. Visit [http://localhost:3000/](http://localhost:3000/) on any web browser

#### Let's pause and take a look at the app structure:
(Type "dir" or "ls" to list the elements found in the folder.)
- index.html
- app.js
- package.json
- README.md

#### Files needed for Azure
It's a very basic Node app. The following files are needed to deploy your Node app to Azure:

* **package.json** - External packages needed by this application. The Azure environment will use this file to **'npm install'** the packages listed in this file. 

### Step 3: Modify with your own changes

1. Open 'package.json' in your code editor and modify the YOUR_INFO description with your information.
 
2. After you've saved and tested your changes, commit them to your computer's local Git repository and then push to your master
   - **git add .**
   - **git commit -am "Added my name as an author"**
   - **git push origin master**
 

### Step 4: Deploy the Web App to Azure

Going back to the Azure Portal, we can now push our code to the cloud. There are many ways to deploy code to Azure, but for now, we'll focus on using Git.

1. Navigate to your web app in the portal by clicking the tile on your portal's home screen or by finding it under Browse All > Web App. Once on your web app's page, click "Dashboard." Underneath the Quick Glance section, look for the words, **"Set up deployment from source control."** Choose  GitHub.
 * Authenticate with your Github credentials and choose your NodeMash project. 
   - Notice that you can select branch configuration, if you want to use this for dev or staging. Azure will listen for changes on this repo and kick off a deployment any time a commit is pushed.
   - You'll see that Azure figured out that this is a Node project, detected which Node runtime to use, and installed a virtual enviroment. The Node Package manager installed Express and Socket.io from package.json, collected static files, etc.

3. **You will need to enable or turn on Web Sockets from the "Configure" tab of the Azure Portal.**
 
## Congrats! You've just deployed your app to Azure!

####Show your Node app to a Microsoft booth member, we'll check your Unique URL.azurewebsites.net address, and you can claim your prize!!

You can find additional resources and information about Azure deployments [here](http://blogs.msdn.com/b/sarahsays/archive/2015/08/31/building-your-first-node-js-app-and-publishing-to-azure.aspx). 

If you would like some help creating your site, or are looking for ideas, come by the Microsoft booth, or shoot us a tweet: 

Sarah Sexton [@Saelia](https://twitter.com/Saelia)
| Heather Shapiro [@microheather](https://twitter.com/microheather)
| Brian Sherwin [@bsherwin](https://twitter.com/bsherwin)
| Rachel Weil [@partytimeHXLNT](https://twitter.com/partytimeHXLNT)