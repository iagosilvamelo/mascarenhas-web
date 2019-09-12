import Vue from 'vue'

import { library }         from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


// Icons import
import 
{ 
	faTachometerAlt,
	faCalendarAlt,
	faCalendarCheck,
	faUsers
} 
from '@fortawesome/free-solid-svg-icons'

// Add icons
library.add(
	faTachometerAlt,
	faCalendarAlt,
	faCalendarCheck,
	faUsers
)

Vue.component('font-awesome-icon', FontAwesomeIcon)