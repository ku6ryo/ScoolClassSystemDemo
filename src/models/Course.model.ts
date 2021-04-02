// This file is auto-generated by ModelGun code generator.
// https://github.com/ku6ryo/ModelGun
// PLEASE DO NOT EDIT. If you want to extend the functionality, please import
// the export members and use as a part or inherit class.

import isUuid from "validator/lib/isUuid"

export class UnexpectedNullError extends Error {
  constructor () {
    super("Course UnexpectedNullError: If you see this, ModelGun validation may be broken.")
  }
}

export class InvalidPropertyError extends Error {
  constructor (message: string) {
    super("Course UnexpectedNullError: " + message)
  }
}

/**
 * Course model.
 * Course 
 */
export default class Course {
  #id: string | null = null
  #displayId: string | null = null
  #category: number | null = null
  #name: string | null = null
  #description: string | null = null
  #credits: number | null = null

  /**
   * @param string id 
   * @param string displayId 
   * @param number category 
   * @param string name 
   * @param string description 
   * @param number credits 
   */
  constructor (
    id: string,
    displayId: string,
    category: number,
    name: string,
    description: string,
    credits: number,
  ) {
    this.setId(id)
    this.setDisplayId(displayId)
    this.setCategory(category)
    this.setName(name)
    this.setDescription(description)
    this.setCredits(credits)
  }

  /**
   * Gets id
   */
  getId (): string {
    if (this.#id === null) {
      throw new UnexpectedNullError()
    }
    return this.#id
  }

  /**
   * Checks id
   */
  checkId (value: string) {
    if (!isUuid(value)) {
      throw new InvalidPropertyError(`${value} is not UUID value. (Course.setId)`)
    }
  }

  /**
   * Sets id
   * @param value
   */
  setId (value: string) {
    this.checkId(value)
    this.#id = value
  }

  /**
   * Gets displayId
   */
  getDisplayId (): string {
    if (this.#displayId === null) {
      throw new UnexpectedNullError()
    }
    return this.#displayId
  }

  /**
   * Checks displayId
   */
  checkDisplayId (value: string) {
  }

  /**
   * Sets displayId
   * @param value
   */
  setDisplayId (value: string) {
    this.checkDisplayId(value)
    this.#displayId = value
  }

  /**
   * Gets category
   */
  getCategory (): number {
    if (this.#category === null) {
      throw new UnexpectedNullError()
    }
    return this.#category
  }

  /**
   * Checks category
   */
  checkCategory (value: number) {
    if (value > 256) {
      throw new InvalidPropertyError(`${value} is more than 256. (Course.setCategory)`)
    }
    if (value % 1 !== 0) {
      throw new InvalidPropertyError(`${value} is not an integer. (Course.setCategory)`)
    }
  }

  /**
   * Sets category
   * @param value
   */
  setCategory (value: number) {
    this.checkCategory(value)
    this.#category = value
  }

  /**
   * Gets name
   */
  getName (): string {
    if (this.#name === null) {
      throw new UnexpectedNullError()
    }
    return this.#name
  }

  /**
   * Checks name
   */
  checkName (value: string) {
    if (value.length < 1) {
      throw new InvalidPropertyError(`${value} is shorter than 1. (Course.setName)`)
    }
    if (value.length > 256) {
      throw new InvalidPropertyError(`${value} is longer than 256. (Course.setName)`)
    }
  }

  /**
   * Sets name
   * @param value
   */
  setName (value: string) {
    this.checkName(value)
    this.#name = value
  }

  /**
   * Gets description
   */
  getDescription (): string {
    if (this.#description === null) {
      throw new UnexpectedNullError()
    }
    return this.#description
  }

  /**
   * Checks description
   */
  checkDescription (value: string) {
    if (value.length < 1) {
      throw new InvalidPropertyError(`${value} is shorter than 1. (Course.setDescription)`)
    }
    if (value.length > 1000) {
      throw new InvalidPropertyError(`${value} is longer than 1000. (Course.setDescription)`)
    }
  }

  /**
   * Sets description
   * @param value
   */
  setDescription (value: string) {
    this.checkDescription(value)
    this.#description = value
  }

  /**
   * Gets credits
   */
  getCredits (): number {
    if (this.#credits === null) {
      throw new UnexpectedNullError()
    }
    return this.#credits
  }

  /**
   * Checks credits
   */
  checkCredits (value: number) {
    if (value > 50) {
      throw new InvalidPropertyError(`${value} is more than 50. (Course.setCredits)`)
    }
    if (value % 1 !== 0) {
      throw new InvalidPropertyError(`${value} is not an integer. (Course.setCredits)`)
    }
  }

  /**
   * Sets credits
   * @param value
   */
  setCredits (value: number) {
    this.checkCredits(value)
    this.#credits = value
  }

  /**
   * Clones 
   */
  clone (shallow: boolean) {
    return new Course (
      this.getId(),
      this.getDisplayId(),
      this.getCategory(),
      this.getName(),
      this.getDescription(),
      this.getCredits(),
    )
  }
}
