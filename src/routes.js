import LoginLayout from 'components/LoginLayout'
import WelcomeScreen from 'components/WelcomeScreen'
import ChooseProjectLayout from 'components/ChooseProjectLayout'

export default [
  { path: '/', component: WelcomeScreen },
  { path: '/login', component: LoginLayout },
  { path: '/choose-project', component: ChooseProjectLayout },
]
