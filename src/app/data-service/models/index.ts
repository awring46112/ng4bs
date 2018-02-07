/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { RequestOptionsBase } from "ms-rest-js";


/**
 * @interface
 * An interface representing TodoItem.
 */
export interface TodoItem {
  /**
   * @member {number} [id]
   */
  id?: number;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {boolean} [isComplete]
   */
  isComplete?: boolean;
}

/**
 * @interface
 * An interface representing MyAPIApiTodoPostOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface MyAPIApiTodoPostOptionalParams extends RequestOptionsBase {
  /**
   * @member {TodoItem} [item]
   */
  item?: TodoItem;
}

/**
 * @interface
 * An interface representing MyAPIApiTodoByIdPutOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface MyAPIApiTodoByIdPutOptionalParams extends RequestOptionsBase {
  /**
   * @member {TodoItem} [item]
   */
  item?: TodoItem;
}

/**
 * @interface
 * An interface representing MyAPIApiValuesPostOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface MyAPIApiValuesPostOptionalParams extends RequestOptionsBase {
  /**
   * @member {string} [value]
   */
  value?: string;
}

/**
 * @interface
 * An interface representing MyAPIApiValuesByIdPutOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface MyAPIApiValuesByIdPutOptionalParams extends RequestOptionsBase {
  /**
   * @member {string} [value]
   */
  value?: string;
}