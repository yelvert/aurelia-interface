import {AiBtnToggleAttachedBehavior} from './ai-btn-toggle'
import {AiBtnRadioAttachedBehavior} from './ai-btn-radio'
import {AiTabsAttachedBehavior} from './ai-tabs'
import {AiAction} from './ai-action'
import {AiCard} from './ai-card'
import {AiBtn} from './ai-btn'
import {AiDropdown} from './ai-dropdown'
import {AiActionReveal} from './ai-action-reveal'
import {AiModal} from './ai-modal'

function install(aurelia){
  aurelia.withResources([ AiBtnToggleAttachedBehavior
                        , AiBtnRadioAttachedBehavior
                        , AiTabsAttachedBehavior
                        , AiActionReveal
                        , AiDropdown
                        , AiAction
                        , AiCard
                        , AiBtn
                        , AiModal
                        ]);
}

export  {AiBtnToggleAttachedBehavior
        , AiBtnRadioAttachedBehavior
        , AiTabsAttachedBehavior
        , AiActionReveal
        , AiDropdown
        , AiAction
        , AiCard
        , AiBtn
        , AiModal
        , install
        };
