import gsap from "gsap";
import { Dom } from "../classes/dom";
import { ScrollAnimation } from "../classes/scroll-animation";

/**
 * Класс Hello для создания и управления анимациями элементов в секции "hello".
 * Расширяет функционал базового класса Dom, добавляя специфичные анимации,
 * связанные с прокруткой страницы.
 *
 * @extends Dom
 */
export class Hello extends Dom {
  /**
   * Таймлайн для управления анимациями с помощью GSAP.
   * @type {GSAPTimeline}
   */
  timeline: GSAPTimeline;

  /**
   * Массив для хранения инстансов анимаций прокрутки.
   * @type {ScrollAnimation[]}
   */
  animations: ScrollAnimation[] = [];

  /**
   * Конструктор класса Hello. Инициализирует основные элементы и анимации.
   */
  constructor() {
    super({
      selector: ".hello",
      secondarySelectors: {
        dash: ".hello__dash",
      },
    });

    this.timeline = gsap.timeline();
    this.init();
  }

  /**
   * Инициализирует анимации для элементов секции "hello".
   * Создает экземпляры ScrollAnimation для определенных элементов
   * и настраивает их параметры анимации.
   */
  init() {
    this.animations.push(
      new ScrollAnimation({
        element: this.secondaryElements.dash[0],
        animationProps: {
          pin: true,
          trigger: this.element,
          start: "top top",
          function: (tl) => {
            tl.to(this.secondaryElements.dash[0], {
              width: "40vw",
            });
          },
        },
      })
    );
  }
}
