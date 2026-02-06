function initNekoCats() {
  const mainNeko = new Neko({ 
    nekoName: "main-neko", 
    nekoImageUrl: "https://krualien.github.io/assets/cursor/neko.png",
    initialPosX: window.innerWidth / 2,
    initialPosY: window.innerHeight / 2
  });

  mainNeko.init();
  mainNeko.isFollowing = true;
}

if (typeof Neko === 'undefined') {
  console.error('Neko class not found. Load neko.js first');
} else {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNekoCats);
  } else {
    initNekoCats();
  }
}
