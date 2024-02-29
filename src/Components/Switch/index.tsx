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
        <div id="switch" onClick={ toggleMode }>
            <button
                className='w-1'
            />
            <span></span>
        </div>
    )
}
