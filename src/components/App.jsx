import css from './styles.module.css'
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <p className={css.SearchFormButtonLabel}>React homework template</p>
    </div>
  );
};
