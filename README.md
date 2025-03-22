# Youtube-Clone
This an Youtube Clone using react
### Creating React-Project

```
npm install vite@latest
```
They ask for project name give it <br>
Select React <br>
Select JavaScript <br>

### After Cloning Project

```
npm install
```
By Doing this you get all node_modules which are in .gitignore

### To run project
```
npm run dev
```
# Day 1 Progress(Created SideBar,Navbar and VideoCards)

### 1.Creating Navbar

Here is the Folder for [Navbar](src/Components/Navbar)

##### I Main things in Nav (Nav-left,Nav-middle,Nav-right)
i) nav-left <br>
    &nbsp;&nbsp;&nbsp;&nbsp;In this added <b>Menu Icon,Logo,</b>
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;Code in the provided link both .jsx and .css file
    <br>
    <br>
ii) nav-middle <br>
    &nbsp;&nbsp;&nbsp;&nbsp;In this added <b>Search Box</b>
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;Code in the provided link both .jsx and .css file
    <br>
    <br>
iii) nav-right <br>
    &nbsp;&nbsp;&nbsp;&nbsp;In this added <b>Icons(Upload,Notifiactions,More and Profile)</b>
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;Code in the provided link both .jsx and .css file
    <br><br>


  ![Screenshot from 2025-03-22 08-51-47](https://github.com/user-attachments/assets/88325fe9-6af7-4598-b2d2-cfccea026442)

<b>Key Point: </b>
Here the main thing is to know that padding is set to <b>10px 2%</b>
padding: 10px 2% ensures dynamic spacing across screen sizes.

### 2.Creating Sidebar

Here is the Folder for [Sidebar](src/Components/Sidebar)

i) Added all icons and text behind it<br>
ii) Added css as displaying flex and margins to look responsive<br>
iii) The main in css of sidebar is <b>overflow-y: auto; </b> which adds a vertical line upto your sidebar


![Screenshot from 2025-03-22 08-54-57](https://github.com/user-attachments/assets/ac95f37a-117d-4bb6-8e0b-eb205271ab53)

## Here Comes the Props in SideBar (Whenever user clicks on menu icon the side bar should minimize)

Here is the [App.jsx File](App.jsx)
<br> 
In this we have used the useState----> Which is of boolean type because it is easy to toggle
<br>
Props are sent in the Navbar(state variable)
<br> And in the Home(state method)
<br>
<br> ----> In Navbar whenever the menu icon is clicked it toggles between true and false ,if true the sidebar minimizes else maximizes
<br>
<br>
----> In Home we sent the usestate method,as variable changes then the feed(video cards) changes.
<br>
 ![Screenshot from 2025-03-22 09-09-33](https://github.com/user-attachments/assets/a90da0ef-fe22-4015-8661-9baf0ec699d1)

<b>Key Point: </b>Props and state (useState) control sidebar visibility, demonstrating React’s one-way data flow.

### 3.Creating VideoCards As Feeds
Here is the Folder for [Feed](src/Components/Feed)
<br>
The Feed component displays a grid of video cards that act as feeds, similar to the YouTube homepage.
<br>
Displays multiple video cards with:
<br>

o Thumbnail image

o Video title

o Channel name

o View count and upload time

Built with a responsive grid layout using CSS.

#### How it works:

o Thumbnail images are imported from the assets folder.

o Each card contains static content (can be made dynamic in future).

o Responsive design allows cards to adjust on different screen sizes.

![Screenshot from 2025-03-22 09-23-54](https://github.com/user-attachments/assets/a3dc5d35-59a2-4e69-9a42-6796877cfc55)

<b>Key Point: </b>
The Feed component dynamically renders multiple VideoCard components.
