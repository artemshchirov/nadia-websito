/**
 * Получает основной и вторичные DOM элементы на основе предоставленных селекторов.
 * Поддерживает как строковые селекторы, так и непосредственно переданные экземпляры HTMLElement.
 *
 * @param {SelectorProps} { selector, secondarySelectors } - Объект с селектором основного элемента и объектом вторичных селекторов.
 * @returns {{ element: HTMLElement, secondaryElements: SecondaryElements }} - Возвращает объект с основным элементом и объектом вторичных элементов.
 */
export const getElements = ({ selector, secondarySelectors }: SelectorProps) => {
  // Проверка, является ли selector экземпляром HTMLElement
  const isEl = selector instanceof window.HTMLElement;
  // Создание заглушки div в случае, если элемент не найден
  const dummyDiv = document.createElement("div");

  // Получение основного элемента или возврат заглушки
  const element: HTMLElement = isEl ? selector : document.querySelector(selector) ?? dummyDiv;

  // Инициализация объекта для вторичных элементов
  const secondaryElements: SecondaryElements = {};

  // Обход объекта secondarySelectors для получения вторичных элементов
  Object.entries(secondarySelectors).forEach(([key, item]) => {
    const isEl = item instanceof window.HTMLElement;
    secondaryElements[key] = isEl
      ? [item] // Если item - элемент, возвращаем его в массиве
      : Array.from(document.querySelectorAll(item)); // Если item - селектор, получаем все соответствующие элементы
  });

  return { element, secondaryElements };
};

/**
 * Вычисляет расстояние от центра переданного элемента до центра видимой части окна браузера (viewport).
 *
 * @param {HTMLElement} element - Элемент, для которого вычисляется расстояние.
 * @returns {{ x: number, y: number }} - Объект с расстояниями по горизонтали (x) и вертикали (y).
 */
export const getDistanceFromMidViewport = (element: HTMLElement): { x: number; y: number } => {
  // Получение размеров видимой части окна
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // Получение позиции и размеров элемента
  const { x, y, width, height }: DOMRect = element.getBoundingClientRect();

  // Вычисление центра элемента
  const yCenter = y + height / 2;
  const xCenter = x + width / 2;

  // Вычисление расстояния от центра элемента до центра видимой части окна
  const distY = vh / 2 - yCenter;
  const distX = vw / 2 - xCenter;

  return { x: distX, y: distY };
};

/**
 * Предзагружает медиа (например, изображения) асинхронно и вызывает callback по завершению загрузки.
 *
 * @param {HTMLImageElement} media - Элемент изображения, для которого нужно предзагрузить медиа.
 * @param {() => void} callback - Функция обратного вызова, которая будет вызвана после загрузки медиа.
 */
export const preloadMedia = (media: HTMLImageElement, callback: () => void) => {
  // Получение значения атрибута data-src, который содержит URL изображения для загрузки
  const src = media.getAttribute("data-src");

  // Если src не определен, прерываем выполнение функции
  if (!src) return;

  // Создание временного объекта изображения для предзагрузки
  const fakeImage: HTMLImageElement = new Image();
  fakeImage.src = src; // Назначение src для начала загрузки

  // Обработчик события onload, вызываемый по завершению загрузки изображения
  fakeImage.onload = () => {
    media.src = src; // Установка загруженного изображения в исходный элемент
    callback(); // Вызов callback функции
  };
};
