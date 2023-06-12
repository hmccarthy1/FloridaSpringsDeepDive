import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import SpringCard from '../components/springCard';

const styles = {
    homeContent: {
   
        backgroundColor: 'white'

    },
    p: {
        lineHeight: '2',
        fontSize: '16pt'
    }
}

const Home = () => {
    return (
        <>
            <div className='homeContent row' style={styles.homeContent}>

                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-left'>
                    <h1 className='h1 p-0 col-12 bold text-left' style={{height: 'auto'}}>Take a deep dive into Florida's Springs</h1>
                <p className='p text-left ' style={styles.p}>For those of you who love nature, wildlife, and crystal-clear water, the florida springs are the place for you. We're here to give you all the info you need to find the right spring for you, and start having some amazing adventures. Floride springs are the best outdoor / water activity Florida has to offer - even better than it's beaches! There's a much more diverse selection of wildlife, crystal-clear waters, and an atmosphere that really can't be matched anywhere else.
                </p>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-center row justify-content-center'>
                    <SpringCard spring = '6486895efa1ec9f246b9666f' ></SpringCard>

                </div>
            </div>

            <div className='col-12 row mr-0'>
                <h1 className='strong mt-5 text-center h1 col-12'>Why Florida springs?</h1>
                <p className='text-left' style={styles.p}>Florida's freshwater springs are one of the best parts of Florida! They offer a unique array of experiences that you can't find anywhere else. All the water in the springs comes up from the aquifers undergroud, so the water is always crystal-clear and 72 degrees farenheit year-round. Each spring in florida is unique and offers it's own pros and cons - some have amazing freediving opportunities, some are bursting to the seams with wildlife, and some have breath-taking sights you can't see anywhere else. Here are some of my favorites, and why I like them: </p>
            </div>

            <div className='col-12 row justify-content-center mt-5'>
                <h1 id='blueSprings' className='col-12 text-center'>Blue Springs</h1>
                <p className='p text-left' style={styles.p}>Blue springs is one of my favorites because of the amazing freediving opportunities. If you start downstream from the head spring, you can enjoy a nice swim up to the area where you'll be freediving, seeing all kinds of fish and other wildlife along the way. Once you get to the head spring, you'll see a wide opening over where the water comes up from the aquifer, with large log laid right over the middle of it. It's a good 40-50' to the bottom easily, and as you swim further and further down, you'll see interesting rock formations/patterns, as well as side caverns and nooks/crannies to explore</p>
                <SpringCard spring = '6486895efa1ec9f246b9666f'></SpringCard>
            </div>

            <div className='col-12 row mt-5 justify-content-center'>
                <h1 id='ichetuckneeSprings' className='col-12 text-center'>Ichetucknee Springs</h1>
                <p className='p text-left' style={styles.p}>Ichetucknee springs is one of those locations that actually has multiple springs, each offering something different. The Ichetucknee River itself has the same crystal-clear water a head spring has, but it's a much larger stretch of river - the most popular activity on the river is to kick back in an inner tube and soak up the rays, but I prefer to snorkel the whole 45 min trip - as always, it's a different world under the water. The head spring here is particurlarly beautiful, with water extremely clear even by spring standards, and lots of cool boulders and fallen logs to swim alongside of. The head spring is also very family-friendly and easily accessible. Blue Hole is one of those hidden gems that not many people know about. It's relatively small on the surface which is why it's overlooked, but the spring itself opens up into a giant cavern that is an incredible sight. You have to either have a tank on your back or be a freediver of uncommon skill to truly explore the cavern, so be careful.</p>
                <SpringCard spring = '6486895efa1ec9f246b966ab'></SpringCard>
            </div>

            <div className='col-12 row mt-5 justify-content-center'>
                <h1 id='ginnieSprings' className='col-12 text-center'>Ginnie Springs</h1>
                <p className='p text-left' style={styles.p}>Ginnie springs is one of the most stunningly beautiful springs in the state - this location probably has the most to offer overall out of any spring system. It has amazing freedivig, some of the best freshwater diving in the world, rope swings over the river, several different springs with unique features to explore, and a lot of other amenities available here you don't see at springs often because this is privatized (such as a dive shop). Because of this, it's become extaordinarily popular over the years, which is a point of contention with a lot of florida locals. This is because for a lot of people who love to frequent springs, the experience is about nature, and escaping the craziness of their normal lives. The issue here is that if you visit Ginnie on a holiday or summer weekend, it's almost certain to be so packed in the water you can't swim 5 feet without hitting someone. On these weekends, it becomes a party hub where the experience is much more about booze and loud music than it is about nature. That being said, you can still enjoy peace and quiet most weekdays or maybe even so off-season weekends.</p>
                <SpringCard spring = '6486895efa1ec9f246b966cc'></SpringCard>
            </div>

            <div className='col-12 row mt-5 justify-content-center'>
                <h1 id='gumSloughSprings' className='col-12 text-center'>Gum Slough Springs</h1>
                <p className='p text-left' style={styles.p}>Gum slough is definitely one of the least-known springs out there - but it's a hidden gem. I think it never really got to be as popular as other springs because there's a good deal of work involved in getting there, which deters the casual spring-goers out there. There's nothing wrong with driving right up to a spring, but the experience is all the sweeter when you've gotten there with a few hours of physical exertion and worked up a sweat on the way there. This spring is only accessible with a length kayak trip, and you have to get out to portage your vessel a time or two. There are several smaller springs along the way, but Gum Spring Main is what you're looking for. A decently sized spring, you're likely to have it all to yourself, or maybe have to share with one or two others depending on the day. You can see all kinds of wildlife along the way, just be aware you're in for a full-day adventure if you want to check this spring out.</p>
                <SpringCard spring = '6486895efa1ec9f246b965d7'></SpringCard>
            </div>

            <div className='col-12 row mt-5 justify-content-center'>
                <h1 id='gumSloughSprings' className='col-12 text-center'>Rainbow Springs</h1>
                <p className='p text-left' style={styles.p}>Rainbow River / Rainbow Springs has probably the clearest water I've ever seen - that's why 'glass-bottomed' canoes and kayaks are so popular here, you can kayak down Rainbow River and look down to see all the fish zooming by beneath you as clear as day. This spot is famous across the country for it's kayaking/canoeing, and the river is huge - more than enough space for everyone to share. Hiking here is a rare treat, with many of the paths leading to lookout spots over the river, offering a sweeping view of this gorgeous Florida scene. </p>
                <SpringCard spring = '6486895efa1ec9f246b965fe'></SpringCard>
            </div>


        </>
    )
}

export default Home