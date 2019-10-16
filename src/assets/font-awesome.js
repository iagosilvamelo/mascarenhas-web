import Vue from 'vue'

import { library }         from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Icons import
import 
{ 
	faTachometerAlt,
	faCalendarAlt,
	faCalendarCheck,
	faUsers,
	faSignOutAlt,
	faEye,
	faDotCircle,
} 
from '@fortawesome/free-solid-svg-icons'

// Add icons
library.add(
	faTachometerAlt,
	faCalendarAlt,
	faCalendarCheck,
	faUsers,
	faSignOutAlt,
	faEye,
	faDotCircle,
)

Vue.component('font-awesome-icon', FontAwesomeIcon)