import css from '../styles.module.css';
export default function Button({onClick}){
    return <div className={css.container}>
        <button className={css.Button} onClick={onClick}>Load More</button>
    </div>
}