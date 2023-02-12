import { FeedItem } from './FeedItem.js'
import { spinner } from './Spinner.js'

const newPostInput = document.querySelector('.newpost__input')
const newPostBtn = document.querySelector('.newpost__btn')

const feedList = document.querySelector('.feed__list')
const profileImg = document.querySelectorAll('.avatar')
const profileName = document.querySelector('.profile__name')

let user

const users = [
  {
    name: 'Alice',
    img: '1.jpg',
  },
  {
    name: 'John',
    img: '2.jpg',
  },
  {
    name: 'Alex',
    img: '3.jpg',
  },
  {
    name: 'Takashi',
    img: '4.jpg',
  },
  {
    name: 'Joseph',
    img: '5.jpg',
  },
  {
    name: 'Julia',
    img: '6.jpg',
  },
]

const posts = [
  {
    title: 'Bitcoin caiu do seu topo de 300 mil reais depois disso...',
    cover: 'cover0.png',
    tags: ['finanças', 'bitcoin', 'crypto'],
  },
  {
    title: 'Vamos falar de blogging and SEO...',
    cover: 'cover1.png',
    tags: ['seo', 'blogging', 'traffic'],
  },
  {
    title: 'OnePay - Web App para pagamentos online',
    cover: 'cover2.png',
    tags: ['pagamento', 'webapp', 'app'],
  },
]

const feedItems = []

function renderFeed() {
  feedList.insertAdjacentHTML('afterbegin', spinner)

  setTimeout(() => {
    const items = feedItems.map((item) => FeedItem(item)).join('')

    feedList.innerHTML = ''

    feedList.insertAdjacentHTML('afterbegin', items)
  }, 1000)
}

function handleCreatePost(e) {
  const text = newPostInput.value
  if (!text) return

  newPostInput.value = ''

  feedItems.splice(0, 0, {
    title: text,
    tags: ['tag1', 'tag2', 'tag3'],
    img: `./assets/${user.img}`,
    author: user.name,
    time: new Date().toLocaleString('pt-BR'),
    cover: `./assets/${user.img}`,
  })

  renderFeed()
}

function handleToggleFavorite(btn) {
  btn.classList.toggle('feed__favorite__active')
}

function handleFeed(e) {
  const favBtn = e.target.closest('.feed__favorite')
  if (!favBtn) return

  return handleToggleFavorite(favBtn)
}

function setupFeed() {
  posts.forEach((post) => {
    const author = users[Math.round(Math.random() * (users.length - 1))]

    feedItems.push({
      title: post.title,
      tags: post.tags,
      img: `./assets/${author.img}`,
      author: author.name,
      time: new Date().toLocaleString('pt-BR'),
      cover: `./assets/${post.cover}`,
    })
  })
}

function setupUser() {
  const i = Math.round(Math.random() * (users.length - 1))

  user = users[i]

  profileImg.forEach((profile) => (profile.src = `./assets/${user.img}`))
  profileName.textContent = user.name
}

function start() {
  setupUser()

  setupFeed()

  renderFeed()

  newPostBtn.addEventListener('click', handleCreatePost)
  feedList.addEventListener('click', handleFeed)
}

start()
