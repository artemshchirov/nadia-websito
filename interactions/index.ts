import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Dom } from "./classes/dom";
import { Hello } from "./components/hello";

/**
 * Класс Interactions отвечает за управление интерактивными элементами и анимациями на странице.
 * Регистрирует необходимые плагины GSAP, инициализирует плавную прокрутку с помощью Lenis,
 * создает прелоадер и обрабатывает события изменения размера окна.
 */
export class Interactions {
  components: { [x: string]: Dom } = {}; // Объект для хранения экземпляров компонентов

  constructor() {
    gsap.registerPlugin(ScrollTrigger); // Регистрация плагина ScrollTrigger в GSAP

    this.onResize(); // Обработчик изменения размера окна
    this.createSmoothScroll(); // Инициализация плавной прокрутки
    this.createPreloader(); // Создание прелоадера
    this.addEventListeners(); // Добавление обработчиков событий
  }

  /**
   * Инициализирует плавную прокрутку с помощью Lenis и интегрирует ее с GSAP.
   */
  createSmoothScroll() {
    const lenis = new Lenis({
      lerp: 0.1, // Коэффициент сглаживания прокрутки
    });

    // Обновление ScrollTrigger при событии прокрутки Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Интеграция Lenis с тикером GSAP для синхронизации анимаций
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Преобразование времени для Lenis
    });

    // Отключение задержки сглаживания в GSAP для обеспечения плавности анимаций
    gsap.ticker.lagSmoothing(0);
  }

  /**
   * Создает прелоадер, загружает медиа-ресурсы и инициализирует компоненты после загрузки.
   */
  createPreloader() {
    // Здесь могут быть операции по предзагрузке медиа
    // Инициализации или другие подготовительные действия
    this.onPreloaded(); // Вызов метода по завершению предзагрузки
  }

  /**
   * Вызывается после завершения предзагрузки ресурсов.
   * Инициализирует компоненты, которые зависят от загруженных ресурсов.
   */
  onPreloaded() {
    // Инициализация компонента Hello после предзагрузки
    this.components.hello = new Hello();
  }

  /**
   * Обработчик события изменения размера окна браузера.
   * Может быть использован для перерасчета размеров, реинициализации компонентов и т.д.
   */
  onResize() {
    // Логика обработки изменения размеров
  }

  /**
   * Добавляет обработчики событий, например, для реагирования на изменение размера окна.
   */
  addEventListeners() {
    // Привязка обработчика onResize к событию изменения размера окна
    window.addEventListener("resize", this.onResize.bind(this));
  }
}
