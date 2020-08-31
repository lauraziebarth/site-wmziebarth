import Link from 'next/link'
import Instagram from '../public/svg/instagram.svg'
import Amazon from '../public/svg/amazon.svg'
import Deezer from '../public/svg/deezer.svg'
import PodcastsIos from '../public/svg/itunes.svg'
import Spotify from '../public/svg/spotify.svg'
import Twitter from '../public/svg/twitter.svg'

function HomePage() {
    const fotoPerfil = 'https://d1fdloi71mui9q.cloudfront.net/0OZdfR4QoKo0IbCPTsqN_2bb625e7eb43dc9622f3e031ca6cf293.png'
    
    return (
        <main>
            <img src={fotoPerfil} alt="Foto do rosto do Walter" width="180" height="180"/>
            <h1>W.M. Ziebarth</h1>
            <h2>Escritor, Redator, Cristão, Pai e Esposo. Franco-odiador de adolescentes e Formado na Academia de Brasileira de Piadas de Tiozão.</h2>
            <Link href="/sobre" passHref>
                <a>Sobre</a>
            </Link>
            <Link href="/podcast" passHref>
                <a>Podcast</a>
            </Link>
            <Link href="/contos" passHref>
                <a>Contos</a>
            </Link> 

            <div className="icones">
                <a href="https://www.instagram.com/wmziebarth/" target="_blank" aria-label="Instagram">
                    <Instagram/>
                </a>
                <a href="https://www.amazon.com.br/W-M-Ziebarth/e/B084P6WLXX/ref=dp_byline_cont_ebooks_1" target="_blank" aria-label="Amazon">
                    <Amazon/>
                </a>
                <a href="https://www.deezer.com/br/show/1200932" target="_blank" aria-label="Deezer">
                    <Deezer/>
                </a>
                <a href="https://podcasts.apple.com/us/podcast/pret%C3%A9rito-perfeito/id1508583789" target="_blank" aria-label="PodcastsIos">
                    <PodcastsIos/>
                </a>
                <a href="https://open.spotify.com/show/071EfL4W4edebROdO7qKMJ" target="_blank" aria-label="Spotify">
                    <Spotify/>
                </a>
                <a href="https://twitter.com/walterzie" target="_blank" aria-label="Twitter">
                    <Twitter/>
                </a>
            </div>
 
            <style jsx>
                {`
                    main {
                        width: 40em;
                        margin: 5em auto;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                    }

                    h1 {    
                        font-size: 1.8em;
                        margin: 0.7em 0 0;
                    }

                    h2 {
                        font-size: 1.1em;
                        font-weight: 400;
                        line-height: 1.488em;
                        margin: 0.5em 0 1.6em;
                    }

                    a {
                        color: #000000;
                        text-decoration: none;
                        margin: 0.4em 0;
                        font-size: 1em;

                    }

                    .icones {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 2.337em 0;
                    }

                    .icones a:not(:last-child) {
                        padding-right: 2em;
                    }
                `}
            </style>
        </main>
    )
}

export default HomePage