export default function decorate(block) {
  const items = block.querySelectorAll(':scope > div');

  items.forEach((item) => {
    const title = item.children[0];
    const description = item.children[1];

    if (title && description) {
      const button = document.createElement('button');
      button.textContent = title.textContent;

      const content = document.createElement('div');
      content.innerHTML = description.innerHTML;
      content.style.display = 'none';

      button.addEventListener('click', () => {
        content.style.display =
          content.style.display === 'none' ? 'block' : 'none';
      });

      item.innerHTML = '';
      item.append(button, content);
    }
  });
}