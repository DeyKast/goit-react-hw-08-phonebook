import css from './HomePage.module.css';

const welcomeMessages = [
  'Welcome!',
  'Have a nice day!',
  'Hiya!',
  `Hey, what's up?`,
  `It's great to see you!`,
  'Long-time, no see.',
];

const messageGenerator = () => {
  const randomIndex = Math.floor(Math.random() * welcomeMessages.length);
  return welcomeMessages[randomIndex];
};

export default function HomePage() {
  return (
    <div>
      <h1 className={css.homeText}>{messageGenerator()}</h1>
    </div>
  );
}
