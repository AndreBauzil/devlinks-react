import { IonIcon } from "@ionic/react";
import { logoGithub, logoLinkedin, logoInstagram } from "ionicons/icons";

interface Props{
  href: string[];
  icons: string[];
}

export function SocialLink({ href, icons }: Props) {
  const iconMap: { [key: string]: string } = {
    logoGithub: logoGithub,
    logoLinkedin: logoLinkedin,
    logoInstagram: logoInstagram
  }

  return (
    href.map(link => {
      return (
        <a href={link}>
          {icons.map(icon => {
            return (
              <IonIcon key={icon} icon={iconMap[icon]}></IonIcon>
            )
          })}
        </a>
      )
    })
  )
}
