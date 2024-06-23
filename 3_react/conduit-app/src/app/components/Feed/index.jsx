import Link from "next/link";
import "./index.css"
import { getDate } from "../Feeds/utils";

export default function Feed(params) {
    const feed = params.feedContent;
    return (

            <div className="feed">
                <div className="feed-div1">
                    <div className="feed-div1-left">
                        <img className="img" src={feed.author.image} />
                        <div className='feed-div1-left-details'>
                            <Link className="link" href="/">{feed.author.username}</Link>
                            <span className="span">{getDate(feed.createdAt)}</span>
                        </div>
                    </div>
                    <button className="like-button">💚 {feed.favoritesCount}</button>
            </div>
                <div className="feed-div2">
                    <h1>{feed.title}</h1>
                    <p>{feed.description}</p>
                </div>
            </div>
    )
}