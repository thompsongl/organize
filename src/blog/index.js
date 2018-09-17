import React from 'react'

import Box from '../Box'
import Card from '../Card'
import Flex from '../Flex'
import Heading from '../Heading'
import Text from '../Text'

const BlogCard = Card.withComponent('a');

const Blog = props => {
    const posts = props.routes.filter((route) => {
        return route.dirname === '/blog' && route.extname === '.md';
    })
    return (
        <React.Fragment>
        <Heading>Blog</Heading>
        <Flex mt={5} mb={8} flexWrap='wrap' justifyContent='center'>
            {!!posts.length ? (
                posts.map((post) => (
                    <BlogCard key={post.key} href={post.path} w='100%'>
                        <Heading fontSize={2}>{post.props.title}</Heading>
                        <Box mt={3}>
                            <Text fontSize={1} textAlign='center' lineHeight={1} mb={2} color={'gray.7'}>{post.props.excerpt}</Text>
                        </Box>
                    </BlogCard>
                ))
            ) : (
                <Heading>Coming soon</Heading>
            )}
        </Flex>
        </React.Fragment>
    )
}

export default Blog
