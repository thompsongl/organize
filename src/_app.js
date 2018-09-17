import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import CSS from './CSS'
import Box from './Box'
import Button from './Button'
import Container from './Container'
import Flex from './Flex'
import Footer from './Footer'
import Header from './Header'
import Heading from './Heading'
import Input from './Input'
import Link from './Link'
import Text from './Text'

const Label = Box.withComponent('label');
const Section = Box.withComponent('section');

// Generic page wrapper component
const Page = props => (
  <React.Fragment>
    <CSS />
    <ThemeProvider theme={theme}>
      <Box id="pageroot" color='bodytext'>
          <Header>
              <Container>
                  <Flex justifyContent='space-between' alignItems='center'>
                      <Box>
                          <a href='/'>
                          <Heading fontSize={2} lineHeight={1.5} letterSpacing={0.2}>
                              Joanna Thompson
                          </Heading>
                          </a>
                      </Box>
                      <Box>
                          <Link href='/blog'>Blog</Link>
                          <Button.link href="#contact">
                              <Text fontSize={0}>Contact</Text>
                          </Button.link>
                      </Box>
                  </Flex>
              </Container>
          </Header>
          <main>
            {props.location.pathname.includes('blog') ? (
              <Container>{props.children}</Container>
            ) : (
              <React.Fragment>{props.children}</React.Fragment>
            )}
            <Section bg={'green.2'} id="contact">
                <Container py={8} maxWidth={0}>
                    <Heading>Contact</Heading>
                        <form id="contactForm" action="javascript:sendData()">
                            <Box>
                                <Label display="block" w="100%" htmlFor="name">
                                    <Text color="gray.7">Name</Text>
                                </Label>
                                <Input id="name" name="name" type="text" required />
                            </Box>
                            <Box my={2}>
                                <Label display="block" w="100%" htmlFor="email">
                                    <Text color="gray.7">Email</Text>
                                </Label>
                                <Input id="email" name="email" type="email" required />
                            </Box>
                            <Box>
                                <Label display="block" w="100%" htmlFor="message">
                                    <Text color="gray.7">Message</Text>
                                </Label>
                                <Input.textarea borderColor='gray.7' id="message" name="message" rows="5" />
                            </Box>
                            <Button type="submit" value="Send" mt={3} />
                        </form>
                </Container>
            </Section>
        </main>
        <Footer>
            <Container>
                <Text textAlign='center'>
                    © Joanna Thompson &middot; Omaha, NE
                </Text>
            </Container>
        </Footer>
      </Box>
    </ThemeProvider>
  </React.Fragment>
)

export default Page
