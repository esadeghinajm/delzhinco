// --- START OF FILE: plugins/fontawesome.ts ---
import { library, config } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faChevronDown,
  faArrowLeft,
  faCheck,
  faShip,
  faPlane,
  faTruck,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"

library.add(
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faChevronDown,
  faArrowLeft,
  faCheck,
  faShip,
  faPlane,
  faTruck,
  faPhoneAlt,
  faLinkedin,
  faInstagram
)

config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon)
})
