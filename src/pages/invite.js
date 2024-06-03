import Head from 'next/head';
import { useEffect } from 'react';
import '/public/css/styles.css';

const Invite = () => {
    useEffect(() => {
        let currentIndex = 0;
        const images = document.querySelectorAll('.invite-gallery img');
        const totalImages = images.length;

        const showImage = (index) => {
            images.forEach((img, i) => {
                img.style.display = i === index ? 'block' : 'none';
            });
        };

        const nextImage = () => {
            currentIndex = (currentIndex + 1) % totalImages;
            showImage(currentIndex);
        };

        showImage(currentIndex);
        const interval = setInterval(nextImage, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="invite-container">
            <Head>
                <title>Wedding Invitation</title>
            </Head>
            <h1 className="invite-title">저희 결혼식에 초대합니다</h1>
            <p>종민 ♡ 유라</p>
            <div className="invite-gallery_container">
                <ul className="invite-gallery">
                    <li><img src="/images/1391260569177_20240603124445427_2197.jpg" alt="Photo 1" /></li>
                    <li><img src="/images/1393678989794_20240603124443975_1866.jpg" alt="Photo 2" /></li>
                </ul>
            </div>
        </div>
    );
};

export default Invite;
