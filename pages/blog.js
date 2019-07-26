
import React from 'react'
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '../components/layout';
import Router from 'next/router';

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
        })(require.context("../_posts/blog", true, /\.md$/));
        return {
            posts
        };
    }
    render() {

        return (
            <Layout>
                <div className={'post-container'}>
                {this.props.posts.map(({ document: { data }, slug }) => (
                    <div onClick={() => { Router.push({
                      pathname: '/blog-post', query: { id: slug }

                    }) }} className={'post'}>
                        <div className={'post__img'}>
                            <img src={data.thumbnail}></img>
                        </div>
                        <div className={'post__body'}>
                            {data.title}
                        </div>
                    </div>
                ))}
                </div>

            </Layout>
        )
    }
}