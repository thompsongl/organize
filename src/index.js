import React from 'react'
import theme from './theme'

import Box from './Box'
import Card from './Card'
import Container from './Container'
import Divider from './Divider'
import Expandable from './Expandable'
import Flex from './Flex'
import Footer from './Footer'
import Header from './Header'
import Heading from './Heading'
import Text from './Text'

const SERVICES = [
    'Closets',
    'Toy rooms',
    'Bedrooms',
    'Kitchen',
    'Storage rooms',
    'Garages',
    'Preparing for a move',
]

const FAQS = [
    {
        q: 'What can I expect?',
        a: 'When you decide to book a session, we will set up a 30-minute phone consultation. We will talk through what you envision for the space. On our scheduled session date, we will work collaboratively to identify the items that you want to keep. Finally, we will store and organize everything. The goal is to create an ideal space for you.'
    },
    {
        q: 'How many sessions will I need?',
        a: 'The number of sessions will depend on your ultimate organizing goals. Each session will take between 4-5 hours depending on the space and category.'
    },
    {
        q: 'Are you going to throw away all of my things?',
        a: 'Absolutely not. You have the final say!  I may make recommendations or may question why you want to keep something, but this is not because I ultimately want you to discard something. My goal is to help you understand why you have the item and why you want to keep it (or discard it). Being able to describe the value of an item will help you decide if it deserves a place in your home or not.'
    },
    {
        q: 'I’m afraid you’ll judge me!',
        a: 'This is a partnership. We’re in this together, and I am merely your coach, helping to guide you in this process. Just like I am used to accepting a diverse group of students, I am going to accept all of you wholeheartedly.'
    },
    {
        q: 'Will my information remain confidential?',
        a: 'Absolutely! During our phone consultation I will ask your permission to take photos during our session for my website and social media accounts. If you agree, I will not share any personal information unless you would like to me.'
    },
    {
        q: 'What is the cancellation policy?',
        a: 'You will receive a full refund if you cancel within 48 hours of the scheduled session date. Cancellations under 48 hours will receive a 50% refund. Cancellations within 24 hours will not be refunded.'
    },
    {
        q: 'Will you travel?',
        a: 'Of course! I will travel within 1 hour of Omaha for a fee. I will do my best to accommodate you if you live more than an hour away, so please contact me if you have a special request.'
    }
]

const PRICES = [
    {
        name: 'In-Person Consulting',
        cost: '$60',
        period: 'hour',
        notes: [
            '5 hours recommended for one tidying session'
        ],
        details: [
            'Pay as you go',
            '$40 to take items to donation center'
        ]
    },
    {
        name: 'Online Consulting',
        cost: '$50',
        period: 'hour',
        notes: [],
        details: []
    }
]

const Index = props => (
    <React.Fragment>
        <Header>
            <Container>
                <Flex justifyContent='space-between'>
                    <Box>
                        <Heading fontSize={2} lineHeight={1.5} letterSpacing={0.2}>
                            Joanna Thompson
                        </Heading>
                    </Box>
                    <Box>Contact</Box>
                </Flex>
            </Container>
        </Header>
        <Box bg={'purple.0'}>
            <Container px={[3, 4]} py={[8, 9]}>
                <Text.p fontSize={4} textAlign='center' fontFamily={1}>
                    I will help you understand your own organizing weaknesses and challenges, and together we will create the stress-free, organized environment you want.
                </Text.p>
            </Container>
        </Box>
        <Box>
            <Container py={6} maxWidth={0}>
                <Heading>About Me</Heading>
                <Text.p textAlign='center'>
                    I have worked in several fields, but the majority of my career has been in education. I enjoyed my time as an elementary classroom teacher, literacy specialist, and literacy coach, but recently decided to combine my teaching skills with my knack for organizing. Over the past several years, I have helped friends and family organize closets, drawers, pantries, and storage rooms.
                </Text.p>

                <Divider my={6} />

                <Heading>How I Can Help</Heading>
                <ul>
                    {SERVICES.map((item, key) => (
                        <li key={key}>{item}</li>
                    ))}
                </ul>
            </Container>
        </Box>
        <Box bg={'purple.0'}>
            <Container py={6}>
                <Heading>Prices</Heading>
                    <Flex justifyContent='space-around' mt={4} flexWrap='wrap'>
                        {PRICES.map((item, key) => (
                            <Card key={key}>
                                <Heading fontSize={2}>{item.name}</Heading>
                                <Text fontSize={4} textAlign='center' py={4}>{item.cost}<Text.span fontSize={2}>/{item.period}</Text.span ></Text>
                                {item.notes.map((note, notekey) => (
                                    <Text key={notekey} fontSize={1} lineHeight={1} color={'gray.5'} textAlign='center'><em>{note}</em></Text>
                                ))}
                                <Box mt={3}>
                                    {item.details.map((detail, detailkey) => (
                                        <Text  key={detailkey} fontSize={1} textAlign='center' lineHeight={1} mb={2}>{detail}</Text>
                                    ))}
                                </Box>
                            </Card>
                        ))}
                    </Flex>
            </Container>
        </Box>
        <Box>
            <Container py={6}>
                <Heading>FAQ</Heading>
                    {FAQS.map((item, key) => (
                        <Box key={key} my={2}>
                            <Expandable title={item.q}>
                                {item.a}
                            </Expandable>
                        </Box>
                    ))}
            </Container>
        </Box>
        <Box bg={'purple.0'}>
            <Container py={8}>
                <Heading>Contact</Heading>
            </Container>
        </Box>
        <Footer>
            <Container>
                <Text textAlign='center'>
                    © Joanna Thompson &middot; Omaha, NE
                </Text>
            </Container>
        </Footer>
    </React.Fragment>
)

export default Index
