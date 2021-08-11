export default {
  mounted(el, binding) {
    console.log('binding',binding.value.page, binding.value.totalPages);
    const options = {
      root: document.querySelector('#scrollArea'),
      rootMargin: '0px',
      threshold: 1.0
    };
    const callback = (entries, observer) => {
      if(entries[0].isIntersecting) {
        binding.value.loadMoreComments();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  }
}