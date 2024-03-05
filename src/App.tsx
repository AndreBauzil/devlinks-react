import { ListItem } from "./Components/ListItem"
import { Profile } from "./Components/Profile"
import { SocialLink } from "./Components/SocialLink"
import { Switch } from "./Components/Switch"

import './styles/main.css'

function App() {

  return (
    <div 
      className="bg-fuchsia-950/30 items-center flex flex-col w-full max-w-[588px] mt-14 mx-auto py-6 text-white"
    >
      <Profile 
        imgPath="./assets/utils/avatar.jpg"
        profileId="@AndreBauzil" 
      />

      <Switch />

      <ul 
        className="list-none items-center py-6 flex flex-col gap-4 w-full"
      >
        <ListItem 
          href="./assets/Currículo - Andre Bauzil.pdf"
          content="Ver meu Currículo - PT"
        />
        <ListItem 
          href="./assets/Resume - Andre Bauzil.pdf"
          content="See my Resume - EN"
        />
        <ListItem 
          href="https://github.com/AndreBauzil?tab=repositories"
          content="Ver meus projetos"
        />
        <ListItem 
          href="./pages/projects.tsx"
          content="Ver meus projetos"
        />
      </ul>

      <div id="social-links">
        <SocialLink 
          href={["https://github.com/AndreBauzil", "https://instagram.com/andre_bauzil", "https://linkedin.com/in/andre-bauzil"]}
          icons={["logoGithub", "logoIstagram", "logoLinkedin"]}
        />

        <footer>Made with ❤ by myself</footer>
      </div>
    </div>
  )
}

export default App
