
interface Props {
    imgPath: string;
    profileId: string;
}

export function Profile({ imgPath, profileId }: Props) {
  return (
    <div id="profile"
      className="items-center p-6"
    >
        <img 
            className="w-28 h-[6.5rem] object-cover rounded-full"
            src={imgPath}
            alt="Foto do dono dos links"
        />
        <p
          className="font-medium leading-6 pt-4"
        >{profileId}</p>
    </div>
  )
}
