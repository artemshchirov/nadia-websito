import gsap from "gsap";
import { Dom } from "./dom";

/**
 * Класс ScrollAnimation расширяет базовый класс Dom для добавления функциональности анимации при прокрутке страницы.
 * Использует библиотеку GSAP и её плагин ScrollTrigger для создания анимаций, зависящих от позиции прокрутки.
 *
 * @extends Dom
 */
export class ScrollAnimation extends Dom {
  timeline: GSAPTimeline; // Объект таймлайна GSAP для управления последовательностями анимаций

  /**
   * Конструктор класса ScrollAnimation. Инициализирует объект и применяет анимацию.
   *
   * @param {ScrollAnimationProps} { element, animationProps } - Параметры для анимации, включая элемент и свойства анимации.
   */
  constructor({ element, animationProps }: ScrollAnimationProps) {
    super({ selector: element, secondarySelectors: {} }); // Вызов конструктора базового класса с передачей селектора элемента
    this.animate(animationProps); // Применение анимации к элементу
  }

  /**
   * Применяет анимацию к элементу согласно переданным параметрам.
   *
   * @param {ScrollAnimationProps["animationProps"]} props - Параметры анимации.
   */
  animate(props: ScrollAnimationProps["animationProps"]) {
    const { scrub, trigger, start, ...rest } = props; // Деструктуризация свойств объекта параметров анимации

    gsap.set(this.element, {
      ...props.initialState,
    }); // Установка начального состояния анимации для элемента

    this.timeline = gsap.timeline({
      scrollTrigger: {
        ...rest, // Распаковка оставшихся свойств анимации
        start: start ?? "top bottom", // Начальная точка анимации, значение по умолчанию
        scrub: scrub ?? 0.7, // Задержка анимации при прокрутке, значение по умолчанию
        trigger: trigger ?? this.element, // Элемент, вызывающий анимацию, значение по умолчанию - текущий элемент
      },
    });

    props.function && props.function(this.timeline); // Вызов пользовательской функции анимации, если она есть
  }

  /**
   * Убивает (останавливает и удаляет) текущий таймлайн анимации.
   * Возвращает промис, который разрешается после выполнения операции.
   *
   * @returns {Promise<void>}
   */
  async kill(): Promise<void> {
    await this.timeline?.kill(); // Остановка и удаление таймлайна анимации
    return Promise.resolve(); // Возвращение разрешенного промиса
  }
}
