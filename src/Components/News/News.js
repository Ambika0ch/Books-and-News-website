import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
export class News extends Component {
    static defaultPorps = {
        country: 'us',
        pageSize: 8,
        category: "health"

    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes,
        category: PropTypes.string
    }

    constructor() {
        super();
        console.log("hyy");

        this.state = {
            articles: [],
            loading: true,
            page: 1,
            category: "sports",
            country: 'us'

        }
    }
    async componentDidMount() {
        console.log("cmd");
        let url = ` https://newsapi.org/v2/everything?q=tesla&from=2023-01-25&sortBy=publishedAt&apiKey=d0fc174e15ec42a7aafb210e03e54286&pageSize=20`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata);
        this.setState({
            articles: parsedata.articles, totalarticles: parsedata.totalResults,
            loading: false
        })
    }
    handlePrevClick = async () => {
        let url = ` https://newsapi.org/v2/everything?q=tesla&from=2023-01-25&sortBy=publishedAt&apiKey=d0fc174e15ec42a7aafb210e03e54286&pageSize=20`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedata = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parsedata.articles,
            loading: false
        })
    }
    handleNextClick = async () => {

        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 20))) {
            let url = ` https://newsapi.org/v2/everything?q=tesla&from=2023-01-25&sortBy=publishedAt&apiKey=d0fc174e15ec42a7aafb210e03e54286&pageSize=20`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedata = await data.json();


            this.setState({
                page: this.state.page + 1,
                articles: parsedata.articles,
                loading: false
            })

        }

    }

    render() {

        return (

            < div  >


                <h1 className='text-center'>Newsapp - top headlines</h1>

                {this.state.loading && <Spinner />}


                <div div className="row" >
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url} >
                            <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} />

                        </div>
                    })}


                </div>
                <div >
                    <button style={{ float: "left" }} disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} className="btn btn-dark "> &larr; Previous</button>
                    <button style={{ float: "right" }} disabled={this.state.page + 1 > Math.ceil(40 / 20)} type="button" onClick={this.handleNextClick} className="btn btn-dark ">Next &rarr;</button>
                </div>
            </div >
        )
    }
}

export default News