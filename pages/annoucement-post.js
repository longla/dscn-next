import React from 'react'
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/layout';
export default class extends React.Component {
    static async getInitialProps({ query }) {
        const post = await import(`../_posts/annoucement/${query.id}.md`);
        const document = matter(post.default);
        return {
            ...document
        };
    }
    render() {
        return (
            <Layout>
                <>
                    <h1>{this.props.data.title}</h1>
                    <i>{`Date: ${this.props.data.date}`}</i>
                    <ReactMarkdown source={this.props.content} />
                </>
            </Layout>
        )
    }
}