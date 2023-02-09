

export default function FilmCard({children, ...attr}){

    return <div {...attr}>
        {children}
    </div>
}

export function ImageCard({src}){
    return <img src={src} style = {{
        width: '30%'
    }} alt="" />
}