import { useState } from 'react';
import Head from 'next/head';
import TextField from '@mui/material/TextField';

export default function Blog({ data }) {

    const [recommendationText, setRecommendationText] = useState('')
    console.log(data['name'])

    var description = 'List of businesses managed and recommended by the residents of ' + data['name'] + '.'

    return (
        <div>
            <Head>
                <title>{data['name'] + " |"} Society Yellow Pages</title>
                <meta name="description" content={description} />
                <meta property="og:url" content={`https://societyyp.com/${data['handle']}`} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={data['name']} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={data['cover_image_url']} />
            </Head>
            <TextField
                value={recommendationText}
                // classes={classes}
                style={{ marginTop: 20 }}
                fullWidth
                multiline
                rows={7}
                id="outlined-basic"
                placeholder="Write a recommendation (Optional)"
                variant="outlined"
                type="text"
                onChange={(event) => {
                    setRecommendationText(event.target.value);
                }}
            />
            <h2>{data.handle}</h2>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe placeat aliquam rem reiciendis enim eveniet impedit vitae sunt excepturi omnis corrupti explicabo soluta nemo laboriosam consequatur est optio vel eaque ea nobis deserunt, laudantium ex? Totam suscipit officiis, repellendus corporis dolore placeat vero ipsa officia, culpa eligendi quo voluptates. Placeat consequuntur repellendus distinctio optio, praesentium harum voluptatem assumenda eum. Aspernatur ratione esse numquam dolor temporibus totam dignissimos fuga a amet quasi suscipit, nisi cum ab soluta obcaecati. Dignissimos, temporibus! Error provident ipsa, dolorem vero minima praesentium sapiente! Error amet tempora, facere atque dolore in provident fuga laboriosam blanditiis nesciunt! Natus.</div>
        </div>
    )
}

// This gets called on every request
export async function getServerSideProps({ params }) {
    // Fetch data from external API
    try {
        const res = await fetch(`https://societyyp.com/api/communities/yp/?handle=${params.handle}`)
        const data = await res.json()

        // Pass data to the page via props
        return { props: { data } }

    } catch (error) {
        return {
            notFound: true,
        }
    }
}