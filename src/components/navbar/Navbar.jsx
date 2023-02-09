

export default function Navbar(){

    return <div
    style= {{
        width: '100vw',
        height: '10vh'
    }}>
        <h1>J-Movies</h1>
        <form action="">
            <input type="text" placeholder="Search?" />
            <input type="button" value="search" />
        </form>
    </div>
}