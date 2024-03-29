export function Switch() {
    function toggleMode() {
        const html = document.documentElement
        html.classList.toggle("light")

        const img = document.querySelector<HTMLImageElement>("#profile img")

        html.classList.contains("light") ?
            img?.setAttribute("src", "./assets/utils/avatar-light.jpg") :
            img?.setAttribute("src", "./assets/utils/avatar.jpg")
    }

    return (
        <div 
            id="switch" 
            className="w-16 relative my-1 mx-auto"
            onClick={ toggleMode }
        >
            <button
                className='
                    w-8 h-8 bg-white bg-switch bg-no-repeat bg-center rounded-full border-0 absolute top-1/2 left-0 z-[1] translate-y-[-50%] 
                    cursor-pointer animate hover:outline-8 hover:outline hover:outline-highlight
                    dark:animate-[slide-in] 
                '
            />
            <span
                className="block w-16 h-6 bg-surface border border-solid border-stroke rounded-full backdrop-blur-sm"
            >
            </span>
        </div>
    )
}
