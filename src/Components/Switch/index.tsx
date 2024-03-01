export function Switch() {
    function toggleMode() {
        const html = document.documentElement
        html.classList.toggle("light")

        const img = document.querySelector<HTMLImageElement>("#profile img")

        html.classList.contains("light") ?
            img?.setAttribute("src", "./assets/avatar-light.jpg") :
            img?.setAttribute("src", "./assets/avatar.jpg")
    }

    return (
        <div 
            id="switch" 
            className="w-16 relative my-1 mx-auto"
            onClick={ toggleMode }
        >
            <button
                className='
                    w-8 h-8 bg-white bg-no-repeat bg-center border-0 absolute top-1/2 left-0 z-[1] translate-y-[-50%] cursor-pointer animate hover:outline-8 hover:outline hover:outline-[var(--hightlight-color)]
                    dark:animate-[slide-in .4s forwards] 
                '
            />
            <span
                className="block w-16 h-6 bg-[var(--surface-color)] border border-solid border-[var(--stroke-color)] rounded-full backdrop-blur-sm "
            >
            </span>
        </div>
    )
}
