function Article(props) {

    let emoji = ""

    if (props.minutes < 30) {
        for (let i = 0; i < props.minutes; i += 5 ) {
            emoji += "☕️"
        }
    } else {
        for (let i = 0; i < props.minutes; i += 10 ) {
            emoji += "🍱"
        }
    } 
    
    return (
        <article>
            <h3>{props.title}</h3>
            <small>{props.date ? props.date : "January 1, 1970"} - {emoji} {props.minutes} min read</small>
            <p>{props.preview}</p>
        </article>
    )
}

export default Article;