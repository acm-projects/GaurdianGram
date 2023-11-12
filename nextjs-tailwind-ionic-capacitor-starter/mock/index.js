export const images = [
  '/img/codepic.avif',
  '/img/roomnum.jpg',
  '/img/shan&syed.jpg',
  '/img/SmKinPic.jpeg',
];

export const userPics = [
  '/img/Biar.jpg',
  '/img/Syed.png',
  '/img/Shannon.png',
  '/img/Anjali.jpg',
  '/img/Zain.png'
];

export const homeItems = [
  {
    title: 'Exploring Maui',
    type: 'Blog',
    text: 'Fueled on Smoothie King; on my way home!',
    author: 'Syed',
    authorAvatar: userPics[1],
    image: images[3],
    
    commentText1: "You didn't invite me!!!",
    commentAuthor1: "Zain",
    commentAuthorAvatar1: userPics[4],

    commentText2: "bleh",
    commentAuthor2: "bleh",
    commentAuthorAvatar2: userPics[0],

    commentText3: "bleh",
    commentAuthor3: "bleh",
    commentAuthorAvatar3: userPics[0],
  },
  {
    title: 'Arctic Adventures',
    type: 'Blog',
    text:
      "This is where we're meeting today!!!!",
    author: 'Shannon',
    authorAvatar: userPics[2],
    image: images[1],
    
    commentText1: "Wishing you well!",
    commentAuthor1: "Shannon",
    commentAuthorAvatar1: userPics[2],

    commentText2: "bleh",
    commentAuthor2: "bleh",
    commentAuthorAvatar2: userPics[1],

    commentText3: "bleh",
    commentAuthor3: "bleh",
    commentAuthorAvatar3: userPics[1],
  },
  {
    title: 'Frolicking in the Faroe Islands',
    type: 'Blog',
    text:
      'Just wrapped up build night, heading home from ECSW!',
    author: 'Anjali',
    authorAvatar: userPics[3],
    image: images[2],
    
    commentText1: "<3 that flavor",
    commentAuthor1: "Anjali",
    commentAuthorAvatar1: userPics[3],

    commentText2: "bleh",
    commentAuthor2: "bleh",
    commentAuthorAvatar2: userPics[2],

    commentText3: "bleh",
    commentAuthor3: "bleh",
    commentAuthorAvatar3: userPics[2],
  },
];

export const notifications = [
  { title: 'New friend request', when: '6 hr' },
  { title: 'Please change your password', when: '1 day' },
  { title: 'You have a new message', when: '2 weeks' },
  { title: 'Welcome to the app!', when: '1 month' },
];

// Some fake lists
export const lists = [
  {
    name: 'Groceries',
    id: 'groceries',
    items: [{ name: 'Apples' }, { name: 'Bananas' }, { name: 'Milk' }, { name: 'Ice Cream' }],
  },
  {
    name: 'Hardware Store',
    id: 'hardware',
    items: [
      { name: 'Circular Saw' },
      { name: 'Tack Cloth' },
      { name: 'Drywall' },
      { name: 'Router' },
    ],
  },
  { name: 'Work', id: 'work', items: [{ name: 'TPS Report' }, { name: 'Set up email' }] },
  { name: 'Reminders', id: 'reminders' },
];

export const users = [
  {
    displayName: "Biar Fekry",
    username: "Biar F.",
    password: "YRKEFRAIB",
    userPFP: images[0],
  },
];