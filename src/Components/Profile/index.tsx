
interface Props {
    imgPath: string;
    profileId: string;
}

export function Profile({ imgPath, profileId }: Props) {
  return (
    <div id="profile">
        <img 
            src={imgPath}
            alt="Foto do dono dos links"
        />
        <p>{profileId}</p>
    </div>
  )
}
