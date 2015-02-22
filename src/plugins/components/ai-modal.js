import {Behavior} from 'aurelia-framework'

let overlayAttr = Symbol('AiModalOverlay')
let attachedModalsAttr = Symbol('AiModalAttachedModals')

export class AiModal {
  static metadata () {
    return Behavior
      .customElement('ai-modal')
      .withProperty('open', 'toggleOpen', 'ai-toggle-open').and( x => x.bindingIsTwoWay() )
      .noView()
      .skipContentProcessing()
  }

  static get overlayElem () {
    if (!this[overlayAttr]) {
      this[overlayAttr] = document.createElement('ai-modal-overlay')
    }
    return this[overlayAttr]
  }

  static get attachedModals () {
    if (!this[attachedModalsAttr]) {
      this[attachedModalsAttr] = []
    }
    return this[attachedModalsAttr];
  }

  static attach (modalInstance) {
    this.attachedModals.push(modalInstance)
    // ensure overlay is attached and update z-indexes of all attached modals
  }

  static detach (modalInstance) {
    this.attachedModals.splice(modalInstance.index, 1)
    // update z-indexes of all attached modals, remove overlay if no more modals are attached
  }

  static inject () {
    return [Element]
  }

  constructor (element) {
    this.element = element
  }

  get index () {
    return this.constructor.attachedModals.indexOf(this)
  }

  get isOpen () {
    return !!this.index
  }

  toggleOpen (shouldOpen) {
    if ( shouldOpen && !this.isOpen ) {
      this.open()
    } else if (!shouldOpen && this.isOpen ) {
      this.close()
    }
  }

  open () {
    this.constructor.attach(this)
  }

  close () {
    this.constructor.detach(this)
  }
}