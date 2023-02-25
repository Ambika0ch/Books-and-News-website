import React, { Component } from 'react'


export class NewsItem extends Component {


    render() {
        let { title, description, imageurl, newsurl, totalResults } = this.props
        console.log(totalResults)
        return (
            <>
                {/* <div className='my-5 mx-5'><div className="card1" style={{ width: "28rem" }}>
                <img src={imageurl} className="card-img-top" alt="..." />
                <div className="card1-body" style={{ width: "30px" }}>
                    <h5 className="card1-title">{title}</h5>
                    <p className="card1-text">{description}</p>
                    <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                </div>
            </div></div> */}
                <div className='container'>
                    <div className="card1"  >
                        <img src={imageurl} alt="..." />
                        <div className="bottom">
                            <h3 className="title">{title}</h3>
                            <p className="text">{description}</p>
                            <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                        </div>
                    </div></div>

            </>
        )
    }
}

export default NewsItem