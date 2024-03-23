import { EventEmitter } from "events";
import { getElements } from "@/interactions/utils";

/**
 * Класс Dom расширяет EventEmitter для работы с элементами DOM и событиями.
 * Этот класс позволяет создавать экземпляры, связанные с определенными элементами на странице,
 * и управлять этими элементами, используя возможности EventEmitter для взаимодействия с событиями.
 *
 * @extends EventEmitter
 */
export class Dom extends EventEmitter {
  element: HTMLElement; // Основной элемент, с которым связан экземпляр класса
  secondaryElements: SecondaryElements; // Объект с вторичными элементами, определенными пользователем

  /**
   * Конструктор класса Dom. Инициализирует экземпляр класса, находя и сохраняя
   * ссылки на основной и вторичные элементы DOM согласно переданным селекторам.
   *
   * @param {SelectorProps} { selector, secondarySelectors } - Параметры селекторов.
   */
  constructor({ selector, secondarySelectors }: SelectorProps) {
    super();

    // Вызов функции getElements для получения основного и вторичных элементов по селекторам
    const { element, secondaryElements } = getElements({
      selector,
      secondarySelectors,
    });

    this.element = element;
    this.secondaryElements = secondaryElements;
  }
}
