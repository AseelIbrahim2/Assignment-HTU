import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import styles from './Main.module.css';

const cardsData = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80',
    title: 'Mountain View',
    description: 'Enjoy the breathtaking view of the mountains during sunrise.',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=300&q=80',
    title: 'City Lights',
    description: 'Experience the vibrant life of the city at night.',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=300&q=80',
    title: 'Forest Path',
    description: 'Walk through the peaceful forest trails surrounded by nature.',
  },

];

function App() {
  return (
    <div>
      <Header />

      <main className={styles.main}>
        {cardsData.map(card => (
          <Card
            key={card.id}
            img={card.img}
            title={card.title}
            description={card.description}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;
