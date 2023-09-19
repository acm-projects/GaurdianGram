<div align="center">

# Hello! -AK
# How are you today?


# GuardianGram
Going on a date or out on the town for a big night? This app will allow you to do so safely-- with a twist. Enter the start and end time of your function/outing OR activate Al Fresco mode. This will allow the app to send you a notification at a randomized time during your outing to prompt you for a quick selfie and caption! This will be broadcasted to your safety network-- this is fun. The safe: once you are in Al Fresco mode, and feel unsafe or uncomfortable at any point, simply toggle The Big Button-- this will send out a Distress Alarm to your safety network. To deactivate your alarm, enter your pin.
</div>

## MVP 💪🏾
- User profile creation and authentication <br>
- Ability to add users to a safety network
- Location tracker for sending safety network real time location update after a Distress Alarm
- Notification system for a "GuardianGram" alert <br>
    - Shoot notification at randomized time according to user’s inputted start and end time
    - Shoot notification at randomized time while in Al Fresco mode
    - A user from the safety network is given a “key”, which allows them to send their friend a GaurdianGram at any point while they’re in Al Fresco mode
- Ability to toggle The Big Button to set off a Distress Alarm
- Notification system for the user's safety network if a Distress Alarm is set off
- Ability to post a GaurdianGram on the user's feed
- Ability to turn Al Fresco Mode on/off <br>
    - The safety network is sent a notification once a friend enters Al Fresco mode

## Stretch Goals 💖
- Toggle The Big Button a certain way to categorize the user's current safety level (ex. tap The Big Button once if danger level is low, twice if it is moderate, press and hold if it is high and the user seeks immediate help)
- Using a Shake Service: whenever the phone is physically shaked a certain way, GuardianGram will open up and immediately send out a distress alarm
- Further socialization features: quick reacts to GaurdianGram posts
- Activity Timeline feature: the user can upload their upcoming activities ahead of time and broadcast it on their safety network's feed

## Tech Stack 👩🏾‍💻
Figma 🎨
- What is Figma? <br>
      -  Figma is a collaborative UI design tool that aids in simulating the flow of mobile and web development projects!
- What are we using it for? <br>
      - We will be using it to design the aesthetics/user flow and wireframes of our project.
- Documentation: https://www.figma.com/
  
TailwindCSS 🌬️
- What is TailwindCSS? <br>
      - TailwindCSS is a user-friendly web development framework that provides a set of ready-to-use, customizable CSS utility classes, making it easier for beginners to style and design websites without writing extensive custom CSS code.
- What will we be using TailwindCSS for? <br>
      - We will be using TailwindCSS to easily style our pages!
- Documentation: https://v2.tailwindcss.com/docs

Next.js 💻
- What is Next.js? <br>
      - Next.js is a popular JavaScript framework that simplifies building web applications by providing features like server-side rendering, routing, and easy deployment, making it a great choice for beginners to create fast websites
- What will we be using Next.js for? <br>
      - We will be using Next.js as our main framework for development!
- Next.js Documentation: https://nextjs.org/docs

Prisma 🔺
- What is Prisma? <br>
      - Prisma is a modern database toolkit that simplifies database interactions for developers by providing a user-friendly way to work with databases in various programming languages, making it easier for beginners to manage and query their data efficiently!
- What will we be using Prisma for? <br>
      - We will use Prisma to define our database schema!
- Prisma Documentation: https://www.prisma.io/docs

Node.js ⏹️
- What is Node.js? <br>
      - Node.js is a JavaScript runtime environment that allows developers to execute JavaScript code on the server side, enabling them to build web applications and server-side programs, making it accessible for beginners to create server-based applications using a familiar language.
- What will be using Node.js for?
      - Honestly everything tbh 😭
- Node.js Documentation: https://nodejs.org/en/docs 

Express.js 🚂
- What is Express.js? <br>
      - Express.js is a lightweight and flexible web application framework for Node.js that simplifies the process of building web servers and APIs, making it accessible for beginners to create web applications with ease.
- What will we be using Express.js for?
      - We'll use Express to define the API endpoints of our databases!
- Express.js Documentation: https://expressjs.com/

MongoDB 🍃
- What is MongoDB? <br>
      - MongoDB is a NoSQL database that stores data in a flexible, JSON-like format, making it easy for beginners to work with and scale for various types of applications, particularly those that require flexible and fast data storage and retrieval.
- What will we be using MongoDB for?
      - We'll use MongoDB as a database connector to our Prisma schema!
- MongoDB Documentation: https://www.mongodb.com/docs/
  
Capacitor 🤖
- What is Capacitor? <br>
      - Capacitor is an open-source framework that enables web developers to build cross-platform mobile apps using web technologies like HTML, CSS, and JavaScript, making it accessible for beginners to create mobile applications that work on both iOS and Android devices with a single codebase.
- What will we be using Capacitor for?
      - We'll use Capacitor to translate our web Next.js project into a native IOS/Android codebase!
- Capacitor Documentation: https://capacitorjs.com/

## Useful Tutorials
[What is Git?](https://www.youtube.com/watch?v=2ReR1YJrNOM)\
[Git download](https://git-scm.com/)\
[Figma 101 by Shannon Carter](https://docs.google.com/presentation/d/1y7DccFYuEkj7Gxrk_ltuxhV9CLaQYzbXExcMCweqtPY/edit?usp=sharing)\
[Net Ninja Next.js Beginner Tutorial Series](https://youtu.be/A63UxsQsEbU)\
[JavaScript Mastery: Building a Beginner React App](https://www.youtube.com/watch?v=b9eMGE7QtTk)\
[NetNinja: TailwindCSS Series](https://youtu.be/bxmDnn7lrnk)\
[JavaScript Mastery: Building a Next.js App using TailwindCSS and Translating Design from a Figma Design](https://youtu.be/ugCN_gynFYw)\
[How Prisma and Next.js work in tandem](https://www.prisma.io/nextjs)\
[Prisma CRUD for Beginners](https://youtu.be/J8ObGtfy5n0)\
[Building a REST API with Express.js and Prisma](https://www.dawsoncodes.com/posts/5/building-a-rest-api-with-prisma-and-expressjs)\
[REST APIs with Prisma Docs](https://www.prisma.io/docs/concepts/overview/prisma-in-your-stack/rest)\

## GitHub Cheat Sheet ᛘ
General Use

| Command | Description |
| ------ | ------ |
| cd "GuardianGram" | Change directories over to our repository |
| git branch | Lists branches for you |
| git branch "branch name" | Makes new branch |
| git checkout "branch name" | Switch to branch |
| git checkout -b "branch name" | Same as 2 previous commands together |
| git add . | Finds all changed files |
| git commit -m "Testing123" | Commit with message |
| git push origin "branch" | Push to branch |
| git pull origin "branch" | Pull updates from a specific branch |


## Estimated Timeline
|   Week   |          Task(s)          |          Deliverables         |
| -------- | ------------------------- | ----------------------------- |
| 1        | Onboarding tasks          | Meet the team, set meeting dates and times, schedule a design day, finalize tech stack, start environment set-up. Solidify member roles, intro to Git, intro to Next.js/React.js/Javascript |
| 2        | Wireframes and research| Finish up wireframes, practice apps with chosen tech stacks, practice git and github, final env. set-up, finalize app design, create user authentication schemas |
| 3        | Coding app screens and backend logic | Frontend: 30% of app pages, Backend: authentication, build a dummy database to practice updating real time info, intro to TailwindCSS, define functioning schema + create CRUD API endpoints|
| 4        | Coding app screens and backend logic | Frontend: 70% of app pages, Backend: start incorporating database with frontend code |
| 5        | Coding app screens and backend logic | Frontend: 100% of app screens, Backend: continue incorporating database with frontend code |
| 6        | Frontend touch ups and backend integration | Frontend and backend should be working together to inegrate funcitonalities to create a functioning MVP |
| 7        | Frontend and backend touchups | Polished MVP |
| 8        | Stretch goals | If time permits |
| 9        | Presentation and practice |decide order of presenters, style of slide deck, write down a script |
| 10       | Finalize presentation and practice | N/A |
| Presentation week! | We made it! I'm proud of you :) |  💖 |
