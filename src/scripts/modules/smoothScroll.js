const smoothScroll = (elemToId) =>  {
    document.querySelector(elemToId).scrollIntoView({ behavior: 'smooth', block: 'start' })
};

module.exports = smoothScroll;