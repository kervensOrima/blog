
const Event = () => {

    const handle = function (event) {
        console.log(`Hello ninja, ${event}`)
    }

    const handleAgain = (event, name) => {
        console.log(`Hello ${name}, the event element : ${event.target}`)
    }

    const handleMouseEnter = (event) => {
        console.log(`mouse enter starting...`)
    }

    const handleMouseLeave = (event) => {
        console.log(`mouse leave starting...`)
    }

    const handleEnter = (event) => {
        console.log(event)

        if (event.key === 'Enter') {
            console.log(`user has been clicked in enter...`)
        }
    }

    return (
        <>
            <h2 style={{
                marginTop: '10px'
            }}>Event listener</h2>
            <div className="buttons-group">
                <button onClick={handle} >clik me</button>

                <button onClick={(e) => { handleAgain(e, "ORIMA Kervens") }}>clik me again</button>

                <button onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} >
                    Mouse event
                </button>

                <button onKeyDown={(e) => handleEnter(e)}>Enter event</button>
            </div>
        </>
    )
}

export default Event