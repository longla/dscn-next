
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
            <Layout pageTitle={'Blog'}>
                <div className={'post-card-container'}>
                {this.props.posts.map(({ document: { content, data }, slug }) => (
                    <div onClick={() => { Router.push(
                    `/blog-post?id=${slug}`,`post/${slug}`
                    )}} className={'post-card'}>
                        <div className="post-card__header">
                            <div className={'post-card__thumbnail'}>
                                <img src={data.thumbnail}></img>
                            </div>
                        </div>
                        <div className={'post-card__body'}>
                            <p className={'post-card__title'}>
                                {data.title}
                            </p>
                            <div className={'post-card__description'}>
                                <span>{content}</span>
                            </div>

                        </div>

                        <div className="post-card__footer">
                        </div>
                    </div>
                ))}
                </div>

            </Layout>
        )
    }
}