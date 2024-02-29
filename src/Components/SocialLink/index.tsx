import { IonIcon } from "@ionic/react";

interface Props{
  href: string;
  icon: string;
}

export function SocialLink({ href, icon }: Props) {
  return (
    <a href={href}>
      <IonIcon icon={icon}></IonIcon>
    </a>
  )
}
