import "./IconButton.css"


export function IconButton(iconName: string, text: string, MouseClickFunc: () => void) {
    return <button type="button" onClick={MouseClickFunc}>
            <div class="IconButton"><span class="material-symbols-outlined">{iconName}</span>{text}</div>
        </button>
}