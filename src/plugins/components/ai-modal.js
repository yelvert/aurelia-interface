import {Behavior} from 'aurelia-templating'

let overlayAttr = Symbol('AiModalOverlay')
let attachedModalsAttr = Symbol('AiModalAttachedModals')

export const BaseZIndex = 1000
export const ZIndexStep = 10

export class AiModal {
  static metadata () {
    return Behavior
      .customElement('ai-modal')
      .withProperty('isOpen', 'toggleOpen', 'ai-toggle-open').and( x => x.bindingIsTwoWay() )
      .noView()
      .skipContentProcessing()
  }

  static get overlayElem () {
    if (!this[overlayAttr]) {
      this[overlayAttr] = document.createElement('ai-modal-overlay')
      this[overlayAttr].addEventListener('click', this.closeTop.bind(this), false)
      document.body.appendChild(this[overlayAttr])
    }
    return this[overlayAttr]
  }

  static attachOverlay () {
    this.overlayElem.classList.add('attached')
    this.overlayElem.style.zIndex = BaseZIndex
  }

  static detachOverlay () {
    this.overlayElem.classList.remove('attached')
  }

  static get attachedModals () {
    if (!this[attachedModalsAttr]) {
      this[attachedModalsAttr] = []
    }
    return this[attachedModalsAttr];
  }

  static attach (modalInstance) {
    this.attachOverlay()
    this.attachedModals.push(modalInstance)
    this.updateZIndexes()
    document.body.appendChild(modalInstance.element)
    modalInstance.element.classList.add('attached')
  }

  static detach (modalInstance) {
    modalInstance.element.classList.remove('attached')
    modalInstance.element.remove()
    this.attachedModals.splice(modalInstance.index, 1)
    this.updateZIndexes()
    if (!this.attachedModals.length) {
      this.detachOverlay()
    }
  }

  static updateZIndexes () {
    this.attachedModals.forEach( (modalInstance, index) => {
      if (index == this.attachedModals.length - 1) {
        this.overlayElem.style.zIndex = BaseZIndex + ( ( index + 1 ) * ZIndexStep )
        modalInstance.element.style.zIndex = BaseZIndex + ( ( index + 2 ) * ZIndexStep )
      } else {
        modalInstance.element.style.zIndex = BaseZIndex + ( ( index + 1 ) * ZIndexStep )
      }
      modalInstance.element.setAttribute('ai-modal-index', index)
    });
  }

  static closeTop () {
    let top = this.attachedModals[this.attachedModals.length - 1]
    if (top) {
      top.close()
    }
  }

  static inject () {
    return [Element]
  }

  constructor (element) {
    this.element = element
    this.element.remove()
    console.log(this)
  }

  get index () {
    return this.constructor.attachedModals.indexOf(this)
  }

  get _isOpen () {
    return this.index >= 0
  }

  toggleOpen (shouldOpen) {
    if ( shouldOpen && !this._isOpen ) {
      this.open()
    } else if ( !shouldOpen && this._isOpen ) {
      this.close()
    }
  }

  open () {
    console.log('opening', this)
    //Compile Element
    this.constructor.attach(this)
    this.isOpen = true
  }

  close () {
    console.log('closing', this)
    this.constructor.detach(this)
    this.isOpen = false
  }
}