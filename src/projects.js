import { moovieScreenshots } from './images/MooviesScreenshots';
import { animooScreenshots } from './images/AnimooScreenshots';
import { discordScreenshots } from './images/DiscordScreenshots';
import { youtubeScreenshots } from './images/YoutubeScreenshots';
import { gameoflifeScreenshots } from './images/GameOfLifeScreenshots';

const mooviesDesc = "A website to search for your favorite movies and check out its details. It uses The Movie Database API."
const mooviesKeywords = ['Javascript', 'React', 'Redux', 'HTML', 'CSS', 'Firebase']
const animooDesc = "A website to watch and keep track of your favorite Animes."
const animooKeywords = ['Javascript', 'React', 'Redux', 'HTML', 'CSS', 'Node.js', 'Express', 'MongoDB', 'Mongoose']
const discordDesc = "A limited clone of the popular voice chat application Discord."
const discordKeywords = ['Javascript', 'React', 'Redux', 'HTML', 'CSS', 'Firebase']
const youtubeDesc = "A limited clone of the popular video website Youtube that uses its API to search and stream videos."
const youtubeKeywords = ['Javascript', 'React', 'HTML', 'CSS']
const gameoflifeDesc = "Conway's game of life using React."
const gameoflifeKeywords = ['Javascript', 'React', 'HTML', 'CSS']

export const projects = [
  {
    title: "Moovies",
    text: mooviesDesc,
    flip: false,
    demo: "https://moovies-aa846.web.app/",
    git: "https://github.com/powermetal/moovies",
    images: moovieScreenshots,
    keywords: mooviesKeywords
  },
  {
    title: "Animoo",
    text: animooDesc,
    flip: true,
    demo: "https://powermetal.github.io/animetv/",
    git: "https://github.com/powermetal/animetv",
    images: animooScreenshots,
    keywords: animooKeywords
  },
  {
    title: "Discord Clone",
    text: discordDesc,
    flip: false,
    demo: "https://redux-discord-clone.web.app/",
    git: "https://github.com/powermetal/discord-clone",
    images: discordScreenshots,
    keywords: discordKeywords
  },
  {
    title: "Youtube Clone",
    text:  youtubeDesc,
    flip: true,
    demo: "https://yt-clone-289321.web.app/",
    git: "https://github.com/powermetal/youtube-clone",
    images: youtubeScreenshots,
    keywords: youtubeKeywords
  },
  {
    title: "Game of Life",
    text: gameoflifeDesc,
    flip: false,
    demo: "https://game-of-life-reactjs.web.app/",
    git: "https://github.com/powermetal/game-of-life",
    images: gameoflifeScreenshots,
    keywords: gameoflifeKeywords
  }
]