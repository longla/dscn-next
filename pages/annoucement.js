
import React from 'react'
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '../components/layout';

export default class extends React.Component {
    static async getInitialProps() {
        // Get posts from folder
        const posts = (ctx => {
            const keys = ctx.keys();
            const values = keys.map(ctx);
            const data = keys.map((key, index) => {
                // Create slug from filename
                const slug = key.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
                const value = values[index];
                // Parse document
                const document = matter(value.default);
                return {
                    document,
                    slug,
                };
            });
            return data;
        })(require.context("../_posts/annoucement", true, /\.md$/));
        return {
            posts
        };
    }
    render() {
        return (
            <Layout>
                <>
                    <h1>Thong Bao!</h1>
                    {this.props.posts.map(({ document: { data }, slug }) => (
                        <Link href={{ pathname: '/annoucement-post', query: { id: slug } }} as={`/annoucement/${slug}`} key={slug}>
                            <h2>{data.title}</h2>
                        </Link>
                    ))}
                </>
            </Layout>
        )
    }
}