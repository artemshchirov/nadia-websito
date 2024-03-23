import { Dom } from "./dom";
import gsap from "gsap";

/**
 * Класс ObserverAnimation расширяет класс Dom, добавляя функциональность анимации элементов
 * при их появлении в области видимости. Использует IntersectionObserver для отслеживания
 * появления элемента в области видимости и библиотеку GSAP для анимирования.
 *
 * @extends Dom
 */
export class ObserverAnimation extends Dom {
  timeline: gsap.core.Timeline; // Таймлайн GSAP для управления последовательностью анимаций
  observer: IntersectionObserver; // Observer для отслеживания видимости элемента
  target: ObserverAnimationProps["target"]; // Целевой элемент для наблюдения и анимации
  animation: ObserverAnimationProps["animation"]; // Параметры анимации

  /**
   * Конструктор класса ObserverAnimation. Инициализирует экземпляр, настраивает начальное состояние анимации,
   * создает таймлайн GSAP и инициализирует IntersectionObserver для отслеживания видимости элемента.
   *
   * @param {ObserverAnimationProps} { selector, target, animation, initialState } - Параметры для инициализации анимации.
   */
  constructor({ selector, target, animation, initialState }: ObserverAnimationProps) {
    super({
      selector,
      secondarySelectors: {},
    });

    initialState && this.initialize(initialState); // Инициализация начального состояния анимации, если оно предоставлено

    this.timeline = gsap.timeline(); // Создание нового таймлайна GSAP
    this.animation = animation; // Сохранение параметров анимации
    this.target = target; // Сохранение целевого элемента для анимации

    this.createObserver(); // Создание и настройка IntersectionObserver
  }

  createObserver() {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        entry.isIntersecting ? this.animateIn() : this.animateOut();
      });
    }; // Функция обратного вызова для IntersectionObserver

    this.observer = new window.IntersectionObserver(callback, {
      threshold: this.animation?.threshold ?? 0.5, // Пороговое значение для срабатывания наблюдателя
      rootMargin: this.animation?.rootMargin, // Отступы вокруг корневого элемента
      root: this.animation?.root, // Корневой элемент для наблюдения
    }); // Инициализация и настройка IntersectionObserver

    this.observer.observe(this.target ?? this.element); // Начало наблюдения за элементом
  }

  initialize(tween: gsap.TweenVars) {
    gsap.set(this.element, {
      ...tween,
    }); // Установка начальных значений анимации для элемента
  }

  animateIn() {
    return new Promise((resolve) => {
      this.timeline.to(this.element, {
        ...this.animation?.tween,
      }); // Добавление анимации появления к таймлайну

      this.timeline.call(resolve); // Вызов функции обратного вызова после завершения анимации
    });
  }

  animateOut() {
    return new Promise((resolve) => {
      if (this.animation?.resetOnExit) {
        this.timeline.reverse();
      } // Возврат анимации в исходное состояние, если это предусмотрено

      this.timeline.call(resolve); // Вызов функции обратного вызова после завершения анимации
    });
  }
}
