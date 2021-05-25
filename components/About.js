import React from 'react'
import styles from '../styles/about.module.scss';
import Typical from 'react-typical';
import Technologies from './About/Technologies';
export default function About() {

    return (
        <div className={styles.about}>
            <div className={styles.aboutMe}>
                <h1>Hi I'm Yunus INAN</h1>
                <p>I'm a{' '}
                    <strong className={styles.strong}>
                        <Typical

                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                'Frontend Developer 💻',
                                1000,
                                'Gamer 🎮',
                                1000,
                                'Student 👨🏽‍🎓',
                                1000,
                            ]}
                        />
                    </strong>
                </p>
                <hr className={styles.hr} />
                <Technologies></Technologies>
            </div>
            <div className={styles.rightSide}>
                <video
                    className={styles.video}
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    aria-hidden="true"

                >
                    <source src="https://media.giphy.com/media/SWoSkN6DxTszqIKEqv/giphy.mp4" />
                </video>

            </div>

        </div>
    )
}

