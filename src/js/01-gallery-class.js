export class Gallery {
  constructor(itemsArray) {
    this.items = itemsArray;
    this.markup = '';
  }

  makeMurkup() {
    this.markup = this.items
      .map(
        ({ preview, original, description }) => `<a class="gallery__item" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`,
      )
      .join('\n');
  }

  drawMarkup(el) {
    el.insertAdjacentHTML('beforeend', this.markup);
  }
}
