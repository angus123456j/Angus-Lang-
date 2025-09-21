import logo from './logo.svg'
import home from'./Images/home.jpg'
import every_recipe from'./Images/every_recipe.png'
import pool from'./Images/3dpool.png'
import dwdt from'./Images/dwdt.png'
import angus from'./Images/angus.png'

// Temporary images (replace with real screenshots by placing files in src/Images and updating imports)
const projects = [
  {
    title: 'EveryRecipe',
    text: 'Full‑stack MERN recipe site with AWS Cognito auth, S3 image storage, Tailwind UI, and real‑time filtering.',
    image: every_recipe,
    linkType: 'website',
    linkUrl: 'https://every-recipe.vercel.app/',
    videoUrl: '/recipe.mp4',
    codeLinkUrl: 'https://github.com/angus123456j',
    why: 'I wanted to build a production‑style app end‑to‑end: auth, storage, and a fast UI for real users.',
    skills: ['React', 'Tailwind', 'Node/Express', 'MongoDB', 'AWS Cognito', 'AWS S3']
  },
  {
    title: 'Personal Portfolio',
    text: 'React portfolio with floating nav, smooth anchors, and reusable components.',
    image: angus,
    linkType: 'github',
    linkUrl: 'https://github.com/angus123456j',
    why: 'A clean place to showcase my work and iterate on UX and component design.',
    skills: ['React', 'Bootstrap', 'UX', 'Responsive Design']
  },
  {
    title: '3D Pool Game',
    text: 'Unity + C# pool game with ball physics, collisions, scoring UI, and menu flow.',
    image: pool,
    linkType: 'github',
    linkUrl: 'https://github.com/angus123456j',
    videoUrl: '/pool-demo.mp4',
    why: 'I enjoy physics and games—this project let me code gameplay systems and polish feel.',
    skills: ['C#', 'Unity', 'Physics', 'Gameplay']
    // no link yet
  },
  {
    title: 'DWDT Podcast',
    text: 'Student‑led interview podcast with alumni, athletes, and professionals.',
    image: dwdt,
    linkType: 'youtube',
    linkUrl: 'https://www.youtube.com/@DWDT99',
    why: 'Create meaningful conversations and learn storytelling, production, and community building.',
    skills: ['Planning', 'Production', 'Editing', 'Community']
  }
];

export default projects