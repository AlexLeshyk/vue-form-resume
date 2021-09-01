export default {
  mounted(el) {
    if (el.tagName === 'DIV') {
      el.querySelector('input').focus();
    } else {
      el.focus();
    }
  }
}