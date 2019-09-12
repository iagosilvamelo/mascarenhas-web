import Vue from 'vue'

import { library }         from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Icons import
import { faUserSecret, faTachometerAlt }    from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faTachometerAlt)
// library.add(faDashboard)

Vue.component('font-awesome-icon', FontAwesomeIcon)