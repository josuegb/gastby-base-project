import React, { Component } from "react"
import { graphql } from 'gatsby'
import Layout from '../layouts/layout'
import dataUtil from '../utils/dataUtil';


class PostsTemplate extends Component {
    render() {
        const data = dataUtil.normalizeByTitle(this.props.data);
        console.log(data);

        return (
            <Layout>
                <h1>Testing</h1>
                <p>{data}</p>
            </Layout>
        )
    }
}


export default PostsTemplate

export const pageQuery = graphql`
    {
        allWordpressWpProjects {
        edges {
            node {
            id
            slug
            title
            content
            date
            modified
            }
        }
        }
    }
`