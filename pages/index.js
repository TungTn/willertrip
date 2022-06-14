import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Home() {
    return (
        <div>
            <Header></Header>
            <div className={styles.container}>
                <Head>
                    <title>Tìm xe khách và đặt vé xe khách| WILLER trip</title>
                    <meta
                        name="keywords"
                        content="Vé xe,Đặt vé xe,Cách đặt vé xe khách,Tìm xe khách,Đặt xe khách,Báo giá thuê xe,Cho thuê xe"
                    />
                    <meta
                        name="description"
                        content="Trang web đặt vé xe khách với cách đặt vé xe khách đơn giản, nhanh chóng. Quý khách có thể tìm xe khách và đặt xe khách hiệu quả nhất. Trang web cũng giới thiệu dịch vụ cho thuê xe và báo giá thuê xe trọn gói."
                    />
                    <link
                        rel="canonical"
                        href="https://willertrip.com/vn/vn/"
                    />
                    <meta
                        property="og:url"
                        content="https://willertrip.com/vn/vn/"
                    />
                    <meta
                        property="og:image"
                        content="https://willertrip.com/vn/vn/img/ogp.jpg"
                    />
                    <meta
                        name="viewport"
                        id="viewport"
                        content="width=device-width,minimum-scale=1.0,maximum-scale=10.0,initial-scale=1.0"
                    />
                    <meta name="format-detection" content="telephone=no" />
                    <link
                        rel="shortcut icon"
                        href="/vn/vn/img/common/favicon.ico"
                    />
                </Head>

                <main className={styles.main}>
                    <h1 className={styles.title}>
                        Welcome to <a href="https://nextjs.org">Next.js!</a>
                    </h1>

                    <p className={styles.description}>
                        Get started by editing{" "}
                        <code className={styles.code}>pages/index.js</code>
                    </p>

                    <div className={styles.grid}>
                        <a
                            href="https://nextjs.org/docs"
                            className={styles.card}
                        >
                            <h2>Documentation &rarr;</h2>
                            <p>
                                Find in-depth information about Next.js features
                                and API.
                            </p>
                        </a>

                        <a
                            href="https://nextjs.org/learn"
                            className={styles.card}
                        >
                            <h2>Learn &rarr;</h2>
                            <p>
                                Learn about Next.js in an interactive course
                                with quizzes!
                            </p>
                        </a>

                        <a
                            href="https://github.com/vercel/next.js/tree/canary/examples"
                            className={styles.card}
                        >
                            <h2>Examples &rarr;</h2>
                            <p>
                                Discover and deploy boilerplate example Next.js
                                projects.
                            </p>
                        </a>

                        <a
                            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            className={styles.card}
                        >
                            <h2>Deploy &rarr;</h2>
                            <p>
                                Instantly deploy your Next.js site to a public
                                URL with Vercel.
                            </p>
                        </a>
                    </div>
                </main>
            </div>
            <Footer></Footer>
        </div>
    );
}
