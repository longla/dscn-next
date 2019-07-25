import React from 'react'
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/layout';
import { useRouter } from 'next/router';
class BlogPosts extends React.Component {
    constructor(props){
        super(props);
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

BlogPosts.getInitialProps = async ({ query })=>{
    console.log(`${query.id}`);
    const post = await import(`../_posts/blog/${query.id}.md`);
    const document = matter(post.default);
    return {
        ...document
    };
}

export default BlogPosts;