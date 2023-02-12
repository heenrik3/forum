export function FeedItem(data) {
  return `<div class="feed__item">
    <img src="${data.cover}" alt="" class="feed__img">
  
    <div class="feed__info">
      <div class="feed__header">
        <span class="feed__title">${data.title}</span>
        
        <button class="feed__favorite">
          <i class="fa-solid fa-heart"></i>
        </button>
      </div>
  
      <div class="feed__tags">
        ${data.tags.map((tag) => `<div class="tag">${tag}</div>`).join('')}
      </div>
  
      <div class="feed__details">
        <div class="user">
          <img src="${data.img}" alt="" class="user__img">
          <div class="user__info">
            <span class="user__name">${data.author}</span>
            <span class="user__time">${data.time}</span>
          </div>
        </div>
  
        <div class="feed__stats">
          <span>200k visualizações</span>
          <span>11k curtidas</span>
          <span>3k comentários</span>
        </div>
      </div>
    </div>
  </div>`
}
