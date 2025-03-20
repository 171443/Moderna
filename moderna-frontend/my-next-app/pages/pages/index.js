import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fashion Blog | DEZND</title>
        <meta name="description" content="Explore the latest trends, styles, and fashion insights on DEZND, your go-to fashion blog." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header Section */}
      <header className={styles.header}>
        {/* ...existing code... */}
      </header>

      {/* Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: `url('/hero-image.jpg')` }}>
        {/* ...existing code... */}
      </section>

      {/* Blog Grid */}
      <section className={styles.blogGrid}>
        {/* ...existing code... */}
      </section>

      {/* Featured Products Section */}
      <section className={styles.featuredProducts}>
        <div className={styles.container}>
          <h2>Featured Products</h2>
          <div className={styles.grid}>
            <div className={styles.productCard}>
              <div className={styles.productImage} style={{ backgroundImage: `url('/product1.jpg')` }}></div>
              <div className={styles.productContent}>
                <h3>Product Name 1</h3>
                <p className={styles.productPrice}>$99.99</p>
                <Link href="/product/1" className={styles.btn}>View Product</Link>
              </div>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productImage} style={{ backgroundImage: `url('/product2.jpg')` }}></div>
              <div className={styles.productContent}>
                <h3>Product Name 2</h3>
                <p className={styles.productPrice}>$89.99</p>
                <Link href="/product/2" className={styles.btn}>View Product</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletter}>
        {/* ...existing code... */}
      </section>

      {/* Instagram Feed */}
      <section className={styles.instagramFeed}>
        {/* ...existing code... */}
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        {/* ...existing code... */}
      </footer>
    </>
  );
}
